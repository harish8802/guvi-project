$(document).ready(function() {
  // Retrieve user profile data and populate the form
  $.ajax({
      url: 'get_profile.php',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
          $('#name').val(data.name);
          $('#email').val(data.email);
          $('#age').val(data.age);
          $('#dob').val(data.dob);
          $('#contact').val(data.contact);
      },
      error: function(jqXHR, textStatus, errorThrown) {
          console.log('Error retrieving profile data: ' + textStatus + ' - ' + errorThrown);
      }
  });

  // Handle form submit
  $('#profile-form').submit(function(e) {
      e.preventDefault();
      var formData = $(this).serialize();

      // Submit form data to update user profile
      $.ajax({
          url: 'update_profile.php',
          type: 'POST',
          data: formData,
          dataType: 'json',
          success: function(data) {
              alert('Profile updated successfully');
          },
          error: function(jqXHR, textStatus, errorThrown) {
              console.log('Error updating profile: ' + textStatus + ' - ' + errorThrown);
          }
      });
  });
});
