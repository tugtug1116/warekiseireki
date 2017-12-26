
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