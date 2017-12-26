var count = true;
var i = 0;
var savecount = 0;
var saveeto = new Array("", "", "", "", "", "", "", "", "", "");
var eto = "";
var input_date=localStorage.date;//ローカル（入力したもの)
var input_univ=localStorage.univ;
var input_ronin=localStorage.ronin;
var input_ryunen=localStorage.ryunen;

function csschange(){
  var date = new Date();
  var month = date.getMonth()+1;

   if(month == 02){
       document.getElementById("changestyle2").href="home2.css";
   }else if(month == 04){
       document.getElementById("changestyle2").href="home3.css";
   }else if(month == 07){
       document.getElementById("changestyle2").href="home4.css";
   }else if(month == 10){
       document.getElementById("changestyle2").href="home5.css";
   }else if(month == 12){
       document.getElementById("changestyle2").href="home6.css";
   }else{
       document.getElementById("changestyle2").href="home.css";
    }
}
function yearcheck() {
    
    var year = input_date;
    var year2 = year.split("-");
    year = year2[0]
    if (year > 1988) {
        year = (year - 1988);
        warekic.innerText = "平成";
        if(year2[0] == 1989 && year2[1] == 01 && 1 <= year2[2] && year2[2] <= 7){
            year = 64;
            warekic.innerText = "昭和";
        }
    } else if (year > 1925) {
        year = (year-1925);
        warekic.innerText = "昭和";
    } else if (year > 1911) {
        year = (year-1911);
        warekic.innerText = "大正";
    } else if (year > 1867) {
        year = (year-1867);
        warekic.innerText = "明治";
    } else {
        year = "正しい値を入力してください";
    }
    if (year == 1) {
        year = "元";
    }else if(1<year && year<10){
        year = "0" + year;
    }
    //year = "平成"+year+"年" + "(西暦" + year2[0] + "年)生まれ";
    document.getElementById("birth1").innerText = year;
    document.getElementById("birth2").innerText = year2[0];
    //document.getElementById("birth").innerText=year;
}
function oldcheck() {
    var now = new Date();               // 現在時刻取得
    var year = now.getFullYear();       // 年取得(2017/10/2だったら2017だけ取得)
    var month = now.getMonth() + 1;       // 月取得(2017/10/2だったら10だけ取得)
    var day = now.getDate();            // 日にち取得(2017/10/02だったら02だけ取得)

    var birth = input_date;//document.getElementById("input").value;　// 入力欄に入力した値の取得
    var dbirth = birth.split("-");// /で分割して配列に代入(2017/10/02を分割して取得したら配列の中身は[2017,10,02])

    // 曜日を表す文字列の配列を作っておく
    var WeekChars = ["日", "月", "火", "水", "木", "金", "土"];
    // 日付オブジェクトから曜日を得る
    var dObj = new Date(input_date);
    var wDay = dObj.getDay();
    //  何歳何か月か計算

    year = year - dbirth[0];
    month = dbirth[1] - month;
    if (month <= 0) {
        month = month * (-1);
    } else {
        month = 12 - month;
        year = year - 1;
    }
    day = dbirth[2] - day;
    // if (day >= 0) {
    //     month = month - 1;
    // }
    if (month >= 0 && month < 10) {
        month = "0" + month;
    }
    if (year >= 0 && year < 10) {
        year = "0" + year;
    }
    // 結果整理
    //year = "現在" + year + "歳" + month + "ヶ月です";

    // 結果表示
    document.getElementById("year21").innerText = year;
    document.getElementById("month21").innerText = month;
    document.getElementById("month3").innerText = dbirth[1];
    document.getElementById("day3").innerText = dbirth[2];
    document.getElementById("youbi").innerText = WeekChars[wDay];
}


function etocheck() {
    var birth = input_date;//document.getElementById("input").value;
    var dbirth = birth.split("-");
    var twelv = new Array("申", "酉", "戌", "亥", "子", "丑", "寅", "卯", "辰", "巳", "午", "未");
    var zyu2 = (dbirth[0]) % 12;
    eto = twelv[zyu2];
    if (birth == "") {
        eto = "正しい値を入力してください";
    }
    //document.getElementById("eto3").innerText = eto;
}

