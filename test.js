require('dotenv').config()

const gdax = require('./gdaxLib');

return gdax.buy()
  .then((resp, data) => {
    debugger;
    gdax.sell()
      .then((resp, data) => {
        debugger;
      })
      .catch(err => {
        debugger;
      });
  })
  .catch(err => {
    debugger;
  });
