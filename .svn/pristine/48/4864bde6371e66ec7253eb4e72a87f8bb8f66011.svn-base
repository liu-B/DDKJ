  // 轮播图

  jQuery(".slideBox").slide({
    effect: "left",
    easing: "easeOutQuad",
    mainCell: ".bd ul",
    delayTime: 500,
    autoPlay: true
  });

  // 二级菜单显示 
  var $menuList = $('.D-menu .dd');
  var $menuSublistWrap = $('.menu-sublist-wrap');
  var $menuSubList = $('.menu-sublist-wrap .menu-sublist-area');

  $('.D-menu .dd').mouseover(function() {

    var $this = $(this);
    var $t = $this.index();

    $this.addClass('on');
    $menuSublistWrap.show();
    $menuSubList.eq($t).show();

  }).mouseout(function() {

    var $this = $(this);
    var $t = $this.index();

    $this.removeClass('on');
    $menuSublistWrap.hide();
    $menuSubList.eq($t).hide();

  });