## :computer: Project description

This project consists in a simple interface built in ReactJs that consumes the myproducts-api (https://github.com/Maykerh/myproducts-api)

it has just few functions, like user registration, authentication and a CRUD of products. 

## :floppy_disk: Execution
To execute the project, first clone the repository

```bash
git clone https://github.com/Maykerh/myproducts-front.git
```

Then Install the dependencies

```bash
cd myproducts-front

yarn install
```

Edit the file src\services\api.js and change the baseURL to match your server url

```bash
const api = axios.create({
    baseURL: "http://localhost:3333",
});
```

Then start the server

```bash
yarn start
```

And done, the application should be running now

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
