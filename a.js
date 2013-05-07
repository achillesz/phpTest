/* ----- */

FuturesListPage = new function () {
    this.dataArray;
    this.currentColumn = "1";
    this.divName = "FuturesListPage";
    this.columnArray = new Array();
    this.reloadTime = 60000;
    this.reload = true;
    this.setTimeObj;
    this.GetData = function (array, time) {
        this.dataArray = array;
        this.ShowTime(time);
        //this.ShowPage(FuturesListRequest.page,FuturesListRequest.totalpage);
        this.LoadDataFinish();
    }
    this.LoadDataFinish = function () {
        var hc = new Array();
        hc.push("<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" class=\"dou_table\">");
        hc.push("<tr><td class=\"toptd\">名称" + this.Arrow(1) + "</td>");
        hc.push("<td class=\"toptd\"><a href=\"javascript:FuturesListPage.DataSort(2)\">最新价" + this.Arrow(2) + "</a></td>");
        hc.push("<td class=\"toptd\"><a href=\"javascript:FuturesListPage.DataSort(3)\">涨跌" + this.Arrow(3) + "</a></td>");
        hc.push("<td class=\"toptd\"><a href=\"javascript:FuturesListPage.DataSort(4)\">买价" + this.Arrow(4) + "</a></td>");
        hc.push("<td class=\"toptd\"><a href=\"javascript:FuturesListPage.DataSort(5)\">买量" + this.Arrow(5) + "</a></td>");
        hc.push("<td class=\"toptd\"><a href=\"javascript:FuturesListPage.DataSort(6)\">卖价" + this.Arrow(6) + "</a></td>");
        hc.push("<td class=\"toptd\"><a href=\"javascript:FuturesListPage.DataSort(7)\">卖量" + this.Arrow(7) + "</a></td>");
        hc.push("<td class=\"toptd\"><a href=\"javascript:FuturesListPage.DataSort(8)\">成交量" + this.Arrow(8) + "</a></td>");
        hc.push("<td class=\"toptd\"><a href=\"javascript:FuturesListPage.DataSort(9)\">今开盘" + this.Arrow(9) + "</a></td>");
        hc.push("<td class=\"toptd\"><a href=\"javascript:FuturesListPage.DataSort(10)\">昨结算" + this.Arrow(10) + "</a></td>");
        hc.push("<td class=\"toptd\"><a href=\"javascript:FuturesListPage.DataSort(11)\">最高价" + this.Arrow(11) + "</a></td>");
        hc.push("<td class=\"toptd\"><a href=\"javascript:FuturesListPage.DataSort(12)\">最低价" + this.Arrow(12) + "</a></td>");
        hc.push("<td class=\"toptd\"><a href=\"javascript:FuturesListPage.DataSort(13)\">持仓量" + this.Arrow(13) + "</a></td>");
        hc.push("<td class=\"toptd\"><a href=\"javascript:FuturesListPage.DataSort(14)\">增仓" + this.Arrow(14) + "</a></td>");
        hc.push("<td class=\"toptdend\">资讯</td></tr>");

        for (var i = 0; i < this.dataArray.length; i++) {
            hc.push("<tr" + this.TrBgColor(i) + ">");
            hc.push("<td" + this.TdBgColor(i, 1) + "><a href=\"http://quote.futures.hexun.com/" + this.dataArray[i][0] + ".shtml\" target=\"_blank\">" + this.dataArray[i][1] + "</a></td>");//名称
            if (this.GetTextCode(this.dataArray[i][0]) == "au" || this.GetTextCode(this.dataArray[i][0]) == "if") {
                hc.push("<td" + this.TdBgColor(i, 2) + ">" + Common.GetColor2DEC(this.dataArray[i][2], this.dataArray[i][10]) + "</td>");//最新价
                hc.push("<td" + this.TdBgColor(i, 3) + ">" + Common.GetColor2DEC(this.dataArray[i][3], 0) + "</td>");//涨跌
                hc.push("<td" + this.TdBgColor(i, 4) + ">" + Common.GetColor2DEC(this.dataArray[i][4], this.dataArray[i][10]) + "</td>");//买价
                hc.push("<td" + this.TdBgColor(i, 5) + ">" + this.dataArray[i][5] + "</td>");//买量
                hc.push("<td" + this.TdBgColor(i, 6) + ">" + Common.GetColor2DEC(this.dataArray[i][6], this.dataArray[i][10]) + "</td>");//卖价
                hc.push("<td" + this.TdBgColor(i, 7) + ">" + this.dataArray[i][7] + "</td>");//卖量
                hc.push("<td" + this.TdBgColor(i, 8) + ">" + this.dataArray[i][8] + "</td>");//成交量
                hc.push("<td" + this.TdBgColor(i, 9) + ">" + Common.GetColor2DEC(this.dataArray[i][9], this.dataArray[i][10]) + "</td>");//今开盘
                hc.push("<td" + this.TdBgColor(i, 10) + ">" + this.dataArray[i][10].toFixed(2) + "</td>");//昨结算
                hc.push("<td" + this.TdBgColor(i, 11) + ">" + this.dataArray[i][11].toFixed(2) + "</td>");//最高价
                hc.push("<td" + this.TdBgColor(i, 12) + ">" + this.dataArray[i][12].toFixed(2) + "</td>");//最低价
            }
            else {
                hc.push("<td" + this.TdBgColor(i, 2) + ">" + Common.GetColor(this.dataArray[i][2], this.dataArray[i][10]) + "</td>");//最新价
                hc.push("<td" + this.TdBgColor(i, 3) + ">" + Common.GetColor(this.dataArray[i][3], 0) + "</td>");//涨跌
                hc.push("<td" + this.TdBgColor(i, 4) + ">" + Common.GetColor(this.dataArray[i][4], this.dataArray[i][10]) + "</td>");//买价
                hc.push("<td" + this.TdBgColor(i, 5) + ">" + this.dataArray[i][5] + "</td>");//买量
                hc.push("<td" + this.TdBgColor(i, 6) + ">" + Common.GetColor(this.dataArray[i][6], this.dataArray[i][10]) + "</td>");//卖价
                hc.push("<td" + this.TdBgColor(i, 7) + ">" + this.dataArray[i][7] + "</td>");//卖量
                hc.push("<td" + this.TdBgColor(i, 8) + ">" + this.dataArray[i][8] + "</td>");//成交量
                hc.push("<td" + this.TdBgColor(i, 9) + ">" + Common.GetColor(this.dataArray[i][9], this.dataArray[i][10]) + "</td>");//今开盘
                hc.push("<td" + this.TdBgColor(i, 10) + ">" + this.dataArray[i][10] + "</td>");//昨结算
                hc.push("<td" + this.TdBgColor(i, 11) + ">" + this.dataArray[i][11] + "</td>");//最高价
                hc.push("<td" + this.TdBgColor(i, 12) + ">" + this.dataArray[i][12] + "</td>");//最低价
            }
            hc.push("<td" + this.TdBgColor(i, 13) + ">" + this.dataArray[i][13] + "</td>");//持仓量
            hc.push("<td" + this.TdBgColor(i, 14) + ">" + this.dataArray[i][14] + "</td>");//增仓
            hc.push("<td class=\"tdend\"><a href=\"" + this.GetLink(this.dataArray[i][0]) + "\" target=\"_blank\">资讯</a></td></tr>");
        }

        hc.push("</table>");
        Common.$(this.divName).innerHTML = hc.join('');

        if (this.reload) {
            clearTimeout(this.setTimeObj);
            this.setTimeObj = setTimeout(this.AutoReload, this.reloadTime);//按设置时间重读数据
        }
    }
    this.AutoReload = function () {
        FuturesListRequest.Request();
    }
    this.ShowTime = function (time) {
        Common.$("topupdatetime").innerHTML = time;
        Common.$("updatetime").innerHTML = time;
    }
    this.ShowPage = function (page, total) {
        Common.$("pagenum").innerHTML = page + "/" + total;
    }
    this.DataSort = function (column) {
        if (this.columnArray[column] == "down" || this.columnArray[column] == undefined) {
            this.columnArray[column] = "up";
            this.ArraySort(column, "up");
        }
        else {
            this.columnArray[column] = "down";
            this.ArraySort(column, "down");
        }
    }
    this.ArraySort = function (column, order) {
        if (order == "up") {
            this.dataArray.sort(function (a, b) {
                return b[column] - a[column];
            });
        }
        if (order == "down") {
            this.dataArray.sort(function (a, b) {
                return a[column] - b[column];
            });
        }
        this.currentColumn = column;
        this.LoadDataFinish();
    }
    this.TrBgColor = function (i) {
        if (i % 2 == 0) {
            return "";
        } else {
            return " bgcolor=\"#F7F7F7\"";
        }
        return "";
    }
    this.TdBgColor = function (i, column) {
        if (column == this.currentColumn) {
            if (i % 2 == 0) {
                return " bgcolor=\"#FFF3EB\"";
            } else {
                return " bgcolor=\"#F9ECE4\"";
            }
        }
        return "";
    }
    this.Arrow = function (column) {
        if (column == this.currentColumn) {
            if (this.columnArray[column] == "up") {
                return "<img src=\"/img/dot3.gif\" align=\"absmiddle\"/><img src=\"/img/dot2_2.gif\" align=\"absmiddle\" />";
            } else {
                return "<img src=\"/img/dot1_1.gif\" align=\"absmiddle\"/><img src=\"/img/dot1_2.gif\" align=\"absmiddle\"/>";
            }
        }
        return "";
    }
    this.GetTextCode = function (code) {
        var re = new RegExp(/\d/g);
        return code.replace(re, '').toLowerCase();
    }
    this.GetLink = function (code) {
        code = this.GetTextCode(code);

        var url;

        switch (code) {
            case "a" :
            case "b" :
            case "m" :
            case "y" :
                url = "http://futures.hexun.com/soybean/index.html";
                break;     //豆类

            case "c" :
                url = "http://futures.hexun.com/corn/index.html";
                break;     //玉米

            case "l" :
                url = "http://futures.hexun.com/lldpe/index.html";
                break;     //LLDPE

            case "p" :
                url = "http://futures.hexun.com/palmoil/index.html";
                break;     //棕榈油

            case "v" :
                url = "http://futures.hexun.com/pvc/index.html";
                break;     // PVC
            case "wh":
                url = "http://futures.hexun.com/wheat/index.html";
            case "ws":
                url = "http://futures.hexun.com/wheat/index.html";
            case "wt":
                url = "http://futures.hexun.com/wheat/index.html";
                break;     //小麦

            case "cf":
                url = "http://futures.hexun.com/cotton/index.html";
                break;     //棉花

            case "sr":
                url = "http://futures.hexun.com/sugar/index.html";
                break;     //白糖

            case "ro":
                url = "http://futures.hexun.com/palmoil/index.html";
                break;     //菜籽油

            case "rs":
                url = "http://futures.hexun.com/palmoil/index.html";
                break;     //油菜籽
            case "rm":
                url = "http://futures.hexun.com/palmoil/index.html";
                break;     //菜籽粕
            case "oi":
                url = "http://futures.hexun.com/palmoil/index.html";
                break;     //菜籽油

            case "ta":
                url = "http://futures.hexun.com/pta/index.html";
                break;     //PTA


            case "cu":
                url = "http://futures.hexun.com/copper/index.html";
                break;     //铜

            case "al":
                url = "http://futures.hexun.com/aluminum/index.html";
                break;     //铝

            case "zn":
                url = "http://futures.hexun.com/zinc/index.html";
                break;     //锌

            case "pb":
                url = "http://futures.hexun.com/plumbum/index.html";
                break;     //铅

            case "ru":
                url = "http://futures.hexun.com/rubber/index.html";
                break;     //天然橡胶

            case "fu":
                url = "http://futures.hexun.com/fueloil/index.html";
                break;     //燃料油

            case "au":
                url = "http://futures.hexun.com/gold/index.html";
                break;     //黄金

            case "if":
                url = "http://qizhi.hexun.com/";
                break;     //金融期货

            case "rb":
            case "wr":
                url = "http://futures.hexun.com/steel/";
                break;     // 钢材
            case "ri" :
                url = "http://futures.hexun.com/rice/";
            case "er" :
                url = "http://futures.hexun.com/rice/";
                break;     // 早籼稻

            case "bck"  :
                url = "http://xianhuo.hexun.com/nyhgnews/";
                break;		// 焦炭现货

            case "j"  :
                url = "http://futures.hexun.com/coal/index.html";
                break;		// 焦炭
            case "jm"  :
                url = "http://futures.hexun.com/jiaomei/";
                break;		// 焦煤


            case "bco"  :
                url = "http://xianhuo.hexun.com/nyhgnews/";
                break;		// 原油

            case "brbw"  :
                url = "http://xianhuo.hexun.com/jsnews/";
                break;		// 螺纹钢西部

            case "brbcq"  :
                url = "http://xianhuo.hexun.com/jsnews/";
                break;		// 螺纹钢西部

            case "bpbcd"  :
                url = "http://xianhuo.hexun.com/jsnews/";
                break;		// 线材
            case "bpblz"  :
                url = "http://xianhuo.hexun.com/jsnews/";
                break;		// 线材(兰州)
            case "bpbxa"  :
                url = "http://xianhuo.hexun.com/jsnews/";
                break;		// 线材
            case "bpbcq"  :
                url = "http://xianhuo.hexun.com/jsnews/";
                break;		// 线材
            case "bpb"  :
                url = "http://xianhuo.hexun.com/jsnews/";
                break;		// 线材

            case "bap"  :
                url = "http://xianhuo.hexun.com/nfcpnews/";
                break;      // 苹果
            case "bapyt"  :
                url = "http://xianhuo.hexun.com/nfcpnews/";
                break;      // 苹果(烟台)
            case "brc"  :
                url = "http://xianhuo.hexun.com/jsnews/";
                break;		// 热卷板
            case "bmg"  :
                url = "http://xianhuo.hexun.com/jsnews/";
                break;		// 金属镁锭

            case "brcm"  :
                url = "http://xianhuo.hexun.com/jsnews/";
                break;		// 热卷板中原


            case "bsc"  :
                url = "http://xianhuo.hexun.com/nyhgnews/";
                break;		// 动力煤

            case "bpet"  :
                url = "http://xianhuo.hexun.com/nyhgnews/";
                break;		// 聚酯切片

            case "bpta"  :
                url = "http://xianhuo.hexun.com/nyhgnews/";
                break;		// PTA资讯


            case "bwgs" :
                url = "http://xianhuo.hexun.com/nfcpnews/";
                break;      // 白砂糖

            case "bwss" :
                url = "http://xianhuo.hexun.com/nfcpnews/";
                break;      // 绵白糖

            case "bni" :
                url = "http://xianhuo.hexun.com/jsnews/";
                break;      // 电解镍

            case "bcec" :
                url = "http://xianhuo.hexun.com/hgfznews/";
                break;      // 棉花(华东)

            case "bcxj" :
                url = "http://xianhuo.hexun.com/hgfznews/";
                break;      // 棉花(新疆)

            case "me" :
                url = "http://futures.hexun.com/me/";
                break;      // 甲醇

            case "bpemm" :
                url = "http://xianhuo.hexun.com/nyhgnews/";
                break;      // 聚乙烯

            case "bppmm" :
                url = "http://xianhuo.hexun.com/nyhgnews/";
                break;      // 聚丙烯

            case "pm" :
                url = "http://futures.hexun.com/wheat/index.html";
                break;      // 普麦

            case "bgr" :
                url = "http://xianhuo.hexun.com/hgfznews/";
                break;      // 脂松香

            case "ag" :
                url = "http://futures.hexun.com/silver/";
                break;        //白银

            case "fg" :
                url = "http://futures.hexun.com/boli/index.html";
                break;        //玻璃

            case "bcush" :
                url = "http://xianhuo.hexun.com/jsnews/";
                break;        //阴极铜


            case "bpvcsd":
                url = "http://xianhuo.hexun.com/jsnews/";
                break;  //pvc山东
            case "brbcw":
                url = "http://xianhuo.hexun.com/jsnews/";
                break;  //
            case "brbsd":
                url = "http://xianhuo.hexun.com/jsnews/";
                break;  //
            case "brbsy":
                url = "http://xianhuo.hexun.com/jsnews/";
                break;  //
            case "brbty":
                url = "http://xianhuo.hexun.com/jsnews/";
                break;  //
            case "brbwx":
                url = "http://xianhuo.hexun.com/jsnews/";
                break;  //


            case "blc" :
                url = "http://xianhuo.hexun.com/jsnews/";
                break;      // 普麦

            case "bmphd" :
                url = "http://xianhuo.hexun.com/jsnews/";
                break;      // 中厚板

            case "bmeg" :
                url = "http://xianhuo.hexun.com/hgfznews/";
                break;        //乙二醇

            case "bmadd" :
                url = "http://xianhuo.hexun.com/nfcpnews/";
                break;        //玉米
            case "brcyk"  :
                url = "http://xianhuo.hexun.com/jsnews/";
                break;		// 热卷板营口


            default  :
                url = "javascript:void(0)";
        }


        return url;

    }
}