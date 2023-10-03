import { IData } from './span';

export const data: IData = {
  traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
  spans: [
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: 'c131db030348d59b',
      flags: 1,
      operationName: 'new-telemetry',
      references: [],
      startTime: 1695212296547684,
      duration: 2735,
      tags: [
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: 'fbf9d402be9b7598',
      flags: 1,
      operationName: 'stage/proc2',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: '256167f2a9e1fcd9',
        },
      ],
      startTime: 1695212296556521,
      duration: 5379,
      tags: [
        {
          key: 'frame_json',
          type: 'string',
          value: {
            attributes: [
              {
                hint: 'PlatformConfig',
                is_persistent: true,
                name: 'CamMode',
                namespace: 'Configuration',
                values: [
                  {
                    confidence: null,
                    value: {
                      String: 'fisheye'
                    }
                  },
                  {
                    confidence: null,
                    value: {
                      IntegerVector: [
                        180,
                        180
                      ]
                    }
                  }
                ]
              }
            ],
            codec: 'h264',
            content: {
              external: {
                location: '1111',
                method: 'redis'
              }
            },
            creation_timestamp_ns: 1695888065807941620,
            dts: 10000,
            duration: 10,
            framerate: '30/1',
            height: 720,
            keyframe: true,
            pts: 10000,
            source_id: 'test',
            time_base: [
              1,
              1000000
            ],
            transcoding_method: 'Encoded',
            transformations: [
              {
                initial_size: [
                  1920,
                  1080
                ]
              },
              {
                scale: [
                  1280,
                  720
                ]
              },
              {
                padding: [
                  120,
                  0,
                  0,
                  0
                ]
              },
              {
                resulting_size: [
                  1400,
                  720
                ]
              }
            ],
            type: 'VideoFrame',
            uuid: 'fb736fa2-86e9-4073-b88a-b8985ae8a00b',
            version: '0.1.70',
            width: 1400,
            objects: [
              {
                attributes: [],
                bbox: {
                  angle: null,
                  height: 0,
                  width: 0,
                  xc: 0,
                  yc: 0,
                },
                confidence: null,
                draw_label: null,
                frame: 'test1',
                id: 1,
                label: 'test',
                namespace: 'test2',
                parent: 0,
                pyobjects: 'not_implemented',
                track_box: null,
                track_id: null,
              },
              {
                attributes: [],
                bbox: {
                  angle: null,
                  height: 0,
                  width: 0,
                  xc: 0,
                  yc: 0,
                },
                confidence: null,
                draw_label: null,
                frame: 'test1',
                id: 2,
                label: 'test2',
                namespace: 'test2',
                parent: 0,
                pyobjects: 'not_implemented',
                track_box: null,
                track_id: null,
              },
              {
                attributes: [],
                bbox: {
                  angle: null,
                  height: 0,
                  width: 0,
                  xc: 0,
                  yc: 0,
                },
                confidence: null,
                draw_label: null,
                frame: 'test1',
                id: 3,
                label: 'test2',
                namespace: 'test2',
                parent: 2,
                pyobjects: 'not_implemented',
                track_box: null,
                track_id: null,
              },
              {
                attributes: [],
                bbox: {
                  angle: null,
                  height: 0,
                  width: 0,
                  xc: 0,
                  yc: 0,
                },
                confidence: null,
                draw_label: null,
                frame: 'test1',
                id: 4,
                label: 'test',
                namespace: 'test2',
                parent: 1,
                pyobjects: 'not_implemented',
                track_box: null,
                track_id: null,
              },
              {
                attributes: [],
                bbox: {
                  angle: null,
                  height: 0,
                  width: 0,
                  xc: 0,
                  yc: 0,
                },
                confidence: null,
                draw_label: null,
                frame: 'test1',
                id: 5,
                label: 'test',
                namespace: 'test2',
                parent: 1,
                pyobjects: 'not_implemented',
                track_box: null,
                track_id: null,
              },
              {
                attributes: [],
                bbox: {
                  angle: null,
                  height: 0,
                  width: 0,
                  xc: 0,
                  yc: 0,
                },
                confidence: null,
                draw_label: null,
                frame: 'test1',
                id: 6,
                label: 'test2',
                namespace: 'test2',
                parent: 3,
                pyobjects: 'not_implemented',
                track_box: null,
                track_id: null,
              },
              {
                attributes: [],
                bbox: {
                  angle: null,
                  height: 0,
                  width: 0,
                  xc: 0,
                  yc: 0,
                },
                confidence: null,
                draw_label: null,
                frame: 'test1',
                id: 7,
                label: 'test2',
                namespace: 'test2',
                parent: 3,
                pyobjects: 'not_implemented',
                track_box: null,
                track_id: null,
              },
              {
                attributes: [],
                bbox: {
                  angle: null,
                  height: 0,
                  width: 0,
                  xc: 0,
                  yc: 0,
                },
                confidence: null,
                draw_label: null,
                frame: 'test1',
                id: 0,
                label: 'test2',
                namespace: 'test',
                parent: null,
                pyobjects: 'not_implemented',
                track_box: null,
                track_id: null,
              },
              {
                attributes: [],
                bbox: {
                  angle: null,
                  height: 0,
                  width: 0,
                  xc: 0,
                  yc: 0,
                },
                confidence: null,
                draw_label: null,
                frame: 'test1',
                id: 8,
                label: 'test2',
                namespace: 'test2',
                parent: 0,
                pyobjects: 'not_implemented',
                track_box: null,
                track_id: null,
              },
              {
                attributes: [],
                bbox: {
                  angle: null,
                  height: 0,
                  width: 0,
                  xc: 0,
                  yc: 0,
                },
                confidence: null,
                draw_label: null,
                frame: 'test1',
                id: 9,
                label: 'test2',
                namespace: 'test2',
                parent: 2,
                pyobjects: 'not_implemented',
                track_box: null,
                track_id: null,
              },
            ],
          },
        },
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: 'd78683256b5ec57c',
      flags: 1,
      operationName: 'stage/proc1',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: '256167f2a9e1fcd9',
        },
      ],
      startTime: 1695212296554725,
      duration: 1746,
      tags: [
        {
          key: 'frame_json',
          type: 'string',
          value: {
            attributes: [
              {
                hint: 'PlatformConfig',
                is_persistent: true,
                name: 'CamMode',
                namespace: 'Configuration',
                values: [
                  {
                    confidence: null,
                    value: {
                      String: 'fisheye'
                    }
                  },
                  {
                    confidence: null,
                    value: {
                      IntegerVector: [
                        180,
                        180
                      ]
                    }
                  }
                ]
              }
            ],
            codec: 'h264',
            content: {
              internal: null
            },
            creation_timestamp_ns: 1695888352201220391,
            dts: 10000,
            duration: 10,
            framerate: '30/1',
            height: 720,
            keyframe: true,
            pts: 10000,
            source_id: 'test',
            time_base: [
              1,
              1000000
            ],
            transcoding_method: 'Encoded',
            transformations: [
              {
                initial_size: [
                  1920,
                  1080
                ]
              },
              {
                scale: [
                  1280,
                  720
                ]
              },
              {
                padding: [
                  120,
                  0,
                  0,
                  0
                ]
              },
              {
                resulting_size: [
                  1400,
                  720
                ]
              }
            ],
            type: 'VideoFrame',
            uuid: '5b031cbc-ccd8-4e58-9f47-4d56b29c9c7c',
            version: '0.1.70',
            width: 1400,
            objects: [
              {
                attributes: [],
                bbox: {
                  angle: null,
                  height: 0,
                  width: 0,
                  xc: 0,
                  yc: 0,
                },
                confidence: null,
                draw_label: null,
                frame: 'test1',
                id: 1,
                label: 'test',
                namespace: 'test2',
                parent: 0,
                pyobjects: 'not_implemented',
                track_box: null,
                track_id: null,
              },
              {
                attributes: [],
                bbox: {
                  angle: null,
                  height: 0,
                  width: 0,
                  xc: 0,
                  yc: 0,
                },
                confidence: null,
                draw_label: null,
                frame: 'test1',
                id: 0,
                label: 'test2',
                namespace: 'test',
                parent: null,
                pyobjects: 'not_implemented',
                track_box: null,
                track_id: null,
              },
              {
                attributes: [],
                bbox: {
                  angle: null,
                  height: 0,
                  width: 0,
                  xc: 0,
                  yc: 0,
                },
                confidence: null,
                draw_label: null,
                frame: 'test1',
                id: 2,
                label: 'test2',
                namespace: 'test2',
                parent: 0,
                pyobjects: 'not_implemented',
                track_box: null,
                track_id: null,
              },
            ],
          },
        },
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: '87a102c5212451aa',
      flags: 1,
      operationName: 'add/input',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: '256167f2a9e1fcd9',
        },
      ],
      startTime: 1695212296550383,
      duration: 4270,
      tags: [
        {
          key: 'frame_json',
          type: 'string',
          value: {
            attributes: [
              {
                hint: 'test',
                is_persistent: true,
                name: 'test2',
                namespace: 'system',
                values: [
                  {
                    confidence: null,
                    value: {
                      String: '3',
                    },
                  },
                ],
              },
              {
                hint: 'hint',
                is_persistent: true,
                name: 'test',
                namespace: 'test',
                values: [
                  {
                    confidence: null,
                    value: {
                      Bytes: [
                        [
                          8,
                          3,
                          8,
                          8,
                        ],
                        [
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                        ],
                      ],
                    },
                  },
                  {
                    confidence: null,
                    value: {
                      IntegerVector: [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                      ],
                    },
                  },
                  {
                    confidence: 0.5600000023841858,
                    value: {
                      String: 'incoming',
                    },
                  },
                ],
              },
              {
                hint: 'test',
                is_persistent: true,
                name: 'test',
                namespace: 'system',
                values: [
                  {
                    confidence: null,
                    value: {
                      String: '1',
                    },
                  },
                ],
              },
              {
                hint: null,
                is_persistent: true,
                name: 'test2',
                namespace: 'system2',
                values: [
                  {
                    confidence: null,
                    value: {
                      String: '2',
                    },
                  },
                ],
              },
            ],
            codec: null,
            content: null,
            dts: null,
            duration: null,
            framerate: 'test',
            height: 0,
            keyframe: null,
            objects: [
              {
                attributes: [],
                bbox: {
                  angle: null,
                  height: 0,
                  width: 0,
                  xc: 0,
                  yc: 0,
                },
                confidence: null,
                draw_label: null,
                frame: 'test1',
                id: 1,
                label: 'test',
                namespace: 'test2',
                parent: 0,
                pyobjects: 'not_implemented',
                track_box: null,
                track_id: null,
              },
              {
                attributes: [],
                bbox: {
                  angle: null,
                  height: 0,
                  width: 0,
                  xc: 0,
                  yc: 0,
                },
                confidence: null,
                draw_label: null,
                frame: 'test1',
                id: 0,
                label: 'test2',
                namespace: 'test',
                parent: null,
                pyobjects: 'not_implemented',
                track_box: null,
                track_id: null,
              },
              {
                attributes: [],
                bbox: {
                  angle: null,
                  height: 0,
                  width: 0,
                  xc: 0,
                  yc: 0,
                },
                confidence: null,
                draw_label: null,
                frame: 'test1',
                id: 2,
                label: 'test2',
                namespace: 'test2',
                parent: 0,
                pyobjects: 'not_implemented',
                track_box: null,
                track_id: null,
              },
            ],
            pts: 0,
            source_id: 'test1',
            time_base: [
              0,
              0,
            ],
            transcoding_method: 'Copy',
            transformations: [],
            type: 'VideoFrame',
            version: '0.1.64',
            width: 0,
          },
        },
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: '256167f2a9e1fcd9',
      flags: 1,
      operationName: 'video-pipeline-root',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: 'c131db030348d59b',
        },
      ],
      startTime: 1695212296550358,
      duration: 14299,
      tags: [
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: 'fdb10c622c5d01ee',
      flags: 1,
      operationName: 'stage/output',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: '256167f2a9e1fcd9',
        },
      ],
      startTime: 1695212296561944,
      duration: 2624,
      tags: [
        {
          key: 'frame_json',
          type: 'string',
          value: {
            attributes: [
              {
                hint: 'test',
                is_persistent: true,
                name: 'test2',
                namespace: 'system',
                values: [
                  {
                    confidence: null,
                    value: {
                      String: '3',
                    },
                  },
                ],
              },
              {
                hint: 'hint',
                is_persistent: true,
                name: 'test',
                namespace: 'test',
                values: [
                  {
                    confidence: null,
                    value: {
                      Bytes: [
                        [
                          8,
                          3,
                          8,
                          8,
                        ],
                        [
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                        ],
                      ],
                    },
                  },
                  {
                    confidence: null,
                    value: {
                      IntegerVector: [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                      ],
                    },
                  },
                  {
                    confidence: 0.5600000023841858,
                    value: {
                      String: 'incoming',
                    },
                  },
                ],
              },
              {
                hint: 'test',
                is_persistent: true,
                name: 'test',
                namespace: 'system',
                values: [
                  {
                    confidence: null,
                    value: {
                      String: '1',
                    },
                  },
                ],
              },
              {
                hint: null,
                is_persistent: true,
                name: 'test2',
                namespace: 'system2',
                values: [
                  {
                    confidence: null,
                    value: {
                      String: '2',
                    },
                  },
                ],
              },
            ],
            codec: null,
            content: null,
            dts: null,
            duration: null,
            framerate: 'test',
            height: 0,
            keyframe: null,
            objects: [
              {
                attributes: [],
                bbox: {
                  angle: null,
                  height: 0,
                  width: 0,
                  xc: 0,
                  yc: 0,
                },
                confidence: null,
                draw_label: null,
                frame: 'test1',
                id: 1,
                label: 'test',
                namespace: 'test2',
                parent: 0,
                pyobjects: 'not_implemented',
                track_box: null,
                track_id: null,
              },
              {
                attributes: [],
                bbox: {
                  angle: null,
                  height: 0,
                  width: 0,
                  xc: 0,
                  yc: 0,
                },
                confidence: null,
                draw_label: null,
                frame: 'test1',
                id: 0,
                label: 'test2',
                namespace: 'test',
                parent: null,
                pyobjects: 'not_implemented',
                track_box: null,
                track_id: null,
              },
              {
                attributes: [],
                bbox: {
                  angle: null,
                  height: 0,
                  width: 0,
                  xc: 0,
                  yc: 0,
                },
                confidence: null,
                draw_label: null,
                frame: 'test1',
                id: 2,
                label: 'test2',
                namespace: 'test2',
                parent: 0,
                pyobjects: 'not_implemented',
                track_box: null,
                track_id: null,
              },
            ],
            pts: 0,
            source_id: 'test1',
            time_base: [
              0,
              0,
            ],
            transcoding_method: 'Copy',
            transformations: [],
            type: 'VideoFrame',
            version: '0.1.64',
            width: 0,
          },
        },
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: 'b2873ca0d946bb37',
      flags: 1,
      operationName: 'proc1/apply-updates',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: 'd78683256b5ec57c',
        },
      ],
      startTime: 1695212296555689,
      duration: 51,
      tags: [
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: '831dd20813dfef96',
      flags: 1,
      operationName: 'proc2/access-objects',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: 'fbf9d402be9b7598',
        },
      ],
      startTime: 1695212296557714,
      duration: 118,
      tags: [
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: 'fcc3c802784df150',
      flags: 1,
      operationName: 'proc1/clear-updates',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: 'd78683256b5ec57c',
        },
      ],
      startTime: 1695212296555819,
      duration: 8,
      tags: [
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: '5737a700057c029a',
      flags: 1,
      operationName: 'print',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: 'fdb10c622c5d01ee',
        },
      ],
      startTime: 1695212296562129,
      duration: 1651,
      tags: [
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'otel.status_code',
          type: 'string',
          value: 'OK',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [
        {
          timestamp: 1695212296563688,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context 1: {\'uber-trace-id\': \'cb8b182cff2f87b73b5d1fcbe0bb846d:fdb10c622c5d01ee:0:1\'}',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Info',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'root',
            },
          ],
        },
        {
          timestamp: 1695212296563727,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '121166',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '7571',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212296563779,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Holding GIL (__exit__, savant_python/src/utils/otlp.rs, 181)',
            },
            {
              key: 'duration',
              type: 'string',
              value: '16245',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_gil',
            },
          ],
        },
      ],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: '84d911bfa1a381cc',
      flags: 1,
      operationName: 'sleep',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: 'd10ca6362c218557',
        },
      ],
      startTime: 1695212296665622,
      duration: 10229,
      tags: [
        {
          key: 'seconds',
          type: 'float64',
          value: 0.01,
        },
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'otel.status_code',
          type: 'string',
          value: 'OK',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [
        {
          timestamp: 1695212296675844,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Holding GIL (__exit__, savant_python/src/utils/otlp.rs, 181)',
            },
            {
              key: 'duration',
              type: 'string',
              value: '44726',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_gil',
            },
          ],
        },
      ],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: 'd10ca6362c218557',
      flags: 1,
      operationName: 'queue_len',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: '256167f2a9e1fcd9',
        },
      ],
      startTime: 1695212296565407,
      duration: 110513,
      tags: [
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'otel.status_code',
          type: 'string',
          value: 'OK',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [
        {
          timestamp: 1695212296675918,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Holding GIL (__exit__, savant_python/src/utils/otlp.rs, 181)',
            },
            {
              key: 'duration',
              type: 'string',
              value: '14053',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_gil',
            },
          ],
        },
      ],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: 'c3687fe4fc2d5eaa',
      flags: 1,
      operationName: 'loop',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: '912cbfd9246aa815',
        },
      ],
      startTime: 1695212296684545,
      duration: 100541,
      tags: [
        {
          key: 'i',
          type: 'int64',
          value: 0,
        },
        {
          key: 'res',
          type: 'string',
          value: '499501',
        },
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'otel.status_code',
          type: 'string',
          value: 'OK',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [
        {
          timestamp: 1695212296684621,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 3',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212296684645,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '23591',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1745',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212296684686,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Begin computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '1',
            },
          ],
        },
        {
          timestamp: 1695212296684753,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'End computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '499501',
            },
          ],
        },
        {
          timestamp: 1695212296785072,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Holding GIL (__exit__, savant_python/src/utils/otlp.rs, 181)',
            },
            {
              key: 'duration',
              type: 'string',
              value: '44884',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_gil',
            },
          ],
        },
      ],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: 'e3cbfe0a26a07bd9',
      flags: 1,
      operationName: 'loop',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: '884adea834305030',
        },
      ],
      startTime: 1695212296686591,
      duration: 100669,
      tags: [
        {
          key: 'i',
          type: 'int64',
          value: 0,
        },
        {
          key: 'res',
          type: 'string',
          value: '499501',
        },
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'otel.status_code',
          type: 'string',
          value: 'OK',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [
        {
          timestamp: 1695212296686665,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 3',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212296686700,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '31803',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1468',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212296686816,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Begin computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '1',
            },
          ],
        },
        {
          timestamp: 1695212296686940,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'End computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '499501',
            },
          ],
        },
        {
          timestamp: 1695212296787238,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Holding GIL (__exit__, savant_python/src/utils/otlp.rs, 181)',
            },
            {
              key: 'duration',
              type: 'string',
              value: '78470',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_gil',
            },
          ],
        },
      ],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: 'd84774a8e1e1f83f',
      flags: 1,
      operationName: 'loop',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: '912cbfd9246aa815',
        },
      ],
      startTime: 1695212296785236,
      duration: 101205,
      tags: [
        {
          key: 'i',
          type: 'int64',
          value: 1,
        },
        {
          key: 'res',
          type: 'string',
          value: '499501',
        },
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'otel.status_code',
          type: 'string',
          value: 'OK',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [
        {
          timestamp: 1695212296785304,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 3',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212296785326,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '20626',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1482',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212296785371,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Begin computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '1',
            },
          ],
        },
        {
          timestamp: 1695212296785441,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'End computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '499501',
            },
          ],
        },
        {
          timestamp: 1695212296886414,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Holding GIL (__exit__, savant_python/src/utils/otlp.rs, 181)',
            },
            {
              key: 'duration',
              type: 'string',
              value: '98202',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_gil',
            },
          ],
        },
      ],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: 'b3a54a391e588f14',
      flags: 1,
      operationName: 'loop',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: '884adea834305030',
        },
      ],
      startTime: 1695212296787480,
      duration: 100567,
      tags: [
        {
          key: 'i',
          type: 'int64',
          value: 1,
        },
        {
          key: 'res',
          type: 'string',
          value: '499501',
        },
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'otel.status_code',
          type: 'string',
          value: 'OK',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [
        {
          timestamp: 1695212296787592,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 3',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212296787636,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '20238',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1394',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212296787703,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Begin computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '1',
            },
          ],
        },
        {
          timestamp: 1695212296787817,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'End computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '499501',
            },
          ],
        },
        {
          timestamp: 1695212296888040,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Holding GIL (__exit__, savant_python/src/utils/otlp.rs, 181)',
            },
            {
              key: 'duration',
              type: 'string',
              value: '37365',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_gil',
            },
          ],
        },
      ],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: '22ead98d4c63dd4b',
      flags: 1,
      operationName: 'loop',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: '912cbfd9246aa815',
        },
      ],
      startTime: 1695212296886760,
      duration: 100645,
      tags: [
        {
          key: 'i',
          type: 'int64',
          value: 2,
        },
        {
          key: 'res',
          type: 'string',
          value: '499501',
        },
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'otel.status_code',
          type: 'string',
          value: 'OK',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [
        {
          timestamp: 1695212296886877,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 3',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212296886896,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '33066',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1865',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212296886985,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Begin computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '1',
            },
          ],
        },
        {
          timestamp: 1695212296887120,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'End computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '499501',
            },
          ],
        },
        {
          timestamp: 1695212296987398,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Holding GIL (__exit__, savant_python/src/utils/otlp.rs, 181)',
            },
            {
              key: 'duration',
              type: 'string',
              value: '43808',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_gil',
            },
          ],
        },
      ],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: '9bf51efbd1eb713e',
      flags: 1,
      operationName: 'loop',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: '884adea834305030',
        },
      ],
      startTime: 1695212296888181,
      duration: 100424,
      tags: [
        {
          key: 'res',
          type: 'string',
          value: '499501',
        },
        {
          key: 'i',
          type: 'int64',
          value: 2,
        },
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'otel.status_code',
          type: 'string',
          value: 'OK',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [
        {
          timestamp: 1695212296888242,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 3',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212296888258,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '18698',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1320',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212296888296,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Begin computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '1',
            },
          ],
        },
        {
          timestamp: 1695212296888364,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'End computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '499501',
            },
          ],
        },
        {
          timestamp: 1695212296988599,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Holding GIL (__exit__, savant_python/src/utils/otlp.rs, 181)',
            },
            {
              key: 'duration',
              type: 'string',
              value: '54980',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_gil',
            },
          ],
        },
      ],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: '647ca4bf7436fbd1',
      flags: 1,
      operationName: 'loop',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: '912cbfd9246aa815',
        },
      ],
      startTime: 1695212296987571,
      duration: 100425,
      tags: [
        {
          key: 'res',
          type: 'string',
          value: '499501',
        },
        {
          key: 'i',
          type: 'int64',
          value: 3,
        },
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'otel.status_code',
          type: 'string',
          value: 'OK',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [
        {
          timestamp: 1695212296987634,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 3',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212296987649,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '19029',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1325',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212296987689,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Begin computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '1',
            },
          ],
        },
        {
          timestamp: 1695212296987756,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'End computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '499501',
            },
          ],
        },
        {
          timestamp: 1695212297087989,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Holding GIL (__exit__, savant_python/src/utils/otlp.rs, 181)',
            },
            {
              key: 'duration',
              type: 'string',
              value: '48276',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_gil',
            },
          ],
        },
      ],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: '90a733032a25f656',
      flags: 1,
      operationName: 'loop',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: '884adea834305030',
        },
      ],
      startTime: 1695212296988732,
      duration: 100412,
      tags: [
        {
          key: 'i',
          type: 'int64',
          value: 3,
        },
        {
          key: 'res',
          type: 'string',
          value: '499501',
        },
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'otel.status_code',
          type: 'string',
          value: 'OK',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [
        {
          timestamp: 1695212296988800,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 3',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212296988816,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '18950',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1329',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212296988855,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Begin computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '1',
            },
          ],
        },
        {
          timestamp: 1695212296988921,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'End computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '499501',
            },
          ],
        },
        {
          timestamp: 1695212297089138,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Holding GIL (__exit__, savant_python/src/utils/otlp.rs, 181)',
            },
            {
              key: 'duration',
              type: 'string',
              value: '41522',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_gil',
            },
          ],
        },
      ],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: 'a973f428b83bc69b',
      flags: 1,
      operationName: 'loop',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: '912cbfd9246aa815',
        },
      ],
      startTime: 1695212297088145,
      duration: 102329,
      tags: [
        {
          key: 'i',
          type: 'int64',
          value: 4,
        },
        {
          key: 'res',
          type: 'string',
          value: '499501',
        },
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'otel.status_code',
          type: 'string',
          value: 'OK',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [
        {
          timestamp: 1695212297088211,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 3',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212297088228,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '20677',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1416',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297088270,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Begin computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '1',
            },
          ],
        },
        {
          timestamp: 1695212297088340,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'End computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '499501',
            },
          ],
        },
        {
          timestamp: 1695212297190468,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Holding GIL (__exit__, savant_python/src/utils/otlp.rs, 181)',
            },
            {
              key: 'duration',
              type: 'string',
              value: '44704',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_gil',
            },
          ],
        },
      ],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: '967e2914431a9a5d',
      flags: 1,
      operationName: 'loop',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: '884adea834305030',
        },
      ],
      startTime: 1695212297089274,
      duration: 101629,
      tags: [
        {
          key: 'i',
          type: 'int64',
          value: 4,
        },
        {
          key: 'res',
          type: 'string',
          value: '499501',
        },
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'otel.status_code',
          type: 'string',
          value: 'OK',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [
        {
          timestamp: 1695212297089341,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 3',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212297089357,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '24027',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1529',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297089396,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Begin computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '1',
            },
          ],
        },
        {
          timestamp: 1695212297089460,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'End computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '499501',
            },
          ],
        },
        {
          timestamp: 1695212297190900,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Holding GIL (__exit__, savant_python/src/utils/otlp.rs, 181)',
            },
            {
              key: 'duration',
              type: 'string',
              value: '15833',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_gil',
            },
          ],
        },
      ],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: '33ad848f1911f088',
      flags: 1,
      operationName: 'loop',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: '912cbfd9246aa815',
        },
      ],
      startTime: 1695212297190622,
      duration: 100482,
      tags: [
        {
          key: 'res',
          type: 'string',
          value: '499501',
        },
        {
          key: 'i',
          type: 'int64',
          value: 5,
        },
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'otel.status_code',
          type: 'string',
          value: 'OK',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [
        {
          timestamp: 1695212297190699,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 3',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212297190715,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '18585',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1226',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297190772,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Begin computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '1',
            },
          ],
        },
        {
          timestamp: 1695212297190840,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'End computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '499501',
            },
          ],
        },
        {
          timestamp: 1695212297291097,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Holding GIL (__exit__, savant_python/src/utils/otlp.rs, 181)',
            },
            {
              key: 'duration',
              type: 'string',
              value: '57819',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_gil',
            },
          ],
        },
      ],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: 'a9cb7f5ff5a66c99',
      flags: 1,
      operationName: 'loop',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: '884adea834305030',
        },
      ],
      startTime: 1695212297190983,
      duration: 101849,
      tags: [
        {
          key: 'i',
          type: 'int64',
          value: 5,
        },
        {
          key: 'res',
          type: 'string',
          value: '499501',
        },
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'otel.status_code',
          type: 'string',
          value: 'OK',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [
        {
          timestamp: 1695212297191036,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 3',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212297191052,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '19073',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1403',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297191084,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Begin computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '1',
            },
          ],
        },
        {
          timestamp: 1695212297191147,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'End computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '499501',
            },
          ],
        },
        {
          timestamp: 1695212297292824,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Holding GIL (__exit__, savant_python/src/utils/otlp.rs, 181)',
            },
            {
              key: 'duration',
              type: 'string',
              value: '381564',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_gil',
            },
          ],
        },
      ],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: 'b4d28fa306de3356',
      flags: 1,
      operationName: 'loop',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: '912cbfd9246aa815',
        },
      ],
      startTime: 1695212297291242,
      duration: 100669,
      tags: [
        {
          key: 'res',
          type: 'string',
          value: '499501',
        },
        {
          key: 'i',
          type: 'int64',
          value: 6,
        },
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'otel.status_code',
          type: 'string',
          value: 'OK',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [
        {
          timestamp: 1695212297291314,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 3',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212297291333,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '21124',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1456',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297291396,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Begin computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '1',
            },
          ],
        },
        {
          timestamp: 1695212297291480,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'End computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '499501',
            },
          ],
        },
        {
          timestamp: 1695212297391885,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Holding GIL (__exit__, savant_python/src/utils/otlp.rs, 181)',
            },
            {
              key: 'duration',
              type: 'string',
              value: '91437',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_gil',
            },
          ],
        },
      ],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: 'dd6e4f576646330e',
      flags: 1,
      operationName: 'loop',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: '884adea834305030',
        },
      ],
      startTime: 1695212297293045,
      duration: 100565,
      tags: [
        {
          key: 'res',
          type: 'string',
          value: '499501',
        },
        {
          key: 'i',
          type: 'int64',
          value: 6,
        },
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'otel.status_code',
          type: 'string',
          value: 'OK',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [
        {
          timestamp: 1695212297293163,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 3',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212297293194,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '33379',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '2057',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297293273,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Begin computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '1',
            },
          ],
        },
        {
          timestamp: 1695212297293406,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'End computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '499501',
            },
          ],
        },
        {
          timestamp: 1695212297393603,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Holding GIL (__exit__, savant_python/src/utils/otlp.rs, 181)',
            },
            {
              key: 'duration',
              type: 'string',
              value: '40919',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_gil',
            },
          ],
        },
      ],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: '1a3e7f099fd302cb',
      flags: 1,
      operationName: 'loop',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: '912cbfd9246aa815',
        },
      ],
      startTime: 1695212297392278,
      duration: 100656,
      tags: [
        {
          key: 'res',
          type: 'string',
          value: '499501',
        },
        {
          key: 'i',
          type: 'int64',
          value: 7,
        },
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'otel.status_code',
          type: 'string',
          value: 'OK',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [
        {
          timestamp: 1695212297392370,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 3',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212297392398,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '28369',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1497',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297392456,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Begin computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '1',
            },
          ],
        },
        {
          timestamp: 1695212297392591,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'End computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '499501',
            },
          ],
        },
        {
          timestamp: 1695212297492926,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Holding GIL (__exit__, savant_python/src/utils/otlp.rs, 181)',
            },
            {
              key: 'duration',
              type: 'string',
              value: '78051',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_gil',
            },
          ],
        },
      ],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: '48eba802a1d18468',
      flags: 1,
      operationName: 'loop',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: '884adea834305030',
        },
      ],
      startTime: 1695212297393818,
      duration: 100458,
      tags: [
        {
          key: 'i',
          type: 'int64',
          value: 7,
        },
        {
          key: 'res',
          type: 'string',
          value: '499501',
        },
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'otel.status_code',
          type: 'string',
          value: 'OK',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [
        {
          timestamp: 1695212297393895,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 3',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212297393919,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '25806',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1428',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297393979,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Begin computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '1',
            },
          ],
        },
        {
          timestamp: 1695212297394058,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'End computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '499501',
            },
          ],
        },
        {
          timestamp: 1695212297494270,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Holding GIL (__exit__, savant_python/src/utils/otlp.rs, 181)',
            },
            {
              key: 'duration',
              type: 'string',
              value: '38740',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_gil',
            },
          ],
        },
      ],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: '0b59209b40a3d7c6',
      flags: 1,
      operationName: 'loop',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: '912cbfd9246aa815',
        },
      ],
      startTime: 1695212297493168,
      duration: 100475,
      tags: [
        {
          key: 'i',
          type: 'int64',
          value: 8,
        },
        {
          key: 'res',
          type: 'string',
          value: '499501',
        },
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'otel.status_code',
          type: 'string',
          value: 'OK',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [
        {
          timestamp: 1695212297493264,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 3',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212297493303,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '40280',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '12860',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297493344,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Begin computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '1',
            },
          ],
        },
        {
          timestamp: 1695212297493407,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'End computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '499501',
            },
          ],
        },
        {
          timestamp: 1695212297593635,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Holding GIL (__exit__, savant_python/src/utils/otlp.rs, 181)',
            },
            {
              key: 'duration',
              type: 'string',
              value: '44230',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_gil',
            },
          ],
        },
      ],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: 'eede39d050d1faa6',
      flags: 1,
      operationName: 'loop',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: '884adea834305030',
        },
      ],
      startTime: 1695212297494409,
      duration: 100350,
      tags: [
        {
          key: 'i',
          type: 'int64',
          value: 8,
        },
        {
          key: 'res',
          type: 'string',
          value: '499501',
        },
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'otel.status_code',
          type: 'string',
          value: 'OK',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [
        {
          timestamp: 1695212297494480,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 3',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212297494500,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '26273',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1571',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297494542,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Begin computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '1',
            },
          ],
        },
        {
          timestamp: 1695212297494614,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'End computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '499501',
            },
          ],
        },
        {
          timestamp: 1695212297594751,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Holding GIL (__exit__, savant_python/src/utils/otlp.rs, 181)',
            },
            {
              key: 'duration',
              type: 'string',
              value: '40437',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_gil',
            },
          ],
        },
      ],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: '1b6e3449b8b430ba',
      flags: 1,
      operationName: 'loop',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: '912cbfd9246aa815',
        },
      ],
      startTime: 1695212297593779,
      duration: 100421,
      tags: [
        {
          key: 'res',
          type: 'string',
          value: '499501',
        },
        {
          key: 'i',
          type: 'int64',
          value: 9,
        },
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'otel.status_code',
          type: 'string',
          value: 'OK',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [
        {
          timestamp: 1695212297593840,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 3',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212297593857,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '19025',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1295',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297593898,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Begin computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '1',
            },
          ],
        },
        {
          timestamp: 1695212297593965,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'End computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '499501',
            },
          ],
        },
        {
          timestamp: 1695212297694193,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Holding GIL (__exit__, savant_python/src/utils/otlp.rs, 181)',
            },
            {
              key: 'duration',
              type: 'string',
              value: '46173',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_gil',
            },
          ],
        },
      ],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: '912cbfd9246aa815',
      flags: 1,
      operationName: 'func',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: '256167f2a9e1fcd9',
        },
      ],
      startTime: 1695212296683981,
      duration: 1010391,
      tags: [
        {
          key: 'thread_name',
          type: 'string',
          value: 'Thread-1 (f)',
        },
        {
          key: 'seconds',
          type: 'float64',
          value: 0.1,
        },
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'otel.status_code',
          type: 'string',
          value: 'OK',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [
        {
          timestamp: 1695212296684421,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 2',
            },
            {
              key: 'context_depth',
              type: 'string',
              value: '2',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Error',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a',
            },
          ],
        },
        {
          timestamp: 1695212296684453,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '75894',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '5022',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212296785187,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 2',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212296785204,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '21906',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '2044',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212296886647,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 2',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212296886701,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '52750',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '2784',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212296987505,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 2',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212296987540,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '19816',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1703',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297088087,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 2',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212297088115,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '29602',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '2245',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297190567,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 2',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212297190590,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '20361',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1764',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297291194,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 2',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212297291211,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '21455',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1920',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297392119,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 2',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212297392169,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '44694',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '16997',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297493064,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 2',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212297493115,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '65995',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '2102',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297593733,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 2',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212297593750,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '20250',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1809',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297694319,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 2',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212297694336,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '20636',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '2189',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297694370,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Holding GIL (__exit__, savant_python/src/utils/otlp.rs, 181)',
            },
            {
              key: 'duration',
              type: 'string',
              value: '12095',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_gil',
            },
          ],
        },
      ],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: '10be5fd968ee064a',
      flags: 1,
      operationName: 'loop',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: '884adea834305030',
        },
      ],
      startTime: 1695212297594892,
      duration: 101797,
      tags: [
        {
          key: 'i',
          type: 'int64',
          value: 9,
        },
        {
          key: 'res',
          type: 'string',
          value: '499501',
        },
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'otel.status_code',
          type: 'string',
          value: 'OK',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [
        {
          timestamp: 1695212297594956,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 3',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212297594981,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '20151',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1313',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297595022,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Begin computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '1',
            },
          ],
        },
        {
          timestamp: 1695212297595895,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'End computation',
            },
            {
              key: 'res',
              type: 'string',
              value: '499501',
            },
          ],
        },
        {
          timestamp: 1695212297696682,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Holding GIL (__exit__, savant_python/src/utils/otlp.rs, 181)',
            },
            {
              key: 'duration',
              type: 'string',
              value: '42270',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_gil',
            },
          ],
        },
      ],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: '884adea834305030',
      flags: 1,
      operationName: 'func',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: '256167f2a9e1fcd9',
        },
      ],
      startTime: 1695212296686249,
      duration: 1010593,
      tags: [
        {
          key: 'seconds',
          type: 'float64',
          value: 0.1,
        },
        {
          key: 'thread_name',
          type: 'string',
          value: 'Thread-2 (f)',
        },
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'otel.status_code',
          type: 'string',
          value: 'OK',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [
        {
          timestamp: 1695212296686464,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 2',
            },
            {
              key: 'context_depth',
              type: 'string',
              value: '2',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Error',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a',
            },
          ],
        },
        {
          timestamp: 1695212296686523,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '79684',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '2408',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212296787410,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 2',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212296787449,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '31726',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1902',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212296888131,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 2',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212296888152,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '32010',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1827',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212296988686,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 2',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212296988702,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '19979',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1756',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297089228,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 2',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212297089246,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '20650',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '2085',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297190949,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 2',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212297190965,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '17883',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1339',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297292960,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 2',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212297292988,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '18930',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '2007',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297393720,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 2',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212297393736,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '19257',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1644',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297494359,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 2',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212297494379,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '23607',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '2136',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297594844,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 2',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212297594862,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '20786',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1903',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297696776,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Context Depth: 2',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212297696793,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '20631',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '2050',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297696841,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Holding GIL (__exit__, savant_python/src/utils/otlp.rs, 181)',
            },
            {
              key: 'duration',
              type: 'string',
              value: '27933',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_gil',
            },
          ],
        },
      ],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: '8b45f4c54d16abe2',
      flags: 1,
      operationName: 'sleep-debugging',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: '22a0a2338cac3d1b',
        },
      ],
      startTime: 1695212297697716,
      duration: 108,
      tags: [
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'otel.status_code',
          type: 'string',
          value: 'OK',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [
        {
          timestamp: 1695212297697767,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Always seen when Info',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Info',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b::c',
            },
          ],
        },
        {
          timestamp: 1695212297697788,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '23295',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1533',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297697823,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Holding GIL (__exit__, savant_python/src/utils/otlp.rs, 181)',
            },
            {
              key: 'duration',
              type: 'string',
              value: '13204',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_gil',
            },
          ],
        },
      ],
      processID: 'p1',
      warnings: null,
    },
    {
      traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
      spanID: '22a0a2338cac3d1b',
      flags: 1,
      operationName: 'sleep-1',
      references: [
        {
          refType: 'CHILD_OF',
          traceID: 'cb8b182cff2f87b73b5d1fcbe0bb846d',
          spanID: '256167f2a9e1fcd9',
        },
      ],
      startTime: 1695212297697678,
      duration: 201295,
      tags: [
        {
          key: 'seconds',
          type: 'float64',
          value: 0.2,
        },
        {
          key: 'otel.library.name',
          type: 'string',
          value: 'video_pipeline',
        },
        {
          key: 'error',
          type: 'bool',
          value: true,
        },
        {
          key: 'otel.status_code',
          type: 'string',
          value: 'ERROR',
        },
        {
          key: 'otel.status_description',
          type: 'string',
          value: 'python.exception',
        },
        {
          key: 'internal.span.format',
          type: 'string',
          value: 'proto',
        },
      ],
      logs: [
        {
          timestamp: 1695212297697875,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'I\'m debugging: 1',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Debug',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212297697910,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '18584',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1335',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297898340,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'I\'m debugging: 2',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Debug',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212297898378,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '70058',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '2349',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297898488,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'I\'m warning: 1',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Warning',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'a::b',
            },
          ],
        },
        {
          timestamp: 1695212297898505,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation (log_message_gil, savant_python/src/logging.rs, 145)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '41125',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '1356',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297898898,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Exception occurred',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Error',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'python::exception',
            },
            {
              key: 'python.exception.traceback',
              type: 'string',
              value: 'Traceback (most recent call last):\n  File "/home/ivan/dev/savant_rs/python/pipeline.py", line 157, in \u003cmodule\u003e\n    raise Exception("test")\n',
            },
            {
              key: 'python.exception.type',
              type: 'string',
              value: '\u003cclass \'Exception\'\u003e',
            },
            {
              key: 'python.exception.value',
              type: 'string',
              value: 'test',
            },
            {
              key: 'python.version',
              type: 'string',
              value: '3.10.12 (main, Jun 11 2023, 05:26:28) [GCC 11.4.0]',
            },
          ],
        },
        {
          timestamp: 1695212297898905,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'python.exception',
            },
            {
              key: 'python.exception.traceback',
              type: 'string',
              value: 'Traceback (most recent call last):\n  File "/home/ivan/dev/savant_rs/python/pipeline.py", line 157, in \u003cmodule\u003e\n    raise Exception("test")\n',
            },
            {
              key: 'python.exception.type',
              type: 'string',
              value: '\u003cclass \'Exception\'\u003e',
            },
            {
              key: 'python.exception.value',
              type: 'string',
              value: 'test',
            },
            {
              key: 'python.version',
              type: 'string',
              value: '3.10.12 (main, Jun 11 2023, 05:26:28) [GCC 11.4.0]',
            },
          ],
        },
        {
          timestamp: 1695212297898932,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: '👌 GIL-free operation ({{closure}}, savant_python/src/utils/otlp.rs, 205)',
            },
            {
              key: 'duration.gil-free',
              type: 'string',
              value: '46642',
            },
            {
              key: 'duration.gil-wait',
              type: 'string',
              value: '2031',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_released_gil',
            },
          ],
        },
        {
          timestamp: 1695212297898973,
          fields: [
            {
              key: 'event',
              type: 'string',
              value: 'Holding GIL (__exit__, savant_python/src/utils/otlp.rs, 181)',
            },
            {
              key: 'duration',
              type: 'string',
              value: '431881',
            },
            {
              key: 'event.domain',
              type: 'string',
              value: 'savant',
            },
            {
              key: 'event.name',
              type: 'string',
              value: 'log-record',
            },
            {
              key: 'log.level',
              type: 'string',
              value: 'Trace',
            },
            {
              key: 'log.target',
              type: 'string',
              value: 'savant::gil_management::with_gil',
            },
          ],
        },
      ],
      processID: 'p1',
      warnings: null,
    },
  ],
  processes: {
    p1: {
      serviceName: 'demo-pipeline',
      tags: [
        {
          key: 'exporter',
          type: 'string',
          value: 'jaeger',
        },
        {
          key: 'service.name',
          type: 'string',
          value: 'demo-pipeline',
        },
        {
          key: 'service.namespace',
          type: 'string',
          value: 'savant-core',
        },
      ],
    },
  },
  warnings: null,
} as IData;
