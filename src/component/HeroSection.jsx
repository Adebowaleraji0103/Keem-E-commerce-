function HeroSection() {
  return (
    <div className="px-[18rem] ">
      <div className=" flex justify-evenly py-7 text-zinc-700 bg-zinc-90">
        <main className="text-[19px] gap-2 flex flex-col w-[40rem]">
          <h1 className="font-bold text-4xl ">
            We Boldy Go <p className="text-blue-700">Where No Rocket </p> Has
            Gone Before...
          </h1>
          <p>
            We're building rockets fot the next century today, from the moon to
            Mars, jupiter and beyond
          </p>
          <p>Think Acme Rocket</p>
        </main>

        <div className="w-[50rem] ml-20 ">
          <img className="w-full h-full" src="/images/Robot-1.png" alt="" />
        </div>
      </div>
      <div className="flex justify-center">
        <span className="inline-block w-[21rem] h-[1px] mr-5 bg-zinc-200 mb-[4rem]"></span>
      </div>
    </div>
  );
}

export default HeroSection;
