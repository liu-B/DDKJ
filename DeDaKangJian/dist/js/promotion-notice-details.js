//“为您推荐”轮播参数设定
jQuery("#recommend-list").slide({
  titCell: ".hd ul", //获取轮播锚点（次轮播无锚点显示，如若需要通过css进行设定）
  mainCell: ".bd ul", //获取轮播内容列表
  autoPage: true, //是否无缝循环播放(true or false)
  effect: "leftLoop", //轮播方向向左
  autoPlay: false, //是否自动轮播(true or false)
  vis: 5 //轮播窗口显示5个(number)
});