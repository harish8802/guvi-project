$(document).ready(function() {
  // Get the profile data from MongoDB
  $.ajax({
    url: 'get_profile.php',
    method: 'GET',
    success: function(data) {
      // Populate the form fields with the retrieved data
      $('#name').val(data.name);
      $('#email').val(data.email);
      $('#age').val(data.age);
    }
  });

  // Submit the form using Ajax
  $('#profile-form').submit(function(event) {
    event.preventDefault();
    var formData = $(this).serialize();
    $.ajax({
      url: 'update_profile.php',
      method: 'POST',
      data: formData,
      success: function(response) {
        // Show a success message
        $('#success-message').text(response);
      }
    });
  });
});
