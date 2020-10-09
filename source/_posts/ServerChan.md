---
title: 利用Server酱推送消息到个人微信
tags: 通知软件推荐
categories: 软件推荐
thumbnail: 'https://blog.cdn.thinkmoon.cn/%E5%B0%8F%E4%B9%A6%E5%8C%A0/1509075155084.jpg'
abbrlink: '26e2'
date: 2018-01-02 13:15:42
---
如果你需要及时收到服务器的运行报告，如果你嫌装客户端端软件太麻烦。那么你可以试试这个，调用WEB API推送消息到你的微信；我想这可能会是一个不错的装逼姿势。
<!-- more -->
![Server酱][1]


> 「Server酱」，英文名「ServerChan」，是一款「程序员」和「服务器」之间的通信软件。说人话？就是从服务器推报警和日志到手机的工具。


### Server酱工作原理图

![工作原理图][2]

大致解释一下步骤：

 1. 登录Server酱官网，使用==github #800000==账号登录
 2. 绑定一个微信（你的或者你想通知的人的）
 3. 获取到SendKey（它根据这个==Sendkey #800500==区分目标）
 4. 在你发起消息的服务器或者软件调用API发送GET请求
 5. 手机微信上收到消息

### 技术要求

 1. 需要有一个GitHub账号，没有可以注册一个。
 2. 需要有一个微信账号，没有可以注册一个。
 3. 需要关注一个公众号，没有可以关注一下。
 4. 需要会使用Get请求,任何语言。

### 操作流程

1.进入官网，使用GitHub账号登录。开始绑定微信。就是使用微信扫描之后（会叫你关注一个公众号），然后在这个界面点击<检查结果并确认绑定>

![微信绑定][3]

> 绑定成功之后是这样子的

![绑定成功][4]

2.获取SendKey（在发送消息页面）。

![SCKEY][5]

3.首先我们来测试一下能否发送成功

> 在这个在线发送工具下输入你想发送的数据。

![在线发送工具][6]

4.打开微信看看效果

![消息预览][7]

![消息展示][8]

> 注意这个界面不要随便分享，因为这个链接里面就有你的SCKEY，如果你不想突然收到别人莫名其妙的消息，那还是自己看就好了。

5.php调用WEB API发送消息（一定得是PHP？不，你用表单都可以，It‘s up to you.)

> 对了，其实这个消息内容是支持markdown的哦（很好的一个设计），如果不知道什么是markdown的话。。。去百度？

写成一个函数

	function weixin_notify($SCKEY,$header,$content){
		file_get_contents('https://sc.ftqq.com/'.$SCKEY.'.send?text='.urlencode($header).'&desp='.urlencode($content));
	}

> 然后你再需要发送服务器警告的地方调用函数即可

### ServerChan 工作原理分析

> 如果你打算做一个类似的平台的话。你首先有两个东西是必不可缺的。1,一个服务器后端。2，一个通过微信认证了的服务号

 1. 首先你得关注公众号
 2. 你扫描之后绑定微信，其实是一个区分用户的过程，来记录你的userID。比如：百词斩官方公众号通过你发特定的字符串来区别。
 3. 它的服务端通过SCKEY与userID做一个映射，然后根据你的SCKEY来发给不同的人。
 4. 服务端开放一个接口，接收你的SCKEY、title、content。然后再调用微信官方接口发送客户消息。
 5. 用户收到消息

### 局限与完善

- ==首先这里的SCKEY与userID只是简单的一对一的关系，但其实如果做成一对多更好。因为这样便可以群发通知 #801400==
- ==她这儿的的分享链接里面包含了很多个人敏感的信息，而其实这在微信的标准里面是不安全的。 #801900==

  [1]: https://blog.cdn.thinkmoon.cn/%E5%B0%8F%E4%B9%A6%E5%8C%A0/1509075155084.jpg
  [2]: https://blog.cdn.thinkmoon.cn/%E5%B0%8F%E4%B9%A6%E5%8C%A0/55ec21e37e46b.gif "工作原理图"
  [3]: https://blog.cdn.thinkmoon.cn/%E5%B0%8F%E4%B9%A6%E5%8C%A0/1509091155306.jpg
  [4]: https://blog.cdn.thinkmoon.cn/%E5%B0%8F%E4%B9%A6%E5%8C%A0/1509091329022.jpg
  [5]: https://blog.cdn.thinkmoon.cn/%E5%B0%8F%E4%B9%A6%E5%8C%A0/1509091540971.jpg
  [6]: https://blog.cdn.thinkmoon.cn/%E5%B0%8F%E4%B9%A6%E5%8C%A0/1509091667950.jpg
  [7]: https://blog.cdn.thinkmoon.cn/%E5%B0%8F%E4%B9%A6%E5%8C%A0/1509091830688.jpg
  [8]: https://blog.cdn.thinkmoon.cn/%E5%B0%8F%E4%B9%A6%E5%8C%A0/1509091860414.jpg