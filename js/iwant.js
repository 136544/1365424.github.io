
$(function () {
    var cookie = $.cookie('iwantcookie');

    if (cookie != null) {
        var Link = cookie.split("iwantcn");
        switch (Link.length) {
            case 2:
                $("<li><a target=\"_blank\" href='" + Link[1] + "'>" + Link[0] + "</a><a href=\"\" title=\"编辑\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"删除\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li>").insertBefore("div.mainB_r_c ul li:last-child");
                break;
            case 4:
                $("<li><a target=\"_blank\" href='" + Link[1] + "'>" + Link[0] + "</a><a href=\"\" title=\"编辑\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"删除\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href='" + Link[3] + "'>" + Link[2] + "</a><a href=\"\" title=\"编辑\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"删除\" class=\"Del\"><img src=\"../../images/del.png\" alt=\"del\" /></a></li>").insertBefore("div.mainB_r_c ul li:last-child");
                break;
            case 6:
                $("<li><a target=\"_blank\" href='" + Link[1] + "'>" + Link[0] + "</a><a href=\"\" title=\"编辑\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"删除\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href='" + Link[3] + "'>" + Link[2] + "</a><a href=\"\" title=\"编辑\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"删除\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href='" + Link[5] + "'>" + Link[4] + "</a><a href=\"\" title=\"编辑\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"删除\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li>").insertBefore("div.mainB_r_c ul li:last-child");
                break;
            case 8:
                $("<li><a target=\"_blank\" href='" + Link[1] + "'>" + Link[0] + "</a><a href=\"\" title=\"编辑\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"删除\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href='" + Link[3] + "'>" + Link[2] + "</a><a href=\"\" title=\"编辑\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"删除\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href='" + Link[5] + "'>" + Link[4] + "</a><a href=\"\" title=\"编辑\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"删除\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href='" + Link[7] + "'>" + Link[6] + "</a><a href=\"\" title=\"编辑\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"删除\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li>").insertBefore("div.mainB_r_c ul li:last-child");
                break;
            case 10:
                $("<li><a target=\"_blank\" href='" + Link[1] + "'>" + Link[0] + "</a><a href=\"\" title=\"编辑\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"删除\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href='" + Link[3] + "'>" + Link[2] + "</a><a href=\"\" title=\"编辑\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"删除\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href='" + Link[5] + "'>" + Link[4] + "</a><a href=\"\" title=\"编辑\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"删除\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href='" + Link[7] + "'>" + Link[6] + "</a><a href=\"\" title=\"编辑\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"删除\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href='" + Link[9] + "'>" + Link[8] + "</a><a href=\"\" title=\"编辑\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"删除\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li>").insertBefore("div.mainB_r_c ul li:last-child");
                break;
            case 12:
                $("<li><a target=\"_blank\" href='" + Link[1] + "'>" + Link[0] + "</a><a href=\"\" title=\"编辑\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"删除\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href='" + Link[3] + "'>" + Link[2] + "</a><a href=\"\" title=\"编辑\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"删除\" class=\"Del\"><img src=\"../../images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href='" + Link[5] + "'>" + Link[4] + "</a><a href=\"\" title=\"编辑\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"删除\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href='" + Link[7] + "'>" + Link[6] + "</a><a href=\"\" title=\"编辑\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"删除\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href='" + Link[9] + "'>" + Link[8] + "</a><a href=\"\" title=\"编辑\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"删除\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href='" + Link[11] + "'>" + Link[10] + "</a><a href=\"\" title=\"编辑\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"删除\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li>").insertBefore("div.mainB_r_c ul li:last-child");
                $("div.mainB_r_c ul li:last-child").hide();
                break;
            default:
                break;
        }
    }
    else {
        $.cookie('iwantcookie', '哈拉族http://halazu.com', { expires: 365, path: '/' });
        $("<li><a target=\"_blank\" href='http://halazu.com'>哈拉族</a><a href=\"\" title=\"编辑\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"删除\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href=''></a><a href=\"\" title=\"编辑\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"删除\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href=''></a><a href=\"\" title=\"编辑\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"删除\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li>").insertBefore("div.mainB_r_c ul li:last-child");
    }

    //自定义网址按钮
    $("div.mainB_r_c a.amend").click(function () {
        if ($("div.mainB_r_c ul li a.Edit").is(":hidden"))
            $("div.mainB_r_c ul li a.Edit").show();
        else
            $("div.mainB_r_c ul li a.Edit").hide();
        if ($("div.mainB_r_c ul li a.Del").is(":hidden"))
            $("div.mainB_r_c ul li a.Del").show();
        else
            $("div.mainB_r_c ul li a.Del").hide();
        return false;
    })

    //添加按钮
    $("div.mainB_r_c ul li a.add").click(function () {
        if ($("div.form").is(":hidden")) {
            var cookieadd = $.cookie('iwantcookie');
            if (cookieadd != null) {
                var Link = cookieadd.split("iwantcn");
                if (Link.length < 12) {
                    $("#siteName").val("");
                    $("#siteLink").val("");
                    $("div.form input.AddTo").attr("value", "添加");
                    $("div.form").show();
                }
                else {
                    alert("已满，请先删除再进行添加");
                }
            }
            else {
                $("#siteName").val("");
                $("#siteLink").val("");
                $("div.form input.AddTo").attr("value", "添加");
                $("div.form").show();
            }
        }
        else {
            $("#siteName").val("");
            $("#siteLink").val("");
            $("div.form input.AddTo").attr("value", "添加");
        }
        $("#siteName").focus();
        return false;
    });

    //修改按钮
    $("div.mainB_r_c ul li a.Edit").live("click", function () {
        var $li = $(this).parent();
        var index = $("div.mainB_r_c ul li").index($li[0]);   //点击编辑所在li标签的索引

        $("#hiddenId").attr("value", index);   //同时赋值给隐藏域 这样修改的时候就能找到id了

        var cookie = $.cookie('iwantcookie');
        var Link = cookie.split("iwantcn");

        $("#siteName").val(Link[index * 2]);
        $("#siteLink").val(Link[index * 2 + 1]);

        $("div.form input.AddTo").attr("value", "修改");
        $("div.form").show();

        $("#siteName").focus();
        return false;
    })

    //删除按钮
    $("div.mainB_r_c ul li a.Del").live("click", function () {
        $("div.form").hide();   //编辑窗口隐藏 否则出bug

        var $li = $(this).parent();
        var index = $("div.mainB_r_c ul li").index($li[0]);   //点击编辑所在li标签的索引
        $li.remove();   //移除

        var cookie = $.cookie('iwantcookie');
        var Link = cookie.split("iwantcn");

        Link.splice(index * 2, 2);    //从Cookie里删除 删除2个数组元素(一个名字 一个链接)

        var newCookie = "";
        for (var i = 0; i < Link.length; i++) {
            newCookie += Link[i] + "iwantcn";
        }

        newCookie = newCookie.substring(0, newCookie.length - 7);
        $.cookie('iwantcookie', newCookie, { expires: 365, path: '/' });

        //显示“添加网址”:
        $("div.mainB_r_c ul li:last-child").show();

        return false;
    })


    //表单上的添加、修改网址
    $("div.mainB_r_c div.form input.AddTo").click(function () {
        var siteName = $.trim($("#siteName").val());
        var siteLink = $.trim($("#siteLink").val());
        var cookie = $.cookie('iwantcookie');

        if (siteName == "") {
            $("#siteName").focus();
            return false;
        }
        if (siteLink == "") {
            $("#siteLink").focus();
            return false;
        }
        var type = $("div.form input.AddTo").attr("value");
        switch (type) {
            case "添加":
                if (siteLink.indexOf('http://') < 0)
                    siteLink = 'http://' + siteLink;
                $("div.form").hide();
                $("<li><a target=\"_blank\" href='" + siteLink + "'>" + siteName + "</a><a href=\"\" title=\"编辑\" class=\"Edit\"><img src=\"../../images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"删除\" class=\"Del\"><img src=\"../../images/del.png\" alt=\"del\" /></a></li>").insertBefore("div.mainB_r_c ul li:last-child");
                $("#siteName").val("");
                $("#siteLink").val("");

                if (cookie == null || cookie == "")
                    cookie = siteName + "iwantcn" + siteLink;     //以iwantcn作为cookie名字和链接之间的分隔
                else
                    cookie = cookie + "iwantcn" + siteName + "iwantcn" + siteLink;
                $.cookie('iwantcookie', cookie, { expires: 365, path: '/' });

                //添加的时候判断其他的网址是否处于编辑状态
                if ($("div.mainB_r_c ul li a.Edit").is(":visible")) {
                    $("div.mainB_r_c ul li a.Edit").show();
                    $("div.mainB_r_c ul li a.Del").show();
                }

                var cookieadd = $.cookie('iwantcookie');
                var Link = cookieadd.split("iwantcn");
                if (Link.length == 12) {
                    $("div.mainB_r_c ul li:last-child").hide();
                }
                break;
            case "修改":
                if (siteLink.indexOf('http://') < 0)
                    siteLink = 'http://' + siteLink;
                $("div.form").hide();
                var cookie = $.cookie('iwantcookie');
                var Link = cookie.split("iwantcn");
                var index = $("#hiddenId").attr("value");

                Link.splice(index * 2, 2, siteName, siteLink);     //splice删除并插入数组新元素

                var newCookie = "";
                for (var i = 0; i < Link.length; i++) {
                    newCookie += Link[i] + "iwantcn";
                }
                newCookie = newCookie.substring(0, newCookie.length - 7);

                $('div.mainB_r_c ul li:eq(' + index + ') :first-child').text(siteName);
                $('div.mainB_r_c ul li:eq(' + index + ') :first-child').attr("href", siteLink)    //修改界面上的显示

                $("#siteName").val("");
                $("#siteLink").val("");
                $.cookie('iwantcookie', newCookie, { expires: 365, path: '/' });    //写入新Cookie
                break;
            default:
                break;
        }
        return false;  //停止冒泡
    })

    //表单上的取消
    $("div.mainB_r_c div.form input.Cancel").click(function () {
        $("#siteName").val("");
        $("#siteLink").val("");
        $("div.form").hide();
        return false;  //停止冒泡
    })

    //点击表单事件
    $("div.form").click(function () {
        return false;   //停止冒泡
    })

    //页面click事件
    $(document).click(function () {
        if ($("div.mainB_r_c ul li a.Edit").css("display") == "block" || $("div.mainB_r_c ul li a.Edit").css("display") == "inline") {
            $("div.mainB_r_c ul li a.Edit").hide();
            $("div.mainB_r_c ul li a.Del").hide();

            //alert("测试：编辑删除隐藏");     //(bug)火狐浏览器右键也会触发click事件
        }
        if ($("div.form").css("display") == "block") {
            $("div.form").hide();

            //alert("测试：添加窗口隐藏");     //(bug)火狐浏览器右键也会触发click事件
        }
    })

    //表单里按回车和Esc键事件
    $("#siteName,#siteLink").keyup(function (e) {
        var key = e.which;
        if (key == 13) {
            $("div.mainB_r_c div.form input.AddTo").click();
        } else if (key == 27) {
            $("div.form").hide();
        }
    })

})