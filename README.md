# react-employee-directory
![dependencies status](https://img.shields.io/david/maxlemieux/react-employee-directory?style=for-the-badge)
![code size](https://img.shields.io/github/languages/code-size/maxlemieux/react-employee-directory?style=for-the-badge)

## Table of Contents
* [About](#about)
* [Installation](#installation)
* [Usage](#usage)
* [Demo](#demo)
* [Technologies](#technologies)
* [Bugs](#bugs)

## About
School project: Employee directory front end built from scratch in React.js. Uses Axios to fetch data.

## Installation

### Get the app:

Clone the repo:

`git clone https://github.com/maxlemieux/react-employee-directory.git`

Install the dependencies.

`cd react-employee-directory`

`npm i`

## Usage

Start the server:

`npm start`

Load the app at [http://localhost:3000](http://localhost:3000).

The list of employees is retrieved from an API. The result set changes on each page load.

Search employees by name, email, phone or date of birth.

Sort the table of results by name, email, phone or date of birth.

## Demo
A demo of the app can be found here:

[https://arcane-dusk-58843.herokuapp.com/](https://arcane-dusk-58843.herokuapp.com/)

## Technologies
* React
* Material UI
* Axios
* Heroku

## Bugs
One of the dependencies of create-react-app is throwing a warning on npm audit. Updating the dependency doesn't fix the warning. See https://github.com/facebook/create-react-app/pull/8975 for more information. This is probably why the dependency badge on this page isn't passing its tests.
