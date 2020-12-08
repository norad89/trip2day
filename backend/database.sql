CREATE DATABASE trip2day;

CREATE TABLE location(
    location_id SERIAL PRIMARY KEY,
    location VARCHAR(255)
);

CREATE TABLE museum_suggestions (
    museum_suggestions_id integer PRIMARY KEY NOT NULL,
    author character varying,
    sug character varying,
    CONSTRAINT location_fk FOREIGN KEY (location) REFERENCES public.location (location) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION NOT VALID
);

CREATE TABLE restaurant_suggestions (
    restaurantSuggestions_id integer PRIMARY KEY NOT NULL,
    author character varying,
    sug character varying,
    CONSTRAINT location_fk FOREIGN KEY (location) REFERENCES public.location (location) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION NOT VALID
)

CREATE TABLE hotel_suggestions (
    hotelSuggestions_id integer PRIMARY KEY NOT NULL,
    author character varying,
    sug character varying,
    CONSTRAINT location_fk FOREIGN KEY (location) REFERENCES public.location (location) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION NOT VALID
)

CREATE TABLE place_suggestions (
    placeSuggestions_id integer PRIMARY KEY NOT NULL,
    author character varying,
    sug character varying,
    CONSTRAINT location_fk FOREIGN KEY (location) REFERENCES public.location (location) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION NOT VALID
)

CREATE TABLE tour_suggestions (
    tourSuggestions_id integer PRIMARY KEY NOT NULL,
    author character varying,
    sug character varying,
    CONSTRAINT location_fk FOREIGN KEY (location) REFERENCES public.location (location) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION NOT VALID
)