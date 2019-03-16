## Docker & Docker-Compose 简单示例

这个 repo 用于展示 docker & docker-compose 的简单使用示例，用 express 搭建了一个 node 服务器，然后对于任何请求都返回一个字符串，随后在 mongodb 的 count 数据库插入一条记录，所以可以克隆本仓库之后，通过 `sudo docker-compose up -d` 启动所有服务，然后打开 `localhost:3000` 刷新几次，最后去 mongodb 查看效果。

具体 docker 笔记就没写了，下面是一些很优秀的 docker 学习博客：

*	[哪个镜像源靠谱？如何使用国内镜像源？](https://www.zhihu.com/question/55135855/answer/152265940)

*	[docker-practice](https://github.com/yeasy/docker_practice)
*	[阮老师 docker 入门教程](http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html)
*   [高质量 Node.js 微服务的编写和部署](https://segmentfault.com/a/1190000006166385)
*   [Docker Compose 配置文件详解](https://www.jianshu.com/p/2217cfed29d7)
*   [Docker 容器数据卷挂载小结](https://www.jianshu.com/p/e605de64e9f9)
