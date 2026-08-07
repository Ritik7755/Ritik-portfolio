async function recordResumeView() {

    const { error } = await supabaseClient
        .from("resume_views")
        .insert([{}]);

    if (error) {

        console.error(error);

    } else {

        console.log("Resume Viewed");

    }

}
// =====================================
// RESUME VIEW TRACKER
// =====================================

async function recordResumeView() {

    const { error } = await supabaseClient
        .from("resume_views")
        .insert([{}]);

    if (error) {

        console.error("Resume View Error:", error);

    } else {

        console.log("📄 Resume View Recorded");

    }

}
const resumeBtn = document.getElementById("resumeBtn");

resumeBtn.addEventListener("click", () => {

    recordResumeView();

});