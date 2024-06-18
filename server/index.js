const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")("sk_test_51PRq03J8ZpI6Xk5rzOAADjpbUYbmuGtb7kZxPuQfMAvDOl9izkNp1ZbjfuA3dkXQANOwWOq3GpZbRRLEqwUzlPur003MRfX43z");

app.use(express.json());
app.use(cors());

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Barista Coffee API");
});

app.post("/api/create-checkout-session", async (req, res) => {
  const { products, total } = req.body;

  console.log("Received products:", products);
  console.log("Received total:", total);

  // Calculate the subtotal on the server
  const calculatedSubtotal = products.reduce((acc, product) => {
    return acc + parseFloat(product.price.replace('Rs ', '')) * product.count;
  }, 0);

  // Log the calculated subtotal
  console.log("Calculated subtotal:", calculatedSubtotal);

  // Calculate the discount on the server side
  let discount = calculatedSubtotal - total;

  // Log the discount and the recalculated total
  console.log("Calculated discount:", discount);

  // Apply discount proportionally to each product's price
  const lineItems = products.map((product) => {
    const originalPrice = parseFloat(product.price.replace('Rs ', '')) * 100;
    const discountedPrice = originalPrice * ((calculatedSubtotal - discount) / calculatedSubtotal);
    return {
      price_data: {
        currency: 'NPR',
        product_data: {
          name: product.title,
        },
        unit_amount: Math.round(discountedPrice),
      },
      quantity: product.count,
    };
  });

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.SUCCESS_URL}/success`,
      cancel_url: `${process.env.CANCEL_URL}/cancel`,
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Stripe session creation error:", error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});