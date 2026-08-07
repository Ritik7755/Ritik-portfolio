// ===============================
// DASHBOARD
// ===============================
// =========================================
// CHECK ADMIN LOGIN
// =========================================

async function checkAdmin() {

    const { data } = await supabaseClient.auth.getUser();

    if (!data.user) {

        window.location.href = "login.html";

        return;

    }

}

checkAdmin();
async function loadVisitors() {

    const { count, error } = await supabaseClient
        .from("visitors")
        .select("*", { count: "exact", head: true });

    if (error) {

        console.error(error);
        return;

    }

    document.getElementById("visitorCount").textContent = count;

}

loadVisitors();
async function loadMessages() {

    const { count, error } = await supabaseClient
        .from("contact_messages")
        .select("*", { count: "exact", head: true });

    if (error) {

        console.error(error);
        return;

    }

    document.getElementById("messageCount").textContent = count;

}

loadMessages();
async function loadTodayVisitors() {

    const today = new Date().toISOString().split("T")[0];

    const { data, error } = await supabaseClient
        .from("visitors")
        .select("visited_at");

    if (error) {

        console.error(error);
        return;

    }

    const todayCount = data.filter(visitor =>
        visitor.visited_at.startsWith(today)
    ).length;

    document.getElementById("todayVisitors").textContent = todayCount;

}

loadTodayVisitors();
async function loadResumeViews() {

    const { count, error } = await supabaseClient
        .from("resume_views")
        .select("*", {
            count: "exact",
            head: true
        });

    if (error) {

        console.error(error);

        return;

    }

    document.getElementById("resumeViews").textContent = count;

}

loadResumeViews();
// =========================================
// LOGOUT
// =========================================

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", async () => {

    const { error } = await supabaseClient.auth.signOut();

    if (error) {

        console.error(error);

        return;

    }

    window.location.href = "login.html";

});