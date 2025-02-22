import { useGlobalContext } from "../context/GlobalContext";

export default function Homepage() {
  const { getProducts, products } = useGlobalContext();
  // useEffect(() => getProducts, []);

  return (
    <>
      {/* <div className="hero  bg-neutral-700 w-full ">
        <h1 className="text-[12rem] font-black text-white left-1/50 p-30 ">
          Flaver Protection
        </h1>
      </div> */}
      <div className="custom-container pt-20 text-slate-700">
        {/* arrivals */}
        <div className="arrivals-container flex flex-col justify-between gap-5">
          {/* arrivals 1 */}
          <div className="arrivals1 bg-neutral-800  shadow-lg w-full rounded-xl">
            <div className="flex gap-5 flex-col  justify-between h-full p-10 items-start">
              <h2 className="text-3xl font-bold text-white">
                Abbigliamento da lavoro
              </h2>
              <p className="text-white text-balance xl:w-1/3 lg:w-1/2 w-full">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Adipisci autem, nesciunt, possimus labore.
              </p>
              <button
                className="text-white cursor-pointer bg-green-500 px-3 py-1 rounded-lg"
                onClick={() => (window.location.href = "/prodotti")}
              >
                Vedi di più
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5 ">
            {/* arrivals 2 */}
            <div className="arrivals2 bg-neutral-800  shadow-lg  rounded-xl">
              <div className="flex gap-5 flex-col  justify-between h-full p-10 items-start">
                <h2 className="text-3xl font-bold text-white">
                  Scarpe antinfortunistiche
                </h2>
                <p className="text-white xl:w-1/2 text-balance w-full">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Adipisci autem, nesciunt, possimus labore.
                </p>
                <button
                  className="text-white cursor-pointer bg-green-500  px-3 py-1 rounded-lg"
                  onClick={() => (window.location.href = "/prodotti")}
                >
                  Vedi di più
                </button>
              </div>
            </div>
            {/* arrivals 3 */}
            <div className="arrivals3 bg-neutral-800 shadow-lg   rounded-xl">
              <div className="flex gap-5 flex-col  justify-between h-full p-10 items-start">
                <h2 className="text-3xl font-bold text-white">Maschere</h2>
                <p className="text-white text-balance xl:w-1/2  w-full">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Adipisci autem, nesciunt, possimus labore.
                </p>
                <button
                  className="text-white cursor-pointer bg-green-500 px-3 py-1 rounded-lg"
                  onClick={() => (window.location.href = "/prodotti")}
                >
                  Vedi di più
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* special offers */}
        <div className="mt-10">
          <h2 className="text-3xl  font-bold">Nuove uscite</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 flex-wrap xl:flex-nowrap  gap-3 justify-between mt-5 ">
            {/* prodotto  */}
            <div className=" h-100  rounded-xl shadow-lg overflow-hidden">
              <img
                className="h-80 w-full object-cover"
                src="https://media.adeo.com/media/619343/media.jpg?width=650&height=650&format=jpg&quality=80&fit=bounds"
                alt=""
              />
              <div className="p-3 h-full bg-white relative">
                <h2 className=" font-bold">Nome del prodotto</h2>
                <p className=" text-slate-600">€ 15.90</p>
                <button
                  className="text-white cursor-pointer bg-green-400  h-13  w-13 rounded-full absolute top-[-30%] right-[10%]"
                  onClick={() => (window.location.href = "/prodotti")}
                >
                  <i className="fa-solid fa-bag-shopping text-xl"></i>
                </button>
              </div>
            </div>
            {/* prodotto  */}
            <div className="  rounded-xl shadow-lg overflow-hidden">
              <img
                className=""
                src="https://media.adeo.com/media/619343/media.jpg?width=650&height=650&format=jpg&quality=80&fit=bounds"
                alt=""
              />
              <div className="p-3 bg-white relative">
                <h2 className=" font-bold">Nome del prodotto</h2>
                <p className=" text-slate-600">€ 15.90</p>
                <button
                  className="text-white cursor-pointer bg-green-400  h-13  w-13 rounded-full absolute top-[-30%] right-[10%]"
                  onClick={() => (window.location.href = "/prodotti")}
                >
                  <i className="fa-solid fa-bag-shopping text-xl"></i>
                </button>
              </div>
            </div>
            {/* prodotto  */}
            <div className="rounded-xl shadow-lg overflow-hidden">
              <img
                className=""
                src="https://media.adeo.com/media/619343/media.jpg?width=650&height=650&format=jpg&quality=80&fit=bounds"
                alt=""
              />
              <div className="p-3 bg-white relative">
                <h2 className=" font-bold">Nome del prodotto</h2>
                <p className=" text-slate-600">€ 15.90</p>
                <button
                  className="text-white cursor-pointer bg-green-400  h-13  w-13 rounded-full absolute top-[-30%] right-[10%]"
                  onClick={() => (window.location.href = "/prodotti")}
                >
                  <i className="fa-solid fa-bag-shopping text-xl"></i>
                </button>
              </div>
            </div>
            {/* prodotto  */}
            <div className=" rounded-xl shadow-lg overflow-hidden">
              <div>
                <img
                  className=""
                  src="https://catalogo.fabbrica5.it/UserFiles/images/catalogo_prodotti/prod_8127/_fotoGrandi/X50G_indossato_ok.jpg"
                  alt=""
                />
              </div>
              <div className="p-3 bg-white relative">
                <h2 className=" font-bold">Nome del prodotto</h2>
                <p className=" text-slate-600">€ 15.90</p>
                <button
                  className="text-white cursor-pointer bg-green-400  h-13  w-13 rounded-full absolute top-[-30%] right-[10%]"
                  onClick={() => (window.location.href = "/prodotti")}
                >
                  <i className="fa-solid fa-bag-shopping text-xl"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
