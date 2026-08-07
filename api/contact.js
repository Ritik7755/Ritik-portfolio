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

    console.log(name);
    console.log(email);
    console.log(subject);
    console.log(message);

    return res.status(200).json({

        success: true,
        message: "Data Received Successfully"

    });

};