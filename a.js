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
        hc.push("<tr><td class=\"toptd\">����" + this.Arrow(1) + "</td>");
        hc.push("<td class=\"toptd\"><a href=\"javascript:FuturesListPage.DataSort(2)\">���¼�" + this.Arrow(2) + "</a></td>");
        hc.push("<td class=\"toptd\"><a href=\"javascript:FuturesListPage.DataSort(3)\">�ǵ�" + this.Arrow(3) + "</a></td>");
        hc.push("<td class=\"toptd\"><a href=\"javascript:FuturesListPage.DataSort(4)\">���" + this.Arrow(4) + "</a></td>");
        hc.push("<td class=\"toptd\"><a href=\"javascript:FuturesListPage.DataSort(5)\">����" + this.Arrow(5) + "</a></td>");
        hc.push("<td class=\"toptd\"><a href=\"javascript:FuturesListPage.DataSort(6)\">����" + this.Arrow(6) + "</a></td>");
        hc.push("<td class=\"toptd\"><a href=\"javascript:FuturesListPage.DataSort(7)\">����" + this.Arrow(7) + "</a></td>");
        hc.push("<td class=\"toptd\"><a href=\"javascript:FuturesListPage.DataSort(8)\">�ɽ���" + this.Arrow(8) + "</a></td>");
        hc.push("<td class=\"toptd\"><a href=\"javascript:FuturesListPage.DataSort(9)\">����" + this.Arrow(9) + "</a></td>");
        hc.push("<td class=\"toptd\"><a href=\"javascript:FuturesListPage.DataSort(10)\">�����" + this.Arrow(10) + "</a></td>");
        hc.push("<td class=\"toptd\"><a href=\"javascript:FuturesListPage.DataSort(11)\">��߼�" + this.Arrow(11) + "</a></td>");
        hc.push("<td class=\"toptd\"><a href=\"javascript:FuturesListPage.DataSort(12)\">��ͼ�" + this.Arrow(12) + "</a></td>");
        hc.push("<td class=\"toptd\"><a href=\"javascript:FuturesListPage.DataSort(13)\">�ֲ���" + this.Arrow(13) + "</a></td>");
        hc.push("<td class=\"toptd\"><a href=\"javascript:FuturesListPage.DataSort(14)\">����" + this.Arrow(14) + "</a></td>");
        hc.push("<td class=\"toptdend\">��Ѷ</td></tr>");

        for (var i = 0; i < this.dataArray.length; i++) {
            hc.push("<tr" + this.TrBgColor(i) + ">");
            hc.push("<td" + this.TdBgColor(i, 1) + "><a href=\"http://quote.futures.hexun.com/" + this.dataArray[i][0] + ".shtml\" target=\"_blank\">" + this.dataArray[i][1] + "</a></td>");//����
            if (this.GetTextCode(this.dataArray[i][0]) == "au" || this.GetTextCode(this.dataArray[i][0]) == "if") {
                hc.push("<td" + this.TdBgColor(i, 2) + ">" + Common.GetColor2DEC(this.dataArray[i][2], this.dataArray[i][10]) + "</td>");//���¼�
                hc.push("<td" + this.TdBgColor(i, 3) + ">" + Common.GetColor2DEC(this.dataArray[i][3], 0) + "</td>");//�ǵ�
                hc.push("<td" + this.TdBgColor(i, 4) + ">" + Common.GetColor2DEC(this.dataArray[i][4], this.dataArray[i][10]) + "</td>");//���
                hc.push("<td" + this.TdBgColor(i, 5) + ">" + this.dataArray[i][5] + "</td>");//����
                hc.push("<td" + this.TdBgColor(i, 6) + ">" + Common.GetColor2DEC(this.dataArray[i][6], this.dataArray[i][10]) + "</td>");//����
                hc.push("<td" + this.TdBgColor(i, 7) + ">" + this.dataArray[i][7] + "</td>");//����
                hc.push("<td" + this.TdBgColor(i, 8) + ">" + this.dataArray[i][8] + "</td>");//�ɽ���
                hc.push("<td" + this.TdBgColor(i, 9) + ">" + Common.GetColor2DEC(this.dataArray[i][9], this.dataArray[i][10]) + "</td>");//����
                hc.push("<td" + this.TdBgColor(i, 10) + ">" + this.dataArray[i][10].toFixed(2) + "</td>");//�����
                hc.push("<td" + this.TdBgColor(i, 11) + ">" + this.dataArray[i][11].toFixed(2) + "</td>");//��߼�
                hc.push("<td" + this.TdBgColor(i, 12) + ">" + this.dataArray[i][12].toFixed(2) + "</td>");//��ͼ�
            }
            else {
                hc.push("<td" + this.TdBgColor(i, 2) + ">" + Common.GetColor(this.dataArray[i][2], this.dataArray[i][10]) + "</td>");//���¼�
                hc.push("<td" + this.TdBgColor(i, 3) + ">" + Common.GetColor(this.dataArray[i][3], 0) + "</td>");//�ǵ�
                hc.push("<td" + this.TdBgColor(i, 4) + ">" + Common.GetColor(this.dataArray[i][4], this.dataArray[i][10]) + "</td>");//���
                hc.push("<td" + this.TdBgColor(i, 5) + ">" + this.dataArray[i][5] + "</td>");//����
                hc.push("<td" + this.TdBgColor(i, 6) + ">" + Common.GetColor(this.dataArray[i][6], this.dataArray[i][10]) + "</td>");//����
                hc.push("<td" + this.TdBgColor(i, 7) + ">" + this.dataArray[i][7] + "</td>");//����
                hc.push("<td" + this.TdBgColor(i, 8) + ">" + this.dataArray[i][8] + "</td>");//�ɽ���
                hc.push("<td" + this.TdBgColor(i, 9) + ">" + Common.GetColor(this.dataArray[i][9], this.dataArray[i][10]) + "</td>");//����
                hc.push("<td" + this.TdBgColor(i, 10) + ">" + this.dataArray[i][10] + "</td>");//�����
                hc.push("<td" + this.TdBgColor(i, 11) + ">" + this.dataArray[i][11] + "</td>");//��߼�
                hc.push("<td" + this.TdBgColor(i, 12) + ">" + this.dataArray[i][12] + "</td>");//��ͼ�
            }
            hc.push("<td" + this.TdBgColor(i, 13) + ">" + this.dataArray[i][13] + "</td>");//�ֲ���
            hc.push("<td" + this.TdBgColor(i, 14) + ">" + this.dataArray[i][14] + "</td>");//����
            hc.push("<td class=\"tdend\"><a href=\"" + this.GetLink(this.dataArray[i][0]) + "\" target=\"_blank\">��Ѷ</a></td></tr>");
        }

        hc.push("</table>");
        Common.$(this.divName).innerHTML = hc.join('');

        if (this.reload) {
            clearTimeout(this.setTimeObj);
            this.setTimeObj = setTimeout(this.AutoReload, this.reloadTime);//������ʱ���ض�����
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
                break;     //����

            case "c" :
                url = "http://futures.hexun.com/corn/index.html";
                break;     //����

            case "l" :
                url = "http://futures.hexun.com/lldpe/index.html";
                break;     //LLDPE

            case "p" :
                url = "http://futures.hexun.com/palmoil/index.html";
                break;     //�����

            case "v" :
                url = "http://futures.hexun.com/pvc/index.html";
                break;     // PVC
            case "wh":
                url = "http://futures.hexun.com/wheat/index.html";
            case "ws":
                url = "http://futures.hexun.com/wheat/index.html";
            case "wt":
                url = "http://futures.hexun.com/wheat/index.html";
                break;     //С��

            case "cf":
                url = "http://futures.hexun.com/cotton/index.html";
                break;     //�޻�

            case "sr":
                url = "http://futures.hexun.com/sugar/index.html";
                break;     //����

            case "ro":
                url = "http://futures.hexun.com/palmoil/index.html";
                break;     //������

            case "rs":
                url = "http://futures.hexun.com/palmoil/index.html";
                break;     //�Ͳ���
            case "rm":
                url = "http://futures.hexun.com/palmoil/index.html";
                break;     //������
            case "oi":
                url = "http://futures.hexun.com/palmoil/index.html";
                break;     //������

            case "ta":
                url = "http://futures.hexun.com/pta/index.html";
                break;     //PTA


            case "cu":
                url = "http://futures.hexun.com/copper/index.html";
                break;     //ͭ

            case "al":
                url = "http://futures.hexun.com/aluminum/index.html";
                break;     //��

            case "zn":
                url = "http://futures.hexun.com/zinc/index.html";
                break;     //п

            case "pb":
                url = "http://futures.hexun.com/plumbum/index.html";
                break;     //Ǧ

            case "ru":
                url = "http://futures.hexun.com/rubber/index.html";
                break;     //��Ȼ��

            case "fu":
                url = "http://futures.hexun.com/fueloil/index.html";
                break;     //ȼ����

            case "au":
                url = "http://futures.hexun.com/gold/index.html";
                break;     //�ƽ�

            case "if":
                url = "http://qizhi.hexun.com/";
                break;     //�����ڻ�

            case "rb":
            case "wr":
                url = "http://futures.hexun.com/steel/";
                break;     // �ֲ�
            case "ri" :
                url = "http://futures.hexun.com/rice/";
            case "er" :
                url = "http://futures.hexun.com/rice/";
                break;     // ���̵�

            case "bck"  :
                url = "http://xianhuo.hexun.com/nyhgnews/";
                break;		// ��̿�ֻ�

            case "j"  :
                url = "http://futures.hexun.com/coal/index.html";
                break;		// ��̿
            case "jm"  :
                url = "http://futures.hexun.com/jiaomei/";
                break;		// ��ú


            case "bco"  :
                url = "http://xianhuo.hexun.com/nyhgnews/";
                break;		// ԭ��

            case "brbw"  :
                url = "http://xianhuo.hexun.com/jsnews/";
                break;		// ���Ƹ�����

            case "brbcq"  :
                url = "http://xianhuo.hexun.com/jsnews/";
                break;		// ���Ƹ�����

            case "bpbcd"  :
                url = "http://xianhuo.hexun.com/jsnews/";
                break;		// �߲�
            case "bpblz"  :
                url = "http://xianhuo.hexun.com/jsnews/";
                break;		// �߲�(����)
            case "bpbxa"  :
                url = "http://xianhuo.hexun.com/jsnews/";
                break;		// �߲�
            case "bpbcq"  :
                url = "http://xianhuo.hexun.com/jsnews/";
                break;		// �߲�
            case "bpb"  :
                url = "http://xianhuo.hexun.com/jsnews/";
                break;		// �߲�

            case "bap"  :
                url = "http://xianhuo.hexun.com/nfcpnews/";
                break;      // ƻ��
            case "bapyt"  :
                url = "http://xianhuo.hexun.com/nfcpnews/";
                break;      // ƻ��(��̨)
            case "brc"  :
                url = "http://xianhuo.hexun.com/jsnews/";
                break;		// �Ⱦ��
            case "bmg"  :
                url = "http://xianhuo.hexun.com/jsnews/";
                break;		// ����þ��

            case "brcm"  :
                url = "http://xianhuo.hexun.com/jsnews/";
                break;		// �Ⱦ����ԭ


            case "bsc"  :
                url = "http://xianhuo.hexun.com/nyhgnews/";
                break;		// ����ú

            case "bpet"  :
                url = "http://xianhuo.hexun.com/nyhgnews/";
                break;		// ������Ƭ

            case "bpta"  :
                url = "http://xianhuo.hexun.com/nyhgnews/";
                break;		// PTA��Ѷ


            case "bwgs" :
                url = "http://xianhuo.hexun.com/nfcpnews/";
                break;      // ��ɰ��

            case "bwss" :
                url = "http://xianhuo.hexun.com/nfcpnews/";
                break;      // �����

            case "bni" :
                url = "http://xianhuo.hexun.com/jsnews/";
                break;      // �����

            case "bcec" :
                url = "http://xianhuo.hexun.com/hgfznews/";
                break;      // �޻�(����)

            case "bcxj" :
                url = "http://xianhuo.hexun.com/hgfznews/";
                break;      // �޻�(�½�)

            case "me" :
                url = "http://futures.hexun.com/me/";
                break;      // �״�

            case "bpemm" :
                url = "http://xianhuo.hexun.com/nyhgnews/";
                break;      // ����ϩ

            case "bppmm" :
                url = "http://xianhuo.hexun.com/nyhgnews/";
                break;      // �۱�ϩ

            case "pm" :
                url = "http://futures.hexun.com/wheat/index.html";
                break;      // ����

            case "bgr" :
                url = "http://xianhuo.hexun.com/hgfznews/";
                break;      // ֬����

            case "ag" :
                url = "http://futures.hexun.com/silver/";
                break;        //����

            case "fg" :
                url = "http://futures.hexun.com/boli/index.html";
                break;        //����

            case "bcush" :
                url = "http://xianhuo.hexun.com/jsnews/";
                break;        //����ͭ


            case "bpvcsd":
                url = "http://xianhuo.hexun.com/jsnews/";
                break;  //pvcɽ��
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
                break;      // ����

            case "bmphd" :
                url = "http://xianhuo.hexun.com/jsnews/";
                break;      // �к��

            case "bmeg" :
                url = "http://xianhuo.hexun.com/hgfznews/";
                break;        //�Ҷ���

            case "bmadd" :
                url = "http://xianhuo.hexun.com/nfcpnews/";
                break;        //����
            case "brcyk"  :
                url = "http://xianhuo.hexun.com/jsnews/";
                break;		// �Ⱦ��Ӫ��


            default  :
                url = "javascript:void(0)";
        }


        return url;

    }
}