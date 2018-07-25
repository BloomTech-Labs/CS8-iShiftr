const stripe = require('../models/PaymentModel');

const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
}

const paymentApi = async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: req.body.amount,
      currency: req.body.currency,
      description: req.body.description,
      source: req.body
    });
  }
  catch (error) {
    res.status(500).end();
  }
};

module.exports = {
    paymentApi
};