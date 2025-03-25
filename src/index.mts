import express  from "express";
import mongoose from "mongoose";

// Koppla till mongodb
const db_url = process.env.MONGODB_URL || "mongodb://localhost:27017/yourDatabaseName";

mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Failed to connect to MongoDB", err));


// Api:et
const app = express();

// Objekt med serier
class Show {
    constructor(public id: number, public title: string, public genre: string, public years: string) {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.years = years;
    }
}

// Lista med objekt
const tvshows = [] = [
    new Show(1, "Beverly Hills, 90210", "Teen Drama", "1990-2000"),
    new Show(2, "Dawson's Creek", "Teen Drama", "1997-2003"),
    new Show(3, "Gilmore Girls", "Teen Drama", "2000-2007"),
    new Show(4, "Degrassi: The Next Generation", "Teen Drama", "2001-2015"),
    new Show(5,"One Tree Hill", "Teen Drama", "2003-2012"),
    new Show(6, "The O.C", "Teen Drama", "2003-2007"),
    new Show(7, "Veronica Mars", "Teen Drama", "2004-2007"),
    new Show(8, "Friday Night Lights", "Teen Drama", "2006-2011"),
] 

// Här skickas en "get-request"
app.get("/shows", (_, res) => {
   try {
    res.status(200).send(tvshows);
   }
   catch { //Här hamnar potentiella fel
    console.error("Api not found");
   }
});

// Medelande som kommer upp om allt fungerar
app.listen(3000, () => {
    console.log("API is running")
})