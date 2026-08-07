// ===============================
// CONTACT FORM
// ===============================
console.log("contact.js loaded");
const contactForm = document.getElementById("contactForm");
const submitBtn = contactForm.querySelector("button");

contactForm.addEventListener("submit", async (e) => {

    e.preventDefault();
    submitBtn.disabled = true;
submitBtn.innerHTML = "Sending...";

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

alert("✅ Message sent successfully!");

contactForm.reset();

submitBtn.disabled = false;
submitBtn.innerHTML = "Send Message";

// 2. Send notification email to you
await emailjs.send(
    "service_usd71dz",
    "template_xw6g6ya",
    {
        name,
        email,
        subject,
        message
    }
);

// 3. Send auto reply to visitor
await emailjs.send(
    "service_usd71dz",
    "template_ylkdfug",
    {
        name,
        email,
        subject,
        message
    }
);

// 3. Success
alert("✅ Message sent successfully!");
contactForm.reset();

});