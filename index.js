// Load up our config
require('dotenv').config()

const gdax = require('./gdaxLib');

/**
 * Responds to any HTTP request that can provide a "message" field in the body.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.helloWorld = function helloWorld (req, res) {
  if (req.body.message === undefined) {
    // This is an error case, as "message" is required
    res.status(400).send('No message defined!');
  } else {
    // Everything is ok
    console.log(req.body.message);
    res.status(200).send(req.body.message).end();
  }
};

/*
Deploy with:
gcloud beta functions deploy hello --entry-point helloWorld --stage-bucket cbt3000 --trigger-http

call with:

curl -X POST https://us-central1-cryptbrotrader3000.cloudfunctions.net/hello -H "Content-Type:application/json" --data '{"message":"Keyboard Cat"}'
*/
