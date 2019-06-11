module.exports = {
  module: {
    rules: [
      {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  watch: true,
};
