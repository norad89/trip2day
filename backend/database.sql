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

CREATE TABLE restaurant_suggestions (
    restaurant_suggestions_id integer PRIMARY KEY NOT NULL,
    author character varying,
    sug character varying
);

CREATE TABLE hotel_suggestions (
    hotel_suggestions_id integer PRIMARY KEY NOT NULL,
    author character varying,
    sug character varying
);

CREATE TABLE place_suggestions (
    place_suggestions_id integer PRIMARY KEY NOT NULL,
    author character varying,
    sug character varying
);

CREATE TABLE tour_suggestions (
    tour_suggestions_id integer PRIMARY KEY NOT NULL,
    author character varying,
    sug character varying
);

CREATE TABLE trip_todolist (
    tripodolist_id integer PRIMARY KEY NOT NULL,
    todo character varying
);

CREATE TABLE trip_eventslist (
    trip_eventslist_id integer PRIMARY KEY NOT NULL,
    startdate character varying,
    enddate character varying,
    title character varying
);