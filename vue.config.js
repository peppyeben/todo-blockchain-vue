const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
// defineConfig({transpileDependencies: true})

module.exports = defineConfig({
	transpileDependencies: true,
  lintOnSave: false,
	configureWebpack: {
		resolve: {
			fallback: {
				"https": require.resolve("https-browserify"),
      	"os": require.resolve("os-browserify/browser"),
      	"http": require.resolve("stream-http"),
      	"crypto": require.resolve("crypto-browserify"),
      	"stream": require.resolve("stream-browserify"),
      	"buffer": require.resolve("buffer/")
    	}
  	},
  	plugins: [
  		new webpack.ProvidePlugin({
  			Buffer: ['buffer', 'Buffer']
  		})
  	]
	}
})

