var main = document.querySelector(".main");
var jiazai = document.querySelector(".jiazai");
var bfb = document.querySelector(".bfb");
var jiemian1 = document.querySelector(".jiemian1");
var jiemian2 = document.querySelector(".jiemian2");
var anniu1 = document.querySelector(".anniu");
var music = document.querySelector("audio");

var fang = document.querySelector(".fang");
var lamp = document.querySelector(".lamp");
var shelf = document.querySelector(".shelf");
var sofa = document.querySelector(".sofa");

var jiemian3 = document.querySelector(".jiemian3");
var shou = document.querySelector(".shou"); 
var btn = document.querySelector(".btn"); 

var tmp = document.querySelector(".timu p");
var tmdiv = document.querySelectorAll(".timu div");
var tmspan = document.querySelectorAll(".timu span");

var jiemian4 = document.querySelector(".jiemian4");
var defen = document.querySelector(".fen");
var pj = document.querySelector(".jiemian4 p");
var jj = document.querySelector(".jiejue");
var fx = document.querySelector(".fx");
var fxtu = document.querySelector(".fxtu");
move(lamp);
move(shelf);
move(sofa);


var arrSrc = ["all_page_bg.jpg","header.png","heart.png","heart1.png","face.png","demond.png","head1.png","head2.png","head3.png","head4.png","song.png","lamp.png","next_btn.jpg","p2_shou.png","page1_btn.png","page2_bg.png","scroll_btn.png","share.png","shelf_bg.png","shelf.png","xuan.png","sofa.png","test_text.jpg","zaogao.png","纯音乐 - 一首超级活泼可爱的背景音乐.mp3"];
var index=0;
// var arrImg=[]
for(var i=0;i<arrSrc.length;i++){
	if(i<arrSrc.length-1){
		var img=new Image();
		img.src = "img/" + arrSrc[i];
		// arrImg.push(img.src);
		img.onload = function(){
			index++;
			jindu();
			if(index==arrSrc.length-1){
				begin();
			}
		}
	}else{
		var sound = new Audio();

		sound.src = "music/" +arrSrc[i];
		sound.onloadeddata = function(){
			index++;
			jindu();
			if(index==arrSrc.lengt-1){
				begin();
			}
		}
	}
	
}
function jindu(){
	bfb.innerHTML = Math.round(index/arrSrc.length*100)+"%"
}
function begin(){
	jiazai.style.display = "none";
	jiemian1.style.display="block";
	main.style.backgroundSize = "100% 100%";
	main.style.backgroundImage = "url(img/all_page_bg.jpg)";
	music.play();
}
anniu1.addEventListener("touchstart",function (e) {
	jiemian1.style.display = "none";
	jiemian2.style.display = "block";
	main.style.backgroundImage = "url(img/page2_bg.png)"
	
})
function move(obj){
	obj.addEventListener("touchstart",function (e) {
		var dx = e.touches[0].clientX - obj.offsetLeft;
		var dy = e.touches[0].clientY - obj.offsetTop;
		obj.addEventListener("touchmove",function(e){
			shou.style.display="none";
			var x = e.touches[0].clientX - dx;
			var y = e.touches[0].clientY - dy;
			if(x < 0){x = 0;}
			if(y < 0){y = 0;}
			if(x > main.offsetWidth - obj.offsetWidth){
				x = main.offsetWidth - obj.offsetWidth;
			}
			if(y > main.offsetHeight - obj.offsetHeight){
				y = main.offsetHeight - obj.offsetHeight;
			}
			obj.style.left = x + "px";
			obj.style.top = y +  "px";
		})
	})
}
jiaju();
// 放置完成 判断是否合格 合格则进入进入答题界面
function jiaju(){
	document.addEventListener("touchend",fangzhi,false)
	function fangzhi(){
		lamp.bol = false;
		shelf.bol = false;
		sofa.bol = false;
		function panduan(obj){
			if(obj.offsetLeft > fang.offsetLeft && obj.offsetLeft<fang.offsetLeft+fang.offsetWidth-obj.offsetWidth&&obj.offsetTop>fang.offsetTop&&obj.offsetTop<fang.offsetTop+fang.offsetHeight-obj.offsetHeight){
				obj.bol  = true;
			}
		}
		panduan(lamp);
		panduan(shelf);
		panduan(sofa);
		if(lamp.bol && shelf.bol && sofa.bol){
			setTimeout(function(){
				// 延时2s进入答题界面
				jiemian2.style.display = "none";
				jiemian3.style.display = "block";
				main.style.backgroundImage = "url(img/all_page_bg.jpg)"
			},2000)
			document.removeEventListener("touchend",fangzhi);
		}
	}
}

