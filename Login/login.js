document.getElementById('file-input').addEventListener('change', function(e) {
    if (e.target.files && e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const profileImage = document.getElementById('profile-image');
            profileImage.src = event.target.result; // Change the source to the uploaded image
        }
        reader.readAsDataURL(e.target.files[0]);
    }
});