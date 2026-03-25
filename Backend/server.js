const express = require("express");
const app = express();

app.use(express.json());

// routes connect
const workflowRoutes = require("./routes/workflowRoutes");
app.use("/", workflowRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

