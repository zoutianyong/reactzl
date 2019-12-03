const proxy = require("http-proxy-middleware");
module.exports  = (app)=>{
    app.use("/ajax",proxy({
        target:"https://m.cdfgsanya.com",
        changeOrigin:true,
        pathRewrite:{
            "^/ajax":""
        }
    }))
    
    app.use("/mianshui",proxy({
        target:"https://searchinterface.mianshui365.com",
        changeOrigin:true,
        pathRewrite:{
            "^/mianshui":""
        }
    }))
}