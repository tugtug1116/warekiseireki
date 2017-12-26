var i=0;
var count = false;
var eto="";


//入力した日付をローカルに保存
function save() {
	localStorage.date = naruse.value;
	localStorage.univ = univer.value;
	localStorage.ronin = ronin.value;
	localStorage.ryunen = ryunen.value;
}
//リアルタイムに動かすためのタイマー
timerID = setInterval('clock()', 500);
function clock(){

}

function data_input1(){
	localStorage.date = localStorage.sdate1;
    localStorage.ronin = localStorage.sronin1;
    localStorage.ryunen = localStorage.sryunen1;
    localStorage.univ = localStorage.suniv1;
    localStorage.dnum = 1;
} 
function data_input2(){
	localStorage.date = localStorage.sdate2;
    localStorage.ronin = localStorage.sronin2;
    localStorage.ryunen = localStorage.sryunen2;
    localStorage.univ = localStorage.suniv2;
    localStorage.dnum = 2;
} 
function data_input3(){
	localStorage.date = localStorage.sdate3;
    localStorage.ronin = localStorage.sronin3;
    localStorage.ryunen = localStorage.sryunen3;
    localStorage.univ = localStorage.suniv3;
    localStorage.dnum = 3;
} 
function data_input4(){
	localStorage.date = localStorage.sdate4;
    localStorage.ronin = localStorage.sronin4;
    localStorage.ryunen = localStorage.sryunen4;
    localStorage.univ = localStorage.suniv4;
    localStorage.dnum = 4;
} 
function data_input5(){
	localStorage.date = localStorage.sdate5;
    localStorage.ronin = localStorage.sronin5;
    localStorage.ryunen = localStorage.sryunen5;
    localStorage.univ = localStorage.suniv5;
    localStorage.dnum = 5;
} 
 
function etocheck(){
    var now = new Date();
    var birth = now.getFullYear();
    var twelv =new Array("申","酉","戌","亥","子","丑","寅","卯","辰","巳","午","未");
    var zyu2=Number(birth)%12;
    eto =  twelv[zyu2] ;
       
}

//画像を切り替える
//画像を配列に格納する
var img = new Array();

img[0] = new Image();
img[0].src = "image1.gif"+ "?" + new Date().getTime();
img[1] = new Image();
img[1].src = "image2.gif"+ "?" + new Date().getTime();
img[2] = new Image();
img[2].src = "image3.gif"+ "?" + new Date().getTime();
img[3] = new Image();
img[3].src=  "image4.gif"+ "?" + new Date().getTime();
img[4] = new Image();
img[4].src = "image5.gif"+ "?" + new Date().getTime();
img[5] = new Image();
img[5].src = "image6.gif"+ "?" + new Date().getTime();
img[6] = new Image();
img[6].src=  "image7.gif"+ "?" + new Date().getTime();
img[7] = new Image();
img[7].src = "image8.gif"+ "?" + new Date().getTime();
img[8] = new Image();
img[8].src = "image9.gif"+ "?" + new Date().getTime();
img[9] = new Image();
img[9].src=  "image10.GIF"+ "?" + new Date().getTime();
img[10] = new Image();
img[10].src = "image11.GIF"+ "?" + new Date().getTime();
img[11] = new Image();
img[11].src = "image12.gif"+ "?" + new Date().getTime();


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
 document.getElementById("gazozo").src="kakikaki.JPG";
}

//画面繊維
function redirect1(){
    var num1 = document.getElementById("naruse").value
    var num2 = num1.split("-");
    if(num2[0] > 1988 || count == true){
        window.location.href = "result_disp.html";
    }else{
        window.alert("平成未満は対応していません,生年月日を入力してください");
    }
}

