import { useEffect, useState } from "react"
import { FloatingCube } from "./sub-components/FloatingCube"
import { Canvas } from "@react-three/fiber"
import Cube from "./sub-components/Cube"
import { Navbar } from "./Navbar"
import { Github, Linkedin, Mail, ChevronDown, ChevronsLeftRight, Server, Database, Bug, Cloud, Puzzle, ExternalLink, MapPin, Phone, Send } from "lucide-react"
import SkillCard from "./sub-components/SkillCard"
import influenceX from "../assets/influenceX.png"
import fostertails from "../assets/fostertails.png"
import { p } from "framer-motion/client"

export const Home = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [result, setResult] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResult("Sending...")

        const formData = new FormData(e.target)
        formData.append("access_key", "fd19f3e1-1190-4737-8fec-ae1915353b3b")

        const response = await fetch("https://api.web3forms.com/submit",{
            method: "POST",
            body: formData
        })
        const data = await response.json();

        if (data.success){
            setResult("Message Sent Successfully");
            e.target.reset()
        }else{
            setResult("Something went wrong")
        }

}
    
    
        useEffect(()=>{
            const handleScroll= () =>{
                if (window.scrollY>50){
                    setIsScrolled(true)
                }else{
                    setIsScrolled(false)
                }
            }
            window.addEventListener("scroll", handleScroll)
            return()=> window.removeEventListener("scroll",handleScroll)
        },[])
    return(
        <>
        <Navbar/>
        <div className="dark flex flex-col items-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-800  px-20 pt-20 ">
            {/* ====================Navigation Bar==================== */}
            
            <section className="mb-16" id="home">
                <div className="text-5xl md:text-7xl text-center text-white font-light">
                    <h1 className=" ">Full Stack</h1>
                    <h1 className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Developer</h1>
                </div>
                <div className="text-center text-xl text-white opacity-85 mt-6">
                    <p>Crafting exceptional digital experience with modern technologies.</p>
                    <p>Specialixing in React, Node.js, Three.js and cutting edge web technology.</p>
                </div>
            </section>
            <div className="w-[80vw] flex flex-col items-center justify-center">
                <Cube/>
                <h2 className="mt-12 text-white animate-pulseFont text-sm font-light">Tap and move to explore</h2>
            </div>
            <div className="flex gap-x-6 mt-8">
                <div className="bg-slate-800 text-gray-300 hover:text-sky-500 shadow border-[1px] border-slate-700 hover:border-sky-500 rounded-xl p-2 hover:animate-pulseLogo ">
                    <a href="" className=""><Github /></a>
                </div>
                <div className="bg-slate-800 text-gray-300 hover:text-sky-500 shadow border-[1px] border-slate-700 hover:border-sky-500 rounded-xl p-2 hover:animate-pulseLogo ">
                    <a href="" className=""><Linkedin /></a>
                </div>
                <div className="bg-slate-800 text-gray-300 hover:text-sky-500 shadow border-[1px] border-slate-700 hover:border-sky-500 rounded-xl p-2 hover:animate-pulseLogo ">
                    <a href="" className=""><Mail /></a>
                </div>
               
            </div>
             <a href="" className="mt-12 flex flex-col items-center animate-bounce text-white hover:text-sky-500 text-sm font-light">
                <p >Explore My Work</p>
                <ChevronDown />
            </a>
            
        </div>

        <div className="dark flex flex-col items-center min-h-screen bg-gradient-to-b from-slate-800 to bg-slate-900 ">
            <section className="flex max-w-6xl flex-col items-center" id="skills">
                <div className="mt-20 w-[80%]">
                    <h1 className="text-5xl text-white text-center">Techincal Excellence</h1>
                    <p className="text-gray-300 text-center mt-6 text-lg">Mastering the latest technologies to build scalable, performant applications that deliver exceptional user experiences.</p>
                </div>

                <div className="grid grid-cols-3 gap-6 my-12 w-full">
                    <SkillCard SkillTitle="Frontend Development" Skill1={"React.js"} Skill2={"Javascript (ES6+)"} Skill3={"Tailwind CSS"} Skill4={"HTML5 & CSS3"} Color1={"from-blue-500"} Color2={"to-cyan-500"} Color3={"marker:text-cyan-600"} bgColor={"hover:bg-cyan-500/5"} Icons={<ChevronsLeftRight size={32} /> }/>

                    <SkillCard SkillTitle="Backend Development" Skill1={"Node.js"} Skill2={"Express"} Skill3={"Django"} Skill4={"Rest APIs"} Color1={"from-purple-500"} Color2={"to-pink-500"} Color3={"marker:text-pink-600"} bgColor={"hover:bg-pink-500/5"} Icons={<Server size={32} /> }/>

                    <SkillCard SkillTitle="Database & Cloud" Skill1={"MongoDB"} Skill2={"PostgreSQL"} Skill3={"SQLite"} Skill4={"Cloud Storage (Cloudinary)"} Color1={"from-emerald-500"} Color2={"to-teal-500"} Color3={"marker:text-teal-600"} bgColor={"hover:bg-teal-500/5"} Icons={<Database size={32} /> }/>

                    <SkillCard SkillTitle="Testing & Automation" Skill1={"Pytest"} Skill2={"Selenium"} Skill3={"Playwright"} Skill4={"Unit & Integration Testing"} Color1={"from-orange-500"} Color2={"to-red-500"} Color3={"marker:text-red-600"} bgColor={"hover:bg-red-500/5"} Icons={<Bug size={32} /> }/>

                    <SkillCard SkillTitle="Deployment & Hosting" Skill1={"Render"} Skill2={"Vercel"} Skill3={"Netlify"} Skill4={"AWS/Google Cloud"} Color1={"from-indigo-500"} Color2={"to-purple-500"} Color3={"marker:text-purple-600"} bgColor={"hover:bg-purple-500/5"} Icons={<Cloud size={32} /> }/>
                    
                    <SkillCard SkillTitle="Miscellaneous" Skill1={"Web Scrapping"} Skill2={"Git & GitHub"} Skill3={"Postman"} Skill4={"Linux"} Color1={"from-yellow-500"} Color2={"to-orange-500"} Color3={"marker:text-orange-600"} bgColor={"hover:bg-orange-500/5"} Icons={<Puzzle size={32} /> }/>
                </div>
            </section>

            <section className="mx-8 max-w-6xl" id="projects">
                <div className="flex flex-col items-center">
                    <h1 className="text-white text-5xl text-center">Recent Projects</h1>
                    <p className="text-gray-300 mt-4 w-[60%] text-center">Showcasing innovative solutions that combine cutting-edge technology with exceptional user experience design</p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-8" >
                        <div className="relative group  h-80 flex">
                        {/* Background "inverted" card */}
                            <div className="absolute w-full  inset-0 bg-gradient-to-br from-blue-800 to-purple-800 rounded-2xl rotate-2 translate-x-2 translate-y-2 transition-transform duration-300  group-hover:rotate-[5deg] group-hover:scale-105">
                            </div>
                            <div className="ml-2 relative transition-transform duration-300  w-full h-80 bg-white rounded-2xl shadow-lg -rotate-1 hover:scale-105 bg-gradient-to-br from-blue-800 to-purple-800">
                                <img src={influenceX} alt="" className="w-full rounded-2xl hover:opacity-70 h-full"/>
                            </div>

                        </div>
                        <div className="px-4 mt-3">
                            <h1 className="text-4xl font-sans bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 t">Influencer-Brand Marketplace</h1>
                            <p className="text-gray-300 mt-2 text-lg ">A comprehensive platform connecting influencers with brands for authentic collaborations. Features real-time messaging, campaign management, analytics dashboard, and secure payment processing.</p>
                            <div className="flex space-x-3 mt-6">
                                <h6 className="text-xs text-white bg-gradient-to-r from-blue-600 to-purple-600 py-[2px] px-2 rounded-lg w-fit">React.js</h6>
                                <h6 className="text-xs text-white bg-gradient-to-r from-blue-600 to-purple-600 py-[2px] px-2 rounded-lg w-fit">Node.js</h6>
                                <h6 className="text-xs text-white bg-gradient-to-r from-blue-600 to-purple-600 py-[2px] px-2 rounded-lg w-fit">MongoDB</h6>
                                <h6 className="text-xs text-white bg-gradient-to-r from-blue-600 to-purple-600 py-[2px] px-2 rounded-lg w-fit">Express.js</h6>
                                <h6 className="text-xs text-white bg-gradient-to-r from-blue-600 to-purple-600 py-[2px] px-2 rounded-lg w-fit">TailwindCSS</h6>
                            </div>
                            <div className="mt-8">
                                <button className="bg-gradient-to-r from-blue-600 to-purple-600 flex px-5 py-3 rounded-2xl text-white "><a href="https://influencex-marketplace.vercel.app/"></a>
                                <ExternalLink size={18} className="mr-2 mt-[2px]"/>View Live
                                </button>
                            </div>
                        </div>  

                </div>

                <div className="mt-24 grid grid-cols-2 gap-8">
                    <div className="px-4 mt-3">
                            <h1 className="text-4xl font-sans bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-800 t">Fostertails</h1>
                            <p className="text-gray-300 mt-2 text-lg ">An innovative pet care and adoption platform that connects pet lovers with fostering opportunities. Includes pet profiles, matching algorithms, care tracking, and community features.</p>
                            <div className="flex space-x-3 mt-6">
                                <h6 className="text-xs text-white bg-gradient-to-r from-green-500 to-green-800 py-[2px] px-2 rounded-lg w-fit">React.js</h6>
                                <h6 className="text-xs text-white bg-gradient-to-r from-green-500 to-green-800 py-[2px] px-2 rounded-lg w-fit">Node.js</h6>
                                <h6 className="text-xs text-white bg-gradient-to-r from-green-500 to-green-800 py-[2px] px-2 rounded-lg w-fit">MongoDB</h6>
                                <h6 className="text-xs text-white bg-gradient-to-r from-green-500 to-green-800 py-[2px] px-2 rounded-lg w-fit">Express.js</h6>
                                <h6 className="text-xs text-white bg-gradient-to-r from-green-500 to-green-800 py-[2px] px-2 rounded-lg w-fit">TailwindCSS</h6>
                            </div>
                            <div className="mt-8">
                                <button className="bg-gradient-to-r from-green-500 to-green-800 flex px-5 py-3 rounded-2xl text-white "><a href="https://influencex-marketplace.vercel.app/"></a>
                                <ExternalLink size={18} className="mr-2 mt-[2px]"/>View Live
                                </button>
                            </div>
                        </div>
                        <div className="relative group  h-80 flex">
                        {/* Background "inverted" card */}
                            <div className="absolute w-full  inset-0 bg-gradient-to-br from-green-500 to-green-800 rounded-2xl -rotate-2 translate-x-2 translate-y-2 transition-transform duration-300  group-hover:rotate-[-5deg] group-hover:scale-105">
                            </div>
                            <div className="ml-2 relative transition-transform duration-300  w-full h-80 bg-white rounded-2xl shadow-lg rotate-1 hover:scale-105 bg-gradient-to-br from-green-500 to-green-800">
                                <img src={fostertails} alt="" className="w-full rounded-2xl hover:opacity-70 h-full"/>
                            </div>

                        </div>
                          

                </div>
            </section>
            <section className=" mt-32 flex flex-col items-center w-full " id="contact">
                <h1 className="text-5xl text-white">Let's Work Together</h1>
                <p className="w-[60%] text-gray-300 mt-4 text-center">Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.</p>
            
                <div className="grid grid-cols-2 gap-10 max-w-6xl my-12 border-b border-slate-700">
                    <div className="flex flex-col items-start">
                        <h1 className="text-white text-2xl text-left">Get In Touch</h1>
                        <p className="text-gray-300 my-4">I'm always interested in new opportunities and exciting projects. Whether you have a project in mind or just want to connect, feel free to reach out.</p>
                        <div className="flex mt-4">
                            <div className="h-12 w-12 flex justify-center items-center rounded-xl bg-gradient-to-br from-blue-600 to-sky-600"><MapPin className="text-white"/></div>
                            <div className=" ml-4">
                                <h1 className="text-white">Location</h1>
                                <p className="text-gray-300">Pune, Maharashtra, India</p>
                            </div>
                        </div>
                        <div className="flex mt-4">
                            <div className="h-12 w-12 flex justify-center items-center rounded-xl bg-gradient-to-br from-pink-700 to-pink-400"><Phone className="text-white"/></div>
                            <div className=" ml-4">
                                <h1 className="text-white">Phone</h1>
                                <p className="text-gray-300">+91 915 676 1677</p>
                            </div>
                        </div>
                        <div className="flex mt-4">
                            <div className="h-12 w-12 flex justify-center items-center rounded-xl bg-gradient-to-br from-green-400 to-green-700"><Mail className="text-white"/></div>
                            <div className=" ml-4">
                                <h1 className="text-white">Email</h1>
                                <p className="text-gray-300">lathiankit1050@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-700 opacity-80 rounded-xl p-8 mb-16">
                        <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-6">
                            <input 
                            type="text"
                            placeholder="Your Name"
                            className="w-full rounded-lg bg-slate-800/60 text-slate-100 placeholder:text-slate-400 border border-slate-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 outline-none p-3" />
                            <input 
                            type="email"
                            placeholder="Your Email"
                            className="w-full rounded-lg bg-slate-800/60 text-slate-100 placeholder:text-slate-400 border border-slate-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 outline-none p-3" />
                        </div>
                        <input 
                        type="text"
                        placeholder="Subject"
                        className="w-full rounded-lg bg-slate-800/60 text-slate-100 placeholder:text-slate-400 border border-slate-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 outline-none p-3"
                        />
                        <textarea
                        rows={2} 
                        type="text"
                        placeholder="Subject"
                        className="w-full rounded-lg bg-slate-800/60 text-slate-100 placeholder:text-slate-400 border border-slate-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 outline-none p-3"
                        />
                        <button type="submit"
                        className="w-full flex justify-center bg-gradient-to-r from-sky-500 to-blue-700 text-white py-2 rounded-xl hover:bg-gradient-to-r hover:from-sky-600 hover:to-blue-800"
                        >   <Send size={18} className="mr-2 mt-[2px]"/>
                            Send Message
                        </button>
                        </form>
                        {result && <p className="mt-4 text-center text-gray-300">{result}</p>}
                    </div>
                </div>
                
            
            </section>
            <div className="text-slate-400 mb-24">
                    © 2025 Ankit Lathi. Crafted with passion and attention to detail.
                </div>


        </div>
        
        </>
    )
}