'use strict';

$(function() {
  $(".main_menu li").on('mouseenter', function() {
    $(this).siblings().find("ul").hide();
    $(this).children().slideDown(200);
  });

  $('html').on('click', function() {
    $(".main_menu ul").slideUp(200);
  });
});