



const { Resend } = require("resend");
const { createClient } = require("@supabase/supabase-js");

const resend = new Resend(process.env.RESEND_API_KEY);

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

module.exports = async (req, res) => {

    if (req.method !== "POST") {

        return res.status(405).json({
            success: false,
            message: "Method Not Allowed"
        });

    }

    const {

        name,
        email,
        subject,
        message

    } = req.body;

 const { error } = await supabase
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

    return res.status(500).json({
        success: false,
        message: error.message
    });

}

return res.status(200).json({

    success: true,
    message: "Message Saved Successfully"

});

};