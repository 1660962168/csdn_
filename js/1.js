window.onload = function () {
    // 随机生成中文名字
    function randomName() {
        var name = "";
        var length = Math.floor(Math.random() * 2) + 2;
        for (var i = 0; i < length; i++) {
            name += String.fromCharCode(Math.floor(Math.random() * 20901) + 19968);
        }
        return name;
    }
    var ordinary_user_img = document.getElementsByClassName("ordinary_user");
    for (var i = 0; i < ordinary_user_img.length; i++) {
        var ordinary_user_img_h1 = ordinary_user_img[i].getElementsByTagName("h1");
        for (var j = 0; j < ordinary_user_img_h1.length; j++) {
            ordinary_user_img_h1[j].innerHTML = randomName();
        }
    }
    // 点击放大图片
     var img = document.getElementById("myImage");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function () {
        document.getElementById("myModal").style.display = "block";
        modalImg.src = this.src;
    }
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        document.getElementById("myModal").style.display = "none";
    }

    // 轮播修改搜索框内容
    var text1 = '搜索你感兴趣的内容';
    var text2 = '计算机网络期末复习';
    var text3 = 'html+css+js网页设计';
    var text4 = '大学生创业项目';
    var text5 = 'c语言文件读写操作代码';
    var sear_input = document.getElementsByClassName("sear_input");
    var sear_input_input = sear_input[0].getElementsByTagName("input");
    var sear_input_input_placeholder = sear_input_input[0].getAttribute("placeholder");
    console.log(sear_input_input_placeholder);
    var i = 0;
    var timer = setInterval(function () {
        i++;
        if (i % 2 == 0) {
            sear_input_input[0].setAttribute("placeholder", text1);
        }
        if (i % 2 == 1) {
            sear_input_input[0].setAttribute("placeholder", text2);
        }
        if (i % 3 == 0) {
            sear_input_input[0].setAttribute("placeholder", text3);
        }
        if (i % 4 == 0) {
            sear_input_input[0].setAttribute("placeholder", text4);
        }
        if (i % 5 == 0) {
            sear_input_input[0].setAttribute("placeholder", text5);
        }
    }, 2000);

    // 弹出式登录
    var openButton = document.getElementById("open-button");
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    var closeButton = document.querySelector(".close-button");

    openButton.addEventListener("click", function () {
        overlay.style.display = "block";
    });
    closeButton.addEventListener("click", function () {
        overlay.style.display = "none";
    });
    overlay.addEventListener("click", function (event) {
        if (event.target === overlay) {
            overlay.style.display = "none";
        }
    });

    // 帖子发布时间
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var time = year + "年" + month + "月" + day + "日" + hour + "时" ;
    console.log(time);
    var user_img = document.getElementsByClassName("user_img");
    var user_img_p = user_img[0].getElementsByTagName("p");
    user_img_p[0].innerHTML = time;
 }