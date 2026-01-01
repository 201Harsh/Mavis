const Mavis = () => {
  return (
    <div className="h-full w-full bg-[url(../assets/wavy-lines.svg)] bg-cover bg-no-repeat bg-center">
      <div className="flex w-full h-full flex-col items-center justify-center gap-5">
        <h1 className="text-4xl text-white">Connect to Mavis</h1>
        <button className="text-white px-12 py-4 bg-red-400 rounded-2xl cursor-pointer hover:bg-red-500 transition-all duration-200 ease-in-out">
          Connect
        </button>
      </div>
    </div>
  )
}

export default Mavis
