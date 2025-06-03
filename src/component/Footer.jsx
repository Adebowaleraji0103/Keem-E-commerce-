function Footer() {
  return (
    <div className="section flex justify-between bg-teal-700 text-zinc-50 py-5" id="footer">
      <div className="italic">
        <p>Keem Rocket-Powered Products, Inc.</p>
        <p>55 Astro Way</p>
        <p>Fairfield, New Jersey 12345-5555</p>
        <p>Email: Inquires@belloharyourmidey.com</p>
        <p>Phone: +234 719747490484</p>
      </div>

      <div className="flex flex-col gap-2">
        <a href="#Rocket">Rocket</a>
        <a href="">Testimonials</a>
        <a href="">contact Us</a>
      </div>

      <div className="flex flex-col gap-2">
        <p>copyright © 2024</p>
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
}
export default Footer;
