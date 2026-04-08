window.config = {
  appTitle: 'Reditech PACS',

  onModeEnter: () => {
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = '/custom.css';
    document.head.appendChild(css);

    const js = document.createElement('script');
    js.src = '/custom.js';
    document.body.appendChild(js);
  },

  routerBasename: "/",
  showStudyList: true,
  extensions: [],
  modes: [],
  dataSources: [
    {
      namespace: "@ohif/extension-default.dataSourcesModule.dicomweb",
      sourceName: "dcm4chee",
      configuration: {
        friendlyName: "DCM4CHEE",
        name: "DCM4CHEE",
        wadoUriRoot: "http://192.168.205.102:8080/dcm4chee-arc/aets/DCM4CHEE/wado",
        qidoRoot: "http://192.168.205.102:8080/dcm4chee-arc/aets/DCM4CHEE/rs",
        wadoRoot: "http://192.168.205.102:8080/dcm4chee-arc/aets/DCM4CHEE/rs",
        qidoSupportsIncludeField: true,
        supportsReject: true,
        supportsStow: true,
        imageRendering: "wadors",
        thumbnailRendering: "wadors",
        enableStudyLazyLoad: true,
        singlepart: "pdf,video"
      }
    }
  ],
  defaultDataSourceName: "dcm4chee"
};
