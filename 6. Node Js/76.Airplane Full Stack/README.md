This is a base node js project template, which anyone can use as it has been prepared, by keeping some of the most important code principles and project management recommendations. Feel free to change anything. 


`src` -> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests. (You might want to make separate tests folder)

Lets take a look inside the `src` folder

 - `config` -> In this folder anything and everything regarding any configurations or setup of a library or module will be done. For example: setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is done in the `server-config.js`. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here. 

 - `routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it. 

 - `middlewares` -> they are just going to intercept the incoming requests where we can write our validators, authenticators etc. 

 - `controllers` -> they are kind of the last middlewares as post them you call you business layer to execute the budiness logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output. 

 - `repositories` -> this folder contains all the logic using which we interact the DB by writing queries, all the raw queries or ORM queries will go here.

 - `services` -> contains the buiness logic and interacts with repositories for data from the database

 - `utils` -> contains helper methods, error classes etc.

---
 
# How to Install Sequelize
Firsly install
```
npm i sequelize
npm i mysql2
npm i sequelize-cli
```

1. Inside the src folder
```
✅ npx sequelize init


Created "config\config.json"
models folder at "D:\Full Stack WebDev\Github Main\Advanced-Backend\6. Node Js\76.Airplane Full Stack\src\models" already exists.
Successfully created migrations folder at "D:\Full Stack WebDev\Github Main\Advanced-Backend\6. Node Js\76.Airplane Full Stack\src\migrations".
Successfully created seeders folder at "D:\Full Stack WebDev\Github Main\Advanced-Backend\6. Node Js\76.Airplane Full Stack\src\seeders".
PS D:\Full Stack WebDev\Github Main\Advanced-Backend\6. Node Js\76.Airplane Full Stack\src> 
```


2.Create Database 
```
✅ npx sequelize db:create 

Loaded configuration file "config\config.json".
Using environment "development".
Database Flights created.
```
3.Create Table/Model 

```
npx sequelize model:generate --name <Table Name> --attributes <age:integer> ,


New model was created at D:\Full Stack WebDev\Github Main\Advanced-Backend\6. Node Js\76.Airplane Full Stack\src\models\airplane.js .
New migration was created at D:\Full Stack WebDev\Github Main\Advanced-Backend\6. Node Js\76.Airplane Full Stack\src\migrations\20240324033758-create-airplane.js .
```
But it will note create table

4.Migrate the DB / Undo
```
npx sequelize db:migrate
npx sequelize db:migrate:undo



Loaded configuration file "config\config.json".
Using environment "development".
== 20240324033758-create-airplane: migrating =======
== 20240324033758-create-airplane: migrated (0.033s)
```
This actually create the table .You can check using `DESC Airplne`
⭐⭐model folder actually hold the js lavel constrain where migration hold the database lavel constrain
```
+-------------+--------------+------+-----+---------+----------------+
| Field       | Type         | Null | Key | Default | Extra          |
+-------------+--------------+------+-----+---------+----------------+
| id          | int          | NO   | PRI | NULL    | auto_increment |
| modelNumber | varchar(255) | NO   |     | NULL    |                |
| capacity    | int          | YES  |     | NULL    |                |
| createdAt   | datetime     | NO   |     | NULL    |                |
| updatedAt   | datetime     | NO   |     | NULL    |                |
+-------------+--------------+------+-----+---------+----------------+
```
5.`repositories` talk with db
Write all the CRUD operation inside repositories index file
```

class CrudRepo{
    constructor(model){
        this.model=model;
    }

    async create(data){
        try{
            let response=await this.model.create(data);
            return response;
        }
        catch(err){
            console.log('Something went wtong');
            throw err;
        }
        
    }
    async destroy(data){
        try{
            let response=await this.model.destroy({
                where:{
                   id:data
                }
            });
            return response;
        }
        catch(err){
            console.log('Something went wtong');
            throw err;
        }
        
    }
    async get(data){
        try{
            let response=await this.model.findByPK(data);
            return response;
        }
        catch(err){
            console.log('Something went wtong');
            throw err;
        }
        
    }

    async getAll(data){
        try{
            let response=await this.model.findAll(data);
            return response;
        }
        catch(err){
            console.log('Something went wtong');
            throw err;
        }
        
    }
    async update(id,data){
        try{
            let response=await this.model.update(data,{
                where:{
                    id:id
                }
            });
            return response;
        }
        catch(err){
            console.log('Something went wtong');
            throw err;
        }
        
    }
}
```
6.Cret























### Setup the project

 - Download this template from github and open it in your favourite text editor. 
 - Go inside the folder path and execute the following command:
  ```
  npm install
  ```
 - In the root directory create a `.env` file and add the following env variables
    ```
        PORT=<port number of your choice>
    ```
    ex: 
    ```
        PORT=3000
    ```
 - go inside the `src` folder and execute the following command:
    ```
      npx sequelize init
    ```
 - By executing the above command you will get migrations and seeders folder along with a config.json inside the config folder. 
 - If you're setting up your development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using for ex: mysql, mariadb etc
 - If you're setting up test or prod environment, make sure you also replace the host with the hosted db url.

 - To run the server execute
 ```
 npm run dev
 ```