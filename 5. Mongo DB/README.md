# Advanced MongoDB
MongoDB is a document-oriented, open-source, cross-platform database program. It's a NoSQL database product that stores data in JSON-like documents with optional schemas.

---

1.Start
```
mongosh
```
2.Usefull CMD
```
show dbs          show all the databases
use <db-name>     use that database
db.dropDatabase();

show collections;
db.createCollection("collection-name")
db.<collections-name>.drop();
```
`You can not see the database untill you create any collections`

3.Insertion operation
```
db.<collections-name>.insertOne({
    name:"srijit bera",
    age:"15
})

db.<collections-name>.insertMany([          // Insert Multiple data in array form
    {
    name:"srijit bera",
    age:15
    },
    {
    name:"Bishtu saha",
    age:15
    }
])

```

4.Find data
```
db.<collection-name>.find({key:value}); 
db.<collection-name>.findOne({name:"srijit bera"});
```

` By Default MongoDB store data in order fashion thats mean if any error happen in side the cod ebefor ethe error all the part execute successfully 
I you want to insert 100 data inside and if there have any error occure then the before error code are inserted successfully `
If you want to do it un-order insertion do `{ordered:false} ` 

5.Importing JSON in MongoDB
```
mongoimport jsonfile.json –d database_name –c collection_name
mongoimport products.json -d shop -c products
mongoimport products.json -d shop -c products --jsonArray


Here, --jsonArray accepts the import of data expressed with multiple
MongoDB documents within a single JSON array.
Limited to imports of 16 MB or smaller.
```

6.Comparison Operator
```
- $eq         find({'price':{$in:69}})
- $ne
- $gt 
- $gte
- $lt 
- $lte 
- $in         $in:[]
- $nin        not in
```

### Introduction to Cursors Methods
- count() 
- limit() max filw shown
- skip()  dont show that no file
- sort()

```
db.products.find({ price: { $gt: 250 } }).count();
db.products.find({ price: { $gt: 250 } }).limit(5);
db.products.find({ price: { $gt: 250 } }).limit(5).skip(2);
db.products.find({ price: { $gt: 1250 }})'.limit(3).sort({ 'price': 1 });

(1) for ascending and (-1) for descending
```

### Logical Operators
- $and 
- $or 
- $not 
- $nor

```
{ $and: [ { condition1 }, { condition2 }, ... ] }
{ field: { $not: { operator: value } } }

```