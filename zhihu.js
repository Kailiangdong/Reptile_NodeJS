'use strict'
let request = require('request-promise')
let $ = require('cheerio')
let express = require('express')
let app = express()
const URI = 'https://daily.zhihu.com/'
app.get('/', async (req, res) => {
    let result = await request(URI)//异步请求网页
    let data = []
    let elements = $('a', '.main-content .wrap .box', result)//解析出网页里的a元素
    elements.map((i, ele) => {
        let json = {}
        let $ele = $(ele) //用cheerio解析html
        json.url = $ele.attr('href')//获取a元素的地址链接,获得story/971077
        json.title = $ele.children().text()//获取标题
        data.push(json)
    })
    console.log(data)
    res.send(data)//把data数据返回给前台
})
app.listen(8001, () => {//启动一个8001端口的server服务
console.log('Listening on port 8001')
})