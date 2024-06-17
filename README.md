# AUTOMATION LATLONG PROJECT

Project build with Cypress + Typescript + Cucumber

# Installation and Setup

Run this commands in order to setup Cypress and needed dependencies in your local machine:

```bash
cd /your/project/path
npm install
npx cypress install


# Running tests locally
Open the Cypress GUI by executing `npm run cy:open` for running tests using cypress dashboard.
Open the Cypress GUI by executing `npm run cy:run` for running tests using cypress headless.

# Reports locally
Reports will be generate as a .html file in the root path as cucumber-report.hml

# Project Structure and settings
> The project was built using cypress framework with Typescript.
> I used POM (Page Object Model).
> I set it up to run it in differents environments (/config)
> I used assert-pages in order to reuse assertions
> I created some data generators for reusability.

```
