```javascript
// Incorrect use of $in operator with an array of objects
db.collection.find({ field: { $in: [{ value: 1 }, { value: 2 }] } });
```