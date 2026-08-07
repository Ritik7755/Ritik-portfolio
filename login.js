// =========================================
// ADMIN LOGIN
// =========================================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    const { error } = await supabaseClient.auth.signInWithPassword({

        email,
        password

    });

    if (error) {

        alert("❌ Invalid Email or Password");

        console.error(error);

        return;

    }

   window.location.href = "admin.html";

});