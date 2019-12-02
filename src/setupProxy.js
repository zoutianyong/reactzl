const proxy = require("http-proxy-middleware");
module.exports  = (app)=>{
    app.use("/ajax",proxy({
        target:"https://m.cdfgsanya.com",
        changeOrigin:true,
        pathRewrite:{
            "^/ajax":""
        }
    }))
}