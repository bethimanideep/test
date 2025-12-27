const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));

// No-cache middleware
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store');
  next();
});

app.get("/set-cookie", (req, res) => {
  res.cookie("username", "manideep", { 
    httpOnly: true, secure: true, sameSite: "none", maxAge: 600000 
  });
  res.send("Cookie set ✓");
});

app.get("/get-cookie", (req, res) => {
  res.send(req.cookies.username ? `Hello ${req.cookies.username}` : "No cookie");
});

app.listen(4000, () => console.log("✅ Server ready on 4000"));