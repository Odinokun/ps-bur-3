// tabs in  map__section
$(function() {
    // console.log("Hasta la vista, baby");
    $('.map__controls-link').on('click', function(e){
        e.preventDefault();

        var item = $(this).closest('.map__controls-item'),
            contentItem = $('.map__item'),
            itemPosition = item.data('class');

        contentItem.filter('.map__item_' + itemPosition)
            .add(item)
            .addClass('active')
            .siblings()
            .removeClass('active');
    });
});

// svg map
$(document).ready(function() {
  $("[id ^= kiwi]").hover(function() {
      var col = $(this).attr("id");

      $("[id = " + col + "]").css('fill', '#f28943');
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
      $("[id = " + col + "]").css('fill', '#f28943');
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