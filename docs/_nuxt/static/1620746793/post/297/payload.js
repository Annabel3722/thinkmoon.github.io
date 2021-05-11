__NUXT_JSONP__("/post/297", (function(a,b){return {data:[{article:{cid:297,title:"使用console的一些骚操作来封装API请求及输出相关日志",slug:"297",created:1554173880,modified:1554176362,text:"\u003C!--markdown--\u003E## 最终效果如下\r\n![2019-04-02T02:54:35.png][1]\r\n![2019-04-02T02:57:55.png][2]\r\n\r\n## 代码如下\r\n```javascript\r\nconst baseURL = 'http:\u002F\u002Fwxlc.wezoz.com\u002F' \u002F\u002F your base url\r\nasync function request(api, method, header, params) {\r\n\tconsole.group(api)\r\n\tconsole.log('%c' + method + ' REQUEST:', \"color:green\")\r\n\tconsole.log({\r\n\t\t'api': api,\r\n\t\t'header': header,\r\n\t\t'params': params\r\n\t})\r\n\treturn await new Promise((resolve, reject) =\u003E {\r\n\t\tuni.request({\r\n\t\t\turl: baseURL + api,\r\n\t\t\tmethod: method,\r\n\t\t\theader: header,\r\n\t\t\tdata: params,\r\n\t\t\tsuccess: (result) =\u003E {\r\n\t\t\t\tconsole.log('%c' + method + ' SUCCESS RETURN DATA:', \"color:green\")\r\n\t\t\t\tconsole.log(result)\r\n\t\t\t\tconsole.groupEnd(api)\r\n\t\t\t\tresolve(result.data);\r\n\t\t\t},\r\n\t\t\tfail: (e) =\u003E {\r\n\t\t\t\treject(e);\r\n\t\t\t}\r\n\t\t})\r\n\t})\r\n}\r\nasync function post(api, params, success) {\r\n\tconst POST_METHOD = 'POST'\r\n\tconst POST_HEADER = {\r\n\t\t'content-type': 'application\u002Fx-www-form-urlencoded',\r\n\t\t'token': wx.getStorageSync('token')\r\n\t}\r\n\treturn await request(api, POST_METHOD, POST_HEADER, params)\r\n}\r\nasync function get(api, params, success) {\r\n\tconst GET_METHOD = 'GET'\r\n\tconst GET_HEADER = {\r\n\t\t'content-type': 'application\u002Fx-www-form-urlencoded',\r\n\t\t'token': wx.getStorageSync('token')\r\n\t}\r\n\treturn await request(api, GET_METHOD, GET_HEADER, params)\r\n}\r\nmodule.exports = {\r\n\tPOST: post,\r\n\tGET: get\r\n}\r\n\r\n```\r\n## 所用到的一些consloe骚操作\r\n\r\n### console内使用CSS样式\r\nconsloe里面使用%c进行css样式格式化输出实例\r\n```\r\nconsole.log(\"%c Hello World\", \"color:green\")\r\n```\r\n上述语句会输出绿色的`Hello world`, 效果如下。\r\n\r\n![2019-04-02T03:25:00.png][3]\r\n\r\n然后你就可以根据你的css功底进行创造啦\r\n\r\n### console内获取程序运行时间\r\n\r\n一般大家看到这个题目，第一时间想到的绝对是获取startTime，endTime再求差对不？\r\n其实console提供一个内嵌的console.time()和console.timeEnd()，代码如下\r\n![2019-04-02T03:30:19.png][4]\r\n\r\n### console分组输出\r\n有得时候，大家打开控制台看见一堆输出是不是很头疼？如何在茫茫数据中找到自己想要的数据呢？你可以使用ground分组数据，让console变得清晰明了。\r\n效果如下\r\n![2019-04-02T02:57:55.png][2]\r\n\r\n### 结语\r\n\r\n我这里只是写了一些我自己常用到的一些功能，其实console对象还有很多函数。想玩一下的可以自己去尝试以下，发挥自己的想象力就会发现一些很有意思的玩法\r\n\r\n  [1]: https:\u002F\u002Fwww.thinkmoon.cn\u002Fusr\u002Fuploads\u002F2019\u002F04\u002F1897065195.png\r\n  [2]: https:\u002F\u002Fwww.thinkmoon.cn\u002Fusr\u002Fuploads\u002F2019\u002F04\u002F798221859.png\r\n  [3]: https:\u002F\u002Fwww.thinkmoon.cn\u002Fusr\u002Fuploads\u002F2019\u002F04\u002F3326939580.png\r\n  [4]: https:\u002F\u002Fwww.thinkmoon.cn\u002Fusr\u002Fuploads\u002F2019\u002F04\u002F116410319.png",order:a,authorId:1,type:"post",status:"publish",commentsNum:a,allowComment:b,allowPing:b,allowFeed:b,parent:a,views:928,likes:6}}],fetch:{},mutations:void 0}}(0,"1")));