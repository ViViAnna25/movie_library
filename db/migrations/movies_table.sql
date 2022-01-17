DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
    id serial PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    lead_actor VARCHAR(100) NOT NULL,
    year_of_production int NOT NULL
);
