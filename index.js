var express = require('express'),
    app = express(),
    coffeeBear = require('./coffee-bear');

app.get('/api/measurements', function (req, res) {
  coffeeBear(function (err, data) {
    if (err) {
      res.json(500, {error: err});
    }
    res.json(data);
  });
});

app.listen(3000, function () {
  console.log('listening on port 3000');
});
