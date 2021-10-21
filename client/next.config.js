module.exports = {
  reactStrictMode: true,
}



module.exports = {
  module: {
    rules: [
      {
        test: /\.(.png|.jpg|.gif|.jpeg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  }
}
