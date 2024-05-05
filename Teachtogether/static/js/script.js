function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        if (tab.id === tabName) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = loginForm.querySelector("#loginUsername").value;
            const password = loginForm.querySelector("#loginPassword").value;
            // You can send username and password to the backend using AJAX
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = signupForm.querySelector("#signupUsername").value;
            const email = signupForm.querySelector("#signupEmail").value;
            const password = signupForm.querySelector("#signupPassword").value;
            // You can send username, email, and password to the backend using AJAX
        });
    }
});
