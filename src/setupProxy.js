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
   
}