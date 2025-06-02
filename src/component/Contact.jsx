function Contact() {
  return (
    <div className="px-[18rem]">
      <div>
        <h1 className="text-5xl text-center font-bold  mb-[3rem]">
          Contact Us
        </h1>
      </div>
      <div className="text-2xl mb-16 flex flex-col gap-2 ">
        <p>Subject</p>
        <input
          className="border w-[48rem] py-2 rounded-[12px] px-5 text-zinc-500 border-black bg-white"
          type="text"
          placeholder="Your Subject"
        />
      </div>

      <div className="text-2xl mb-5 flex flex-col gap-2 ">
        <p>Message</p>
        <textarea
          className="border w-[48rem] h-[20rem] py-2 rounded-[12px] px-5 text-zinc-500 border-black bg-white"
          type="text"
          placeholder="Your message"
        ></textarea>
      </div>
      <button className="py-2 px-8 bg-teal-700 mb-10 text-2xl text-zinc-50 rounded-[10px]">Submit</button>
    </div>
  );
}
export default Contact;
