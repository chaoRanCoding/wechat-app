require.config({  
    baseUrl:"../../common/js/",
    paths : {
        "jquery" : "jquery",
        "md5":"jquery.md5",
        "config" :"config"
    },
   shim:{
    'md5':{
        deps: ['jquery']
    },
    'common':{
        deps: ['jquery']
    },
    'button':{
        deps: ['jquery']
    }
    }
})

require(['jquery','md5','config','common','button'],function($){
//全局变量声明
....

//用户信息设置  图像  昵称
function setUserInfo(){
	
}

//获取用户信息
function getUserCenter(){
	
}

//服务器请求数据到这里 作出判断
function setCenterInfo(data){
		//2根据数据判断是否是桩主 ownerFlag
		if(data.ownerFlag){ //桩主
			//判断是否有默认桩 
			if(data!=null){ 
				var Data = data.defaultDevice;
				//按钮的状态
				defaultDeviceCheck(Data);//默认桩状态
				//是桩主且有默认设备显示控制项
				$("#switch").fadeIn();//是桩主  显示开关按钮
				$("#power").fadeIn();//是桩主  显示功率按钮				
				$("#hrefPrice").fadeIn();//是桩主  显示半价电按钮
				$("#share").fadeIn();//是桩主  显示共享按钮
				$("#profit").fadeIn();//桩主    显示分成者  XXXXXXXXXXXXXX-------分成者显示有问题
					
			}
			else if(data.incomeFlag)//不是桩主  是收益者 incomeFlag
			{
				//收益显示
				$("#profit").fadeIn();
			}
		}
}

//默认桩状态监测 及按钮状态
function defaultDeviceCheck(data){
	
}

//总开关
function switchOnOrOff()
{
	
}

//功率调节
function switchCapacity(capacityCode)
{
	
}


//功率调节
function powerOnOrOff()
{
	
}


//按钮状态改变 及全局变量的更改
function btnChange(timingTime,shareTime){

}
//按钮事件
function btn(flag,CLOSE,OPEN,type){
	
}

//开关类型点击事件
$('.switchBtn').each(function(i){
	 $(this).on("click", function(){
        var CLOSE_URL,OPEN_URL,type;
		switch (i){
		case 0:
		switchOnOrOff();
		break;
		case 1://半价电按钮
		CLOSE_URL = CLOSE_TIMEING;
		OPEN_URL = OPEN_TIMEING;
		type = 1;
		timingTime = btn(timingTime,CLOSE_URL,OPEN_URL,type);
		break;
		case 2://共享按钮
		CLOSE_URL = CLOSE_SHARE;
		OPEN_URL = OPEN_SHARE;
		type = 2;
		shareTime = btn(shareTime,CLOSE_URL,OPEN_URL,type);
		break;
		}
		btnChange(timingTime,shareTime);
     })		
})

$(document).ready(function(e) {
		//执行页面初始化
	setUserInfo();//设置图像 昵称
	getUserCenter();//请求设置桩的 相关信息
});

//设置页面返回 苹果设备无刷新问题
 window.onpageshow = function(event){
	if (event.persisted) {
		getUserCenter();
	}
}

//支付跳转 禁止返回
if(document.referrer.indexOf('money')!==-1){
	pushHistory();
} 
window.addEventListener("popstate", function(e) { 
	if(document.referrer.indexOf('money')!==-1){
		pushHistory();
	}
}, false); 
function pushHistory() { 
    var state = { 
        title: "title", 
        url: "#"
    }; 
    window.history.pushState(state, "title", "#"); 
}


})