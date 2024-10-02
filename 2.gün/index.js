const express = require('express');

const app = express();
const mongoose = require("mongoose");

app.use(express.json());
const MONGO_URI = "mongodb+srv://karademirbayburt10:Zvr1YVcvrSSCvYJV@cluster0.gnbdk.mongodb.net/btk-akademi";

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

const KitapSchema = new mongoose.Schema({
    adi:String,
    isbn:Number
})

const RafSchema = new mongoose.Schema({
    adet:Number,
    kat:Number,
    adi:String
})

const Kitap = mongoose.model('Kitap',KitapSchema);
const Raf = mongoose.model('Raf',RafSchema);

// Kütüphane
// Kitap --> adi, isbn
// Raf --> adet,kat
app.post('/kitap-ekle',(request,response,next) => {
    const yeni_kitap = Kitap.create(request.body);
    response.send(yeni_kitap)
})
app.post('/raf-ekle',(request,response,next) => {
   // burayı siz yapacaksınız
})

app.get('/raf-getir',async (request,response,next) => {
   // burayı siz yapacaksınız
})
app.get('/kitap-getir',async (request,response,next) => {
    const kitaplar = await Kitap.find();
    response.send(kitaplar);
})


app.put('/',(request,response,next) => {
    response.send("PUT isteği")
})

app.delete('/',(request,response,next) => {
    response.send("DELETE isteği")
})
app.listen(8080,() => {
    console.log("sunucu 8080 portunda çalıştı");
})