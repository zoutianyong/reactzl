const proxy = require("http-proxy-middleware");
module.exports  = (app)=>{
    app.use("/ajax",proxy({
        target:"https://m.cdfgsanya.com",
        changeOrigin:true,
        pathRewrite:{
            "^/ajax":""
        }
    })),

    app.use("/users",proxy({
        target:"http://39.105.204.151:3000",
        changeOrigin:true
    }))
    
    app.use("/mianshui",proxy({
        target:"https://searchinterface.mianshui365.com",
        changeOrigin:true,
        pathRewrite:{
            "^/mianshui":""
        }
    }))
}