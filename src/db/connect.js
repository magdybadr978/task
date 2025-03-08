const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    serverSelectionTimeoutMS : 60000
})
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.error("Database connection failed:", err)); 
