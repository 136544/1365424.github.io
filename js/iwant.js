
$(function () {
    var cookie = $.cookie('iwantcookie');

    if (cookie != null) {
        var Link = cookie.split("iwantcn");
        switch (Link.length) {
            case 2:
                $("<li><a target=\"_blank\" href='" + Link[1] + "'>" + Link[0] + "</a><a href=\"\" title=\"�༭\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"ɾ��\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li>").insertBefore("div.mainB_r_c ul li:last-child");
                break;
            case 4:
                $("<li><a target=\"_blank\" href='" + Link[1] + "'>" + Link[0] + "</a><a href=\"\" title=\"�༭\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"ɾ��\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href='" + Link[3] + "'>" + Link[2] + "</a><a href=\"\" title=\"�༭\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"ɾ��\" class=\"Del\"><img src=\"../../images/del.png\" alt=\"del\" /></a></li>").insertBefore("div.mainB_r_c ul li:last-child");
                break;
            case 6:
                $("<li><a target=\"_blank\" href='" + Link[1] + "'>" + Link[0] + "</a><a href=\"\" title=\"�༭\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"ɾ��\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href='" + Link[3] + "'>" + Link[2] + "</a><a href=\"\" title=\"�༭\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"ɾ��\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href='" + Link[5] + "'>" + Link[4] + "</a><a href=\"\" title=\"�༭\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"ɾ��\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li>").insertBefore("div.mainB_r_c ul li:last-child");
                break;
            case 8:
                $("<li><a target=\"_blank\" href='" + Link[1] + "'>" + Link[0] + "</a><a href=\"\" title=\"�༭\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"ɾ��\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href='" + Link[3] + "'>" + Link[2] + "</a><a href=\"\" title=\"�༭\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"ɾ��\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href='" + Link[5] + "'>" + Link[4] + "</a><a href=\"\" title=\"�༭\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"ɾ��\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href='" + Link[7] + "'>" + Link[6] + "</a><a href=\"\" title=\"�༭\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"ɾ��\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li>").insertBefore("div.mainB_r_c ul li:last-child");
                break;
            case 10:
                $("<li><a target=\"_blank\" href='" + Link[1] + "'>" + Link[0] + "</a><a href=\"\" title=\"�༭\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"ɾ��\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href='" + Link[3] + "'>" + Link[2] + "</a><a href=\"\" title=\"�༭\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"ɾ��\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href='" + Link[5] + "'>" + Link[4] + "</a><a href=\"\" title=\"�༭\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"ɾ��\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href='" + Link[7] + "'>" + Link[6] + "</a><a href=\"\" title=\"�༭\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"ɾ��\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href='" + Link[9] + "'>" + Link[8] + "</a><a href=\"\" title=\"�༭\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"ɾ��\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li>").insertBefore("div.mainB_r_c ul li:last-child");
                break;
            case 12:
                $("<li><a target=\"_blank\" href='" + Link[1] + "'>" + Link[0] + "</a><a href=\"\" title=\"�༭\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"ɾ��\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href='" + Link[3] + "'>" + Link[2] + "</a><a href=\"\" title=\"�༭\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"ɾ��\" class=\"Del\"><img src=\"../../images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href='" + Link[5] + "'>" + Link[4] + "</a><a href=\"\" title=\"�༭\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"ɾ��\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href='" + Link[7] + "'>" + Link[6] + "</a><a href=\"\" title=\"�༭\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"ɾ��\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href='" + Link[9] + "'>" + Link[8] + "</a><a href=\"\" title=\"�༭\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"ɾ��\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href='" + Link[11] + "'>" + Link[10] + "</a><a href=\"\" title=\"�༭\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"ɾ��\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li>").insertBefore("div.mainB_r_c ul li:last-child");
                $("div.mainB_r_c ul li:last-child").hide();
                break;
            default:
                break;
        }
    }
    else {
        $.cookie('iwantcookie', '������http://halazu.com', { expires: 365, path: '/' });
        $("<li><a target=\"_blank\" href='http://halazu.com'>������</a><a href=\"\" title=\"�༭\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"ɾ��\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href=''></a><a href=\"\" title=\"�༭\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"ɾ��\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li><li><a target=\"_blank\" href=''></a><a href=\"\" title=\"�༭\" class=\"Edit\"><img src=\"./images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"ɾ��\" class=\"Del\"><img src=\"./images/del.png\" alt=\"del\" /></a></li>").insertBefore("div.mainB_r_c ul li:last-child");
    }

    //�Զ�����ַ��ť
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

    //��Ӱ�ť
    $("div.mainB_r_c ul li a.add").click(function () {
        if ($("div.form").is(":hidden")) {
            var cookieadd = $.cookie('iwantcookie');
            if (cookieadd != null) {
                var Link = cookieadd.split("iwantcn");
                if (Link.length < 12) {
                    $("#siteName").val("");
                    $("#siteLink").val("");
                    $("div.form input.AddTo").attr("value", "���");
                    $("div.form").show();
                }
                else {
                    alert("����������ɾ���ٽ������");
                }
            }
            else {
                $("#siteName").val("");
                $("#siteLink").val("");
                $("div.form input.AddTo").attr("value", "���");
                $("div.form").show();
            }
        }
        else {
            $("#siteName").val("");
            $("#siteLink").val("");
            $("div.form input.AddTo").attr("value", "���");
        }
        $("#siteName").focus();
        return false;
    });

    //�޸İ�ť
    $("div.mainB_r_c ul li a.Edit").live("click", function () {
        var $li = $(this).parent();
        var index = $("div.mainB_r_c ul li").index($li[0]);   //����༭����li��ǩ������

        $("#hiddenId").attr("value", index);   //ͬʱ��ֵ�������� �����޸ĵ�ʱ������ҵ�id��

        var cookie = $.cookie('iwantcookie');
        var Link = cookie.split("iwantcn");

        $("#siteName").val(Link[index * 2]);
        $("#siteLink").val(Link[index * 2 + 1]);

        $("div.form input.AddTo").attr("value", "�޸�");
        $("div.form").show();

        $("#siteName").focus();
        return false;
    })

    //ɾ����ť
    $("div.mainB_r_c ul li a.Del").live("click", function () {
        $("div.form").hide();   //�༭�������� �����bug

        var $li = $(this).parent();
        var index = $("div.mainB_r_c ul li").index($li[0]);   //����༭����li��ǩ������
        $li.remove();   //�Ƴ�

        var cookie = $.cookie('iwantcookie');
        var Link = cookie.split("iwantcn");

        Link.splice(index * 2, 2);    //��Cookie��ɾ�� ɾ��2������Ԫ��(һ������ һ������)

        var newCookie = "";
        for (var i = 0; i < Link.length; i++) {
            newCookie += Link[i] + "iwantcn";
        }

        newCookie = newCookie.substring(0, newCookie.length - 7);
        $.cookie('iwantcookie', newCookie, { expires: 365, path: '/' });

        //��ʾ�������ַ��:
        $("div.mainB_r_c ul li:last-child").show();

        return false;
    })


    //���ϵ���ӡ��޸���ַ
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
            case "���":
                if (siteLink.indexOf('http://') < 0)
                    siteLink = 'http://' + siteLink;
                $("div.form").hide();
                $("<li><a target=\"_blank\" href='" + siteLink + "'>" + siteName + "</a><a href=\"\" title=\"�༭\" class=\"Edit\"><img src=\"../../images/edit.png\" alt=\"edit\" /></a><a href=\"\" title=\"ɾ��\" class=\"Del\"><img src=\"../../images/del.png\" alt=\"del\" /></a></li>").insertBefore("div.mainB_r_c ul li:last-child");
                $("#siteName").val("");
                $("#siteLink").val("");

                if (cookie == null || cookie == "")
                    cookie = siteName + "iwantcn" + siteLink;     //��iwantcn��Ϊcookie���ֺ�����֮��ķָ�
                else
                    cookie = cookie + "iwantcn" + siteName + "iwantcn" + siteLink;
                $.cookie('iwantcookie', cookie, { expires: 365, path: '/' });

                //��ӵ�ʱ���ж���������ַ�Ƿ��ڱ༭״̬
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
            case "�޸�":
                if (siteLink.indexOf('http://') < 0)
                    siteLink = 'http://' + siteLink;
                $("div.form").hide();
                var cookie = $.cookie('iwantcookie');
                var Link = cookie.split("iwantcn");
                var index = $("#hiddenId").attr("value");

                Link.splice(index * 2, 2, siteName, siteLink);     //spliceɾ��������������Ԫ��

                var newCookie = "";
                for (var i = 0; i < Link.length; i++) {
                    newCookie += Link[i] + "iwantcn";
                }
                newCookie = newCookie.substring(0, newCookie.length - 7);

                $('div.mainB_r_c ul li:eq(' + index + ') :first-child').text(siteName);
                $('div.mainB_r_c ul li:eq(' + index + ') :first-child').attr("href", siteLink)    //�޸Ľ����ϵ���ʾ

                $("#siteName").val("");
                $("#siteLink").val("");
                $.cookie('iwantcookie', newCookie, { expires: 365, path: '/' });    //д����Cookie
                break;
            default:
                break;
        }
        return false;  //ֹͣð��
    })

    //���ϵ�ȡ��
    $("div.mainB_r_c div.form input.Cancel").click(function () {
        $("#siteName").val("");
        $("#siteLink").val("");
        $("div.form").hide();
        return false;  //ֹͣð��
    })

    //������¼�
    $("div.form").click(function () {
        return false;   //ֹͣð��
    })

    //ҳ��click�¼�
    $(document).click(function () {
        if ($("div.mainB_r_c ul li a.Edit").css("display") == "block" || $("div.mainB_r_c ul li a.Edit").css("display") == "inline") {
            $("div.mainB_r_c ul li a.Edit").hide();
            $("div.mainB_r_c ul li a.Del").hide();

            //alert("���ԣ��༭ɾ������");     //(bug)���������Ҽ�Ҳ�ᴥ��click�¼�
        }
        if ($("div.form").css("display") == "block") {
            $("div.form").hide();

            //alert("���ԣ���Ӵ�������");     //(bug)���������Ҽ�Ҳ�ᴥ��click�¼�
        }
    })

    //���ﰴ�س���Esc���¼�
    $("#siteName,#siteLink").keyup(function (e) {
        var key = e.which;
        if (key == 13) {
            $("div.mainB_r_c div.form input.AddTo").click();
        } else if (key == 27) {
            $("div.form").hide();
        }
    })

})