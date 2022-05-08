# Group 04 - Lumberjacks

# "Lancer Job Search"

## Spring 2022

------------------------------------------------------------------------------------------

## Overview: 

The current build of Lancer Job Search is a platform that allows users to quickly and efficiently apply for freelance work, with specific sections sorted by type of job, company, and trending company offerings. The main page involves "For You" and "Trending" sections, each with 5 assorted freelance jobs. This same format is used for our Jobs and Companies pages, except here the selection of jobs is sorted by field and company respectively. In addition, we have login functionality that allows users to apply in just one-click to any of the displayed jobs, which will instantly send their user information and the ID of the job they've selected to our database (specifically the "applications" table). The process has been streamlined to a great degree over other job sites, where a user only needs two clicks (one on the displayed job, and one on the submit application button) to apply and be considered for the freelance job of their dreams.

------------------------------------------------------------------------------------------

## Team Members: 

- Mustafa Gureltol (mgureltol and mustafaberke123 on GitHub)
- Damon Llopiz (dllopiz on GitHub)
- Hue Truong (hue-truong on GitHub)

------------------------------------------------------------------------------------------

## User Interface: 

- Persistent nav-bar (links to Home, Jobs, Companies, and About Us pages, includes link to login/register)
- Home page (consists of two sections each with 5 grid items of available jobs)
- Jobs page (functionally similar to Home and Companies, with sections sorted by job field)
- Companies page (functionally similar to Home and Companies, with sections sorted by popular companies)
- About Us page (basic information about us and our goals with Lancer)
- Login/Registration page (where new and existing users will enter their credentials to either register for the platform, sending their data to our "users" table, or log in, retrieving and checking their data from the "users" table)
- Job Selection page (when someone clicks on the job they want, this page will display the job title, the description of the job, and the company providing the job and a button for the user to instantly apply. If the button is clicked by an unregistered user, they'll be sent to the Login/Registration page. If the user is signed in to an account, their name, email, and job selected will be sent to our "applications" database, and a confirmation message will display on the page.)

------------------------------------------------------------------------------------------

## APIs: 

| API Endpoint | Functionality |
|----------|----------|
| app.get('/companies/company/get-jobs') | Query jobs from specific company in Jobs table |
| app.get('/companies/get-company') | Query information on company from Companies table |
| app.get('/users/get-user') | Query user information from Users table |
| app.get('/companies/get-top-picks') | Query random top picks for home page |
| app.get('/companies/get-jobs') | Query picks for 5 specific company jobs |
| app.post('/submitapp') | Submits user's name, email, and chosen job to applications table |
| app.post('/signup/user') | Submits user's name and email to users table |
| app.post('/signup/company') | Submit's company's name and login email to companies table |
| app.get('/signin') | Query user information and checks if valid |
| app.get('/company/get-applicants') | Query list of users who have applied to a specific company's jobs |

------------------------------------------------------------------------------------------

## Database: 

| Table | Columns/Fields (type varchar unless specified) | Keys |
|----------|----------|----------|
| 'users' | fname, lname, email | email(primary) |
| 'jobs' | id(int), title, descrip, cid | id(primary), cid(foreign references companies.loginid) |
| 'companies' | cname, img, loginid | loginid(primary) |
| 'applications' | fname, lname, email, job(int) | job(foreign references jobs.id) |

### Users: 

fname = first name of user

lname = last name of user

email = e-mail address user provides during sign-up

### Jobs: 

id = unique numerical identifier for specific job

title = job title

descrip = job description

cid = the company providing the job

### Companies: 

cname = company name

img = link to an image of the company's logo

loginid = the e-mail that would be used for a company to log in

### Applications: 

fname = applicant first name

lname = applicant last name

email = applicant e-mail address provided during sign-up

job = the unique ID of the job being applied to

------------------------------------------------------------------------------------------

## URL Routes/Mappings: 

URL routes are fully described in above UI and API documentation. In addition, user authentication is used for app.get('/signin') and app.post('/submitapp'), and only authorized company profiles will be able to utilize app.get('/company/get-applicants'). 

------------------------------------------------------------------------------------------

## Authentication/Authorization: 

While we weren't able to get authentication to work properly, the foundation for it exists in our code. The only difference from being logged in or out on the site comes down to the "Submit Application" button, where a logged-in user would instantly have their data sent to the applications database. If not logged-in (which is the only state implemented in our code) they're redirected to the login page.

------------------------------------------------------------------------------------------

## Division of Labor: 

Damon - Wrote all markdown files and setup.md, handled the creation and updating information of all databases, wrote most of the API endpoints in backend.js, created Procfile, auth.js, and users.js, updated package and package-lock as needed, made minor bugfixes to backend.js, managed and observed database activity using pgAdmin 4, and assisted in the creation of data-accessing SQL queries.

Mustafa - Wrote majority of the front-end. Procedurally generated DOM elements(grid items) in a way that the jobs would be listed either depending on context or by the hiring company via fetched data. Wrote GET and POST methods to communicate with back-end. Applied regex to email inputs in both sign up and sign in cases in addition to preventing user from picking a password that is less than 8 characters. Worked with CSS to maintain a concise interface for user experience. Designed company logos and Lancer logo.

Hue - Created backend.js, handled most of the connection between front-end and back-end, assisted with initial HTML and CSS coding, created the job description/application page, implemented faker with API endpoints, updated grid-items to retrieve information from the database instead of faker, assisted with SQL queries and database functionality.

------------------------------------------------------------------------------------------

## Conclusion: 

Overall, we learned a significant amount about all the moving parts that go into a complete web application. Initially our plans were far wider in scope, but the realizations of what it would take to fully realize that scope became apparent during the second milestone. We learned a lot about how to implement interactivity between different files and coding languages, how to retrieve and store data via PostgreSQL, how users are authenticated and logged in, and how other web applications handle user interaction in various complex ways. There were many difficulties, such as Heroku deployment hitting many roadbumps and various troubles with the interactivity between the CSS, JS, and HTML elements of our site. We couldn't get user authentication working due to already having implemented code that counteracts the examples shown to us in the lecture. We would have liked to have begun learning about databases and CRUD methods earlier on in the semester, as it would have provided great levity during the final steps of this project. We also wished the last bit of material went more in-depth with authorization, or at least been introduced to us sooner, as this was a major stepping stone during the final step. Our changes in scope also happened due to losing a teammate and realizing what would have to go into our original ideas (for example, we originally wanted to implement full profile customization functionality and a search function, but this was outside of our timeframe, skillsets, and purposes for this web app). Outside of that, everyone worked very efficiently and using our combined knowledge, we were able to overcome any and all snags and release a product that lays the framework for a potentially revolutionary form of freelance job searching.
