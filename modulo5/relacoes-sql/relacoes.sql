CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    name varchar(255) NOT NULL
);

CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);
