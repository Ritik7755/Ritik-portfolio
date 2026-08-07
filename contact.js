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

 // 1. Save message to Supabase through backend
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

if (!data.success) {
    alert("❌ " + data.message);
    return;
}

// 2. Send email to yourself
await emailjs.send(
    "service_usd71dz",
    "template_xw6g6ya",
    {
        name: name,
        email: email,
        subject: subject,
        message: message
    }
);

// 3. Success
alert("✅ Message sent successfully!");
contactForm.reset();

});