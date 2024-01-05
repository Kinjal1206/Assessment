$(document).ready(function() {
$('form[id="second_form"]').validate({
    rules: {
      fname: 'required',
      lname: 'required',
      user_email: {
        required: true,
        email: true,
      },
      user_mobile: {
        required: true,
      },
      gender: 'required',
      date_of_birth: 'required',
      address: 'required',
      city: 'required',
      area_pin: 'required',
      state: 'required',
      qualification: 'required',
      spacification: 'required',
      psword: {
        required: true,
        minlength: 8,
      },
    },
    messages: {
      fname: 'This field is required',
      lname: 'This field is required',
      user_email: 'Enter a valid email',
      user_mobile: 'Enter 10 digit mobile numaber',
      gender: 'Select any gender',
      date_of_birth: 'Enter date of birth',
      address: 'Enter Address',
      city: 'Enter City',
      area_pin: 'Enter area PIN',
      state: 'Enter State',
      qualification: 'Select Qualification',
      spacification: 'Select Spacification',
      psword: {
        minlength: 'Password must be at least 8 characters long'
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});