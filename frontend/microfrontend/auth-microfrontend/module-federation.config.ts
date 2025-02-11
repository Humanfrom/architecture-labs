export const mfConfig = {
  name: "auth",
  filename: "remoteEntry.js",
  exposes: {
    "./AuthProvider": "./src/providers/AuthProvider.jsx",
    "./AuthContext": "./src/context/AuthContext.js",
    "./Profile": "./src/components/Profile.js",
  },
  shared: ["react", "react-dom", "react-router-dom"],
};
