var count = true;
var i=0;
var savecount = 0;
var saveeto  = new Array("","","","","","","","","","");
var eto="";
function yearcheck(){
	 //hello.innerText = input.value;
	  //var date = new Date();
      //  date = date.toLocaleDateString("ja-JP-u-ca-japanese");
        //var year = date.substring(0, date.indexOf("/"));
        var year = "1996-12-16";
        //var year3 = document.getElementById("hello").innerText;
        var year2 = year.split("-");
        year = year2[0]
        if (year > 1988) { 
            year = (year-1988);
            if(year == 1){
                year = "元";
            }
                if(year >= 2 && year < 10 ){
                    year = "0" + year;
                }
                //year = "平成"+year+"年" + "(西暦" + year2[0] + "年)生まれ";
                document.getElementById("birth1").innerText=year;
                document.getElementById("birth2").innerText=year2[0];
            }else{
                year = "正しい値を入力してください";
                document.getElementById("birth").innerText=year;
            }
        //document.getElementById("birth").innerText=year;
}
function oldcheck(){
        var now = new Date();               // 現在時刻取得
        var year = now.getFullYear();       // 年取得(2017/10/2だったら2017だけ取得)
        var month = now.getMonth()+1;       // 月取得(2017/10/2だったら10だけ取得)
        var day = now.getDate();            // 日にち取得(2017/10/02だったら02だけ取得)

        var birth = "1996-12-16";//document.getElementById("input").value;　// 入力欄に入力した値の取得
        var dbirth = birth.split("-");　　                   // /で分割して配列に代入(2017/10/02を分割して取得したら配列の中身は[2017,10,02])

  // 曜日を表す文字列の配列を作っておく
       var WeekChars = [ "日", "月", "火", "水", "木", "金", "土" ];
   // 日付オブジェクトから曜日を得る
       var dObj = new Date("1996-12-16");
       var wDay = dObj.getDay();





        //  何歳何か月か計算

        year = year - dbirth[0];                            
        month = dbirth[1] - month;                          
        if(month <= 0){
            month = month * (-1);                           
        }else{
            month = 12 - month;                              
            year = year - 1;
        }
        day = dbirth[2] - day;
        if(day >= 0){
            month = month - 1;
        }
         if(month >= 2 && month < 10 ){
                 month = "0" + month;
            }
         if(dbirth[1] >= 2 && dbirth[1] < 10 ){
                 dbirth[1] = "0" + dbirth[1];
            }
        if(dbirth[2] >= 2 && dbirth[2] < 10 ){
                 dbirth[2] = "0" + dbirth[2];
            }
        // 結果整理
        //year = "現在" + year + "歳" + month + "ヶ月です";
    
        // 結果表示
        document.getElementById("year21").innerText=year;
        document.getElementById("month21").innerText=month;
        document.getElementById("month3").innerText=dbirth[1];
        document.getElementById("day3").innerText=dbirth[2];
        document.getElementById("youbi").innerText= WeekChars[wDay];
    }
function change(){
    	if(count==true){
        img.src="img/server2.jpg";
        count=false;
        }else{
        img.src="img/server.jpg";
        count=true;
        }
}
 
function etocheck(){
       var birth ="1998-12-16"; //document.getElementById("input").value;
       var dbirth = birth.split("-");
       var twelv =new Array("申","酉","戌","亥","子","丑","寅","卯","辰","巳","午","未");
       var zyu2=(dbirth[0])%12;
       eto =  twelv[zyu2] ;
       if(birth == ""){
           eto = "正しい値を入力してください";
       }
       document.getElementById("eto3").innerText=eto;
}

//画像を切り替える
//画像を配列に格納する
var img = new Array();

img[0] = new Image();
img[0].src = "nezumi.png";
img[1] = new Image();
img[1].src = "ushi.png";
img[2] = new Image();
img[2].src = "tora.png";
img[3] = new Image();
img[3].src=  "usagi.png";
img[4] = new Image();
img[4].src = "tatsu.png";
img[5] = new Image();
img[5].src = "hebi.png";
img[6] = new Image();
img[6].src=  "uma.png";
img[7] = new Image();
img[7].src = "hitsuji.png";
img[8] = new Image();
img[8].src = "saru.png";
img[9] = new Image();
img[9].src=  "tori.png";
img[10] = new Image();
img[10].src = "inu.png";
img[11] = new Image();
img[11].src = "inoshishi.png";


