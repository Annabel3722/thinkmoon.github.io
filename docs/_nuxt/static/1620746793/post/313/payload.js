__NUXT_JSONP__("/post/313", (function(a,b,c,d){return {data:[{article:{cid:313,title:"uni-app使用v-model",slug:"313",created:c,modified:c,text:"\u003C!--markdown--\u003E## v-model 介绍\r\n\r\n首先明确一点，v-model仅仅是语法糖。\r\n\r\n```\r\n\u003Cinput type=\"text\" v-model=\"something\"\u003E\r\n```\r\n\r\n等价于\r\n\r\n```\r\n  \u003Cinput\r\n                type=\"text\"\r\n                v-bind:value=\"something\"\r\n                v-on:input=\"something = $event.target.value\"\u003E\r\n```\r\n\r\n它将一个较复杂的input双向数据绑定简化了他的书写方式。\r\n\r\n## 微信小程序绑定input\r\n\r\n最开始我是使用微信推荐的写法\r\n```\r\n\u003Cinput bindtap=\"input\" \u002F\u003E\r\n```\r\n然后在js里面解析event，然后再setData\r\n\r\n## uni-app下v-model的写法\r\n\r\n\u003E 本文采用`uni-app`自定义组件模式\r\n\r\nwxml\r\n```\r\n...\r\n\u003Cform @submit=\"formSubmit\" @reset=\"formReset\" :model=\"formItem\" class=\"tm-every-center padding bg-white\"\u003E\r\n\t\t\t\t\t\u003Cview class=\"section flex align-center\"\u003E\r\n\t\t\t\t\t\t\u003Cview class=\"section__title\"\u003E姓名：\u003C\u002Fview\u003E\r\n\t\t\t\t\t\t\u003Cinput name=\"name\" placeholder=\"请填写您的姓名\" class=\"bg-gray\" v-model=\"formItem.name\" \u002F\u003E\r\n\t\t\t\t\t\u003C\u002Fview\u003E\r\n\t\t\t\t\t\u003Cview class=\"section flex align-center\"\u003E\r\n\t\t\t\t\t\t\u003Cview class=\"section__title\"\u003E手机：\u003C\u002Fview\u003E\r\n\t\t\t\t\t\t\u003Cinput name=\"name\" placeholder=\"请填写您的姓名\" class=\"bg-gray\" v-model=\"formItem.phone\" \u002F\u003E\r\n\t\t\t\t\t\u003C\u002Fview\u003E\r\n\t\t\t\t\t\u003Cview class=\"section flex align-center\"\u003E\r\n\t\t\t\t\t\t\u003Cview class=\"section__title\"\u003E赛点：\u003C\u002Fview\u003E\r\n\t\t\t\t\t\t\u003Cinput name=\"name\" placeholder=\"请填写您的姓名\" class=\"bg-gray\" v-model=\"formItem.competition\" \u002F\u003E\r\n\t\t\t\t\t\u003C\u002Fview\u003E\r\n\t\t\t\t\t\u003Cview class=\"btn-area margin-top\"\u003E\u003Cbutton formType=\"submit\" class=\"cu-btn\"\u003E提交\u003C\u002Fbutton\u003E\u003C\u002Fview\u003E\r\n\t\t\t\t\u003C\u002Fform\u003E\r\n\t\t\t\t...\r\n```\r\n然后在data里面设置\r\n```\r\nformItem: {\r\n\t\t\t\tname:'',\r\n\t\t\t\tphone:'',\r\n\t\t\t\tcompetition: ''\r\n\t\t\t}\r\n```\r\n在submit事件回调里面就可以这样写\r\n```\r\nsubmit(){\r\n\tthis.$api.post(formItem).then(res =\u003E {\r\n\t})\r\n}\r\n```\r\n完美解决微信小程序input书写过程冗余的情况。",order:a,authorId:d,type:"post",status:"publish",commentsNum:a,allowComment:b,allowPing:b,allowFeed:b,parent:a,views:4595,likes:d}}],fetch:{},mutations:void 0}}(0,"1",1558946566,1)));