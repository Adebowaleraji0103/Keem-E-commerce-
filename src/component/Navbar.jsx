function Navbar () {
    return(
        <div className="flex justify-between px-[18rem] py-[1rem] sticky top-0 scroll-smooth text-center bg-teal-700 text-zinc-50 text-[1.2rem]">
            <h2 className="font-semibold text-2xl">Keem</h2>
            <ul className="flex gap-10 ">
               <a href=""> <li>Our Rockets</li></a>
                <a href=""><li>Testimonials</li></a>
                <a href=""><li>Contact Us</li></a>
            </ul>
        </div>
    )
}

export default Navbar;