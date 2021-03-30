let proxyObj={}

proxyObj['/']={
    //websocket
    ws:false,

    //target:'http://192.168.56.1:8080',
    target:'http://localhost:8080',
    //target:'http://47.115.190.50:8080',

    changeOrigin: true,

    pathRewrite:{
        '^/':'/'
    },
}

module.exports = {

    devServer:{
        host:'localhost',
        //host:'47.115.190.50',
        port:8088,
        proxy:proxyObj
    }
}






