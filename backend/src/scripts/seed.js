const mongoose = require("mongoose");
const Business = require("../models/Business");
require("dotenv").config();

const businessesData = [
  {
    name: "Café Morelia",
    description: "Cafetería tradicional en el centro histórico.",
    category: "Cafetería",
    address: "Av. Madero 123",
    phone: "4431234567",
    website: "https://cafemorelia.com",
    image: "https://via.placeholder.com/150",
    location: { lat: 19.7008, lng: -101.1844 },
  },
  {
    name: "Tacos El Güero",
    description: "Taquería popular con variedad de guisados.",
    category: "Restaurante",
    address: "Calle Hidalgo 45",
    phone: "4437654321",
    website: "",
    image: "https://via.placeholder.com/150",
    location: { lat: 19.702, lng: -101.188 },
  },
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await Business.deleteMany({});
    await Business.insertMany(businessesData);
    console.log("Datos insertados correctamente ✅");
    mongoose.connection.close();
  })
  .catch((err) => console.error("Error al insertar datos:", err));
