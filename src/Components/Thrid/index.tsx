import thrid from './../../assets/mnm.png'
import { TiArrowRight } from "react-icons/ti";
import { motion } from "framer-motion";

export default function Thrid() {
  return (
    <div>
      <div className="w-full flex flex-wrap justify-center mt-28">
        <motion.a
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .9 }}
          viewport={{ once: false }}
          className="md:w-[35%] h-[210px] md:h-[260px] flex w-[90%] shadow-lg shadow-[gray] " href='https://github.com/Nasim1380p/Admin-Panel'>
          <figure className="w-full h-full"><img className="object-cover h-full w-full rounded-sm" src={thrid} alt="" /></figure>
        </motion.a>
        <div className="md:w-[65%] w-full flex justify-center">
          <div className="md:w-[80%] lg:w-[70%] w-[90%] ">
            <motion.p
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .6 }}
              viewport={{ once: false }}
              className='text-[#a5a3a3] mt-8 font-myfont'>third-project</motion.p>
            <motion.h3
              initial={{ opacity: 0, y: -70, scale: 0 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: .6 }}
              viewport={{ once: false }}
              className='md:text-3xl text-2xl font-bold mt-5'>Admin-Panel </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: -70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .7 }}
              viewport={{ once: false }}
              className='text-[#c6c0c086] text-lg mt-3'>The following programming languages ​​are used in this project :</motion.p>
            <motion.span
              initial={{ opacity: 0, y: -70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .8 }}
              viewport={{ once: false }}
              className='text-[#7a7979a8] mt-1 text-lg flex'>HTML5 , React , MUI ,Next , Tailwind ,MockApi </motion.span>
            <motion.a
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              href='https://github.com/Nasim1380p/Admin-Panel' className='text-[#007bff] mt-12 flex items-center '><span>View Project</span> <TiArrowRight className='mt-1 text-xl hover:translate-x-1 transition-all duration-200' /></motion.a>
          </div>
        </div>
      </div>
    </div>
  )
}
