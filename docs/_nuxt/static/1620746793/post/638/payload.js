__NUXT_JSONP__("/post/638", (function(a,b,c){return {data:[{article:{cid:638,title:"Ubuntu深度学习的相关配置",slug:"638",created:1576207800,modified:1576850795,text:"\u003C!--markdown--\u003E![tensorflow][1]\r\n\r\n## 安装NVIDIA驱动 \r\n\r\n1. 查看显卡信息\r\n```shell\r\nubuntu-drivers devices\r\n```\r\n\r\n2. 自动安装显卡驱动\r\n\r\n```shell\r\nsudo ubuntu-drivers autoinstall\r\n```\r\n\r\n3. 确认是否安装成功\r\n```shell\r\nnvidia-smi\r\n```\r\n\r\n## 安装docker\r\n\r\n[安装文档](https:\u002F\u002Fdocs.docker.com\u002Finstall\u002Flinux\u002Fdocker-ce\u002Fubuntu\u002F)\r\n\r\n使用阿里源安装\r\n\r\n```shell\r\n# step 1: 安装必要的一些系统工具\r\nsudo apt-get update\r\nsudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common\r\n# step 2: 安装GPG证书\r\ncurl -fsSL http:\u002F\u002Fmirrors.aliyun.com\u002Fdocker-ce\u002Flinux\u002Fubuntu\u002Fgpg | sudo apt-key add -\r\n# Step 3: 写入软件源信息\r\nsudo add-apt-repository \"deb [arch=amd64] http:\u002F\u002Fmirrors.aliyun.com\u002Fdocker-ce\u002Flinux\u002Fubuntu $(lsb_release -cs) stable\"\r\n# Step 4: 更新并安装Docker-CE\r\nsudo apt-get -y update\r\nsudo apt-get -y install docker-ce\r\n\r\n# 安装指定版本的Docker-CE:\r\n# Step 1: 查找Docker-CE的版本:\r\n# apt-cache madison docker-ce\r\n#   docker-ce | 17.03.1~ce-0~ubuntu-xenial | http:\u002F\u002Fmirrors.aliyun.com\u002Fdocker-ce\u002Flinux\u002Fubuntu xenial\u002Fstable amd64 Packages\r\n#   docker-ce | 17.03.0~ce-0~ubuntu-xenial | http:\u002F\u002Fmirrors.aliyun.com\u002Fdocker-ce\u002Flinux\u002Fubuntu xenial\u002Fstable amd64 Packages\r\n# Step 2: 安装指定版本的Docker-CE: (VERSION例如上面的17.03.1~ce-0~ubuntu-xenial)\r\n# sudo apt-get -y install docker-ce=[VERSION]\r\n```\r\n\r\n\u003E tips: 由于使用的是19.10版本，暂时没有对应的源，故手动将step 3切换至19.04 \r\n\r\n```bash\r\nsudo add-apt-repository \"deb [arch=amd64] http:\u002F\u002Fmirrors.aliyun.com\u002Fdocker-ce\u002Flinux\u002Fubuntu disco stable\"\r\n```\r\n\r\n## 安装NVIDIA Container Toolkit\r\n\r\n### Add the package repositories\r\n```shell\r\ndistribution=$(. \u002Fetc\u002Fos-release;echo $ID$VERSION_ID)\r\ncurl -s -L https:\u002F\u002Fnvidia.github.io\u002Fnvidia-docker\u002Fgpgkey | sudo apt-key add -\r\ncurl -s -L https:\u002F\u002Fnvidia.github.io\u002Fnvidia-docker\u002F$distribution\u002Fnvidia-docker.list | sudo tee \u002Fetc\u002Fapt\u002Fsources.list.d\u002Fnvidia-docker.list\r\nsudo apt-get update && sudo apt-get install -y nvidia-container-toolkit\r\nsudo systemctl restart docker\r\n```\r\n\r\n## 测试\r\n```bash\r\nsudo docker run --gpus all -it --rm tensorflow\u002Ftensorflow:latest-gpu-py3    python -c \"import tensorflow as tf; print(tf.reduce_sum(tf.random.normal([1000, 1000])))\"\r\n```\r\n\r\n## 装载工作目录至容器\r\n```bash\r\ndocker run --gpus all -itd --name tf --rm -v $PWD:\u002Ftmp -w \u002Ftmp tensorflow\u002Ftensorflow:latest-gpu-py3\r\n```\r\n以上命令在后台创建了一个支持GPU的tensorflow:latest-gpu-py3容器，将其命名为tf（方便后面容器操作），并将工作目录切换至主机当前目录。\r\n\r\n![装载工作目录至tensorflow容器][2]\r\n\r\n\r\n## 参考资料\r\n\r\n[Ubuntu 18.04 安装NVIDIA驱动 实践](https:\u002F\u002Fblog.csdn.net\u002Fyy2yy99\u002Farticle\u002Fdetails\u002F88569589)\r\n[tensorflow官网](https:\u002F\u002Fwww.tensorflow.org\u002F)\r\n\r\n\r\n  [1]: https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-12-19T14:19:05.png\r\n  [2]: https:\u002F\u002Fblog.cdn.thinkmoon.cn\u002Fblog\u002Ftypecho\u002F2019-12-20T13:55:02.png",order:b,authorId:1,type:"post",status:"publish",commentsNum:c,allowComment:a,allowPing:a,allowFeed:a,parent:b,views:819,likes:c}}],fetch:{},mutations:void 0}}("1",0,3)));