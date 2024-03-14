## About

This project implements a proxy server for the [NASA API](https://api.nasa.gov) using Node/Express

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment variables](#environment-variables)
- [Response example](#response-example)

## Prerequisites:

- [Node.js](https://nodejs.org/en/download) (version 20.11.1 or later)

## Getting Started

To install dependencies:

```shell
npm install
```

To run the application:

```shell
npm run dev
```

Eslint report:

```shell
npm run eslint
```

To format the code with prettier:

```shell
npm run prettier
```

## Environment variables

Environment variables are stored in .env file. To start the application make sure all env variables are described

- **API_URL** - URL providing a continuous feed of asteroid information. You can find more details [here](https://api.nasa.gov/)
- **API_KEY** - api.nasa.gov API Key for expanded usage
- **PORT** - port number used by the proxy server

## Response example

The endpoint returns responses based on the query params:

- **date** - helps to set the period during which we are interested in information on meteorites
- **were_dangerous_meteors** - returns only the meteorites potentially dangerous to Earth
- **count** - using this query a response returns only the number of meteorites that have been seen close to Earth

Cases:

1. Returns only meteors:

```json
{
  "meteors": [
    {
      "id": "2522684",
      "name": "522684 (2016 JP)",
      "diameter": {
        "estimated_diameter_min": 157.96285576,
        "estimated_diameter_max": 353.2156833994
      },
      "is_potentially_hazardous_asteroid": false,
      "close_approach_date_full": "2024-Mar-04 09:44",
      "relative_velocity": "8.7769820277"
    },
    {
      "id": "3274905",
      "name": "(2005 FN)",
      "diameter": {
        "estimated_diameter_min": 11.0803882126,
        "estimated_diameter_max": 24.7765012606
      },
      "is_potentially_hazardous_asteroid": true,
      "close_approach_date_full": "2024-Mar-04 12:16",
      "relative_velocity": "23.0111599306"
    }
  ]
}
```

2. Returns only dangerous meteors:

```json
{
  "meteors": [
    {
      "id": "3274905",
      "name": "(2005 FN)",
      "diameter": {
        "estimated_diameter_min": 11.0803882126,
        "estimated_diameter_max": 24.7765012606
      },
      "is_potentially_hazardous_asteroid": true,
      "close_approach_date_full": "2024-Mar-04 12:16",
      "relative_velocity": "23.0111599306"
    }
  ]
}
```

3. Returns the count and meteors:

```json
{
  "count": 2,
  "meteors": [
    {
      "id": "2522684",
      "name": "522684 (2016 JP)",
      "diameter": {
        "estimated_diameter_min": 157.96285576,
        "estimated_diameter_max": 353.2156833994
      },
      "is_potentially_hazardous_asteroid": false,
      "close_approach_date_full": "2024-Mar-04 09:44",
      "relative_velocity": "8.7769820277"
    },
    {
      "id": "3274905",
      "name": "(2005 FN)",
      "diameter": {
        "estimated_diameter_min": 11.0803882126,
        "estimated_diameter_max": 24.7765012606
      },
      "is_potentially_hazardous_asteroid": true,
      "close_approach_date_full": "2024-Mar-04 12:16",
      "relative_velocity": "23.0111599306"
    }
  ]
}
```

4. Return count and dangerous meteors:

```json
{
  "count": 1,
  "meteors": [
    {
      "id": "3274905",
      "name": "(2005 FN)",
      "diameter": {
        "estimated_diameter_min": 11.0803882126,
        "estimated_diameter_max": 24.7765012606
      },
      "is_potentially_hazardous_asteroid": true,
      "close_approach_date_full": "2024-Mar-04 12:16",
      "relative_velocity": "23.0111599306"
    }
  ]
}
```
