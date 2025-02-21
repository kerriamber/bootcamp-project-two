# bootcamp-project-two

A Dad Joke Coffee Blog

## Installation & Running in Dev Environment

1. Clone the repo.

### Installing and Setting Up Postgres

1. Install Postgres
2. Login to postgres with `psql -U postgres`
3. Run `\i server/src/db/schema.sql` to create the database.
4. Run `\q` to quit postgres.

### Setting up and Installing the App

2. Run `cp .env.EXAMPLE .env`
3. Update the values in .env file to reflect your local setup (you'll want to use DB_NAME, DB_PASSWORD, DB_USER if you're running locally, production uses DB_URL instead)
4. Install all the dependencies by running `npm i`
5. run `psql
6. Run the dev server with `npm run dev`

## Viewing the Production Version

The main branch is continuously deployed to Render.com

Visit https://bootcamp-project-two.onrender.com
