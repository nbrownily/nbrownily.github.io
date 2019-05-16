$(document).ready(function() {
  $('tbody tr').hover(function() {
    $(this).addClass('over');
  }, // adds hover
  function() {
    $(this).removeClass('over');
  }); // removes hover
}); // end ready
