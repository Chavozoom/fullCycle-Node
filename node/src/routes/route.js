const { Router } = require("express");
const mysql = require("mysql");

const config = {
    host: "db",
    user: "root",
    password: "root",
    database: "nodedb"
};

const router = Router();

router.get("/", (req, res, next) => {
    try {
        const connection = mysql.createConnection(config);
        connection.query('SELECT * FROM people', (error, results) => {
            if (error) {
                throw error;
            }
            connection.end();

            res.status(200).send(results);
        });
    }
    catch (error) {
        next(error);
    }
});

router.post("/", (req, res, next) => {
    try {
        const connection = mysql.createConnection(config);
        const { name } = req.body;
        const sql = `INSERT INTO people(name) values("${name.toString()}")`;
        connection.query(sql);
        connection.end();
        res.status(201).send({ message: "User name saved" });
    }
    catch (error) {
        next(error);
    }
});

module.exports = router;