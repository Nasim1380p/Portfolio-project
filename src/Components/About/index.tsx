import photo from './../../assets/profile.jpg'
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function About() {
  return (
    <div className='w-full flex justify-center mt-32'>
      <div className='md:w-[80%] w-[90%] mt-10 mb-20 flex flex-wrap '>
        <div className="md:w-[30%] w-full p-4">
          <figure className="w-full h-full"><motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .5 }}
            viewport={{ once: false }}
            className=" object-cover  w-full h-full rounded-sm" src={photo} alt="" /></figure>
        </div>
        <div className="md:w-[70%] w-full flex justify-center">
          <div className="md:w-[75%] w-full flex flex-wrap justify-end ">
            <div className="w-full md:h-[150px] h-[90px] relative">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: .8 }}
                viewport={{ once: false }}
                className="w-[98%] h-full md:flex hidden md:text-[130px] lg:text-[180px] text-[#52545857] font-bold absolute bottom-14 left-0">ABOUT</motion.div>
              <motion.div
                initial={{ scale: 0, y: 100 }}
                whileInView={{ scale: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="w-[98%] h-[70px]  absolute font-myfont text-2xl lg:text-3xl top-[50%] z-30 md:left-[10%]">Hi! I'm Nasim Pirghollo</motion.div>
            </div>
            <div className="md:w-[90%] w-full md:text-xl mt-2 md:mt-8">
              <motion.p
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: .8 }}
                viewport={{ once: false }}
                className="text-[#525458] w-[85%]">My field of study is computer engineering and I have completed the front-end programming course at Parnian Institute.</motion.p>
            </div>
            <div className="md:w-[90%] w-full text-xl mt-7">
              <h3 className="text-[#007bff] font-myfont">Checkout my resume</h3>
              <div className="flex items-center mt-5 *:text-2xl">
                <a href='https://github.com/Nasim1380p' className="w-[60px] transition-all duration-200 hover:text-white h-[60px] bg-[#191c1f] text-[#007bff] flex items-center justify-center rounded-full mr-2">< FaGithub /></a>
                <a href='https://www.linkedin.com/in/nasim-pirghollo-a783952a9/' className="w-[60px] h-[60px] transition-all duration-200 hover:text-white bg-[#191c1f] text-[#007bff] flex justify-center items-center rounded-full mr-2"><FaLinkedinIn /></a>
                <a href='https://www.instagram.com/nasim80np?igsh=MW02a3FpZjdzZW5sbA==' className="w-[60px] h-[60px] bg-[#191c1f] text-[#007bff] transition-all duration-200 hover:text-white flex items-center justify-center rounded-full mr-2"><FaInstagram /></a>
              </div>
            </div>
            <div className="md:w-[90%] font-myfont w-full md:mt-7 mt-4 mb-4 text-xl">
              <motion.p
                initial={{ scale: 0, x: -150 }}
                whileInView={{ scale: 1, x: 0 }}
                transition={{ duration: .4 }}
                viewport={{ once: false }}
              >Contact me here!</motion.p>
              <motion.p
                initial={{ scale: 0, x: -150 }}
                whileInView={{ scale: 1, x: 0 }}
                transition={{ duration: .6 }}
                viewport={{ once: false }}
                className="flex mt-3 items-center text-[#525458]">Email : <span className="text-[#007bff] ml-1">nasimpirqllw@gmail.com</span></motion.p>
              <motion.p
                initial={{ scale: 0, x: -150 }}
                whileInView={{ scale: 1, x: 0 }}
                transition={{ duration: .6 }}
                viewport={{ once: false }}
                className="flex mt-3 items-center text-[#525458]">Phone : <span className="text-[#007bff] ml-1">0902-****-032</span></motion.p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
