const Koa = require('koa')
const Router = require('koa-router')
const { execFile } = require("child_process")
const path = require('path')



const app = new Koa()
const router = new Router()

router.get('/syncMiniProgram',(ctx,next)=>{
    ctx.body="koa router is done";
    var exePath = path.resolve(__dirname, './test.bat');
    execFile(exePath,function(error,stdout,stderr){
        console.log("deploy.sh")
    })
})

//miniProgram
app.use(router.routes()).use(router.allowedMethods())
app.listen(8080)

// function gitHook(){
//      // 停止服务
//      kill -9 
//     //进入miniProgram目录
//     let path = '/opt/web/miniProgram'
//     cd path
   

//     //从github拉取代码
//     let repo = 'https://github.com/llz383455526/miniProgramTransit.git'
//     git pull repo
//     //运行

    
// }