# CryptBroTrader3000
![Bro trading Ethereum](http://i.imgur.com/0wDRpCG.jpg)

Trading crypto assets the old-fashioned way, bro! By yelling over the phone at some rando at the exchange!

## Requirements
Before getting started, you need the following setup:
  * [Google Cloud Functions](https://cloud.google.com/functions/)
  * A [Twilio account](https://www.twilio.com) with a phone number capable of receiving calls
  * A [GDAX](https://www.gdax.com/) account with [an API key setup](https://support.gdax.com/customer/en/portal/articles/2425383-how-can-i-create-an-api-key-for-gdax-)

## Setup
Create a file in the root directory called `.env`

You'll need to add the following config options:
  * `CLOUD_ROOT` - the root URL for your cloud function project
    * Example: `https://us-central1-MY-DOPE-PROJECT.cloudfunctions.net/`
  * `GDAX_API_KEY` - The GDAX API Key
  * `GDAX_PASS_PHRASE` - The passphrase that was used to create your GDAX API key
  * `GDAX_API_SECRET` - Your GDAX API key secret
  * `TRADE_PRODUCT_ID` - What you're trading. Can be `ETH-USD` or `BTC-USD`
  * `TRADE_USD_COST` - The amount of USD that will be sold/bought for each trade
  * `OWNER_PHONE` - Telephone number of the owner (to prevent unathorized trades)

Next, you'll need to deploy both of the cloud functions. That'll look something like this:
```
gcloud beta functions deploy hello --entry-point hello --stage-bucket <YOUR CLOUD BUCKET HERE> --trigger-http

gcloud beta functions deploy command --entry-point command --stage-bucket <YOUR CLOUD BUCKET HERE> --trigger-http
```

Then, when both functions are done deploying, paste the URL for the "hello" function you just deployed into the Configure settings for your Twilio number
![Twilio configure](http://i.imgur.com/5W3v8ok.png)

**You're good to go!**

## Commands
You can say any phrase you want as long as they include a command word:

* `BUY` - will buy crypto
* `SELL` - will sell crypto
* `wait` or `hold` - will wait three seconds before next prompt

If you don't give a command after two seconds, the call will end. GOTTA BE FAST, BRO

## Demo
Call +1 (909) 787-BRO8 to try it out. Note: No real ETH or BTC is being traded on this number. It's just to try out the interface.

At the prompt, tell it to "BUY BUY BUY" or "Sell right now!"

## TODO
* Tests
* Specify amounts during trades (Ex: BUY 100!)
* Finish up text messaging and refactor (Currently located on `messaging` branch)
* Have some error messages if stuff goes wrong
