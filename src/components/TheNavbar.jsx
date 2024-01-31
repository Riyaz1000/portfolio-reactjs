import { data } from "autoprefixer";

const TheNavbar = () => {
  return (
    <div className="bg-[#e6bfb1] p-6 flex ">
      <div>
        <p className="text-[#c34e75] font-extrabold  text-2xl ml-[300px] font-sans items-center justify-center">
          R I Y A Z
        </p>
      </div>

      <div>
        <ul className="flex ml-[300px] gap-4 font-serif cursor-pointer  text-zinc-600 items-center justify-center font-semibold">
          <li className="hover:text-white">Home</li>
          <li className="hover:text-white">About</li>
          <li className="hover:text-white">Contact</li>
          <li className="hover:text-white"> Portfolio</li>
          <li className="hover:text-white">Blog</li>
        </ul>
      </div>

      <div>
        <button className="bg-red-100 text-red-800 rounded border hover:text-white hover:bg-[#fca5a5] border-black p-1 items-center justify-center ml-[300px]">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default TheNavbar;
