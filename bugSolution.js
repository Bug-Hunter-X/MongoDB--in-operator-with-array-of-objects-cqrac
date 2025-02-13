```javascript
// Correct use of $or operator
db.collection.find({ $or: [{ field: { value: 1 } }, { field: { value: 2 } }] });
```