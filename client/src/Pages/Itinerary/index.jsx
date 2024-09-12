import  { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ItineraryBuilder from './ItineraryBuilder'
import ItinerariesViewer from './ItinerariesViewer'


export default function Itinerary() {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("builder");
  
  return (
    <div className="container mx-auto p-4 mt-[100px]">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Travel Itinerary Planner
      </h1>
      <p className="text-center mb-4">
        Welcome, {user?.firstName} {user?.lastName}!
      </p>
      <div className="tabs tabs-boxed mb-4 justify-center">
        <a
          className={`tab ${activeTab === "builder" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("builder")}
        >
          Create Itinerary
        </a>
        <a
          className={`tab ${activeTab === "viewer" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("viewer")}
        >
          View Itineraries
        </a>
      </div>
      {activeTab === "builder" ? (
        <ItineraryBuilder userId={user?._id} />
      ) : (
        <ItinerariesViewer userId={user?._id} />
      )}
    </div>
  );
}
