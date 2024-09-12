import { getAuth } from "firebase/auth";
import { BsEmojiSunglasses } from "react-icons/bs";
import UseAuth from "../../Routes/UseAuth";
import { useNavigate } from "react-router-dom";


const UserPage = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user);
  const { logOut } = UseAuth();
  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  };
  return (
    <div>
      {user ? <div>
        <div className="bg-white rounded-lg shadow-xl pb-8">
          <div className="w-full h-[250px]">
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
              className="w-full h-full rounded-tl-lg rounded-tr-lg"
            />
          </div>
          <div className="flex flex-col items-center -mt-20">
            <BsEmojiSunglasses className="h-40 w-40 border-4 border-white rounded-full object-cover bg-emerald-300" />

            <div className="flex items-center space-x-2 mt-2">
              <p className="text-2xl">
                {user.displayName}
              </p>
              <span className="bg-blue-500 rounded-full p-1" title="Verified">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-100 h-2.5 w-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                ></svg>
              </span>
            </div>
            <p className="text-gray-700">Mountain. Sea. Sunset</p>
            <p className="text-sm text-gray-500">Delhi, India</p>
          </div>
          <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
            <div className="flex items-center space-x-4 mt-2">
              <button onClick={handleLogout} className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100 ">
                Sign Out
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
          <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
          <ul className="mt-2 text-gray-700">
            <li className="flex border-y py-2">
              <span className="font-bold w-24">Full name:</span>
              <span className="text-gray-700">
                {user.displayName}
              </span>
            </li>
            <li className="flex border-b py-2">
              <span className="font-bold w-24">Birthday:</span>
              <span className="text-gray-700">23 Jun, 2002</span>
            </li>
            <li className="flex border-b py-2">
              <span className="font-bold w-24">Joined:</span>
              <span className="text-gray-700">10 Jan 2022 (25 days ago)</span>
            </li>
            <li className="flex border-b py-2">
              <span className="font-bold w-24">Mobile:</span>
              <span className="text-gray-700">(123) 123-1234</span>
            </li>
            <li className="flex border-b py-2">
              <span className="font-bold w-24">Email:</span>
              <span className="text-gray-700">{user.email}</span>
            </li>
            <li className="flex border-b py-2">
              <span className="font-bold w-24">Location:</span>
              <span className="text-gray-700">New York, US</span>
            </li>
            <li className="flex border-b py-2">
              <span className="font-bold w-24">Languages:</span>
              <span className="text-gray-700">English, Spanish</span>
            </li>
          </ul>
        </div>
      </div>
        :
        navigate("/login")}
    </div>
  );
};

export default UserPage;