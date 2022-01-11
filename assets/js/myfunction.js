

var $myForm = $('#myForm');

if ($myForm[0].checkValidity()) {
    // If the form is invalid, submit it. The form won't actually submit;
    // this will just cause the browser to display the native HTML5 error messages.
    $(".fields").replaceWith($("#submitpromt").text());
    $myForm.find(':submit').click();
}