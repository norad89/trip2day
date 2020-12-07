const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const pool = require("./db");
const app = express();
const port = 3002;
app.use(cors());
app.use(express.json());

app.post("/location", async (req, res) => {
  try {
    const { location } = req.body;
    const newLocation = await pool.query(
      "INSERT INTO location (location) VALUES($1) RETURNING *",
      [location]
    );

    res.json(newLocation.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
app.get("/location", async (req, res) => {
  try {
    const allLocations = await pool.query("SELECT * FROM location");
    res.json(allLocations.rows);
  } catch (err) {
    console.error(err.message);
  }
});
app.get("/location/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const location = await pool.query(
      "SELECT * FROM location WHERE location_id = $1",
      [id]
    );
    res.json(location.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
app.delete("/location/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteLocation = await pool.query(
      "DELETE FROM location WHERE location_id = $1",
      [id]
    );
    res.json("Location was deleted");
  } catch (err) {
    console.error(err.message);
  }
});
app.get("/museumSuggestions", async (req, res) => {
  try {
    const allMuseumSuggestions = await pool.query(
      "SELECT * FROM museum_suggestions"
    );
    res.json(allMuseumSuggestions.rows);
  } catch (err) {
    console.error(err.message);
  }
});
app.get("/museumSuggestions/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const museumSuggestions = await pool.query(
      "SELECT * FROM museum_suggestions WHERE museum_suggestions_id = $1",
      [id]
    );
    res.json(museumSuggestions.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
app.get("/museumSuggestions/:location", async (req, res) => {
    try {
      const { location } = req.params;
      const museumLocations = await pool.query(
        "SELECT * FROM museum_suggestions WHERE location = $location",
        [location]
      );
      res.json(museumLocations.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });
// const trip = [
//   {
//     uniqueid: "id",
//     location: "location",
//     user: "user",
//     museumSugg: [
//       {
//         id: "id",
//         user: "Germano",
//         sugg: "Il Museo del Meme merita di essere visitato!",
//       },
//       {},
//     ],
//     restaurantSugg: [],
//     hotelSugg: [],
//     placeSugg: [],
//     tourSugg: [],
//     toDoList: [
//       {
//         id: "id",
//         user: "Germano",
//         sugg: "Il museo del Meme merita di essere visitato!",
//       },
//       {},
//     ],
//     days: [
//       {
//         day: 1,
//         sugg: "Il museo del Meme merita di essere visitato!",
//       },
//     ],
//     photos: [
//       {
//         location: "location",
//         photo: "img.jpg",
//         suggestion: "Ecco una foto che ho fatto al museo del Meme!",
//       },
//     ],
//   },
// ];

// const friend = [
//     {
//         name: "Geralt",
//         surname: "of Rivia"
//     }
// ]

// const trip = [
//   {
//     id: "Tokyo",
//     location: "Tokyo",
//     photo: "Tokyo.jpg",
//   },
//   {
//     id: "Parigi",
//     location: "Parigi",
//     photo: "Parigi.jpg",
//   },
// ];

app.get("/", (req, res) => {
  res.json({
    cardViaggio: trip,
    friendSuggestion: suggestion,
    friendList: friend,
  });
});

// app.get(`/${trip[1].id}`, (req, res) => {
//     res.json({
//         location: trip[1].location,

//     })

// }
// )

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
  res.json({ error: "EH!!! VOLEVI!!!" });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
