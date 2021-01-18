let proxyObj={}

proxyObj['/']={
    //websocket
    ws:false,

    target:'http://localhost:8088',

    changeOrigin: true,

    pathRewrite:{
        '^/':'/'
    }

}

module.export={
    devServer:{
        host:'192.168.2.123',
        port:8080,
        proxy:proxyObj
    }
}







