# MVC Architechture [Model View Controller]

![mvc_express](https://github.com/yourSrijit/Advanced-Backend/assets/91645620/b38cd7f1-f48b-4c5e-8658-938322cbd608)


start 
```
npm run dev
```

## How to Write Router in your app
```
// wiki.js - Wiki route module.

const express = require("express");
const router = express.Router();

// Home page route.
router.get("/", function (req, res) {
  res.send("Wiki home page");
});

// About page route.
router.get("/about", function (req, res) {
  res.send("About this wiki");
});

module.exports = router;

```

## ORM 
ORM stands for Object-Relational Mapping. It is a programming technique that allows developers to interact with databases using object-oriented programming concepts instead of writing raw SQL queries. This makes it easier to manage and manipulate data, and it abstracts away many complexities of database interaction.
