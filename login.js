
export function login() {
    const loginEmail = document.querySelector('.login-email');
    const loginPassword = document.querySelector('.login-password');
    const loginBtn = document.querySelector('.login-submit');
    const loginContainer = document.querySelector('.login-container');

    loginBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent form submission
        
        let loginArray = JSON.parse(localStorage.getItem('login')) || [];
        
        // Check if credentials match existing user
        const existingUser = loginArray.find(item => 
            item.email === loginEmail.value && 
            item.password === loginPassword.value
        );

        if(loginEmail.value && loginPassword.value) {
            var isAdmin = loginEmail.value === "admin" && loginPassword.value === "123456789";
            
            // If new user or admin, add to storage
            if(!existingUser || isAdmin) {
                const userData = {
                    email: loginEmail.value,
                    password: loginPassword.value,
                    isAdmin: isAdmin
                };
                
                if(!existingUser) {
                    loginArray.push(userData);
                    localStorage.setItem('login', JSON.stringify(loginArray));
                }
                
                localStorage.setItem('currentUser', JSON.stringify(userData));
            }

            // Show welcome message
            loginContainer.innerHTML = `
                <h1>${existingUser ? 'Welcome Back' : 'Welcome to Aithon'}</h1>
                <p>You are being redirected to the main page</p>
            `;
            
            setTimeout(() => {
                window.location.href = "index.html";
            }, 1500);
        }
    });
}
export function checkAdminStatus() {
    const adminSettings = document.querySelector(".admin-setting");
    if(!adminSettings) return;
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    adminSettings.style.display = currentUser?.isAdmin ? "inline-block" : "none";
}
// Check admin status on page load
