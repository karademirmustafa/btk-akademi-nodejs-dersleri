const express = require("express");

const app = express();
const mongoose = require("mongoose");

app.use(express.json());
const MONGO_URI =
  "mongodb+srv://karademirbayburt10:Zvr1YVcvrSSCvYJV@cluster0.gnbdk.mongodb.net/btk-akademi";
const Ogrenci = require('./routes/ogrenci');
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


const OgretmenSchema = new mongoose.Schema({
  adi: { type: String },
  alani: { type: String },
  tel_no: { type: String },
});

const VeliSchema = new mongoose.Schema({
  adi: { type: String },
  ogrenci_adi: { type: String },
});


const Ogretmen = mongoose.model("Ogretmen", OgretmenSchema);
const Veli = mongoose.model("Veli", VeliSchema);

app.post("/ogrenci", async (req, res, next) => {
  const { adi, numarasi, telefon_numarasi } = req.body;

  const ogrenci = await Ogrenci.create({
    adi: adi,
    numarasi,
    telefon_numarasi,
  });
  return res.status(201).json(ogrenci);
});
app.get("/ogrenci", async (req, res, next) => {
  const ogrenci = await Ogrenci.find();
  return res.status(200).json(ogrenci);
});
app.get("/ogrenci/:id", async (req, res, next) => {
  const { id } = req.params;
  const ogrenci = await Ogrenci.findById(id);
  return res.status(200).json(ogrenci);
});

app.put("/ogrenci/:id", async (req, res, next) => {
  const { id } = req.params;
  const {adi,numarasi,telefon_numarasi} = req.body

  const ogrenci = await Ogrenci.findByIdAndUpdate(id,{
    adi: adi,
    numarasi,
    telefon_numarasi,
  },{new:true});
  return res.status(200).json(ogrenci);
});
app.delete("/ogrenci/:id", async (req, res, next) => {
  const { id } = req.params;

  const ogrenci = await Ogrenci.findByIdAndDelete(id);
  return res.status(200).json(ogrenci);
});

const PORT=8080
app.listen(PORT, () => {
  console.log(`Sunucu şu portta çalışıyor : ${PORT}`);
});
