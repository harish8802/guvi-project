$(document).ready(function() {
  $.ajax({
    url: 'get_profile.php',
    method: 'GET',
    success: function(data) {
      $('#name').val(data.name);
      $('#email').val(data.email);
      $('#age').val(data.age);
    }
  });

  $('#profile-form').submit(function(event) {
    event.preventDefault();
    var formData = $(this).serialize();
    $.ajax({
      url: 'update_profile.php',
      method: 'POST',
      data: formData,
      success: function(response) {
        $('#success-message').text(response);
      }
    });
  });
});
