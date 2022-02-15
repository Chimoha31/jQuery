'use strict';

$(function() {
  $('p').on('click dblclick', function() {
   $(this).css('background-color', 'blue');
  });
  $("p").off('click');
});