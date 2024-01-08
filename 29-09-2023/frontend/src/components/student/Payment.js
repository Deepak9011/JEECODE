import React from "react";
import axios from "axios";

function Payment() {
  // const handleOpenRazorpay = (data) => {
  //   const options = {
  //     key: "rzp_test_uJifFy0kaDdhAs",
  //     amount: Number(data.amount),
  //     currency: data.currency,
  //     order_id: data.id,
  //     name: "SHOPPING APP", //
  //     description: "XYZ", //
  //     handler: function (response) {
  //       console.log(response, "34");
  //       axios
  //         .post("https://localhost:4000/api/paymentverification", {
  //           response: response,
  //         })
  //         .then((res) => {
  //           console.log(res, "37");
  //           // your orders
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     },
  //   };
  //   const rzp = new window.Razorpay(options);
  //   rzp.open();
  // };

  // const checkoutHandler = (amount) => {
  //   const _data = { amount: amount };
  //   axios
  //     .post("http://localhost:4000/api/checkout", _data)
  //     .then((res) => {
  //       console.log(res.data, "29");
  //       handleOpenRazorpay(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const checkoutHandler =async (amount) => {
    // const {data: { key },} = axios.get("http://www.localhost:4000/api/getkey");

    const {data: { order },} =await axios.post("http://localhost:4000/api/checkout", {
      amount:amount
    });

    // console.log(res)

    const options = {
      key:'rzp_test_uJifFy0kaDdhAs',
      amount: order.amount,
      currency: order.currency,
      name: "6 pack programmer",
      description: "tutorial Test Transaction",
      order_id: order.order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "https://localhost:4000/api/paymentverification",
      prefill: {
        name: order.name,
        email: order.email,
        contact: order.contact,
      },
      theme: {
        color: "#3399cc",
      },
    }
    const razor = new window.Razorpay(options)
    razor.open()
  };

  return (
    <>
      {/* <div> */}
      <button onClick={() => checkoutHandler(5000)}>pay now</button>
    </>
  );
}

// const Payment = () => {
//   const checkoutHandler = async (amount) => {
//     const {
//       data: { key },
//     } = await axios.get("http://www.localhost:4000/api/getkey");

//     const {
//       data: { order },
//     } = await axios.post("http://localhost:4000/api/checkout", {
//       amount,
//     });
//     // console.log(data)

//     var options = {
//       key,
//       amount: order.amount,
//       currency: "INR",
//       name: "6 pack programmer",
//       description: "tutorial Test Transaction",
//       image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
//       order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//       callback_url: "https://localhost:4000/api/paymentverification",
//       prefill: {
//         name: "Gaurav Kumar",
//         email: "gaurav.kumar@example.com",
//         contact: "9000090000",
//       },
//       notes: {
//         address: "Razorpay Corporate Office",
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };
//     const razor = new window.Razorpay(options);
//     razor.open();
//   };

//   return (
//     <>
//         <div className="form-group">
//           <label>Enter name</label>
//           <input
//             type="text"
//           />
//         </div>
//         <div className="form-group">
//           <label >Amount</label>
//           <input
//             type="number"z
//           />
//         </div>
//         <Button onClick={() => checkoutHandler(5000)}>pay now</Button>
//     </>
//   );
// };

export default Payment;
