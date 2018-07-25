const stripe = require('../models/PaymentModel');
const Employer = require('../models/EmployerModel');
const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
}

const paymentApi = async (req, res) => {
  try {
    let { status } = await stripe.charges.create({
      amount: req.body.amount,
      currency: req.body.currency,
      description: req.body.description,
      source: req.body
    });
    Employer
      .findByIdAndUpdate(req.body.id, {
        $set: {paid: true}
      })
      .then(employer => {
        res.status(200).json({ employer })
      })
      .catch((error) => {
        res.status(500).json({ Error: 'There was an error getting the employer', error })
      })
  }
  catch (error) {
    res.status(500).end();
  }
};

module.exports = {
  paymentApi
};