
import { useState } from 'react';

const Recommend = () => {
    const [recommendations, setRecommendations] = useState(null);
    const [budgetData, setBudgetData] = useState(null);
    const [error, setError] = useState(null);

    const handleRecommend = async (event) => {
        event.preventDefault();
        const form = event.target;
        const city = form.city.value;
        const typePlace = form.typePlace.value;
        const budget = form.budget.value;
        const days = form.days.value;

        const recommendApiUrl = `http://127.0.0.1:5000/recomend/${city}/${typePlace}`;
        const budgetApiUrl = `http://127.0.0.1:5000/budget/${budget}/${days}`;

        try {
            const [recommendResponse, budgetResponse] = await Promise.all([
                fetch(recommendApiUrl),
                fetch(budgetApiUrl)
            ]);

            if (!recommendResponse.ok || !budgetResponse.ok) {
                throw new Error('Failed to fetch data from the API');
            }

            const recommendData = await recommendResponse.json();
            const budgetData = await budgetResponse.json();

            setRecommendations(recommendData);
            setBudgetData(budgetData);

        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="container bg-base-100 w-full shrink-0 shadow-2xl mt-[200px] mx-auto md:flex">
            <div className='md:w-1/2'>
                <p className="w-[200px] mx-auto font-bold text-4xl pl-[30px]">Planner</p>
                <form onSubmit={handleRecommend} className="card-body" method="POST">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Which city are you in?</span>
                        </label>
                        <input type="text" name="city" placeholder="Type your current city" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your type of place?</span>
                        </label>
                        <select name="typePlace" className="select w-full max-w-xs" required>
                            <option disabled selected>Select your type of place</option>
                            <option value="Hill">Hill</option>
                            <option value="Lake">Lake</option>
                            <option value="Historical">Historical</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Budget?</span>
                        </label>
                        <input type="number" name="budget" placeholder="Type your budget in USD" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Number of Days?</span>
                        </label>
                        <input type="number" name="days" placeholder="How many days you want to stay?" className="input input-bordered" required />
                    </div>
                    <div className="mb-6 text-center">
                        <button
                            className="w-full mt-4 px-4 py-2 font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-200"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <div className='container mx-auto w-[600px] mb-5 shadown-xl'>
                    <iframe width="600" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Sylhet+()&amp;t=p&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
                </div>
            </div>

            <div className='md:w-1/2'>
                {recommendations && (
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold">Recommendations:</h3>
                        <ul className="space-y-4">
                            {Object.keys(recommendations).map((key) => (
                                <li key={key} className="bg-gray-100 p-4 rounded shadow-md">
                                    <h4 className="text-lg font-bold">{recommendations[key][0]}</h4>
                                    <p className="mt-2 text-sm text-gray-700">{recommendations[key][1]}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {budgetData && (
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold">Budget Breakdown:</h3>
                        <ul className="space-y-2">
                            <li className="bg-gray-100 p-2 rounded shadow-md">
                                <strong>Accommodation Cost:</strong> ${budgetData.accommodation_cost}
                            </li>
                            <li className="bg-gray-100 p-2 rounded shadow-md">
                                <strong>Activities Cost:</strong> ${budgetData.activities_cost}
                            </li>
                            <li className="bg-gray-100 p-2 rounded shadow-md">
                                <strong>Food Cost:</strong> ${budgetData.food_cost}
                            </li>
                            <li className="bg-gray-100 p-2 rounded shadow-md">
                                <strong>Transport Cost:</strong> ${budgetData.transport_cost}
                            </li>
                        </ul>
                    </div>
                )}

                {error && (
                    <div className="mt-6 text-red-500">
                        <p>Error: {error}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Recommend;
