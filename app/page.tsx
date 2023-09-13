// @ts-nocheck

export default function Home() {
  return (
    <div className="relative h-[100vh]">
      <img
        src="https://img.freepik.com/premium-vector/career-development-icons_24911-69064.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(50%)" }}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-7xl text-bold text-white mt-36 z-10">
          
           SwapnaYaan </div>
        <div className="mt-4 text-gray-400 z-10">We SwapnaYaan aims to Nourish Young minds and Guide individual to it's peek pontentails...</div>
        <button className="flex bg-white border-[2px] z-10 mt-10 border-yellow-500 px-6 py-2 rounded-lg shadow-xl  hover:bg-yellow-300">
        <img className="h-6 mx-3" src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png" alt="image" />
          Login with Google
        </button>
      </div>
    </div>
  );
}
