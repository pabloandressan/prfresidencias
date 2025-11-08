// backend/src/index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// importa rutas
const businessRoutes = require("./routes/businesses");
app.use("/api/businesses", businessRoutes);

// Conexión a MongoDB (usa tu MONGO_URI en .env o fallback)
const mongoUri =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/todamorelia";

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("✅ Conectado a MongoDB");
    const port = process.env.PORT || 4000;
    app.listen(port, () =>
      console.log(`🚀 Servidor corriendo en http://localhost:${port}`)
    );
  })
  .catch((err) => {
    console.error("❌ Error de conexión a MongoDB:", err);
  });
