$(function() {
    console.log("Hasta la vista, baby");
})

$(window).load(function() {
  $('#featured').orbit();
});

$(document).ready(function() {
  $("[id ^= kiwi]").hover(function() {
      var col = $(this).attr("id");

      $("[id = " + col + "]").css('fill', '#00aeff');
      $("#tmod").empty();
      $('#tmod')[0].className = '';
      $("#tmod").addClass("mt" + col + "");
      $("[id = t" + col + "]").find('div').clone().appendTo("#tmod");
      $("#tmod").removeClass("divmod");
      $("#tmod").slideDown(2);
    },
    function() {
      var col = $(this).attr("id");
      $("[id != " + col + "]").css('fill', '#b0b0b0');
      $("[id = " + col + "]").css('fill', '#b0b0b0');
      $("#tmod").removeClass("mt" + col + "");
      $("#tmod").addClass("divmod");

    });

  $("[class ^= kiwi]").hover(function() {
      var col = $(this).attr("class");
      $("[id = " + col + "]").css('fill', '#00aeff');
      $("#tmod").empty();
      $('#tmod')[0].className = '';
      $("#tmod").addClass("mt" + col + "");
      $("[id = t" + col + "]").find('div').clone().appendTo("#tmod");
      $("#tmod").removeClass("divmod");
      $("#tmod").slideDown(2);
    },
    function() {
      var col = $(this).attr("id");
      $("[id != " + col + "]").css('fill', '#b0b0b0');
      $("[id = " + col + "]").css('fill', '#b0b0b0');
      $("#tmod").removeClass("mt" + col + "");
      $("#tmod").addClass("divmod");
    });
});