function graduate(){
    var birth = input_date;
    var birthyear = birth.split("-");
    if(birthyear[1] < 04){
        birthyear[0] = birthyear[0] - 1;
    }
    var wareki = birthyear[0]-1988;
    if(wareki == 1){
        wareki == "元";
    }
    var elem = Number(birthyear[0]) + 7;
    var junior = elem + 6;
    var highsc = junior + 3;
    var grahigh = highsc + 3;
    var univin = grahigh;
    var gradu;

    var welem = wareki + 7;
    var wjunior = welem + 6;
    var whighsc = wjunior + 3;
    var wgrahigh = whighsc + 3;
    var wunivin = wgrahigh;
    var wgradu;
    var school = document.getElementById("school");

    if(input_ronin == "１年"){
        univin+=1;
        wunivin+=1;
    }else if(input_ronin == "２年"){
        univin+=2;
        wunivin+=2;
    }else if(input_ronin == "３年"){
        univin+=3;
        wunivin+=3;
    }else if(input_ronin == "４年"){
        univin+=4;
        wunivin+=4;
    }else if(input_ronin == "５年"){
        univin+=5;
        wunivin+=5;
    }else if(input_ronin == "６年"){
        univin+=6;
        wunivin+=6;
    }else if(input_ronin == "７年"){
        univin+=7;
        wunivin+=7;
    }else if(input_ronin == "８年"){
        univin+=8;
        wunivin+=8;
    }else if(input_ronin == "９年"){
        univin+=9;
        wunivin+=9;
    }

    if(input_univ=="大学生（４年制）"){
    　wgradu = wunivin + 4;
    　gradu = univin + 4;
        document.getElementById("schoolname").innerText="大学入学";
        document.getElementById("schoolname2").innerText="大学卒業";  
    }else if(input_univ=="大学生（６年制）"){
        wgradu = wunivin + 6;
        gradu = univin + 6;
        document.getElementById("schoolname").innerText="大学入学";
        document.getElementById("schoolname2").innerText="大学卒業";    
    }else if(input_univ=="専門（２年制）"){
        wgradu = wunivin + 2;
        gradu = univin + 2;
        document.getElementById("schoolname").innerText="専門学校入学";
        document.getElementById("schoolname2").innerText="専門学校卒業";
    }

    if(input_ryunen == "１年"){
        gradu+=1;
        wgradu+=1;
    }else if(input_ryunen == "２年"){
        gradu+=2;
        wgradu+=2;
    }else if(input_ryunen == "３年"){
        gradu+=3;
        wgradu+=3;
    }else if(input_ryunen == "４年"){
        gradu+=4;
        wgradu+=4;
    }else if(input_ryunen == "５年"){
        gradu+=5;
        wgradu+=5;
    }else if(input_ryunen == "６年"){
        gradu+=6;
        wgradu+=6;
    }else if(input_ryunen == "７年"){
        gradu+=7;
        wgradu+=7;
    }else if(input_ryunen == "８年"){
        gradu+=8;
        wgradu+=8;
    }else if(input_ryunen == "９年"){
        gradu+=9;
        wgradu+=9;
    }

    document.getElementById("seireki1").innerText=String(elem);
    document.getElementById("wareki1").innerText=String(welem);
    document.getElementById("seireki2").innerText=String(junior);
    document.getElementById("wareki2").innerText=String(wjunior);
    document.getElementById("seireki3").innerText=String(junior);
    document.getElementById("wareki3").innerText=String(wjunior);
    document.getElementById("seireki4").innerText=String(highsc);
    document.getElementById("wareki4").innerText=String(whighsc);
    document.getElementById("seireki5").innerText=String(highsc);
    document.getElementById("wareki5").innerText=String(whighsc);
    document.getElementById("seireki6").innerText=String(grahigh);
    document.getElementById("wareki6").innerText=String(wgrahigh);
    document.getElementById("seireki7").innerText=String(univin);
    document.getElementById("wareki7").innerText=String(wunivin);
    document.getElementById("seireki8").innerText=String(gradu);
    document.getElementById("wareki8").innerText=String(wgradu);

}


//画像を切り替える
//画像を配列に格納する
var img = new Array();

