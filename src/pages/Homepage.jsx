import { useGlobalContext } from "../context/GlobalContext";

export default function Homepage() {
  const { getProducts, products } = useGlobalContext();
  // useEffect(() => getProducts, []);

  return (
    <>
      <div className="hero h-200 w-full">
        <h1 className="text-[15rem] font-black text-white left-5 bottom-50  absolute">
          Flaver Protection
        </h1>
      </div>
      <div className="arrivals1 m-20 bg-gray-500 h-150 rounded-3xl flex overflow-hidden relative">
        <div className="w-full h-full bg-black absolute opacity-40 z-1"></div>
        <div className="left w-1/3  "></div>
        <div className="right w-2/3  "></div>
        <div className="absolute w-full p-10 px-20 z-2 text-end">
          <h2 className=" text-[8rem] font-bold  text-white ">Nuovi arrivi</h2>
          <a className=" text-[2rem] font-bold  text-white cursor-pointer">
            vedi di più..
          </a>
        </div>
      </div>
    </>
  );
}
