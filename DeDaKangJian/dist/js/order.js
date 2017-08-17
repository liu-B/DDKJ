/* 收货地址选择 */
$('.addr-main').click(function () {
  var $this = $(this);
  var icoOk = $this.children('.ico-ok');

  if ($this.hasClass('on')) {
    $this.removeClass('on');
  } else {
    $this.addClass('on');
  };
  
})

/* 优惠券抵扣 */
$('.discount').click(function () {

  var $this = $(this);
  var $main = $this.parents('.discount-wrap').children('.discount-cnt'); //优惠券区域
  var $i = $this.children('i'); //箭头

  if ($i.hasClass('rotate')) {
    $i.removeClass('rotate'); //箭头旋转180度
    $main.slideDown();
  } else {
    $i.addClass('rotate');
    $main.slideUp();
  };

});

/* 选中优惠券 */
$('.discount-main span').click(function () {

  var $this = $(this);

  if ($this.hasClass('on')) {
    $this.removeClass('on');
  } else {
    $this.addClass('on');
  };

});