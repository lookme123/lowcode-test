import React, { createElement, useEffect, useState } from 'react';
import { Map, InfoWindow } from 'react-amap';
import styles from './index.module.less';

interface LnglatType {
  lng?: number;
  lat?: number;
  longitude?: number;
  latitude?: number;
}

interface Props {
  mapAK: string; // 地图key
  mapStyle: string; // 地图主题
  infoDatas: Array<{ label: string; key: string }>; // 弹框数据
  infoStyle: { [key: string]: any }; // 弹窗样式
  dataRequest: { request: Function; id: string }; // 数据请求
  zoom: number; // 缩放级别
  markImgs: Array<{ type: string; img: string }>; // mark图标; type状态，默认default
}

const Index = (props: Props) => {
  const {
    mapAK,
    mapStyle,
    infoDatas,
    infoStyle,
    dataRequest,
    zoom = 12,
    markImgs,
    ...otherProps
  } = props;
  console.log('props', props);
  // map
  const [center, setCenter] = useState<LnglatType>();
  const [mapIns, setMapIns] = useState<any>();
  const [spots, setSpots] = useState<any[]>([]);
  const [clusterIns, setClusterIns] = useState<any>();
  const [markers, setMarkers] = useState<any[]>([]);
  // info window
  const [iwVisible, setIwVisible] = useState<boolean>(false);
  const [iwPosition, setIwPosition] = useState<LnglatType>();
  const [iwValue, setIwValue] = useState<any>();
  const windowEvents = {
    close: () => {
      setIwPosition(undefined);
      setIwValue(undefined);
      setIwVisible(false);
    },
  };
  const events = {
    created: (ins: any) => {
      setMapIns(ins);
    },
  };

  // 数据请求
  const handleQueryData = async (func: Function, params: { [key: string]: any }) => {
    const temData = await func(params);
    setSpots(temData || []);
  };

  useEffect(() => {
    if (dataRequest?.id) {
      handleQueryData(dataRequest.request, otherProps);
    }
  }, [dataRequest?.id]);

  // 点击标记点
  const markerClick = (extData: any, lnglat?: LnglatType) => {
    const targetData = extData && Array.isArray(extData) ? extData[0] : extData;
    const position = {
      longitude: lnglat?.lng || targetData.location?.longitude,
      latitude: lnglat?.lat || targetData.location?.latitude,
    };
    setCenter(position);
    setIwPosition(position);
    setIwValue(extData);
    setIwVisible(true);
  };

  // 标记点显示
  const handleSetMarker = () => {
    mapIns?.clearMap();
    clusterIns?.clearMarkers();
    const temMarkers = spots.map((v) => {
      const img = markImgs?.find((r) => v.state == r.type || r.type === 'default')?.img;
      const marker = new window.AMap.Marker({
        position: [v.location.longitude, v.location.latitude],
        content: img && `<span><img style="width:20px;" src="${img}" /></span>`,
        offset: new window.AMap.Pixel(-13, -36),
        extData: v,
      });
      marker.on('click', (e) => {
        const extData = e.target.getExtData();
        markerClick(extData);
      });
      marker.setMap(mapIns);
      return marker;
    });
    setMarkers(temMarkers);
  };

  useEffect(() => {
    if (mapIns && spots?.length) {
      handleSetMarker();
    }
  }, [spots, mapIns]);

  useEffect(() => {
    if (mapIns && markers?.length) {
      mapIns.plugin(['AMap.MarkerClusterer'], () => {
        const cluster = new window.AMap.MarkerClusterer(mapIns, markers, {
          gridSize: 80,
          maxZoom: 14,
        });
        setClusterIns(cluster);
      });
    }
  }, [markers]);

  const renderInfoContent = (data: any, key: number) => {
    if (!data || !infoDatas?.length) {
      return undefined;
    }
    return (
      <div key={key}>
        <div className={styles.infowindow_title} style={infoStyle?.title}>
          {data.name}
        </div>
        <div className={styles.infowindow_desc} style={infoStyle?.desc}>
          {infoDatas.map((r) => (
            <p>
              {r.label}：{data[r.key]}
            </p>
          ))}
        </div>
      </div>
    );
  };

  // 弹框内容
  const renderInfoWindow = () => (
    <InfoWindow
      position={iwPosition as any}
      closeWhenClickMap
      visible={iwVisible}
      offset={[2, -40]}
      events={windowEvents}
      isCustom
      className={styles.infowindow}
    >
      <div className={styles.content} style={infoStyle?.info}>
        {iwValue?.length
          ? iwValue.map((v: any, index: number) => renderInfoContent(v, index))
          : renderInfoContent(iwValue, 0)}
      </div>
    </InfoWindow>
  );

  return (
    <div className={styles.lowcodeMap} {...otherProps}>
      <Map
        amapkey={mapAK}
        mapStyle={mapStyle || 'amap://styles/normal'}
        center={center}
        events={events}
        zoom={zoom}
        zooms={[4, 20]}
      >
        {renderInfoWindow()}
      </Map>
    </div>
  );
};

export default Index;
