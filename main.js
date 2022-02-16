'use strict';
// on & off
$(function() {
  $("p").on('click dblclick', function() {
    $("p").css('background-color', 'pink');
  });
  $("p").off("click");
});

