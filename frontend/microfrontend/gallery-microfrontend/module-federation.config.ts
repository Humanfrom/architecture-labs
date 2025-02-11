export const mfConfig = {
  name: "gallery",
  filename: "remoteEntry.js",
  exposes: {
    "./Gallery": "./src/components/Gallery.js",
  },
  shared: ["react", "react-dom", "react-router-dom"],
};