//画像番号用のグローバル変数
var cnt=0;

//画像切り替え関数
function changeIMG(){
  //画像番号を進める
 if (eto == "子")
 { cnt=0; }
 else if (eto == "丑")
 { cnt=1; }
 else if (eto == "寅")
 { cnt=2; }
 else if (eto == "卯")
 { cnt=3; }
 else if (eto == "辰")
 { cnt=4; }
 else if (eto == "巳")
 { cnt=5; }
 else if (eto == "午")
 { cnt=6; }
 else if (eto == "未")
 { cnt=7; }
 else if (eto == "申")
 { cnt=8; }
 else if (eto == "酉")
 { cnt=9; }
 else if (eto == "戌")
 { cnt=10; }
 else if (eto == "亥")
 { cnt=11; }
  //画像を切り替える
 document.getElementById("gazo").src=img[cnt].src;
}



function savecheck(){
    saveeto[savecount] = document.getElementById("input").value;
    savecount++;
}
function loadcheck(){
    var number = document.getElementById("input").value;
    if(number!="undefined"){
        document.getElementById("input").value = save[number-1];
    }
    yearcheck();
    oldcheck();
    etocheck();
}
function clearact(){
    document.getElementById("birth").innerText="何年生まれでしょう?";
    document.getElementById("old").innerText="ついでに何歳?";
    document.getElementById("eto").innerText="あなたの干支は?";
    document.getElementById("input").value = "";
}
function allclearact(){
    document.getElementById("birth").innerText="何年生まれでしょう?";
    document.getElementById("old").innerText="ついでに何歳?";
    document.getElementById("eto").innerText="あなたの干支は?";
    document.getElementById("input").value = "";
    for(i=0; i<=savecount; i++){
        if(saveeto[i]!=""){
            saveeto[i] = "";
        }
    }
    savecount=0;
}
function inside(){
    if (saveeto[savecount] != ""){
    document.getElementById("button6").style.visibility="visible";
    document.getElementById("button7").style.visibility="visible";
  }else{
    document.getElementById("button6").style.visibility="hidden";
    document.getElementById("button7").style.visibility="hidden";
  }
}


/*
//画面遷移
function redirect2(){
	window.location.href = "index.html";
}


//アラート表示
function save(){
     res = window.confirm("保存しますか？");
     if ( res == true ){
         window.alert("保存しました。");
         window.close();
    }
        window.close();
}

//画面繊維
function redirect1(){
	window.location.href = "result_disp.html";
}

/*var str = "文字列をUTF-8に";
var utf8str = unescape(encodeURIComponent(str));
var utf16str = decodeURIComponent(escape(utf8str));
if (str == utf16str) {alert(true);} //=> true*/

//リアルタイムに動かすためのタイマー
timerID = setInterval('clock()',500);

function clock() {
	document.getElementById("").innerText = getSec();
}

//日付取得と表示
function getSec(){

	var now = new Date();
	var year = now.getFullYear();
	var mon = now.getMonth()+1;
	var day = now.getDate();
	var hour = now.getHours();
	var min = now.getMinutes();
	var sec = now.getSeconds();

//曜日取得
	var today = new Date() ;
	var weekday = [ "日", "月", "火", "水", "木", "金", "土" ] ;
	var	wday =weekday[ today.getDay() ];




//和暦変換
	var wareki = year;

	if (wareki > 1988) { 
            wareki = (wareki - 1988);
            wareki = (("0" + wareki).slice(-2));
	}

	//出力用
	var y = (year);
	var w = (wareki);
	var m = ("0" + mon).slice(-2);
	var d = ("0" + day).slice(-2);


	

	document.getElementById("nowDate").innerText = y;
	document.getElementById("nowMon").innerText = m;
	document.getElementById("nowDay").innerText = d;
	document.getElementById("nowWareki").innerText = w;
	document.getElementById("nowYoubi").innerText = wday;
}

