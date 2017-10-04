// // $('#a')
// //   .attr('href', 'http://www.bilibili.com');  // 显性属性：html中显示的属性
//
// $('#a')
//   .prop('href', 'http://www.bilibili.com')  //隐性属性：浏览器解析出来的，包含了很多其他属性
//
// var text = $('#a').prop('text') + ':get by \'a\'';
// // $('#a')
// //   .removeAttr('id');
// console.log(text);

var text = $('#nickname').val('new value');
console.log('text: ' + text);
// $('#nickname')
//   .focus();
// $('#nickname')
//   .select();
$('#nickname')
  .blur();
