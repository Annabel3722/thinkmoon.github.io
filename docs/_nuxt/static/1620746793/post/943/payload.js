__NUXT_JSONP__("/post/943", (function(a,b,c){return {data:[{article:{cid:943,title:"前端模块化",slug:"943",created:c,modified:c,text:"\u003C!--markdown--\u003E# 前端模块化\r\n\r\n## 什么是模块化？\r\n\r\n\u003E 在程序设计领域，模块就是为完成某一个功能的一段程序或者子程序\r\n\r\n一个文件可以是一个模块，一个文件夹也可以是一个模块。模块的思想完美的符合了设计模式中的单一职责原则。只做一件事，或者一类事，分清任务的边界。\r\n\r\n## 为什么需要模块化？\r\n\r\n模块化的目的是将任务细分，在现阶段的软件工程阶段，模块化的方式可以将一个大任务分给不同的人或组织，每个人所负责的模块相对独立而又互为依存关系。而在开源领域和工程复用阶段，模块化可以让我们更方便的站在人民群众的肩膀上，众人拾薪柴火高。使我们可以更多的关注业务逻辑，而不用过分在意实现细节。\r\n\r\n## 现阶段前端有哪些模块化方式？\r\n\r\n现阶段前端模块化规范有这几种，AMD（Asynchronous Module Definition，CMD（Common Module Definition），CommonJs，Es6 Moduel；\r\n\r\n#### AMD(require.js)\r\n\r\nAMD规范如其全名一致，异步模块定义。是require.js 在推广过程中对模块化定义的规范产出的。它的主要思想是前置依赖，让依赖先加载和执行，然后再之后后面的语句。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，才会运行这个回调函数。\r\n\r\n#### CMD(sea.js)\r\n\r\nCMD与AMD规范不一样，AMD是一种与预加载的方式，否管你有没有用到，先把依赖加载进来执行了再说。而CMD是按需依赖的形式，你先运行把，运行到哪里了缺啥你再告诉我，我给你按需依赖。\r\n\r\n#### Commonjs\r\n\r\nCommonJs，运行时加载，理论上来说，这个规范一般都是用于服务端的node环境，与前端可能相关性不大，但是作为Js的模块化规范的几大巨头之一，我们也应该了解其思想和实现逻辑。CommonJs模块都是对象，先读取加载整个模块，生成一个对象，然后再从这个对象上面读取方法。由于它是读取后深拷贝（对值的拷贝）这个时候你再进行模块内部变量的改变，是不会影响原依赖模块的使用。CommonJs是同步加载的，一般同步就意味着等待，而有效等待的前提就需要良好的运行环境，这在浏览器上变换莫测的网络环境显然是没法满足的，一个404的js，就造成页面的长时间等待。所以这个规范一般被用作服务端node环境。\r\n\r\n#### ES6 module\r\n\r\n在我学前端的心路历程中，但凡跟ES6扯上关系的，总得带点牛逼气息，ES6 module也是如此，它是从语言层面定义的模块化解决方案。ES6的模块不是对象，`import`命令会被 JavaScript 引擎静态分析，在编译时就引入模块代码，而不是在代码运行时加载，所以**无法实现条件加载**。也正因为这个，使得静态分析成为可能。\r\n\r\n## 我该用哪种模块化方式？\r\n\r\n\u003E 答：当然是最牛逼的\r\n\r\n理想上，我们应该全部使用ES6 module这种牛逼的方式。但是理想与现实总是存在着略微的差距，虽然我们平常写Vue组件，ES6 module 用得是肆无忌惮，风生水起。但这并不意味着我们现在生产环境上用的就是这个模式，所见有时并非所得。一方面并非所有的浏览器都能够支持ES6 module，另一方面则是由于，现如今磅礴的前端生态环境，巨额的嵌套引用入会导致额外的网络往返，在生产环境中发布未打包的 ESM 仍然效率低下（即使使用 HTTP\u002F2）。实际上当我们run build时，聪明的打包器帮我们完成一系列操作，tree-shaking、懒加载和 chunk 分割（以获得更好的缓存），让我们以最淳朴的形式表现于浏览器，当真是反哺归真。\r\n\r\n## 参考文档\r\n\r\n1. [为什么选 Vite](https:\u002F\u002Fvitejs.bootcss.com\u002Fguide\u002Fwhy.html)\r\n\r\n2. [前端模块化](https:\u002F\u002Fgithub.com\u002Fzgfang1993\u002Fblog\u002Fissues\u002F29)\r\n\r\n3. [模块设计术语](https:\u002F\u002Fbaike.baidu.com\u002Fitem\u002F%E6%A8%A1%E5%9D%97\u002F437198)\r\n\r\n",order:a,authorId:1,type:"post",status:"publish",commentsNum:a,allowComment:b,allowPing:b,allowFeed:b,parent:a,views:5,likes:a}}],fetch:{},mutations:void 0}}(0,"1",1620656423)));