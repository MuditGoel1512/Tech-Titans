const loginForm = document.getElementById('login-form');
const loginButton = document.querySelector('.login-btn');

window.onload = function() {
    const profileImage = localStorage.getItem('profileImage');
    const userName = localStorage.getItem('userName');
    const userEmail = localStorage.getItem('userEmail');

    if (profileImage) {
        document.getElementById('profile-image').src = profileImage;
    } else {
        document.getElementById('profile-image').src = '/placeholder.svg?height=100&width=100'; // Default image
    }
    
    if (userName) {
        document.getElementById('name').value = userName;
    }

    if (userEmail) {
        document.getElementById('email').value = userEmail;
    }
};

document.getElementById('file-input').addEventListener('change', function(e) {
    if (e.target.files && e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const profileImage = document.getElementById('profile-image');
            profileImage.src = event.target.result; // Update profile image
            localStorage.setItem('profileImage', event.target.result); // Store in local storage
            console.log("Profile image updated.");
        };
        reader.readAsDataURL(e.target.files[0]);
    }
});

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    console.log("User information saved.");
    window.location.href = './Abouts/home.html';
});