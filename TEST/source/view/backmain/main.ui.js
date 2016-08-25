/**
 * related to main.ui
 * 
 * @Author : router
 * @Timestamp : 2016-08-10
 */

//组件库，DO_APP在主页面中如果没引用，那么DO_VIEWSHOWER_MAIN是不能使用的,注意大小写	
var do_App = sm("do_App");
var do_Page = sm("do_Page");

//定义UI变量
var do_ALayout_back = ui("do_ALayout_back")

//使返回按钮可用
do_ALayout_back.on("touch",function(){
	do_App.closePage();
}
);

//引用系统返回键,同样有大小写问题
do_Page.on("back",function(){
	do_App.closePage();
});