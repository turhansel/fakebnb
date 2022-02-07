const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

  const transformedItems = items.map((item) => ({
    description: item?.description,
    quantity: 1,
    price_data: {
      currency: "gbp",
      unit_amount: item?.total * 100,
      product_data: {
        name: item?.title,
        images: [item?.img],
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.NEXTAUTH_URL}/success`,
    cancel_url: `${process.env.NEXTAUTH_URL}`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item?.img)),
    },
  });

  res.status(200).json({ id: session.id });
};
