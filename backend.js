import express from 'express';
import logger from 'morgan';
import * as http from 'http';
import * as url from 'url';
import pkg from 'pg';
const { Pool, Client } = pkg;

const client = new Client({ 
    "user": "postgres",
    "host": "localhost",
    "database": "postgres",
    "password": "123",
    "port": 5432
});

const app = express();
const port = 3000;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Query jobs from specific company in Jobs table
app.get('/companies/company/get-jobs', async (req, r) => {
    const COMMAND = `SELECT * FROM jobs WHERE company = ${req.query.company}`
    client.connect()
    client.query(COMMAND, (err, res) => {
        if(err){ r.status(501).send("ERROR: Could not get company!"); }
        else{ r.status(200).send(res); }
    })
})

// Query information on company from Companies table
app.get('/companies/get-company', async (req, r) => {
    const COMMAND = `SELECT * FROM users WHERE id = ${req.query.id}`
    client.connect()
    client.query(COMMAND, (err, res) => {
        if(err){ r.status(501).send("ERROR: Could not get company!"); }
        else{ r.status(200).send(res); }
    })
})

// Query user information from Users table
app.get('/users/get-user', async (req, r) => {
    const COMMAND = `SELECT * FROM users WHERE id = ${req.query.id}`
    client.connect()
    client.query(COMMAND, (err, res) => {
        if(err){ r.status(501).send("ERROR: Could not get user!"); }
        else{ r.status(200).send(res); }
    })
})

// Query random top picks for home page
app.get('/companies/get-top-picks', async (req, r) => {
    const COMMAND = 'SELECT id FROM companies ORDER BY RANDOM() LIMIT 5'
    client.connect()
    client.query(COMMAND, (err, res) => {
        if(err){ r.status(501).send("ERROR: Could not get top picks!"); }
        else{ r.status(200).send(res); }
    })
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });