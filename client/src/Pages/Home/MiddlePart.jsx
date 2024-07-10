import { FaSmile, FaSmileBeam } from "react-icons/fa";

const MiddlePart = () => {
    return (
        <div className="bg-slate-50 rounded-xl mb-20">
            <div className="hero h-[650px] mb-[-100px]">
                <div className="hero-content flex-col gap-x-40 lg:flex-row-reverse">
                    <img
                        src="https://i.ibb.co/X5c4Sfv/premium-photo-1664361480336-d99700a5733c.jpg"
                        className="w-[400px] h-[500px] rounded-lg shadow-2xl ml-9 rounded-t-full" />
                    <div >
                        <button className="btn text-green-600 bg-base-200 text-xl pb-5">Welcome to Easter Ease</button>
                        <h1 className="text-5xl font-bold w-[650px]">We are most company about Travel & Adventure!</h1>
                        {/* chat */}
                        <div className="chat chat-end">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <FaSmile className="ml-1 text-3xl"></FaSmile>
                                </div>
                            </div>
                            <div className="chat-header mt-7">
                                Agency
                                <time className="text-xs opacity-50">12:45</time>
                            </div>
                            <div className="chat-bubble w-[350px]">I’m looking for a unique and unforgettable vacation experience. Can you help me?</div>
                            <div className="chat-footer opacity-50">Delivered</div>
                        </div>
                        <div className="chat chat-start">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <FaSmileBeam className="ml-1 text-3xl"></FaSmileBeam>
                                </div>
                            </div>
                            <div className="chat-header">
                                Valuable Customer
                                <time className="text-xs opacity-50">12:46</time>
                            </div>
                            <div className="chat-bubble w-[450px] bg-base-200 text-black">Absolutely! How about a tailor-made adventure to the hidden gems of Eastern Europe? We’ll handle all the details for a seamless trip!</div>
                            <div className="chat-footer opacity-50">Seen at 12:46</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero h-[680px]">
                <div className="hero-content flex-col gap-x-40 lg:flex-row">
                    <img
                        src="https://i.ibb.co/z7g6rnV/photo-1476900543704-4312b78632f8.jpg"
                        className="w-[400px] h-[500px] rounded-lg shadow-2xl ml-9 rounded-t-full" />
                    <div >
                        <button className="btn text-green-600 bg-base-200 text-xl pb-5">Welcome to Easter Ease</button>
                        <h1 className="text-5xl font-bold w-[650px]">Great opportunity for Travel & Adventure!</h1>
                        <div className="mt-16 flex justify-center gap-x-24">
                            <div className="radial-progress" style={{ "--value": 70 }} role="progressbar">70%</div>
                            <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">80%</div>
                        </div>
                        <div className="flex justify-center gap-x-24">
                            <p>Success Rate</p>
                            <p>Satisfied Clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddlePart;