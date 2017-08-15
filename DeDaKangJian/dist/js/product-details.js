// 同一页面使用相同效果，需要相同的class名以及不同的id名：

//“热销榜单”轮播参数设定
jQuery("#hot-list").slide({
  titCell: ".hd ul", //获取轮播锚点（次轮播无锚点显示，如若需要通过css进行设定）
  mainCell: ".bd ul", //获取轮播内容列表
  autoPage: true, //是否无缝循环播放(true or false)
  effect: "leftLoop", //轮播方向向左
  autoPlay: false, //是否自动轮播(true or false)
  vis: 5 //轮播窗口显示5个(number)
});

//“为您推荐”轮播参数设定
jQuery("#recommend-list").slide({
  titCell: ".hd ul", //获取轮播锚点（次轮播无锚点显示，如若需要通过css进行设定）
  mainCell: ".bd ul", //获取轮播内容列表
  autoPage: true, //是否无缝循环播放(true or false)
  effect: "leftLoop", //轮播方向向左
  autoPlay: false, //是否自动轮播(true or false)
  vis: 5 //轮播窗口显示5个(number)
});

// 产品详情标签切换
$('.detail-tab li').click(function() {

  var $detailTab = $('.detail-tab li');  //获取tab标签
  var $detailMain = $('.detail-main > ul > li');  //获取内容区域
  var $this = $(this);
  var $t = $this.index();

  $('.detail-tab li').removeClass('on');  //移除标签上class名为on的样式
  $this.addClass('on');  //为当前选中表情添加class名为on的样式
  $('.detail-main > ul > li').hide();
  $detailMain.eq($t).show();
  
});