var count = true;
var i=0;
var savecount = 0;
var saveeto  = new Array("","","","","","","","","","");
var eto="";

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

//干支表示
function etocheck(){
	   var year="2017"
       var dbirth = year//document.getElementById("input").value;
       //var dbirth = birth.split("-");
       var twelv =new Array("申","酉","戌","亥","子","丑","寅","卯","辰","巳","午","未");
       var zyu2=(year)%12;
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
img[1] = new Image();s
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
img[9].src=  "image1.GIF";
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


