$(document).ready(function() {
    var slideWidth = $('.slide').width() / 4;
    var currentPosition = 0;
    
    $('.prev-btn').click(function() {
      if (currentPosition > 0) {
        currentPosition--;
        $('.slide').css('transform', 'translateX(' + (-currentPosition * slideWidth) + 'px)');
      }
    });
    
    $('.next-btn').click(function() {
      if (currentPosition < 3) {
        currentPosition++;
        $('.slide').css('transform', 'translateX(' + (-currentPosition * slideWidth) + 'px)');
      }
    });
  });
  