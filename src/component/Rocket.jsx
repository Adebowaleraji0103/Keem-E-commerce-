import RocketImage from "./RocketImage";
import { motion } from "framer-motion";

function Rocket() {
  return (
    <div>
      <div
        className="flex justify-center flex-col text-center font-bold text-5xl "
        id="rocket"
      >
        <motion.h1 animate={{fontSize:20, color: '#ff2994', x:100, y:-100 }}
         className="mb-[3rem]">Rocket</motion.h1>
        <RocketImage />
      </div>
    </div>
  );
}
export default Rocket;
