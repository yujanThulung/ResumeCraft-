
// test-server.js
import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("✅ Server is running!");
});

app.listen(8000, () => {
  console.log("🚀 Test server running at http://localhost:8000");
});
