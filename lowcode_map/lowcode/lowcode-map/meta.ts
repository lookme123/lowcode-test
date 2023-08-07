import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const LowcodeMapMeta: ComponentMetadata = {
  componentName: 'LowcodeMap',
  title: 'LowcodeMap',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'lowcode_map',
    version: '0.1.0',
    exportName: 'default',
    main: 'src/index.tsx',
    destructuring: false,
    subName: '',
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'mapAK',
            'zh-CN': 'mapAK',
          },
        },
        name: 'mapAK',
        setter: {
          componentName: 'StringSetter',
          isRequired: true,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'mapStyle',
            'zh-CN': 'mapStyle',
          },
        },
        name: 'mapStyle',
        setter: {
          componentName: 'StringSetter',
          isRequired: true,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'infoDatas',
            'zh-CN': 'infoDatas',
          },
        },
        name: 'infoDatas',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'label',
                          'zh-CN': 'label',
                        },
                      },
                      name: 'label',
                      setter: {
                        componentName: 'StringSetter',
                        isRequired: true,
                        initialValue: '',
                      },
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'key',
                          'zh-CN': 'key',
                        },
                      },
                      name: 'key',
                      setter: {
                        componentName: 'StringSetter',
                        isRequired: true,
                        initialValue: '',
                      },
                    },
                  ],
                  extraSetter: {
                    componentName: 'MixedSetter',
                    isRequired: false,
                    props: {},
                  },
                },
              },
            },
          },
          isRequired: true,
          initialValue: [],
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'infoStyle',
            'zh-CN': 'infoStyle',
          },
        },
        name: 'infoStyle',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              extraSetter: {
                componentName: 'MixedSetter',
                isRequired: false,
                props: {},
              },
            },
          },
          isRequired: true,
          initialValue: {},
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'dataRequest',
            'zh-CN': 'dataRequest',
          },
        },
        name: 'dataRequest',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'request',
                      'zh-CN': 'request',
                    },
                  },
                  name: 'request',
                  setter: {
                    componentName: 'FunctionSetter',
                    isRequired: true,
                  },
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'id',
                      'zh-CN': 'id',
                    },
                  },
                  name: 'id',
                  setter: {
                    componentName: 'StringSetter',
                    isRequired: true,
                    initialValue: '',
                  },
                },
              ],
              extraSetter: {
                componentName: 'MixedSetter',
                isRequired: false,
                props: {},
              },
            },
          },
          isRequired: true,
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'defCenter',
            'zh-CN': 'defCenter',
          },
        },
        name: 'defCenter',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'lng',
                      'zh-CN': 'lng',
                    },
                  },
                  name: 'lng',
                  setter: {
                    componentName: 'NumberSetter',
                    isRequired: false,
                    initialValue: 0,
                  },
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'lat',
                      'zh-CN': 'lat',
                    },
                  },
                  name: 'lat',
                  setter: {
                    componentName: 'NumberSetter',
                    isRequired: false,
                    initialValue: 0,
                  },
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'longitude',
                      'zh-CN': 'longitude',
                    },
                  },
                  name: 'longitude',
                  setter: {
                    componentName: 'NumberSetter',
                    isRequired: false,
                    initialValue: 0,
                  },
                },
                {
                  title: {
                    label: {
                      type: 'i18n',
                      'en-US': 'latitude',
                      'zh-CN': 'latitude',
                    },
                  },
                  name: 'latitude',
                  setter: {
                    componentName: 'NumberSetter',
                    isRequired: false,
                    initialValue: 0,
                  },
                },
              ],
              extraSetter: {
                componentName: 'MixedSetter',
                isRequired: false,
                props: {},
              },
            },
          },
          isRequired: true,
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'zoom',
            'zh-CN': 'zoom',
          },
        },
        name: 'zoom',
        setter: {
          componentName: 'NumberSetter',
          isRequired: true,
          initialValue: 0,
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'markImgs',
            'zh-CN': 'markImgs',
          },
        },
        name: 'markImgs',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'type',
                          'zh-CN': 'type',
                        },
                      },
                      name: 'type',
                      setter: {
                        componentName: 'StringSetter',
                        isRequired: true,
                        initialValue: '',
                      },
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'img',
                          'zh-CN': 'img',
                        },
                      },
                      name: 'img',
                      setter: {
                        componentName: 'StringSetter',
                        isRequired: true,
                        initialValue: '',
                      },
                    },
                  ],
                  extraSetter: {
                    componentName: 'MixedSetter',
                    isRequired: false,
                    props: {},
                  },
                },
              },
            },
          },
          isRequired: true,
          initialValue: [],
        },
      },
    ],
    supports: {
      style: true,
    },
    component: {},
  },
};
const snippets: Snippet[] = [
  {
    title: 'LowcodeMap',
    screenshot: '',
    schema: {
      componentName: 'LowcodeMap',
      props: {},
    },
  },
];

export default {
  ...LowcodeMapMeta,
  snippets,
};
