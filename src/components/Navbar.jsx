import { useEffect, useState } from "react"

export const Navbar =()=>{
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(()=>{
        const handleScroll= () =>{
            if (window.scrollY>5){
                setIsScrolled(true)
            }else{
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return()=> window.removeEventListener("scroll",handleScroll)
    },[])

    return(
        <nav className={`fixed px-20  w-full transition-all duration-100 ${isScrolled ? " bg-slate-900/90 backdrop-blur-md shadow-xl  border-slate-700/50  z-50" : "bg-transparent"}`}>
            <div className="max-w-6xl mx-auto flex justify-between">
                <div className="text-white font-semibold text-xl py-6">
                    <a href="#">Ankit Lathi</a>
                </div>
                <div className="text-white font-medium py-6 flex gap-8">
                    <div><a href="#">Home</a></div>
                    <div><a href="#skills">Skills</a></div>
                    <div><a href="#projects">Projects</a></div>
                    <div><a href="#contact">Contact</a></div>
                </div>
            </div>
            
        </nav>
    )
}