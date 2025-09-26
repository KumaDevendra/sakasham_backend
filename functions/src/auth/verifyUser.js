// const {onRequest} = require("firebase-functions/v2/https");
// const {auth} = require("../utils/firebase");

// exports.verifyUser = onRequest(async (req, res) => {
//   try {
//     const token = req.headers.authorization?.split("Bearer ")[1];

//     if (!token) {
//       return res.status(401).json({ error: "Unauthorized" });
//     }

//     const decoded = await auth.verifyIdToken(token);
//     return res.status(200).json({ uid: decoded.uid, email: decoded.email });
//   } catch (error) {
//     return res.status(401).json({ error: "Invalid or expired token" });
//   }
// });
