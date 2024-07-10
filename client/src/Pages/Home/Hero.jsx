export default function Hero() {
  return (
    <div className="carousel w-full h-[90vh]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1604993497451-eed6eb271a9c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full object-cover"
        />
        <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white pl-4 md:pl-12 space-y-4 md:space-y-7 w-full md:w-1/2">
            <h2 className="text-2xl md:text-5xl font-bold">
              Affordable Price for traveling
            </h2>
            <p className="text-sm md:text-base">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-primary mr-2 md:mr-4">
              Get Started
            </button>
            <button className="btn btn-outline btn-secondary">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 bottom-0 md:left-5 md:right-5 gap-x-2 md:gap-x-5">
          <a href="#slide3" className="btn btn-circle btn-sm md:btn-md">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle btn-sm md:btn-md">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full hidden md:flex">
        <img
          src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full object-cover opacity-[.95]"
        />
        <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white pl-4 md:pl-12 space-y-4 md:space-y-7 w-full md:w-1/2">
            <h2 className="text-2xl md:text-5xl font-bold">
              Affordable Price for traveling
            </h2>
            <p className="text-sm md:text-base">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-primary mr-2 md:mr-4">
              Get Started
            </button>
            <button className="btn btn-outline btn-secondary">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute md:flex justify-between transform -translate-y-1/2 left-2 right-2 bottom-0 md:left-5 md:right-5 gap-x-2 md:gap-x-5">
          <a href="#slide1" className="btn btn-circle btn-sm md:btn-md">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle btn-sm md:btn-md">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full hidden md:flex">
        <img
          src="https://images.unsplash.com/photo-1666180765528-b0090962ba37?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full h-full object-cover"
        />
        <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white pl-4 md:pl-12 space-y-4 md:space-y-7 w-full md:w-1/2">
            <h2 className="text-2xl md:text-5xl font-bold">
              Affordable Price for traveling
            </h2>
            <p className="text-sm md:text-base">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-primary mr-2 md:mr-4">
              Get Started
            </button>
            <button className="btn btn-outline btn-secondary">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 bottom-0 md:left-5 md:right-5 gap-x-2 md:gap-x-5">
          <a href="#slide2" className="btn btn-circle btn-sm md:btn-md">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle btn-sm md:btn-md">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
