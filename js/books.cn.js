/* jshint asi:true */
//先等图片都加载完成
//再执行布局函数

/**
 * 执行主函数
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {

    /**
     * 内容JSON
     */
    var demoContent = [{
        page_link: 'http://www.amazon.cn/gp/product/B01FE26HAU?ie=UTF8&camp=536&creativeASIN=B01FE26HAU&linkCode=xm2&tag=tboox01-23',
        img_link: '/static/img/books/cn/c-primer-plus.jpg',
        title: 'C Primer Plus(第6版)(中文版)',
        description: '经久不衰的C语言畅销经典教程，针对C11标准进行全面更新'
    },
    {
        page_link: 'http://www.amazon.cn/gp/product/B01DF1WXS2?ie=UTF8&camp=536&creativeASIN=B01DF1WXS2&linkCode=xm2&tag=tboox01-23',
        img_link: '/static/img/books/cn/compiling-system.jpg',
        title: '编译系统透视:图解编译原理',
        description: '中国版“龙书”！编译原理领域的鸿篇巨著和里程碑作品！它不仅能指导你设计出自己的编译器，更能帮助你写出更高质量的代码'
    },
    {
        page_link: 'http://www.amazon.cn/gp/product/B01H1RZTIM?ie=UTF8&camp=536&creativeASIN=B01H1RZTIM&linkCode=xm2&tag=tboox01-23',
        img_link: '/static/img/books/cn/linux-programing.jpg',
        title: 'Linux环境编程:从应用到内核',
        description: '从一个全新的角度带领读者重新进入Linux环境编程，从应用出发，深入内核源码，研究Linux各接口的工作机制和原理'
    },
    {
        page_link: 'http://www.amazon.cn/gp/product/B00513FBZK?ie=UTF8&camp=536&creativeASIN=B00513FBZK&linkCode=xm2&tag=tboox01-23',
        img_link: '/static/img/books/cn/digital-image.jpg',
        title: '数字图像处理(第3版)',
        description: '数字图像处理领域的经典之作'
    },
    {
        page_link: 'http://www.amazon.cn/gp/product/B01GQTY6WQ?ie=UTF8&camp=536&creativeASIN=B01GQTY6WQ&linkCode=xm2&tag=tboox01-23',
        img_link: '/static/img/books/cn/write-compiler.jpg',
        title: '自制编译器',
        description: '通过实际动手制作一个精简版C语言编译器，让读者深入了解C语言程序编译、运行背后的细节'
    },
    {
        page_link: 'http://www.amazon.cn/gp/product/B00DMS9990?ie=UTF8&camp=536&creativeASIN=B00DMS9990&linkCode=xm2&tag=tboox01-23',
        img_link: '/static/img/books/cn/image-tcp-ip.jpg',
        title: '图灵程序设计丛书:图解TCP/IP(第5版)',
        description: '这是一本图文并茂的网络管理技术书籍，旨在让广大读者理解TCP/IP的基本知识、掌握TCP/IP的基本技能'
    },
    {
        page_link: 'http://www.amazon.cn/gp/product/B011S72JB6?ie=UTF8&camp=536&creativeASIN=B011S72JB6&linkCode=xm2&tag=tboox01-23',
        img_link: '/static/img/books/cn/unix-network.jpg',
        title: 'UNIX网络编程(卷1):套接字联网API(第3版)',
        description: '这是一部传世之作！网络编程专家Bill Fenner和Andrew M. Rudoff应邀执笔，对W. Richard Stevens的经典作品进行修订。书中吸纳了近几年网络技术的发展，增添了IPv6、SCTP协议和密钥管理套接字等内容，深入讨论了最新的关键标准、实现和技术'
    },
    {
        page_link: 'http://www.amazon.cn/gp/product/B0061XKRXA?ie=UTF8&camp=536&creativeASIN=B0061XKRXA&linkCode=xm2&tag=tboox01-23',
        img_link: '/static/img/books/cn/code-handbook.jpg',
        title: '代码大全(第2版)',
        description: '这是一本百科全书式的软件构建手册，涵盖了软件构建活动的方方面面，尤其强调提高软件质量的种种实践方法'
    },
    {
        page_link: 'http://www.amazon.cn/gp/product/B00VHFSR34?ie=UTF8&camp=536&creativeASIN=B00VHFSR34&linkCode=xm2&tag=tboox01-23',
        img_link: '/static/img/books/cn/android-safe.jpg',
        title: 'Android安全攻防权威指南',
        description: '书中细致地介绍了Android系统中的漏洞挖掘、分析，并给出了大量利用工具，结合实例从白帽子角度分析了诸多系统问题，是一本难得的安全指南'
    }];

    contentInit(demoContent) //内容初始化
    waitImgsLoad() //等待图片加载，并执行布局初始化
}());



/**
 * 内容初始化
 * @return {[type]} [description]
 */
function contentInit(content) {
    var htmlStr = ''
    for (var i = 0; i < content.length; i++) {
        htmlStr +=
            '<div class="grid-item">' +
            '   <a class="a-img" href="' + content[i].page_link + '">' +
            '       <img src="' + content[i].img_link + '">' +
            '   </a>' +
            '   <h3 class="demo-title">' +
            '       <a href="' + content[i].page_link + '">' + content[i].title + '</a>' +
            '   </h3>' +
            '   <p>' + content[i].description +
            '   </p>' +
            '</div>'
    }
    var grid = document.querySelector('.grid')
    grid.insertAdjacentHTML('afterbegin', htmlStr)
}

/**
 * 等待图片加载
 * @return {[type]} [description]
 */
function waitImgsLoad() {
    var imgs = document.querySelectorAll('.grid img')
    var totalImgs = imgs.length
    var count = 0
        //console.log(imgs)
    for (var i = 0; i < totalImgs; i++) {
        if (imgs[i].complete) {
            //console.log('complete');
            count++
        } else {
            imgs[i].onload = function() {
                // alert('onload')
                count++
                //console.log('onload' + count)
                if (count == totalImgs) {
                    //console.log('onload---bbbbbbbb')
                    initGrid()
                }
            }
        }
    }
    if (count == totalImgs) {
        //console.log('---bbbbbbbb')
        initGrid()
    }
}

/**
 * 初始化栅格布局
 * @return {[type]} [description]
 */
function initGrid() {
    var msnry = new Masonry('.grid', {
        // options
        itemSelector: '.grid-item',
        columnWidth: 250,
        isFitWidth: true,
        gutter: 20,
    })
}