import Data from "../Data/data.json";

const ProfilePage = () => {
  const BlogPost = Data.map((post) => {
    return (
      <div
        className="bg-[#a8bcc6] max-w-6xl mx-auto text-black  pt-10 rounded-b "
        key={post.person.id}
      >
        <div className="flex">
          <div className="ml-[100px] p-10 ">
            <h1 className="text-[#fafbfc]  text-xl font-poppins font-semibold mb-4">
              {/* Helo, there */}
            </h1>
            <p className="font-viga font-bold text-6xl mb-5  ">
              <span className="text-cyan-900 font-poppins">
                {post.person.name}
              </span>{" "}
            </p>
            <p className="text-xl font-Viga font-semibold text-zinc-700">
              <span className="text-green-900 text-xl font-Viga font-semibold">
                {/* Creative Designer */}
              </span>
              {/* and */}
              <span className="text-xl font-poppins font-semibold">
                Full Stack Developer
              </span>
            </p>
            <p className="mt-3 font-poppins font-semibold text-gray-700">
              {post.person.description} <br />I am currently engaged as an
              intern Full Stack Engineer at <br />
              CyberDude Networks Pvt.
            </p>
            {/* icons */}

            <button className="bg-[#9d174d] hover:bg-[#4c1d30e5] font-semibold text-sm text-white font-poppins rounded px-1 py-2 items-center mt-2 w-24">
              About Us
            </button>
          </div>
          {/* image */}
          <div>
            <img
              src="https://cyberdude-internship-tracker.vercel.app/_next/image?url=https%3A%2F%2Fgithub.com%2Friyaz1000.png&w=640&q=75"
              alt=""
              className="w-[250px] h-[250px] ml-24 mt-3 rounded-full"
            />

            <div className="flex ml-[148px] mt-4 gap-5 mb-3">
              <a href={post.person.facebook}>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-6 hover:scale-150 "
                >
                  <path
                    fill="#087bea"
                    d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                  />
                </svg>
              </a>

              <a href={post.person.linkedinURL}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-6 hover:scale-150"
                >
                  <path
                    fill="#0b66c2"
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  />
                </svg>
              </a>
              <a href={post.person.githubURL}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  className="w-6 hover:scale-150"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </a>

              <a href={post.person.instagram}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-6 hover:scale-150"
                >
                  <path
                    fill="#fb005b"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-[#092635] p-3 text-white  text-center font-extrabold text-4xl font-poppins">
          <p className="mt-6">Skills</p>
          <div className="flex ml-[0px] mt-10 space-x-14 ">
            <div className="bg-gray-100 h-[180px] w-[220px] rounded shad0w shadow-2xl ">
              <img
                src="https://www.seekpng.com/png/detail/80-803527_html5-css3-and-javascript-logos-html5-logo-png.png"
                alt="html image"
                className="w-[170px] h-[90px] ml-1 mt-5"
              />
              <p className="text-gray-700 font-serif text-center mt-5 font-semibold text-lg">
                HTML
              </p>
            </div>
            <div className="bg-gray-100 h-[180px] w-[220px] rounded shad0w shadow-2xl ">
              <img
                src="https://www.kindpng.com/picc/m/464-4640184_css3-png-download-css-icon-transparent-png.png"
                alt="html image"
                className="w-[82px] h-[85px]  mt-6 ml-[50px]"
              />
              <p className="text-gray-700 font-serif text-center mt-5 font-semibold text-lg">
                CSS
              </p>
            </div>
            <div className="bg-gray-100 h-[180px] w-[220px] rounded shad0w shadow-2xl ">
              <img
                src="https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png"
                alt="html image"
                className="w-[80px] h-[50px]  mt-9 mb-5 ml-[50px]"
              />
              <p className="text-gray-700 font-serif text-center mt-10 font-semibold text-lg">
                TAILWIND CSS
              </p>
            </div>
            <div className="bg-gray-100 h-[180px] w-[220px] rounded  shadow-2xl ">
              <img
                src="data:image/png;base64,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"
                alt="html image"
                className="w-[80px] h-[80px]  mt-6 mb-1  ml-[50px]"
              />
              <p className="text-gray-700 font-serif text-center mt-5 font-semibold text-lg">
                JAVASCRIPT
              </p>
            </div>
            <div className="bg-gray-100 h-[180px] w-[220px] rounded shad0w shadow-2xl ">
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                alt="html image"
                className="w-[80px] h-[80px]  mt-6 mb-1  ml-[50px]"
              />
              <p className="text-gray-700 font-serif text-center mt-5 font-semibold text-lg">
                REACT JS
              </p>
            </div>
          </div>
          <p className="mt-14">Qualification</p>

          <div className="bg-gray-500 h-[150px] mt-8   w-[1100px] my-10 rounded shadow-md mx-5 pb-1">
            <div className="flex gap-6 ml-[40px]">
              <div className="bg-gray-200 text-orange-800 rounded-md h-[100px] w-[500px] mt-5  ">
                <div className="flex ml-[170px]">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/021/013/584/original/graduation-hat-on-transparent-background-free-png.png"
                    alt=""
                    className="w-10 h-6 mt-3 mb-3 mx-1 "
                  />
                  <p className=" text-xl font-semibold mt-3 ">Eduaction</p>
                </div>

                <div className="">
                  <p className="text-base text-center  font-thin text-gray-700">
                    Tamilnadu college of engineering <br />
                    <p className="ml-18">
                      Bachelor of Mechanical Engineering - (2017-2021)
                    </p>
                  </p>
                </div>
              </div>
              <div className="bg-gray-200 text-orange-800 rounded-md h-[100px] w-[500px] mt-5   ">
                <div className="flex ml-[170px]">
                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/work-experience-icon.png"
                    alt=""
                    className="w-8 h-6 mt-3 mb-3 mx-1 "
                  />
                  <p className=" text-xl font-semibold mt-3 ">Experience</p>
                </div>
                <div className="">
                  <p className="text-base text-center  font-thin text-gray-700">
                    Full Stack Engineer <br />
                    <p className="ml-18">
                      CyberDude Networks Private Limited · Internship , chennai
                    </p>
                  </p>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
        {/* 2nd half */}

        <div className="bg-[#092635]  text-white text-center font-poppins text-4xl h-[1040px] font-extrabold">
          Projects
          <div className="bg-gray-500 h-[450px]   w-[1100px] my-10 rounded shadow-md mx-8 pb-1">
            <div className="flex">
              <div className="bg-gray-200 text-orange-800  rounded-md h-[00px] w-[500px] mt-5 ml-[30px]  ">
                <div className="flex ml-[140px]">
                  <p className=" text-xl text-white mb-2 font-semibold mt-3 ">
                    Fake Chat Application
                  </p>
                </div>
                <div className="">
                  <img src="/fakechat.png" alt="" className="rounded" />
                </div>
                <div className="text-white text-sm font-thin mt-3 bg-zinc-700 rounded p-3">
                  Creating Fake Chat Application using by the simple HTML ,
                  Tailwind CSS, Javascript , React JS this project using for
                  fake chat it will work dynamically once enter your text
                </div>
                <div className="flex mt-2 ">
                  <button className="bg-orange-500 text-xs text-white mr-[20px]  font-thin px-1.5 py-1 rounded">
                    HTML
                  </button>
                  <button className="bg-[#17bbb8] text-slate-100 text-xs mr-[20px] font-thin px-1.5 py-1 rounded">
                    TAILWIND CSS
                  </button>
                  <button className="bg-yellow-400 text-black text-xs mr-[20px] font-thin px-1.5 py-1 rounded">
                    JAVASCRIPT
                  </button>
                  <button className="bg-[#61dafb] text-slate-900 text-xs mr-[40px] font-thin px-1.5 py-1 rounded">
                    REACT JS
                  </button>{" "}
                  <a href="https://fake-chatapp-reactjs.netlify.app/">
                    <button className="bg-gray-200 hover:bg-gray-400 items-center flex  text-slate-800 text-xs  font-thin px-4 py-1 rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                        className="w-4 mr-2 "
                      >
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                      </svg>
                      Github Link
                    </button>
                  </a>
                </div>
              </div>

              <div className="bg-gray-200 text-orange-800  rounded-md h-[00px] w-[500px] mt-4 ml-[40px]  ">
                <div className="flex ml-[140px]">
                  <p className=" text-xl text-white mb-2 font-semibold mt-3 ">
                    Thumbnail Downloader
                  </p>
                </div>
                <div className="">
                  <img src="/public/tn-2.png" alt="" className="rounded" />
                </div>
                <div className="text-white text-sm font-thin mt-3 bg-zinc-700 rounded p-3">
                  Creating Thumbnail Grabber Application using by the simple
                  HTML , Tailwind CSS, Javascript , this project using for grab
                  any thumbnail in youtube
                </div>
                <div className="flex mt-2 ">
                  <button className="bg-orange-500 text-xs text-white mr-[20px]  font-thin px-1.5 py-1 rounded">
                    HTML
                  </button>
                  <button className="bg-[#17bbb8] text-slate-100 text-xs mr-[20px] font-thin px-1.5 py-1 rounded">
                    TAILWIND CSS
                  </button>
                  <button className="bg-yellow-400 text-black text-xs mr-[20px] font-thin px-1.5 py-1 rounded">
                    JAVASCRIPT
                  </button>
                  <a href="https://riyaz1000.github.io/youtube-thumbnail-viewer/">
                    <button className="bg-gray-200 hover:bg-gray-400 ml-[10px] items-center flex  text-slate-800 text-xs  font-thin px-16 py-1 rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                        className="w-4 mr-2 "
                      >
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                      </svg>
                      Github Link
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-500 h-[450px]   w-[1100px] my-10 rounded shadow-md mx-8 pb-1    ">
            <div className="flex">
              <div className="bg-gray-200 text-orange-800  rounded-md h-[00px] w-[500px] mt-4 ml-[40px]  ">
                <div className="flex ml-[170px]">
                  <p className=" text-xl text-white mb-2 font-semibold mt-3 ">
                    Google Pay UI
                  </p>
                </div>
                <div className="">
                  <img src="/gpay.png" alt="" className="rounded" />
                </div>
                <div className="text-white text-sm font-thin mt-3 bg-zinc-700 rounded p-3">
                  Google Pay UI Application using by the simple HTML , Tailwind
                  CSS this project only UI based and both light and dark version
                </div>
                <div className="flex mt-2 ">
                  <button className="bg-orange-500 text-xs text-white mr-[20px]  font-thin px-1.5 py-1 rounded">
                    HTML
                  </button>
                  <button className="bg-[#17bbb8] text-slate-100 text-xs mr-[20px] font-thin px-1.5 py-1 rounded">
                    TAILWIND CSS
                  </button>
                  <a href="https://riyaz1000.github.io/Google-Pay-UI/">
                    <button className="bg-gray-200 hover:bg-gray-400 ml-[75px] items-center flex  text-slate-800 text-xs  font-thin px-20 py-1 rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                        className="w-4 mr-2 "
                      >
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                      </svg>
                      Github Link
                    </button>
                  </a>
                </div>
              </div>

              <div className="bg-gray-200 text-orange-800  rounded-md h-[00px] w-[500px] mt-4 ml-[40px]  ">
                <div className="flex ml-[140px]">
                  <p className=" text-xl text-white mb-2 font-semibold mt-3 ">
                    Movie Listing WebPage
                  </p>
                </div>
                <div className="">
                  <img src="/bootstrap.png" alt="" className="rounded" />
                </div>
                <div className="text-white text-sm font-thin mt-3 bg-zinc-700 rounded p-3">
                  Movie Listing Website using by the simple HTML , Bootstrap
                  this project using for listing our favourite movie
                </div>
                <div className="flex mt-2 ">
                  <button className="bg-orange-500 text-xs text-white mr-[20px]  font-thin px-1.5 py-1 rounded">
                    HTML
                  </button>
                  <button className="bg-[#7511f6] text-slate-100 text-xs mr-[20px] font-thin px-1.5 py-1 rounded">
                    BOOTSTRAP
                  </button>{" "}
                  <a href="https://riyaz1000.github.io/Bootstrap-Movie-Page/ ">
                    <button className="bg-gray-200 hover:bg-gray-400 ml-[90px] items-center flex  text-slate-800 text-xs  font-thin px-20 py-1 rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                        className="w-4 mr-2 "
                      >
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                      </svg>
                      Github Link
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return BlogPost;
};

export default ProfilePage;
