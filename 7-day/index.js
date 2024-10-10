const express = require("express");

const app = express();
const mongoose = require("mongoose");
const path = require("path");
const errorHandler = require("./middlewares/error");
// Routes
const ogrenciRoute = require("./routes/ogrenci");
const uploadRoute = require("./routes/upload");
const ogretmenRoute = require("./routes/ogretmen");
const authRoute = require("./routes/auth");

app.use(express.json());

// Routes paths
app.use("/ogrenci", ogrenciRoute);
app.use("/upload", uploadRoute);
app.use("/ogretmen", ogretmenRoute);
app.use("/auth", authRoute);

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

// Global Error Handling
app.use(errorHandler);

app.use("*", (req, res, next) => {
  res.status(404).json("Bulunamadı");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Sunucu şu portta çalışıyor : ${PORT}`);
});
