$(document).ready(function() {
  // focus first field
  $('#fname').focus();
//ccc##
  $('#order_form').validate({
   rules: {
     email: {
        required: true,
        email: true
     }
   }, //end rules
   messages: {
      email: {
         required: "Please put in an e-mail address.",
         email: "This is not a valid email address."
       }
   }
  }); // end validate
}); // end ready
