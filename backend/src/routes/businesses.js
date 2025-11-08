// backend/src/routes/businesses.js
const express = require("express");
const router = express.Router();
const Business = require("../models/Business");

// GET /api/businesses  -> obtener todos
router.get("/", async (req, res) => {
  try {
    const list = await Business.find();
    res.json(list);
  } catch (err) {
    console.error("GET /api/businesses error:", err);
    res.status(500).json({ message: "Error al obtener negocios" });
  }
});

// POST /api/businesses -> crear negocio
router.post("/", async (req, res) => {
  try {
    const newBusiness = new Business(req.body);
    await newBusiness.save();
    res.status(201).json(newBusiness);
  } catch (err) {
    console.error("POST /api/businesses error:", err);
    res
      .status(500)
      .json({ message: "Error al crear negocio", error: err.message });
  }
});

// PUT /api/businesses/:id -> actualizar negocio
router.put("/:id", async (req, res) => {
  try {
    const updated = await Business.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated)
      return res.status(404).json({ message: "Negocio no encontrado" });
    res.json(updated);
  } catch (err) {
    console.error("PUT /api/businesses/:id error:", err);
    res
      .status(500)
      .json({ message: "Error al actualizar negocio", error: err.message });
  }
});

// DELETE /api/businesses/:id -> eliminar negocio
router.delete("/:id", async (req, res) => {
  try {
    await Business.findByIdAndDelete(req.params.id);
    res.json({ message: "Negocio eliminado" });
  } catch (err) {
    console.error("DELETE /api/businesses/:id error:", err);
    res
      .status(500)
      .json({ message: "Error al eliminar negocio", error: err.message });
  }
});

module.exports = router;
