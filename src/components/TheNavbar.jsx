import { data } from "autoprefixer";

const TheNavbar = () => {
  return (
    <div className="bg-[#939eaa91] p-6 flex mb max-w-6xl mx-auto rounded-t ">
      <div>
        <p className="text-[#c34e75]  font-Pacifico  text-2xl font-thin items-center  justify-center">
          R I Y A Z
        </p>
      </div>

      <div>
        <ul className="flex ml-[250px] gap-4 font-serif cursor-pointer  text-zinc-600 items-center justify-center font-semibold">
          <li className="hover:text-orange-600">Home</li>
          <li className="hover:text-orange-600">About</li>
          <li className="hover:text-orange-600">Contact</li>
          <li className="hover:text-orange-600"> Portfolio</li>
          <li className="hover:text-orange-600">Blog</li>
        </ul>
      </div>

      <div>
        <button className="bg-orange-100 text-red-800 font-thin rounded border hover:text-white hover:bg-[#fca5a5] border-black px-2 font-poppins py-1 items-center justify-center ml-[250px]">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default TheNavbar;
