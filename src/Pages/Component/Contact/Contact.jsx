const Contact = () => {
  return (
    <div>
      <div>
        <div className="bg-[url('https://i.ibb.co/sJwVFGP/checkout.png')] bg-cover w-auto h-[150px] md:h-[150px] lg:h-[250px] mb-0 ">
          <h3 className="text-2xl md:text-3xl lg:text-5xl text-white font-bold py-20 md:py-10 lg:py-24 pl-5 md:pl-5 lg:pl-10">
            Contact Us
          </h3>
        </div>
      </div>

      {/* contact form here */}
      <div className="w-full max-w-md rounded-lg bg-white px-10 pb-10 pt-8 my-20 mx-auto border shadow-md dark:bg-zinc-900">
        <div className="mb-6">
          <h2 className="text-center text-3xl font-semibold tracking-tight">
            Contact Us
          </h2>
          <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
            We&apos;d love to hear from you!
          </p>
        </div>
        <form className="w-full space-y-6">
          <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
            <label className="block font-medium" htmlFor="name">
              Name
            </label>
            <input
              className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
              id="name"
              placeholder="Your Name"
              name="name"
              type="text"
            />
          </div>
          <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
            <label className="block font-medium" htmlFor="_email">
              Email
            </label>
            <input
              className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
              id="_email"
              placeholder="Your Email"
              name="email"
              type="email"
            />
          </div>
          <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
            <label className="block font-medium" htmlFor="_message">
              Message
            </label>
            <textarea
              className="min-h-[80px] w-full rounded border px-3 py-2 leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
              id="_message"
              placeholder="what's in your mind"
              name="message"
            />
          </div>
          <button className="rounded-md bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
