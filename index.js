const express = require('express');
const admin = require('firebase-admin');
const functions = require('firebase-functions');
const serviceAccount = require('./tokengenerator-85ccb-firebase-adminsdk-lrbik-05dbbbe1a3.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const app = express();
app.use(express.json());

// Endpoint to create user
app.post('/create-user', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const userRecord = await admin.auth().createUser({ email, password });
    res.status(201).json({
      message: '✅ Successfully created new user',
      uid: userRecord.uid,
      email: userRecord.email
    });
  } catch (error) {
    res.status(500).json({
      error: '❌ Error creating user',
      message: error.message
    });
  }
});

// Export as Firebase Function
exports.api = functions.https.onRequest(app);
