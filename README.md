# Colmeia Backend

This is a simple API for [Colmeia Frontend](https://github.com/LORDBABUINO/colmeia-frontend) SPA.

## Requirements

* `yarn`

## Install

```bash
$ git clone https://github.com/LORDBABUINO/colmeia-backend.git
$ cd colmeia-backend
$ yarn
```

## Configuration

In order to run the API, you must have a [parse](https://docs.parseplatform.org/js/guide/) database with the following entity:

| Professores          |        |
| -------------------- | ------ |
| objectId             | String |
| nome                 | String |
| imagem               | File   |
| curriculo            | String |
| materia              | Array  |
| nota                 | Number |
| bairro               | String |

Then duplicate the file `.env.example` and rename it to `.env`.
Inside `.env` file, set the values of `FRONTEND_URL`, `APP_ID`, `JAVASCRIPT_KEY` and `DB_URL` to the frontend url, app id, javascript key and url of your parse database respectively. If you are using [back4app](https://www.back4app.com), your parse url should be  https://parseapi.back4app.com.

## Usage

You can run it by running `yarn start` inside it's folder.
The default port is `3333` but you change it changing the `PORT` variable in `.env` file.

The only route of this API is a GET route named `/teachers`. It can receive a string on parameter `name` to search for instances of entity `professors` that match attribute `nome` with parameter received.

## Test

```bash
$ yarn test
```
