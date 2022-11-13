async function signupFormHandler(event) {
    event.preventDefault();
    
    const first_name = document.querySelector('#signup-first').value.trim();
    const last_name = document.querySelector('#signup-last').value.trim();
    const username = document.querySelector('#signup-user').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();

    if(first_name && last_name && username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({first_name, last_name, username, email, password}),
            headers: { 'Content-Type': 'application/json' }
        });
        if(response.ok) {
            console.log('user successfully created');
            document.location.replace('/')
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

async function loginFormHandler(event) {
    event.preventDefault();
    
    const username = document.querySelector('#username-entry').value.trim();
    const email = document.querySelector('#email-entry').value.trim();
    const password = document.querySelector('#password-entry').value.trim();

    if(email && username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({email, username, password}),
            headers: { 'Content-Type': 'application/json'}
        });
        if(response.ok) {
            document.location.replace('/');
            console.log('you are logged in')
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
