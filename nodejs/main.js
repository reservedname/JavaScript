// var form = $('#search');
// var input = $('#username');
// var result = $('#result');
// var username;
//
// form.on('submit', function(e) {
//   e.preventDefault();
//   username = input.val();
//   $.ajax('http://api.github.com/users/' + username)
//     .done(function(data) {
//       var html =
//         '<div>用户名: ' + data.login + '</div>' +
//         '<div>介绍: ' + data.bio + '</div>';
//       result.html(html);
//     })
// })

// $.ajax('http://api.github.com/users/reservedname')
//   .done(function(data) {
//     console.log('data: ',data)
//   })
// var trigger = $('#trigger')
// var card = $('#card');
// var loaded = false;
//
// trigger.on('click', function() {
//   if(card.is(':visible')) {
//     card.slideUp();
//   } else {
//     if(!loaded){
//       card.load('card.html');
//       loaded = true;
//     }
//     card.slideDown();
//   }
//   // card.toggle();
// })
