document.addEventListener('DOMContentLoaded', function() {
    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const userType = document.getElementById('loginUserType').value;
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // Simple validation
            if (!userType || !email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            // Redirect to appropriate dashboard
            window.location.href = `dashboards/${userType}.html`;
        });
    }
    
    // Handle signup form submission
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const userType = document.getElementById('signupUserType').value;
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;
            
            // Validation
            if (!userType || !name || !email || !password || !confirmPassword) {
                alert('Please fill in all fields');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            // In a real app, you would send this data to your backend
            alert('Account created successfully! Please login.');
            
            // Switch to login tab
            const loginTab = new bootstrap.Tab(document.getElementById('login-tab'));
            loginTab.show();
        });
    }
});