export const mfConfig = {
  name: "host_microfrontend",
  exposes: {},
  remotes: {
    auth: "auth@http://localhost:3100/remoteEntry.js",
    gallery: "gallery@http://localhost:3101/remoteEntry.js",
  },
  shared: ["react", "react-dom", "react-router-dom"],
};
