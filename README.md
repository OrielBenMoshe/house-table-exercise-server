#  House-Table-Exercise-Server

[![Node.js](https://img.shields.io/badge/Node.js-v14.17.3-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v4.4.3-blue.svg)](https://www.typescriptlang.org/)
[![Sequelize](https://img.shields.io/badge/Sequelize-v6.9.0-orange.svg)](https://sequelize.org/)

Server-side of mini version of home evaluation system
that includes a risk calculation model for potential loans.

## Table of Contents

* [Installation](#installation)
* [Configuration](#Configuration)
* [Usage](#usage)

## Installation

1. Clone the repository.

```bash
git clone https://github.com/OrielBenMoshe/house-table-exercise-server.git
```

2. Navigate to the project directory.

``` bash 
cd house-table-exercise-server

```

3. Install the dependencies.

``` bash
yarn
```

## Configuration

1. Make sure you have access to a PostgreSQL database.
2. Create an `.env` file in the root directory of your project and add the following parameters:

| Parameter    | Description               |
|--------------|---------------------------|
| DB_HOST      | Your database host    |
| DB_USER      | Your database username    |
| DB_PASS      | Your database password    |
| DB_NAME      | Your database name        |
| DB_PORT      | Your database port        |
| SERVER_PORT  | Your server port          |

## Usage

1. Start the application.

```bash
yarn dev
```

2. Open your web browser and visit http://localhost:(Your server port).
