"use strict";

$(function () {
  $('.panel > .title'). on('click', function() {
    $('+p', this).toggle('show');
  })
  // $("p:not(:first)").hide();
  // $(".panel > .title").on("click", function () {
  //   $('.panel > p').slideUp(500);
  //   $('+p', this).slideDown(500);
  // });
});
