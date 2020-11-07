import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall } from "react-icons/md";

const Hero = () => {
  return (
    <main className="mt-10 mx-auto">
      <div className="mx-auto w-11/12 mt-10">
        <div
          className="
          xl:grid xl:grid-cols-10 xl:grid-rows-6
          lg:grid lg:grid-cols-10 lg:grid-rows-6
          md:grid md:grid-cols-7 md:grid-rows-8
          sm:grid sm:grid-cols-7 sm:grid-rows-8
        "
        >
          <div
            className="bg-secondary-100 rounded-lg  
            xl:col-start-1 xl:col-span-7 xl:row-start-1 xl:row-span-6
            lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-6
           
          "
          ></div>
          <div
            className="bg-secondary-100 rounded-lg
            xl:col-start-9 xl:col-span-3 xl:row-start-1 xl:row-span-2
            lg:col-start-9 lg:col-span-3 lg:row-start-1 lg:row-span-2
          "
          ></div>
          <div
            className="bg-secondary-100 rounded-lg
          xl:col-start-9 xl:col-span-3 xl:row-start-4 xl:row-span-3
          lg:col-start-9 lg:col-span-3 lg:row-start-4 lg:row-span-3
          "
          ></div>
        </div>
      </div>
    </main>
    // <div className="mt-10  ">
    //   <div
    //     className=" lg:grid lg:grid-cols-13 lg:grid-rows-10
    //     xl:grid xl:grid-cols-12 xl:grid-rows-10
    //     md:grid md:grid-cols-6 md:grid-rows-4
    //     sm:grid sm:grid-cols-4 sm:grid-rows-4
    //   "
    //   >
    //     <div
    //       className="bg-secondary-100 px-4 rounded-lg
    //        lg:col-start-2 lg:col-span-6 lg:row-span-6
    //        xl:col-start-2 xl:col-span-6 xl:row-span-6
    //        md:row-start-1 md:row-span-1 md:col-start-0 md:col-span-11
    //        sm:row-start-1 sm:row-span-1 sm:col-start-0 sm:col-span-11
    //     "
    //     >
    //       <h1 className="py-5 text-4xl italic font-bold tracking-wide text-heading-100">
    //         About me
    //       </h1>
    //       <p className=" text-gray-700 pt-2 font-semibold">
    //         Hi, I'm Shiva shankar Front End developer,
    //       </p>
    //       <p className=" text-gray-700 pt-8">
    //         I'm a student, currently studying the prefinal year of my bachelor's degree. I'm looking
    //         forward to do work with like minded peoples. I have started my web developement carrier
    //         when the quarantine and now it's become my passion and I decided to move forward to this
    //         industry. In over the six months I did amazon clone , it gave so much confidence to
    //         build my projects so well. Currently I'm focused in Javascript and it's libraries and
    //         frameworks. You can ping me to discuss about how to write scalable javacript code or
    //         anything else related to JS.
    //       </p>

    //       <p className=" text-gray-700 pt-8">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nobis aspernatur
    //         dignissimos laborum, architecto sapiente iure impedit molestiae natus ex.
    //       </p>

    //       <div className="md:row-start-4 md:row-span-1 md:col-start-0 md:col-span-11  md:mt-4">
    //         <h4 className="py-5 text-2xl italic font-bold tracking-wide text-heading-100">
    //           Opportunity
    //         </h4>
    //         <p className=" text-gray-700 pb-6">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, cum ea quisquam
    //           quasi officia doloremque cupiditate praesentium quidem reprehenderit maiores eaque!
    //           Reiciendis, sit vel atque nostrum delectus consequuntur est dolorem quis enim numquam
    //           repellat quasi at unde molestias adipisci harum. Lorem ipsum dolor sit amet
    //           consectetur adipisicing elit. Quaerat similique ducimus, sint totam beatae aperiam
    //           nihil laboriosam accusamus explicabo perferendis blanditiis eligendi quia quisquam
    //           placeat enim vel illum commodi exercitationem dolore harum magnam non eaque sunt sed.
    //           Et corporis optio nam harum ducimus similique maiores nisi, sapiente ex, pariatur
    //           architecto!
    //         </p>
    //       </div>
    //     </div>

    //     <div
    //       className="bg-secondary-100   rounded-lg p-6
    //       lg:col-start-9 lg:col-span-3 lg:row-span-4
    //       xl:col-start-9 xl:col-span-3 xl:row-span-4
    //       md:row-start-2 md:row-span-1 md:col-start-0 md:col-span-11  md:mt-4
    //     "
    //     >
    //       <h1>lorem5</h1>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam provident ut
    //         molestiae itaque quisquam minima repellendus adipisci optio vitae labore? Dignissimos
    //         nihil quos tenetur. Tempore natus sit distinctio quidem odit!
    //       </p>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eaque est odit fuga
    //         repellendus nihil aliquid mollitia rem, minus, reiciendis quis assumenda sunt minima
    //         corporis distinctio quibusdam blanditiis? Tenetur, deserunt!
    //       </p>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, alias quod.
    //         Distinctio, inventore quasi voluptatibus impedit cum molestias quod dolorem.
    //       </p>
    //     </div>
    //     <div
    //       className="bg-secondary-100 rounded-lg
    //       lg:col-start-9 lg:col-span-3 lg:row-start-6 lg:row-span-1
    //       xl:col-start-9 xl:col-span-3 xl:row-start-6 xl:row-span-1
    //       md:row-start-3 md:row-span-1 md:col-start-1 md:col-span-5 mt-4

    //     "
    //     >
    //       <div className="flex py-5 px-4 ">
    //         <HiLocationMarker size="3em" color="#17252a" />
    //         <h2 className=" ml-4 flex items-center text-2xl italic font-bold tracking-wide text-heading-100 ">
    //           Chennai, India
    //         </h2>
    //       </div>
    //       <div className="flex items-center py-2 px-6  ">
    //         <MdCall size="2em" color="#17252a" className=" " />
    //         <h2 className=" ml-4 flex items-center  italic font-semibold tracking-wide text-heading-100 ">
    //           7418940850
    //         </h2>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Hero;
