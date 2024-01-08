import { instance } from "../server.js";

export const checkout =async (req, res) => {
  const options = {
    amount: Number(req.body.amount)*100, // amount in the smallest currency unit
    currency: "INR",
  };
 const order=await instance.orders.create(options);
 console.log(order);
 res.status(200).json({
    success:true,
    order,
 });
};


export const paymentverification =async (req, res) => {
  // console.log(req.body );

  const {razor_oder_id, razorpay_payment_id, razorpay_signature}=req.body;

  const generated_signature = hmac_sha256(razor_oder_id + "|" + razorpay_payment_id, process.env.key_secret);

  if (generated_signature == razorpay_signature) {
    // res.status(400).json({
    //   success:true
    // });
    // payment is successful
    res.redirect(
      `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
      // `http://localhost:3000/paymentsuccess`
      
    );
  }else{
    res.status(400).json({
      success:false
    });
  }

 
};
