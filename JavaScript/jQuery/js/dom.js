// var text = $('#a').text();
// console.log('text: ' + text);
// // $('#a').text('New A');
// console.log('html: ' + $('#a').html());

// $('#a').append('<div>son</div>');
// $('#a').prepend('<div>father</div>')
// $('#a').remove();

var card = $('#card');
var card_toggle = $('#card-toggle');

card_toggle.on('click',
  function() {
    if(card.is(':visible')) card.slideUp();
    else card.slideDown();
})

card.on('mouseenter', function() {
  card.addClass('active');
})

card.on('mouseleave', function() {
  card.removeClass('active');
})
