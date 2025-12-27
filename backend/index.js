const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(cookieParser());

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.get("/set-cookie", (req, res) => {
  res.cookie("username", "manideep", {
    httpOnly: true,
    secure: true,        // must be HTTPS
    sameSite: "none",    // required for cross-site
    partitioned: true,   // ⭐ CHIPS magic
    maxAge: 1000 * 60 * 10
  });

  res.send("Cross-site cookie set with res.cookie + Partitioned");
});

app.get("/get-cookie", (req, res) => {
  const username = req.cookies.username;
  res.send(username ? `Cookie: ${username}` : "No cookie found");
});

app.listen(4000, () => console.log("Server running on 4000"));
