import { NavLink } from "react-router-dom";

const Accordion = () => {
    return (
        <div style={{ fontFamily: "Raleway" }}>
            {/* Feedback Part */}
            <div className="flex justify-center" style={{ fontFamily: "Bree Serif" }}>
                <NavLink to='/feedback' className="p-6 rounded-2xl text-white font-bold text-3xl bg-green-700 m-16 ">Give your Feedback to us --</NavLink>
            </div>
            {/* Accordion */}
            <div className="pb-11 bg-[#f6fefe]">
                <div className="collapse collapse-arrow ">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">How do I know what to pack?</div>
                    <div className="collapse-content">
                        <p>One week before your trip, we’ll send you an email with a detailed weather forecast and a comprehensive list of suggested packing items to ensure you’re perfectly prepared for your adventure. This list will be tailored to your specific destination, taking into account the current weather conditions, local climate, and any unique activities you might have planned. For instance, if you’re heading to a coastal region, we’ll remind you to pack beach essentials like sunscreen, swimwear, and a hat. If your destination is a mountainous area, we’ll suggest warm layers, hiking boots, and a rain jacket. Our goal is to eliminate the guesswork and stress associated with packing, so you can focus on the excitement of your upcoming trip. Additionally, we’ll include tips on packing light and efficiently, ensuring you have everything you need without over packing. With our guidance, you can confidently embark on your journey, knowing you are well-equipped for any situation that may arise.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">How do you choose my destination?</div>
                    <div className="collapse-content">
                        <p>Choosing your destination is like a personalized matchmaking process for travel! When you fill out our Pre-Trip Survey, we gather information about your interests, travel history, and preferences. This survey includes questions about your favorite activities, preferred climates, previous travel experiences, and any specific destinations on your bucket list. Based on your responses, our team of travel experts carefully selects a destination that matches your unique profile, ensuring you have a memorable and enjoyable experience. We take into account factors such as your desire for adventure, relaxation, cultural exploration, or culinary experiences. Our aim is to surprise you with a destination that not only meets but exceeds your expectations. This personalized approach allows us to curate trips that are perfectly suited to your tastes and interests, making your travel experience truly one-of-a-kind. With our expert knowledge and attention to detail, you can trust that your destination will be a perfect fit, tailored just for you.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">What is Pack Up + Go?</div>
                    <div className="collapse-content">
                        <p>Pack Up + Go is an innovative travel brand that plans personalized vacations around the United States, adding an exciting twist to the traditional travel experience. The unique aspect of our service is that your destination remains a surprise until the day you depart! We believe that the thrill of discovering your destination upon arrival adds an element of adventure and spontaneity to your trip. To start, you’ll complete a detailed survey where you share your travel preferences, budget, and availability. Our team of travel planners then takes care of all the logistics, including booking accommodations, transportation, and activities that align with your interests. A few days before your trip, you’ll receive a packing list and weather forecast to help you prepare.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;