const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const app = express();
const port = 3001;
app.use(cors());

const suggestion = [
    {
        location : "Tokyo",
        name : "Geralt",
        landmark: "Gwent",
        comment: "Meglio di mia figlia"
    },
    {
        location : "Tokyo",
        name : "Simp",
        landmark: "Waifu",
        comment: "Furries o Scalies"
    },
    {
        location : "Parigi",
        name : "Jean-Claude",
        landmark: "Bidet",
        comment: "Non riesco a trovarlo"
    }
]

const friend = [
    {
        name : "Geralt",
        surname : "of Rivia"
    }
]

const trip = [
    {
        id: "Tokyo",
        location: "Tokyo",
        photo: "Tokyo.jpg"
    },
    {
        id: "Parigi",
        location: "Parigi",
        photo: "Tokyo.jpg"
    }

]

app.get("/", (req, res) => {
    res.json({
        cardViaggio: trip,
        friendSuggestion: suggestion,
        friendList: friend
    })
})

app.get(`/${trip[1].id}`, (req, res) =>{ 
    res.json({
        location: trip[1].location,

    })

}
)

// app.post("/", (req, res) => {
//     trip.push({
//         id: "Londra",
//         location: "Londra",
//         photo: "Londra.jpg"
//     })
//     res.json({
//         cardViaggio: trip,
//     })
// })
app.all((req, res) => {
    res.json({ error: "Sei un coglione!!" });
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})