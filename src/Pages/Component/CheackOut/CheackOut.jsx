import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Authentication/Provider/AuthProvider";
// import checkoutimg from '../../../../public/image/checkout/checkout.png'

const CheackOut = () => {
  const singleServiceData = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(user);
  // console.log(singleServiceData)
  const { title, _id, img, price } = singleServiceData;

  const handleCheackOut = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const price = form.amount.value;
    const order = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price: price,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("you have successfully booking");
        }
      });
    console.log(order);
  };
  return (
    <div className="">
      <div>
        <div
         className="bg-[url('https://i.ibb.co/sJwVFGP/checkout.png')] bg-cover w-auto h-[150px] md:h-[150px] lg:h-[250px] mb-0 ">
          <h3 className="text-2xl md:text-3xl lg:text-5xl text-white font-bold py-20 md:py-10 lg:py-24 pl-5 md:pl-5 lg:pl-10">
            Check Out
          </h3>
        </div>
      </div>
      <div className="mx-10 my-10">
        <div className="bg-[#F3F3F3] p-10 md:p-10 lg:p-20 min-h-min">
          <form onSubmit={handleCheackOut}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  defaultValue={user?.email}
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">due amount</span>
                </label>
                <input
                  type="text"
                  defaultValue={"$" + price}
                  name="amount"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#FF3811] text-white hover:bg-inherit hover:text-[#FF3811] hover:border-[#FF3811] btn-block">
                Order Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheackOut;
