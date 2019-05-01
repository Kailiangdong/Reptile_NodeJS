var http = require("http");
var fs = require("fs");
var cheerio = require("cheerio");
var request = require("request");
var i = 0;
var url = "baidu.com";

function fetchpage(x){
    startRequest(x);
}//封装一层函数

function startRequest(){
    http.get(x, function(res){
        var html = ''; //用来存储整个网页html要求
        title = []; //用来放标题
        res.setEncoding('utf-8');//防止中文乱码
        //鉴定data数据，每次取一块数据
        res.on('data', function(chunk){
            html += chunk;
        });
        res.on('end',function(){
            var $ = cheerio.load(html);
            var time = $('.article-info a:first-child').next().text().trim();
            var new_item = {
                title: $().text().trim(),
                time:time,
                link:addEventListener,
                author:addEventListener,

            }
        });
    });
}

