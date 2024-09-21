import { motion } from "framer-motion";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
// import { SiTypescript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaJs } from "react-icons/fa";
export default function Services() {
    return (
        <section className="w-full flex justify-center">
            <div className="md:w-[50%] w-[90%] md:mt-14 mt-4">
                <motion.h3
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .8 }}
                    viewport={{ once: false }}
                    className="text-[#a5a3a3] md:text-xl text-lg text-center font-myfont">WHAT I DO</motion.h3>
                <motion.h2
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .8 }}
                    viewport={{ once: false }}
                    className="font-bold text-2xl md:text-4xl mt-3 text-center">My Advantages</motion.h2>
                <div className="w-full flex flex-wrap mt-12">
                    <div className="w-1/3 flex justify-center mt-5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .8 }}
                            viewport={{ once: false }}
                            className="w-[100px] h-[100px] md:w-[145px] md:h-[145px] rounded-full shadow-inner shadow-[#a5a3a3] flex flex-wrap justify-center items-center">
                            <div>
                                <IoLogoHtml5 className="w-full md:text-5xl text-3xl text-[#3185f4]" />
                                <p className="text-xl flex justify-center mt-2">100%</p>
                            </div>
                        </motion.div>
                    </div>
                    {/* //////////////////2//////////////////// */}
                    <div className="w-1/3 flex justify-center mt-5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .8 }}
                            viewport={{ once: false }}
                            className="w-[100px] h-[100px] md:w-[145px] md:h-[145px] rounded-full shadow-inner shadow-[#a5a3a3] flex flex-wrap justify-center items-center">
                            <div>
                                <IoLogoCss3 className="w-full md:text-5xl text-3xl text-[#e8773f]" />
                                <p className="text-xl flex justify-center mt-2">95%</p>
                            </div>
                        </motion.div>
                    </div>
                    {/* /////////////////3////////////////// */}
                    <div className="w-1/3 flex justify-center mt-5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .8 }}
                            viewport={{ once: false }}
                            className="w-[100px] h-[100px] md:w-[145px] md:h-[145px] rounded-full shadow-inner shadow-[#a5a3a3] flex flex-wrap justify-center items-center">
                            <div>
                                <FaBootstrap className="w-full md:text-5xl text-3xl text-[#2d2dc4]" />
                                <p className="text-xl flex justify-center mt-2">90%</p>
                            </div>
                        </motion.div>
                    </div>
                    {/* /////////////////////4////////////////// */}
                    <div className="w-1/3 flex justify-center mt-5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .8 }}
                            viewport={{ once: false }}
                            className="w-[100px] h-[100px] md:w-[145px] md:h-[145px] rounded-full shadow-inner shadow-[#a5a3a3] flex flex-wrap justify-center items-center">
                            <div>
                                <BiLogoTailwindCss className="w-full md:text-5xl text-3xl text-[#31f4dd]" />
                                <p className="text-xl flex justify-center mt-2">95%</p>
                            </div>
                        </motion.div>
                    </div>
                    {/* ////////////////////5///////////////////// */}
                    <div className="w-1/3 flex justify-center mt-5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .8 }}
                            viewport={{ once: false }}
                            className="w-[100px] h-[100px] md:w-[145px] md:h-[145px] rounded-full shadow-inner shadow-[#a5a3a3] flex flex-wrap justify-center items-center">
                            <div>
                                <GrReactjs className="w-full md:text-5xl text-3xl text-[#79aff4]" />
                                <p className="text-xl flex justify-center mt-2">80%</p>
                            </div>
                        </motion.div>
                    </div>
                    {/* ///////////////////////6////////////////////////// */}
                    <div className="w-1/3 flex justify-center mt-5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .8 }}
                            viewport={{ once: false }}
                            className="w-[100px] h-[100px] md:w-[145px] md:h-[145px] rounded-full shadow-inner shadow-[#a5a3a3] flex flex-wrap justify-center items-center">
                            <div>
                                <FaJs className="w-full md:text-5xl text-3xl text-[#eff54d]" />
                                <p className="text-xl flex justify-center mt-2">85%</p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
