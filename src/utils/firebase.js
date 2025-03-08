const admin = require("firebase-admin");


if (!admin.apps.length) {
    const serviceAccount = require("");
  
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }
