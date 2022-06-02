"use strict";
function submitForm() {
    console.log("hello");
    let formData = {
        firstName: $('#first').val(),
        lastName: $('#last').val(),
        email: $('#email').val(),
        phoneNumber: $('#phone').val(),
        message: $('#message').val()
    };
    console.log(formData);
}
;
//# sourceMappingURL=app.js.map