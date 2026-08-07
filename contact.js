// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

   const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name,
        email,
        subject,
        message
    })
});

const data = await response.json();

   if (error) {

    console.error("Supabase Error:", error);

    alert(error.message);

    return;

}

    alert("✅ Message sent successfully!");

    contactForm.reset();

});