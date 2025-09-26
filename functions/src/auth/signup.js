const {onRequest} = require("firebase-functions/v2/https");
const {auth} = require("../utils/firebase");

exports.signup = onRequest(async (req, res) => {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({error: "Only POST requests allowed"});
    }

    const {email, password} = req.body;

    if (!email || !password) {
      return res.status(400).json({error: "Email and password required"});
    }

    const userRecord = await auth.createUser({email, password});

    return res.status(201).json({
      message: "User created successfully",
      uid: userRecord.uid,
    });
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
});
