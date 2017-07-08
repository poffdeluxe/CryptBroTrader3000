// Load up our config
require('dotenv').config()

const twilio = require('twilio');
const gdaxLib = require('./gdaxLib');

/**
 *
 * Twilio call entry point to listen for commands
 *
 */
exports.hello = function helloWorld (req, res) {
  const twiml = new twilio.twiml.VoiceResponse();

  twiml.gather({
    input: 'speech',
    timeout: 2,
    hints: 'buy, sell',
    action: `${process.env.CLOUD_ROOT}/command`
  }).say('Go for trades.');

  res.status(200).type('text/xml').end(twiml.toString());
};

/**
 *
 * Executes command specified on Twilio call
 *
 */
exports.command = function command(req, res) {
  const twiml = new twilio.twiml.VoiceResponse();

  // Only listen for commands from owner's phone number
  if(req.body['From'] !== process.env.OWNER_PHONE) {
      twiml.say('GTFO Meatbag!');
      res.status(200).type('text/xml').end(twiml.toString());

      return;
  }

  // Detect command and execute
  let resultMsg = 'Invalid command.';

  const wordsSaid = req.body['SpeechResult'].toLowerCase();
  if(wordsSaid.indexOf('buy') !== -1 || wordsSaid.indexOf('bye') !== -1) {
    // We're buying
    resultMsg = 'Buying.';

    gdaxLib.buy();
  } else if (wordsSaid.indexOf('sell') !== -1) {
    // We're selling
    resultMsg = 'Selling.';

    gdaxLib.sell();
  } else if (wordsSaid.indexOf('wait') !== -1 || wordsSaid.indexOf('hold') !== -1) {
    // Chill out for a sec
    twiml.pause({ length: 3 });

    resultMsg = 'Done waiting';
  }

  twiml.say(resultMsg);
  twiml.redirect(`${process.env.CLOUD_ROOT}/hello`);

  res.status(200).type('text/xml').end(twiml.toString());
};
