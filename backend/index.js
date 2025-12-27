const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));


app.get("/set-cookie", (req, res) => {
  res.cookie("username", "manideep", { 
    httpOnly: false, secure: true, sameSite: "none", partitioned: true
  });
  res.send("Cookie set ✓");
});

app.get("/get-cookie", (req, res) => {
  res.send(req.cookies.username ? `Hello ${req.cookies.username}` : "No cookie");
});

app.listen(4000, () => console.log("✅ Server ready on 4000"));