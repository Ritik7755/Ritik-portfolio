// =====================================
// VISITOR TRACKER
// =====================================

async function recordVisitor() {

    // Today's date
    const today = new Date().toISOString().split("T")[0];

    // Read the last stored date
    const lastVisit = localStorage.getItem("visitorDate");

    // Already counted today?
    if (lastVisit === today) {

        console.log("✅ Visitor already counted today.");

        return;
    }

    // Save visitor in Supabase
    const { error } = await supabaseClient
        .from("visitors")
        .insert([{}]);

    if (error) {

        console.error("Supabase Error:", error);
        return;

    }

    // Save today's date in browser
    localStorage.setItem("visitorDate", today);

    console.log("🎉 New Visitor Recorded!");

}

recordVisitor();