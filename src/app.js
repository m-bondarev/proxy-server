import express from "express";
import meteorsRoutes from "./routes/meteors.js";

const app = express();

app.listen(process.env.PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log(`Running on port ${process.env.PORT}`);
});

app.get("/meteors", meteorsRoutes);
