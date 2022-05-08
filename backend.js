import express from 'express';
import logger from 'morgan';
import path from 'path'
import * as http from 'http';
import * as url from 'url';
import pkg from 'pg';
const { Pool, Client } = pkg;
import { faker } from '@faker-js/faker';
import 'dotenv/config'

const client = new Client({ connectionString: process.env.DATABASE_URI, ssl: true});

const jsonParser = express.json();
const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

client.connect();
//Both the if-statement and app.get used to specify the path to index.html for the Heroku server
app.use(express.static('./frontend'));

// Query jobs from specific company in Jobs table
app.get('/companies/company/get-jobs', async (req, r) => {
    // const COMMAND = `SELECT title, descrip, cname, img FROM "lancer-data".jobs, "lancer-data".companies WHERE jobs.cid = companies.loginid AND companies.cname = '${req.query.company}';`
    const COMMAND = `SELECT * FROM "lancer-data".companies`
    client.query(COMMAND, (err, res) => {
        console.log(res)
        if(err){ r.status(501).send("ERROR: Could not get top picks!"); }
        else{ r.status(200).send(res); }
    });
})

// Query information on company from Companies table
app.get('/companies/get-company', async (req, r) => {
    // const COMMAND = `SELECT * FROM "lancer-data".companies WHERE loginid = '${req.query.loginid}'`
    // client.connect();
    // client.query(COMMAND, (err, res) => {
    //     if (err) { r.status(501).send("ERROR: Could not get company!"); }
    //     else { r.status(200).send(res); }
    // })
    // client.end();
})

// Query user information from Users table
app.get('/users/get-user', async (req, r) => {
    const COMMAND = `SELECT * FROM users WHERE email = ${req.query.email}`

    client.query(COMMAND, (err, res) => {
        if(err){ r.status(501).send("ERROR: Could not get top picks!"); }
        else{ r.status(200).send(res); }
    });
})

// Query random top picks for home page
app.get('/companies/get-top-picks', jsonParser, async (req, r) => {
    const COMMAND = 'SELECT * FROM "lancer-data".companies ORDER BY RANDOM() LIMIT 5'

    client.query(COMMAND, (err, res) => {
        if(err){ r.status(501).send("ERROR: Could not get top picks!"); }
        else{ r.status(200).send(res); }
    });
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
            img: faker.image.cats(512, 512, true)
        }
    })

    r.status(200).send(test)
})

app.get('/companies/get-companies-jobs', jsonParser, async (req, r) => {

    const test = new Array(5).fill().map(x => {
        return {
            name: faker.company.companyName(),
            img: faker.image.cats(512, 512, true),
            job_title: faker.hacker.noun()
        }
    })

    r.status(200).send(test)
})

// Gets 5 jobs from a given companies in the jobs table
app.get('/companies/get-jobs', jsonParser, async (req, r) => {
    const COMMAND = `SELECT title, cname, img, descrip  FROM "lancer-data".jobs, "lancer-data".companies WHERE jobs.cid = companies.loginid AND companies.cname = '${req.query.company}'`;
    client.query(COMMAND, (err, res) => {
        if(err){ r.status(501).send("ERROR: Could not get top picks!"); }
        else{ r.status(200).send(res.rows); }
    });
});

//Takes given user data and submits to a new "applications" table
//Sends user name, email, and job applied to
app.post('/submitapp', jsonParser, async (req, r) => {
    const COMMAND =
        `INSERT INTO "lancer-data".applications (fname, lname, email, job)
    VALUES ('${req.query.fname}', '${req.query.lname}', '${req.query.email}', ${req.query.job})
    ON DUPLICATE KEY UPDATE
    fname = '${req.query.fname}',
    lname = '${req.query.lname}',
    job = ${req.query.job};`;

    client.query(COMMAND, (err, res) => {
        if(err){ r.status(501).send("ERROR: Could not get top picks!"); }
        else{ r.status(200).send(res); }
    });
});

//Takes data from HTML form and submits info to "users" table
//Sends user name, email, password
app.post('/signup/user', jsonParser, async (req, r) => {
    const COMMAND =
        `INSERT INTO "lancer-data".users (fname, lname, email, pass)
    VALUES ('${req.query.fname}', '${req.query.lname}', '${req.query.email}', '${req.query.pass}')
    ON DUPLICATE KEY UPDATE
    fname = '${req.query.fname}',
    lname = '${req.query.lname}',
    pass = '${req.query.pass}';`;

    client.query(COMMAND, (err, res) => {
        if(err){ r.status(501).send("ERROR: Could not get top picks!"); }
        else{ r.status(200).send(res); }
    });
});

//Takes data from HTML form and submits info to "companies" table
//Sends company name, login id (email), password
app.post('/signup/company', jsonParser, async (req, r) => {
    const COMMAND =
        `INSERT INTO "lancer-data".companies (cname, loginid, pass)
    VALUES ('${req.query.cname}', '${req.query.loginid}', '${req.query.pass}')
    ON DUPLICATE KEY UPDATE
    cname = '${req.query.cname}',
    pass = '${req.query.pass}';`;

    client.query(COMMAND, (err, res) => {
        if(err){ r.status(501).send("ERROR: Could not get top picks!"); }
        else{ r.status(200).send(res); }
    });
});

app.get('/signin', jsonParser, async (req, r) => {
    const COMMAND = `SELECT fname, lname FROM "lancer-data".users 
    WHERE email = '${req.query.email}' AND pass = '${req.query.pass}';`;

    client.query(COMMAND, (err, res) => {
        if(err){ r.status(501).send("ERROR: Could not get top picks!"); }
        else{ r.status(200).send(res); }
    });
});

app.get('/company/get-applicants', jsonParser, async (req, r) => {
    const COMMAND = `SELECT fname, lname, email, job FROM "lancer-data".applications, "lancer-data".jobs, "lancer-data".companies 
    WHERE applications.job = jobs.id AND jobs.cid = companies.loginid 
    AND companies.loginid = '${req.query.loginid}';`;

    client.query(COMMAND, (err, res) => {
        if(err){ r.status(501).send("ERROR: Could not get top picks!"); }
        else{ r.status(200).send(res); }
    });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