function countchange1(){
    localStorage.visible = "nohidden";
}
function countchange2(){
    localStorage.visible = "hidden";
    count = true;
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
    if(localStorage.sdate1 != undefined){
        var date1 = localStorage.sdate1.split("-");
	    document.getElementById("savedate").innerText = date1[0] + "年" + date1[1] + "月" + date1[2] + "日" + "生まれ";
        document.getElementById("btn1").style.display = "block";
    }else{
        document.getElementById("btn1").style.display = "none";
    }
    if(localStorage.sdate2 != undefined){
        var date2 = localStorage.sdate2.split("-");
        document.getElementById("savedate2").innerText = date2[0] + "年" + date2[1] + "月" + date2[2] + "日" + "生まれ";
        document.getElementById("btn2").style.display = "block";    
    }else{
        document.getElementById("btn2").style.display = "none";
    }
    if(localStorage.sdate3 != undefined){
        var date3 = localStorage.sdate3.split("-");
        document.getElementById("savedate3").innerText = date3[0] + "年" + date3[1] + "月" + date3[2] + "日" + "生まれ";
        document.getElementById("btn3").style.display = "block";
	}else{
        document.getElementById("btn3").style.display = "none";
    }
    if(localStorage.sdate4 != undefined){
        var date4 = localStorage.sdate4.split("-");
        document.getElementById("savedate4").innerText = date4[0] + "年" + date4[1] + "月" + date4[2] + "日" + "生まれ";
        document.getElementById("btn4").style.display = "block";
	}else{
        document.getElementById("btn4").style.display = "none";
    }
    if(localStorage.sdate5 != undefined){
        var date5 = localStorage.sdate5.split("-");
        document.getElementById("savedate5").innerText = date5[0] + "年" + date5[1] + "月" + date5[2] + "日" + "生まれ";
        document.getElementById("btn5").style.display = "block";
	}else{
        document.getElementById("btn5").style.display = "none";
    }
}

function csschange(){
  var date = new Date();
  var month = date.getMonth()+1;

   if(month == 02){
       document.getElementById("changestyle").href="home2.css";
   }else if(month == 04){
       document.getElementById("changestyle").href="home3.css";
   }else if(month == 07){
       document.getElementById("changestyle").href="home4.css";
   }else if(month == 10){
       document.getElementById("changestyle").href="home5.css";
   }else if(month == 12){
       document.getElementById("changestyle").href="home6.css";
   }else{
       document.getElementById("changestyle").href="home.css";
    }
}
function buttonchange(){
    count = false;
    if(localStorage.sdate1 == undefined && localStorage.sdate2 != undefined){
        localStorage.sdate1 = localStorage.sdate2;
        localStorage.sronin1 = localStorage.sronin2;
        localStorage.sryunen1 = localStorage.sryunen2;
        localStorage.suniv1 = localStorage.suniv2;
        localStorage.removeItem("sdate2");
    }
    if(localStorage.sdate2 == undefined && localStorage.sdate3 != undefined){
        localStorage.sdate2 = localStorage.sdate3;
        localStorage.sronin2 = localStorage.sronin3;
        localStorage.sryunen2 = localStorage.sryunen3;
        localStorage.suniv2 = localStorage.suniv3;
        localStorage.removeItem('sdate3');
    }
    if(localStorage.sdate3 == undefined && localStorage.sdate4 != undefined){
        localStorage.sdate3 = localStorage.sdate4;
        localStorage.sronin3 = localStorage.sronin4;
        localStorage.sryunen3 = localStorage.sryunen4;
        localStorage.suniv3 = localStorage.suniv4;
        localStorage.removeItem('sdate4');
    }
    if(localStorage.sdate4 == undefined && localStorage.sdate5 != undefined){
        localStorage.sdate4 = localStorage.sdate5;
        localStorage.sronin4 = localStorage.sronin5;
        localStorage.sryunen4 = localStorage.sryunen5;
        localStorage.suniv4 = localStorage.suniv5;
        localStorage.removeItem('sdate5');
    }
}
function impossible(){
}
