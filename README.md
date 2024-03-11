## About

This project implements a proxy server for the [NASA API](https://api.nasa.gov) using Node/Express

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment variables](#environment-variables)

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
