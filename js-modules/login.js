export function login() {
    const loginEmail = document.querySelector('.login-email');
    const loginPassword = document.querySelector('.login-password');
    const loginBtn = document.querySelector('.submit-btn');
    const loginContainer = document.querySelector('.auth-container');
    const signUpOption = document.getElementById("signup-btn");
    const loginOption = document.getElementById("login-btn");
    const usersNameDiv = document.getElementById("name-field");
    const formTitle = document.getElementById("form-title");
    const usersName = document.getElementById("name");
    const wrongCredentials = document.querySelector('.wrong-credentials');
    let signup = false;

    signUpOption.addEventListener("click", () => {
        signUpOption.classList.add("active");
        loginOption.classList.remove("active");
        loginOption.classList.add("inactive");
        usersNameDiv.classList.remove("hidden");
        formTitle.innerText = "Sign up";
        signup = true;
    });

    
    loginOption.addEventListener('click', () => {
        loginOption.classList.remove("inactive");
        loginOption.classList.add("active");
        signUpOption.classList.remove("active");
        usersNameDiv.classList.add("hidden");
        formTitle.innerText = "Log in";
        signup = false;
    });

    
    document.getElementById('auth-form').addEventListener('submit', (e) => {
        e.preventDefault(); 

        if (!signup) {

            const loginArray = JSON.parse(localStorage.getItem('login')) || [];
            let isAdmin = loginEmail.value === "admin@admin.com" && loginPassword.value === "123456789";
            
            console.log(loginEmail.value," & ",loginPassword.value)


            const existingUser = loginArray.find(item =>
                item.email === loginEmail.value &&
                item.password === loginPassword.value);

            if (!existingUser && !isAdmin) {
                wrongCredentials.innerText = "Wrong Email or Password";
            }

            if (existingUser || isAdmin) {
                const userData = {
                    email: loginEmail.value,
                    password: loginPassword.value,
                    //name: existingUser.name ? existingUser.name: existingUser.name='admin',//////
                    isAdmin: isAdmin = true || existingUser.isAdmin || false////////
                };

                localStorage.setItem('currentUser', JSON.stringify(userData));

                
                loginContainer.innerHTML = `
      --              <h1>Welcome back, !</h1>
                    <p>You are being redirected to the main page...</p>
                `;

                setTimeout(() => {
                    window.location.replace("/index.html"); 
                }, 1500);
                console.log("miaouttttt")
            }
        } else { //sing up
            
            const userData = {
                email: loginEmail.value,
                password: loginPassword.value,
                name: usersName.value || "Guest",
                isAdmin: false 
            };

            let loginArray = JSON.parse(localStorage.getItem('login')) || [];

            loginArray.push(userData);
            localStorage.setItem('login', JSON.stringify(loginArray));


            localStorage.setItem('currentUser', JSON.stringify(userData));

        
            loginContainer.innerHTML = `
                <h1>Welcome, ${userData.name}!</h1>
                <p>You are being redirected to the main page...</p>
            `;

            setTimeout(() => {
                window.location.replace("/index.html"); 
            }, 1500);

        }
    });
}

export function checkAdminStatus() {
    function attemptCheck() {
        const adminSettings = document.querySelector(".admin-setting");
        if (!adminSettings) {
            setTimeout(attemptCheck, 50); 
            return;
        }
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        adminSettings.style.display = currentUser?.isAdmin ? "inline-block" : "none";
    }
    
    attemptCheck();
}


