const crypto = require('crypto');

const { GDAX_API_KEY, GDAX_PASS_PHRASE, GDAX_API_SECRET }  = process.env;

function signMessage(method, requestPath, msgBody) {
  /* Mostly snagged from https://docs.gdax.com/#signing-a-message */

  const timestamp = Date.now() / 1000;

  // create the prehash string by concatenating required parts
  const what = timestamp + method + requestPath + body;

  // decode the base64 secret
  const key = Buffer(GDAX_API_SECRET, 'base64');

  // create a sha256 hmac with the secret
  const hmac = crypto.createHmac('sha256', GDAX_API_KEY);

  // sign the require message with the hmac
  // and finally base64 encode the result
  return hmac.update(what).digest('base64');
}

exports.sell = () => {

};

exports.buy = () => {

};
