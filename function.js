"use strict";
// functionを使わないで書く↓
// $(function() {
//   $(".box1").on('mouseover', function() {
//     $(this).css("color", "#ccc");
//     $(this).css("width", "300px");
//   });
//   $(".box2").on('mouseover', function() {
//     $(this).css("color", "#ccc");
//     $(this).css("width", "300px");
//   });
//   $(".box3").on('mouseover', function() {
//     $(this).css("color", "#ccc");
//     $(this).css("width", "300px");
//   });
// })

// functionを使って書く↓
$(function () {
  function changeWidth() {
    $(this).css("color", "#ccc");
    $(this).css("width", "300px");
  }
  $('.box1').on('mouseover', changeWidth);
  $('.box2').on('mouseover', changeWidth);
  $('.box3').on('mouseover', changeWidth);
});
