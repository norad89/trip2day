const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const pool = require("./db");
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }));

const knex = require("knex")({
  client: "postgres",
  connection: {
    user: "postgres",
    password: "trip2day",
    host: "localhost",
    port: 3002,
    database: "trip2day",
  },
  useNullAsDefault: true,
});

app.post("/upload", async (req, res) => {
  const { name, data } = req.files.image;
  if (name && data) {
    await knex.insert({ name: name, image: data }).into("images");
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});

app.get("/images/:id", async (req, res) => {
  const id = req.params.id;
  const img = await knex("images").where({ image_id: id }).first();
  if (img) {
    res.end(img.image);
  } else {
    res.end("No Img with that Id!");
  }
});

app.put("/images/", async (req, res) => {
  try {
    const { suggestion } = req.body;
    const newSuggestion = await pool.query(
      "UPDATE images SET sugg = $1 WHERE image_id = 1",
      [suggestion]
    );
    res.json(newSuggestion.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/images/sugg/:id", async (req, res) => {
  const id = req.params.id;
  const sug = await knex("images").where({ image_id: id }).first();
  console.log(sug)
  if (sug) {
    res.end(sug.sugg);
  } else {
    res.end("No sug with that Id!");
  }
});

//LOCATION///////////////////////////////////////////////////////////////////

app.put("/location/", async (req, res) => {
  try {
    const { location } = req.body;
    const newLocation = await pool.query(
      "UPDATE location SET location = $1 WHERE location_id = 1",
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

//SUGGESTIONS///////////////////////////////////////////////////////////////////

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
app.get("/restaurantSuggestions", async (req, res) => {
  try {
    const allRestaurantSuggestions = await pool.query(
      "SELECT * FROM restaurant_suggestions"
    );
    res.json(allRestaurantSuggestions.rows);
  } catch (err) {
    console.error(err.message);
  }
});
app.get("/hotelSuggestions", async (req, res) => {
  try {
    const allHotelSuggestions = await pool.query(
      "SELECT * FROM hotel_suggestions"
    );
    res.json(allHotelSuggestions.rows);
  } catch (err) {
    console.error(err.message);
  }
});
app.get("/placeSuggestions", async (req, res) => {
  try {
    const allPlaceSuggestions = await pool.query(
      "SELECT * FROM place_suggestions"
    );
    res.json(allPlaceSuggestions.rows);
  } catch (err) {
    console.error(err.message);
  }
});
app.get("/tourSuggestions", async (req, res) => {
  try {
    const allTourSuggestions = await pool.query(
      "SELECT * FROM tour_suggestions"
    );
    res.json(allTourSuggestions.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//EVENTSLIST///////////////////////////////////////////////////////////////////

app.post("/tripEventsList/", async (req, res) => {
  try {
    const { eventslist } = req.body;
    console.log(req.body);
    const newEventslist = await pool.query(
      "INSERT INTO trip_eventslist (events) VALUES($1) RETURNING *",
      [eventslist]
    );
    res.json(newEventslist.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/tripEventsList", async (req, res) => {
  try {
    const allEventslist = await pool.query("SELECT * FROM trip_eventslist");
    res.json(allEventslist.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//TODOLIST///////////////////////////////////////////////////////////////////

app.post("/tripToDoList/", async (req, res) => {
  try {
    const { todolist } = req.body;
    const newTodolist = await pool.query(
      "INSERT INTO trip_todolist (todo) VALUES($1) RETURNING *",
      [todolist]
    );
    res.json(newTodolist.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
app.get("/tripToDoList", async (req, res) => {
  try {
    const allTodolist = await pool.query("SELECT * FROM trip_todolist");
    res.json(allTodolist.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//OTHER///////////////////////////////////////////////////////////////////

app.get("/", (req, res) => {
  res.json({
    cardViaggio: trip,
    friendSuggestion: suggestion,
    friendList: friend,
  });
});

app.all((req, res) => {
  res.json({ error: "EH!!! VOLEVI!!!" });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

/*
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
*/
