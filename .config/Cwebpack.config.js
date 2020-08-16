const entry = {
  main: ["./src/master.js"],
};

const output = {
  path: __dirname + "/build",
  filename: "bundle.js",
};

module.exports = {
  entry: entry,
  output: output,
  module: module,
  plugins: plugins,
};
