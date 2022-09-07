const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

	//Build 路徑設定
	publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/'

		//publicPath: process.env.NODE_ENV === 'production'
    //? '/Event/vue/'
    //: '/'
})
