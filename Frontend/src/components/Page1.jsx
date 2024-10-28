import React from 'react'
import MyLogo from "../../public/MyLogo.jpg"
function Page1() {
  return (<>
  <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
    <div className=" order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
    <div className="space-y-12">
    <h1 className="text-4xl font-bold">Hello Welcome to <span className="text-green-600">ScrapHut...</span></h1>
    <p className="text-xl font-semibold ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Mollitia commodi assumenda provident veritatis.
        Cumque optio doloribus soluta ducimus ab quo!
    </p>
    </div>
    <button className="btn mt-6 btn-accent">Discover more...</button>

    </div>
    <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={MyLogo}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          />
        </div>
  </div>
  </>
  );
}

export default Page1;
