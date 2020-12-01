const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const app = express();
const port = 3001;
app.use(cors());

const trips = [{
    uniqueid: "id",
    location: "location",
    user: "user",
    museumSugg: [
        {
            id: "id",
            user: "Germano",
            sugg: "Il Museo del Meme merita di essere visitato!"
        },
        {}
    ],
    restaurantSugg: [],
    hotelSugg: [],
    placeSugg: [],
    tourSugg: [],
    toDoList: [
        {
            id: "id",
            user: "Germano",
            sugg: "Il museo del Meme merita di essere visitato!"
        },
        {}
    ],
    days: [
        {
            day: 1,
            sugg: "Il museo del Meme merita di essere visitato!"
        }
    ],
    photos: [
        {
            location: "location",
            photo: "img.jpg",
            suggestion: "Ecco una foto che ho fatto al museo del Meme!"
        }
    ]
}]

/*
const friend = [
    {
        name: "Geralt",
        surname: "of Rivia"
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
        photo: "Parigi.jpg"
    }

]

app.get("/", (req, res) => {
    res.json({
        cardViaggio: trip,
        friendSuggestion: suggestion,
        friendList: friend
    })
})

app.get(`/${trip[1].id}`, (req, res) => {
    res.json({
        location: trip[1].location,

    })

}
)

app.post("/", (req, res) => {
    trip.push({
        id: "Londra",
        location: "Londra",
        photo: "Londra.jpg"
    })
    res.json({
        cardViaggio: trip,
    })
})
*/

app.all((req, res) => {
    res.json({ error: "EH!!! VOLEVI!!!" });
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})