$(document).ready(function() {
    $('#profileForm').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'php/profile.php',
            data: $(this).serialize(),
            success: function(response) {
                if (response == 'success') {
                    alert("Profile updated successfully");
                } else {
                    alert(response);
                }
            }
        });
    });
});
