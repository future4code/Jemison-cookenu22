-- Active: 1674237184378@@35.226.146.116@3306@jbl-4415982-rafael-lopes

CREATE TABLE
    Architecture_User (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    );

CREATE TABLE
    Architecture_Recipe (
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        author_id VARCHAR(255) NOT NULL,
        date_of_criation VARCHAR(255),
        FOREIGN KEY (author_id) REFERENCES Architecture_User(id)
    );

CREATE TABLE
    Architecture_UserRecipe_relation (
        recipe_id VARCHAR(255),
        author_id VARCHAR(255),
        FOREIGN KEY (recipe_id) REFERENCES Architecture_Recipe(id),
        FOREIGN KEY (author_id) REFERENCES Architecture_User(id)
    );