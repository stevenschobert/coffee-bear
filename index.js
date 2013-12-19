var express = require('express'),
    app = express(),
    coffeeBear = require('./coffee-bear');

// configuration
app.set('port', process.env.PORT || 5000);

app.get('/api/measurements', function (req, res) {
  coffeeBear(function (err, data) {
    if (err) {
      res.json(500, {error: err});
    }
    res.json(data);
  });
});

app.listen(app.get('port'), function () {
  console.log('listening on port ' + app.get('port'));
});
