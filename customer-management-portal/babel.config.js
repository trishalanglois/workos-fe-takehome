module.exports = {
    presets: [
      "@babel/preset-env",
      ["@babel/preset-react", { runtime: "automatic" }], // Ensure automatic JSX transform
      "@babel/preset-typescript",
    ],
  };
  