Milestone 2 - Damon Llopiz, Mustafa Gureltol, Hue Truong

https://lancer-job-search.herokuapp.com/ (currently experiencing an error, unable to sort out in time for GitHub release)

(images still in progress as of 4/21/22)

--API Documentation--

app.get('/companies/company/get-jobs', async (req, r) => {
    const COMMAND = `SELECT * FROM jobs WHERE company = ${req.query.company}`
    client.connect()
    client.query(COMMAND, (err, res) => {
        if(err){ r.status(501).send("ERROR: Could not get company!"); }
        else{ r.status(200).send(res); }
    })
})
Queries jobs from a specific company in the 'jobs' table. This will be utilized on our 'Companies' page, where users will be shown the top 5 jobs within a section for a specific company. It activates when a user accesses the Companies page from the navigation bar.
Example: User clicks 'Companies' option on navigation bar. They will be redirected to the above link where each job's information will be fetched and loaded into their respective companys' sections.

app.get('/companies/get-company', async (req, r) => {
    const COMMAND = `SELECT * FROM companies WHERE id = ${req.query.id}`
    client.connect()
    client.query(COMMAND, (err, res) => {
        if(err){ r.status(501).send("ERROR: Could not get company!"); }
        else{ r.status(200).send(res); }
    })
})
Queries information on company from the 'companies' table. Based on a given company ID, it will return all information for that specific company and display it on a user-style page. This will activate when a user clicks on a specific company's image/name when searching for jobs.
Example: User clicks on a profile picture of Google. They will be directed to this link where Google's basic information will be fetched from the 'companies' table and displayed to the user.

app.get('/users/get-user', async (req, r) => {
    const COMMAND = `SELECT * FROM users WHERE id = ${req.query.id}`
    client.connect()
    client.query(COMMAND, (err, res) => {
        if(err){ r.status(501).send("ERROR: Could not get user!"); }
        else{ r.status(200).send(res); }
    })
})
Queries user information from 'users' table. Based on a user's given ID, it will return all information regarding the user associated with the ID and display it on a user page. It will activate when a user attempts to view their own page.
Example: User clicks their own profile picture, they will be redirected here. The query will access the user dataframe and display the given information.

app.get('/companies/get-top-picks', async (req, r) => {
    const test = new Array(5).fill().map(x => {
        return {
            name: faker.company.companyName(),
            img: faker.image.cats(512, 512, true)
        }
    })
})
Queries random top picks for companies page. It will access the companies page and retrieve 5 random IDs, where the IDs will be used to make the actual sections of grid items on the page. It will be activated upon accessing the companies page from the navigation bar.
Example: User clicks 'Companies' option on navigation bar. They will be redirected to the above link where each ID loaded will determine which company will occupy which section of the page.

--Progress Images--

![Alt](.png "Homepage")
[Desc. here]

![Alt](.png "Jobs page")
[Desc. here]

![Alt](.png "Companies page")
[Desc. here]

![Alt](.png "User page")
[Desc. here]

--Division of Labor--

Damon: Handled API + setup documentation, created Heroku app and skeleton dataclip with 3 SQL tables needed for final product, handled commits and pushes of application using Heroku CLI and Git, made minor backend.js 
adjustments.

Mustafa: Wrote most of the front-end code. Transformed the bare HTML elements into iterative JavaScript code that fetches data from the database, and iterates over small loops to fill the grid items within HTML. Used faker.js for the scope of this milestone.

Hue: Implementation of backend dummy API endpoints, as well as skeleton code for database queries in the backend using Javascript.
