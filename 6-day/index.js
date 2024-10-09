const express = require("express");

const app = express();
const mongoose = require("mongoose");
const path = require("path");
app.use(express.json());
const ogrenciRoute = require("./routes/ogrenci");
const uploadRoute = require("./routes/upload");
const ogretmenRoute = require("./routes/ogretmen")
app.use("/ogrenci", ogrenciRoute);
app.use("/upload", uploadRoute);
app.use('/ogretmen',ogretmenRoute)
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

app.use("/uploads", express.static(path.join(__dirname, "uploads")));





const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Sunucu şu portta çalışıyor : ${PORT}`);
});
