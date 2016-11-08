// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("#gform").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      employername: "required",
      address: "required",
      city: "required",
      zip: 	{
      required: true,
      minlength: 5
   			},
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      phone: "required",
      startDay: "required",
      startTime: "required",
      workHours: "required",
      jobSkills: "required",
      nbrworkers: "required",
      payRate: {
        required: true,
        min: 15
      },
      englishLevel: "required"
    },
    // Specify validation error messages
    messages: {
      employername: "Required field",
      address: "Required field",
      city: "Required field"
      zip: 	{
      required: "Required field",
      minlength: "please enter a valid zip code"
   			},
      email: {
        required: "Required field",
        // Specify that email should be validated
        // by the built-in "email" rule
        email: "Non-valid email"
      },
      phone: "Required field",
      startDay: "Required field",
      startTime: "Required field",
      workHours: "Required field",
      jobSkills: "Required field",
      nbrworkers: "Required field",
      payRate: {
        required: "Required field",
        min: "minimum value of 15"
      },
      englishLevel: "Required field"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});