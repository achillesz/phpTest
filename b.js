FuturesSelectRequest = new function () {
// private fields

// private static methods

// public fields
    this.scriptid = "FuturesSelectRequest";
    this.type;
    this.list;
    this.url = "http://quote.futures.hexun.com/GetFuturesCode.aspx";
    this.code = "";//市场|期货品种代码
// public methods
    this.CreateLink = function () {
        var request = this.url + "?";
        if (this.code != "") {
            request += "FuturesCode=" + this.code;
        }
        return request;
    }
    this.Request = function () {
        this.type = Common.$("futuresName");
        this.list = Common.$("futuresCode");
        if ((this.type.value != null) && (this.type.value != "")) {
            this.code = this.type.value;
            Common.AppendDataArray(this.scriptid, this.CreateLink());
            setTimeout("FuturesSelectRequest.ShowList()", 600);
        }
    }
    this.ShowList = function () {
        if ((typeof(arrayname) == "undefined") && (typeof(arraycode) == "undefined")) {
            return;
        }
        else {
            if ((arrayname.length > 0) && (arrayname.length == arraycode.length)) {
                this.list.length = arrayname.length + 1;
                this.list.options[0] = new Option("选择合约");

                for (var i = 1; i <= arrayname.length; i++) {
                    this.list.options[i] = new Option(arrayname[i - 1], arraycode[i - 1].replace(/\|\d{1}/, ''));
                }
            }
            else {
                this.list.length = 1;
                this.list.options[0] = new Option("没有合约");
            }
        }
    }
}

/* ----- */

FuturesListRequest = new function () {
// private fields

// private static methods

// public fields
    this.scriptid = "FuturesListRequest";
    this.url = "http://quote.futures.hexun.com/hqzx/restquote.aspx";
    this.type = "";
    this.market = "";
    this.count = 100;//每页数量
    this.page = 1;//当前页
    this.totalpage = 1;//总页数
// public methods
    this.CreateLink = function () {
        var request = this.url + "?";
        if (this.type != "") {
            request += "type=" + this.type + "&";
        }
        if (this.market != "") {
            request += "market=" + this.market + "&";
        }
        request += "time=" + Common.Time();
        return request;
    }
    this.Request = function () {
        Common.AppendDataArray(this.scriptid, this.CreateLink());
    }
    this.FirstPage = function () {
        this.page = 1;
        Common.AppendDataArray(this.scriptid, this.CreateLink());
    }
    this.EndPage = function () {
        this.page = this.totalpage;
        Common.AppendDataArray(this.scriptid, this.CreateLink());
    }
    this.NextPage = function () {
        if (this.page < this.totalpage) {
            this.page += 1;
            Common.AppendDataArray(this.scriptid, this.CreateLink());
            //获取下一页数据
        }
    }
    this.PrevPage = function () {
        if (this.page > 1) {
            this.page -= 1;
            Common.AppendDataArray(this.scriptid, this.CreateLink());
            //获取上一页数据
        }
    }
    this.GoToPage = function (input) {
        if (Common.IsNumber(input)) {
            if (input > 0 && input <= this.totalpage && input != this.page) {
                this.page = Number(input);
                Common.AppendDataArray(this.scriptid, this.CreateLink());
            }
        }
    }
// constructor
    {
    }
}

/* ----- */

FuturesHistoryRequest = new function () {
// private fields

// private static methods

// public fields
    this.scriptid = "FuturesHistoryRequest";
    this.url = "http://quote.futures.hexun.com/hqzx/restquotehistory.aspx";
    this.code = "";
    this.begintime = "";
    this.endtime = "";
// public methods
    this.CreateLink = function () {
        this.code = Common.$("futuresCode").value;
        this.begintime = Common.$("beginTime").value.replace(/-/g, '');
        this.endtime = Common.$("endTime").value.replace(/-/g, '');
        var request = this.url + "?";
        if (this.code != "") {
            request += "code=" + this.code + "&";
        }
        if (this.begintime != "" && this.endtime != "") {
            request += "begintime=" + this.begintime + "&endtime=" + this.endtime + "&";
        }
        request += "time=" + Common.Time();
        return request;
    }
    this.Request = function () {
        Common.AppendDataArray(this.scriptid, this.CreateLink());
    }
// constructor
    {
    }
}


/* ----- */

FuturesPgfcciRequest = new function () {
// private fields

// private static methods

// public fields
    this.scriptid = "FuturesPgfcciRequest";
    this.url = "http://quote.futures.hexun.com/Pgfcci/quote1.aspx";

// public methods
    this.CreateLink = function () {

        var request = this.url;

        return request;
    }
    this.Request = function () {
        Common.AppendDataArray(this.scriptid, this.CreateLink());
    }
// constructor
    {
    }
}
