const express = require("express");

const app = express();
const mongoose = require("mongoose");

app.use(express.json());
const ogrenciRoute = require("./routes/ogrenci");

app.use('/ogrenci',ogrenciRoute);
const MONGO_URI =
  "mongodb+srv://karademirbayburt10:Zvr1YVcvrSSCvYJV@cluster0.gnbdk.mongodb.net/btk-akademi";
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



const PORT=8080
app.listen(PORT, () => {
  console.log(`Sunucu şu portta çalışıyor : ${PORT}`);
});
