window.onload = function () { 
    // 一键关注
    var onekey_c = document.getElementsByClassName("onekey_c");
    var guanzhu = document.getElementsByClassName("guanzhu1");
    onekey_c[0].onclick = function () {
        onekey_c[0].getElementsByTagName("p")[0].innerHTML = "已全部关注";
    for (var i = 0; i < guanzhu.length; i++) {
        var guanzhu_p = guanzhu[i].getElementsByTagName("p");
        for (var j = 0; j < guanzhu_p.length; j++) {
            guanzhu_p[j].innerHTML = "已关注";
        }
    }  
    }
}