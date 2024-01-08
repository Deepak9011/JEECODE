import { app } from "./app.js";

import Razorpay from "razorpay";

export const instance = new Razorpay({
  key_id: process.env.key_id,
  key_secret: process.env.key_secret,
});

app.listen(process.env.PORT, () =>
console.log(`Server is working on ${process.env.PORT}`)
);