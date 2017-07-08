const crypto = require('crypto');
const Gdax = require('gdax');

const {
  GDAX_API_KEY,
  GDAX_PASS_PHRASE,
  GDAX_API_SECRET,
  GDAX_API_URL,
  TRADE_PRODUCT_ID,
  TRADE_USD_COST
} = process.env;

const client = new Gdax.AuthenticatedClient(
  GDAX_API_KEY,
  GDAX_API_SECRET,
  GDAX_PASS_PHRASE,
  GDAX_API_URL
);

exports.sell = () => {
  const params = {
    'type': 'market',
    'product_id': TRADE_PRODUCT_ID,
    'funds': TRADE_USD_COST
  };

  // For sell, we might need to currency convert

  return new Promise((resolve, reject) => {
    client.sell(params, (err, response, data) => {
      if(err) {
        reject(err);
      }

      resolve(response, data);
    });
  });
};

exports.buy = () => {
  const params = {
    'type': 'market',
    'product_id': TRADE_PRODUCT_ID,
    'funds': TRADE_USD_COST
  };
  debugger;
  return new Promise((resolve, reject) => {
    debugger;
    client.buy(params, (err, response, data) => {
      if(err) {
        reject(err);
      }

      resolve(response, data);
    });
  });
};
