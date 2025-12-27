const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(cookieParser());

// allow frontend origin
app.use(
  cors({
    origin: true, // <-- change to your site
    credentials: true,
  })
);

// Set cookie
app.get("/set-cookie", (req, res) => {
  res.cookie("username", "manideep", {
    httpOnly: true,
    secure: true,          // must be true for cross-site
    sameSite: "none",      // must be "none" for cross-site
    maxAge: 1000 * 60 * 5,
  });

  res.send("Cross-site cookie set!");
});

// Get cookie
app.get("/get-cookie", (req, res) => {
  const username = req.cookies.username;
  res.send(username ? `Cookie: ${username}` : "No cookie found");
});

app.listen(4000, () => console.log("Server running on 4000"));