img[0] = new Image();
img[0].src = "nezumi.gif"+ "?" + new Date().getTime();
img[1] = new Image();
img[1].src = "ushi.gif"+ "?" + new Date().getTime();
img[2] = new Image();
img[2].src = "tora.gif"+ "?" + new Date().getTime();
img[3] = new Image();
img[3].src = "usagi.gif"+ "?" + new Date().getTime();
img[4] = new Image();
img[4].src = "tatsu.gif"+ "?" + new Date().getTime();
img[5] = new Image();
img[5].src = "hebi.gif"+ "?" + new Date().getTime();
img[6] = new Image();
img[6].src = "uma.gif"+ "?" + new Date().getTime();
img[7] = new Image();
img[7].src = "hitsuji.gif"+ "?" + new Date().getTime();
img[8] = new Image();
img[8].src = "saru.gif"+ "?" + new Date().getTime();
img[9] = new Image();
img[9].src = "tori.gif"+ "?" + new Date().getTime();
img[10] = new Image();
img[10].src = "inu.gif"+ "?" + new Date().getTime();
img[11] = new Image();
img[11].src = "inoshishi.gif"+ "?" + new Date().getTime();

prImg = new Image();


//画像番号用のグローバル変数
var cnt = 0;

//画像切り替え関数
function changeIMG() {
    //画像番号を進める
    if (eto == "子")
    { cnt = 0; }
    else if (eto == "丑")
    { cnt = 1; }
    else if (eto == "寅")
    { cnt = 2; }
    else if (eto == "卯")
    { cnt = 3; }
    else if (eto == "辰")
    { cnt = 4; }
    else if (eto == "巳")
    { cnt = 5; }
    else if (eto == "午")
    { cnt = 6; }
    else if (eto == "未")
    { cnt = 7; }
    else if (eto == "申")
    { cnt = 8; }
    else if (eto == "酉")
    { cnt = 9; }
    else if (eto == "戌")
    { cnt = 10; }
    else if (eto == "亥")
    { cnt = 11; }
    //画像を切り替える
    document.getElementById("gazo").src = img[cnt].src;
}

function inside() {
    if (localStorage.visible == "hidden") {
        document.getElementById("button4").innerText = "Delete";
        document.getElementById("button4").onclick = new Function("localdelete();");
    } else {
        document.getElementById("button4").innerText = "Save";
        document.getElementById("button4").onclick = new Function("save();");
    }
}



//画面遷移
function redirect2() {
    window.location.href = "index.html";
}


//アラート表示
function save() {
    res = window.confirm("データを登録しますか？");
    if (res == true) {
        if(localStorage.sdate1 == undefined){
            window.alert("保存しました。");
            localStorage.sdate1 = input_date;
            localStorage.sronin1 = input_ronin;
            localStorage.sryunen1 = input_ryunen;
            localStorage.suniv1 = input_univ;
        }else if(localStorage.sdate2 == undefined){
            window.alert("保存しました。");
            localStorage.sdate2 = input_date;
            localStorage.sronin2 = input_ronin;
            localStorage.sryunen2 = input_ryunen;
            localStorage.suniv2 = input_univ;
        }else if(localStorage.sdate3 == undefined){
            window.alert("保存しました。");
            localStorage.sdate3 = input_date;
            localStorage.sronin3 = input_ronin;
            localStorage.sryunen3 = input_ryunen;
            localStorage.suniv3 = input_univ;
        }else if(localStorage.sdate4 == undefined){
            window.alert("保存しました。");
            localStorage.sdate4 = input_date;
            localStorage.sronin4 = input_ronin;
            localStorage.sryunen4 = input_ryunen;
            localStorage.suniv4 = input_univ;
        }else if(localStorage.sdate5 == undefined){
            window.alert("保存しました。");
            localStorage.sdate5 = input_date;
            localStorage.sronin5 = input_ronin;
            localStorage.sryunen5 = input_ryunen;
            localStorage.suniv5 = input_univ;
        }else{
            window.alert("データの登録可能件数を超えています");
        }
    }else{
        window.alert("データの保存をキャンセルしました");
        
    }
    window.close();
}
function localdelete(){
    res = window.confirm("データを消去しますか？");
    if (res == true) {
    if(localStorage.dnum==1){
        window.alert("消去しました。");
        localStorage.removeItem('sdate1');
    }else if(localStorage.dnum==2){
        window.alert("消去しました。");
        localStorage.removeItem('sdate2');
    }else if(localStorage.dnum==3){
        window.alert("消去しました。");
        localStorage.removeItem('sdate3');
    }else if(localStorage.dnum==4){
        window.alert("消去しました。");
        localStorage.removeItem('sdate4');
    }else if(localStorage.dnum==5){
        window.alert("消去しました。");
        localStorage.removeItem('sdate5');
    }else{
        localStorage.clear();
    }
    window.close();
    window.location.href = "index.html";
    }else{
    window.close();
    }
}