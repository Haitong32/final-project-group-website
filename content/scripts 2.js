$(document).ready(function(){

  $(function() {


    // Fade in images

    $('img').load(function() {
            $(this).fadeIn('slow');
          });


    // Made draggables draggable

    $( ".draggable" ).draggable({ containment: ".frame", cursor: "crosshair",  stack: ".draggable" });

  $("input[type='checkbox']").change(function() {

      switch (this.id) {

        case 'fluffy':
          if($(this).is(':checked')){
              $("body").addClass("fluffy");
                } else {
                  $("body").removeClass("fluffy");
                  }
            break;

            };



          });

  $(function() {
        $('img[data-hover]').hover(function() {
            $(this)
                .attr('tmp', $(this).attr('src'))
                .attr('src', $(this).attr('data-hover'))
                .attr('data-hover', $(this).attr('tmp'))
                .removeAttr('tmp');
          }).each(function() {
          $('<img />').attr('src', $(this).attr('data-hover'));
          });;
      });


});
});
