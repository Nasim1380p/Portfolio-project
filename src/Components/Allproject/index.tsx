import { motion } from "framer-motion";
import Firstpro from "../Firstpro";
import Second from "../Second";
import Thrid from "../Thrid";
import Fourth from "../Fourth";

export default function Allproject() {
  return (
    <section className="w-full flex flex-wrap justify-center">
      <div className="w-[80%] mt-20 mb-16">
        <motion.p
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: false }}
          className="text-[#a5a3a3] font-myfont md:text-xl text-lg text-center mt-12">PORTFOLIO</motion.p>
        <motion.h2
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: false }}
          className="font-bold text-xl md:text-5xl mt-3 text-center">Checkout a few of my works</motion.h2>

      </div>
      <div className="md:mt-8 md:w-[75%] w-[90%]">
        <Firstpro />
        <Second />
        <Thrid />
        <Fourth />
      </div>
    </section>
  )
}
