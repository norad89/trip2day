CREATE DATABASE trip2day;

CREATE TABLE location(
    location_id SERIAL PRIMARY KEY,
    location VARCHAR(255)
);

CREATE TABLE museum_suggestions (
    museum_suggestions_id integer PRIMARY KEY NOT NULL,
    author character varying,
    sug character varying
);

INSERT INTO
    museum_suggestions(museum_suggestions_id, author, sug)
VALUES
    (1, 'Michael', 'Visita il British Museum'),
    (2, 'Jeffrey', 'Visita il museo delle cere');

CREATE TABLE restaurant_suggestions (
    restaurant_suggestions_id integer PRIMARY KEY NOT NULL,
    author character varying,
    sug character varying
);

INSERT INTO
    restaurant_suggestions(restaurant_suggestions_id, author, sug)
VALUES
    (1, 'Archibald', 'Mangia a Puglia Calling'),
    (
        2,
        'Vergil',
        'Mangia al ristorante di Gordon Ramsey'
    );

CREATE TABLE hotel_suggestions (
    hotel_suggestions_id integer PRIMARY KEY NOT NULL,
    author character varying,
    sug character varying
);

INSERT INTO
    hotel_suggestions(hotel_suggestions_id, author, sug)
VALUES
    (1, 'John', 'Vai al Savoy'),
    (2, 'Jack', 'Vai al Comfort Hotel');

CREATE TABLE place_suggestions (
    place_suggestions_id integer PRIMARY KEY NOT NULL,
    author character varying,
    sug character varying
);

INSERT INTO
    place_suggestions(place_suggestions_id, author, sug)
VALUES
    (1, 'Bernard', 'Visita Hyde Park'),
    (2, 'Gerald', 'Visita il Big Ben');

CREATE TABLE tour_suggestions (
    tour_suggestions_id integer PRIMARY KEY NOT NULL,
    author character varying,
    sug character varying
);

INSERT INTO
    tour_suggestions(tour_suggestions_id, author, sug)
VALUES
    (
        1,
        'Sasha',
        'Fai un giro sugli autobus turistici!'
    ),
    (2, 'Lana', 'Fai il giro della città in bici');

CREATE TABLE trip_todolist (
    tripodolist_id SERIAL PRIMARY KEY NOT NULL,
    todo character varying
);

CREATE TABLE trip_eventslist (
    trip_eventslist_id SERIAL PRIMARY KEY NOT NULL,
    events json[]
);

CREATE TABLE images (
    image_id SERIAL PRIMARY KEY NOT NULL,
    image bytea,
    name character varying,
)