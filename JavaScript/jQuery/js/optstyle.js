// $('.a')
//   .css('font-size', '25px')
//   .css('background', '#888');

// var var_a = $('.a')
//   .css({
//     'font-size': '25px',
//     background: '#888',
//     border: '2px solid black'
//   })
//
// var var_c = $('.c')
//   .removeClass('b') // 这里不能加',',否则会报错
//   .css('border', '2px solid #fc9d25');
//
// $('.b')
//   .addClass('blue');
//
// console.log(typeof var_a);
// console.log(var_a.hasClass('a'));

var var_a = $('.a');
// var_a.hide();
// var_a.show();
// var_a.fadeOut(200);
// var_a.fadeIn(1000);
var_a.slideUp(1200);
var_a.slideDown(1200);