// 答题界面
var xbol = false;
var timu = []
timu[0]={ti:"装修好的房子你知道怎么检验吗？",a:"会",b:"不会",c:"略懂一点"};
timu[1]={ti:"关于家具的颜色你怎样选择？",a:"自己选",b:"听老公的",c:"听装修师傅的"};
timu[2]={ti:"装修开工后的第一步应该做什么？",a:"水电改造",b:"吊顶",c:"贴瓷砖"};
timu[3]={ti:"地砖应该比实际铺设面积多购买多少？",a:"20%",b:"15%",c:"10%"};
timu[4]={ti:"装修风格选择你的选择是",a:"我喜欢",b:"老公喜欢",c:"多照顾一下对方喜欢"};
var ti=1;
var t=ranFn();
var fen=0;
var jf=0;
function ranFn(){
	return Math.floor(Math.random()*4);
}
btn.addEventListener("touchstart",function(){
	if(xbol){
		if(ti<3){
			xbol=false;
			fen+=jf;
			chushi();
			next();
			txs();
		}else{
			fen+=jf;
			jiemian3.style.display="none";
			jiemian4.style.display="block";
			ping();
		}
		

	}
})
// next();
txs();

for(var i=0;i<3;i++){
	tmspan[i].index=i;
	tmspan[i].addEventListener("touchstart",function(){
		
		xbol=true;
		chushi();
		tmdiv[this.index].style.display="block";
		tmspan[this.index].style.color="darkgray";
		jf=this.index+1;
	})
}
function chushi(){
	for(var j = 0;j<3;j++){
			tmdiv[j].style.display="none";
			tmspan[j].style.color="black";
		}
}
function next(){
	
	if(ti==1){
		for(var i = 0;i<1;i++){
			var tt=ranFn();
			if(t!=tt){t=tt}else{
				i--;
			}
		}
	}else if(ti==2){
		t=4;
	}
	ti++;
}

function txs(){
	tmp.innerHTML=ti+"."+timu[t].ti;
	tmspan[0].innerHTML="A、"+timu[t].a;
	tmspan[1].innerHTML="B、"+timu[t].b;
	tmspan[2].innerHTML="C、"+timu[t].c;
}
var pingjia=[];
pingjia[0]=["你的居家技能只适合做宋仲基的保姆，因为对装修也不了解，什么都听他的，完全没有自己的主见，这种模式完全是听命于宋仲基，所以只能是保姆。解决办法：不要盲目的崇拜宋仲基，要将自己放在与宋仲基对等的立场思考问题，对于装修自己也要多多了解。"];
pingjia[1]=["你的居家技能只适合做宋仲基的妹妹，自认为对家装很了解，什么都要按照你的意见来，别人的意见你完全听不进，在这种状态下宋仲基还愿意和你一起生活只能是妹妹了。解决方法：要学尊重对方，多为对方考虑，多听听对方的意见"]
pingjia[2]=["你的居家技能这么棒，宋仲基的太太头衔属于你啦！对于家装你知道前期备课，你相当理性，尊重对方的意见，知道怎样持家，但是对于持家你还要不断地摸索。"]

function ping(){
	var k = 2;
	if(fen<6){
		k=0;
	}else if(fen<8){
		k=1;
	}
	defen.innerHTML="得分："+fen;
	pj.innerHTML = pingjia[k];
	jj.addEventListener("touchstart",function(){
		self.location='http://m.525j.com.cn/ajzx/home_5.shtml'; 
	})
	fx.addEventListener("touchstart",function(){
		fxtu.style.display = "block";
	})
	fxtu.addEventListener("touchstart",function(){
		fxtu.style.display = "none";
	})
}


