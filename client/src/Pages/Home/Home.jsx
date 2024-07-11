import { useLoaderData } from "react-router-dom";
import Accordion from "./Accordion";
import Article from "./Article";
// import MiddlePart from "./MiddlePart";
import Popular from "./Popular";
import FeedbackPart from "./FeedbackPart";
import Hero from "./Hero";

const Home = () => {
  const feedbackLoader = useLoaderData();

  return (
    <>
      <div>
        <Hero></Hero>
      </div>
      <div className="max-w-screen-2xl mx-auto">
        <Popular></Popular>
        {/* <MiddlePart></MiddlePart> */}
        <Article></Article>
        <div>
          <div style={{ fontFamily: "Bree Serif" }}>
            <div className="rating flex justify-center items-center">
              <p className="text-4xl p-5 font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-900 to-green-500 my-4">
                See what our people tells about us
              </p>
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
            </div>
          </div>
          {
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
              {feedbackLoader.map((feedback) => (
                <FeedbackPart
                  key={feedback._id}
                  feedback={feedback}
                ></FeedbackPart>
              ))}
            </div>
          }
        </div>
        <Accordion></Accordion>
      </div>
    </>
  );
};

export default Home;
