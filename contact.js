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

    const { error } = await supabaseClient
        .from("contact_messages")
        .insert([
            {
                name,
                email,
                subject,
                message
            }
        ]);

   if (error) {

    console.error("Supabase Error:", error);

    alert(error.message);

    return;

}

    alert("✅ Message sent successfully!");

    contactForm.reset();

});