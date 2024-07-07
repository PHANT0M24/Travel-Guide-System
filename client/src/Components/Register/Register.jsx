const Register = () => {
  const handleRegistration = async (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const c_password = form.c_password.value;

    const newUser = { firstName, lastName, email, password, c_password };
    console.log(newUser);

    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-2xl rounded-xl overflow-hidden">
            <div
              className="hidden lg:block lg:w-5/12 bg-cover"
              style={{
                backgroundImage:
                  "url('https://i.ibb.co/HKTDNf6/Luxury-Villa-with-Panoramic-Views.jpg')",
              }}
            ></div>
            <div className="w-full lg:w-7/12 bg-gray-300 p-8 lg:p-16">
              <h3 className="pt-4 text-3xl text-center text-blue-700 font-bold">
                Create an Account!
              </h3>
              <form onSubmit={handleRegistration} className="mt-8">
                <div className="flex flex-wrap mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-semibold text-gray-700"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block mb-2 text-sm font-semibold text-gray-700"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="mb-6 px-3">
                  <label
                    className="block mb-2 text-sm font-semibold text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="flex flex-wrap mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-semibold text-gray-700"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      name="password"
                      type="password"
                      placeholder="Password"
                    />
                    <p className="text-xs italic text-red-500 mt-1">
                      Please choose a password.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block mb-2 text-sm font-semibold text-gray-700"
                      htmlFor="c_password"
                    >
                      Confirm Password
                    </label>
                    <input
                      className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      name="c_password"
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-200"
                    type="submit"
                  >
                    Register Account
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-600 hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-600 hover:text-blue-800"
                    href="/login"
                  >
                    Already have an account? Login!
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
