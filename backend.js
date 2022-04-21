import express from 'express';
import logger from 'morgan';
import * as http from 'http';
import * as url from 'url';
import pkg from 'pg';
const { Pool, Client } = pkg;
import { faker } from '@faker-js/faker';

// const client = new Client({ 
//     "user": "postgres",
//     "host": "localhost",
//     "database": "postgres",
//     "password": "123",
//     "port": 5432
// });

const jsonParser = express.json();
const app = express();
const port = 3000;
app.use(logger('dev'));``
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Query jobs from specific company in Jobs table
app.get('/companies/company/get-jobs', async (req, r) => {
    const COMMAND = `SELECT * FROM jobs WHERE company = ${req.query.company}`
    client.connect();
    client.query(COMMAND, (err, res) => {
        if (err) { r.status(501).send("ERROR: Could not get jobs!"); }
        else { r.status(200).send(res); }
    });
    client.end();
})

// Query information on company from Companies table
app.get('/companies/get-company', async (req, r) => {
    // const COMMAND = `SELECT * FROM companies WHERE id = ${req.query.id}`
    // client.connect();
    // client.query(COMMAND, (err, res) => {
    //     if (err) { r.status(501).send("ERROR: Could not get company!"); }
    //     else { r.status(200).send(res); }
    // })
    // client.end();
})

// Query user information from Users table
app.get('/users/get-user', async (req, r) => {
    const COMMAND = `SELECT * FROM users WHERE id = ${req.query.id}`
    client.connect();
    client.query(COMMAND, (err, res) => {
        if (err) { r.status(501).send("ERROR: Could not get user!"); }
        else { r.status(200).send(res); }
    })
    client.end();
})

// Query random top picks for home page
app.get('/companies/get-top-picks', jsonParser, async (req, r) => {
    // const COMMAND = 'SELECT id FROM companies ORDER BY RANDOM() LIMIT 5'
    // client.connect();
    // client.query(COMMAND, (err, res) => {
    //     if(err){ r.status(501).send("ERROR: Could not get top picks!"); }
    //     else{ r.status(200).send(res); }
    // });
    // client.end();
    const test = new Array(5).fill().map(x => {
        return {
            name: faker.company.companyName(),
            img: faker.image.cats(512, 512, true)
        }
    })

    r.status(200).send(test)
})

app.get('/companies/get-top-picks', jsonParser, async (req, r) => {
    // const COMMAND = 'SELECT id FROM companies ORDER BY RANDOM() LIMIT 5'
    // client.connect();
    // client.query(COMMAND, (err, res) => {
    //     if(err){ r.status(501).send("ERROR: Could not get top picks!"); }
    //     else{ r.status(200).send(res); }
    // });
    // client.end();
    const test = new Array(5).fill().map(x => {
        return {
            name: faker.company.companyName(),
            img: faker.image.cats(512, 512, true)
        }
    })

    r.status(200).send(test)
})

app.get('/companies/get-trending-companies', jsonParser, async (req, r) => {
    const test = new Array(5).fill().map(x => {
        return {
            name: faker.company.companyName(),
            img: faker.image.cats(512, 512, true)
        }
    })

    r.status(200).send(test)
})

app.get('/companies/get-trending-companies', jsonParser, async (req, r) => {
    const test = new Array(5).fill().map(x => {
        return {
            name: faker.company.companyName(),
            img: faker.image.cats(512, 512, true)
        }
    })

    r.status(200).send(test)
})

app.get('/companies/get-trending-companies', jsonParser, async (req, r) => {
    const test = new Array(5).fill().map(x => {
        return {
            name: faker.company.companyName(),
            img: faker.image.cats(512, 512, true)
        }
    })

    r.status(200).send(test)
})

app.get('/companies/get-companies', jsonParser, async (req, r) => {
    const test = new Array(5).fill().map(x => {
        return {
            name: faker.company.companyName(),
            img: faker.image.business(512, 512, true)
        }
    })

    r.status(200).send(test)
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});