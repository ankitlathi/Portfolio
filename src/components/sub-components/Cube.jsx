import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Workflow,
  Server,
  Cloud,
  Shield,
} from "lucide-react";

export default function SkillCube() {
  const cubeRef = useRef(null);
  const [rotation, setRotation] = useState({ x: -20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMouse, setLastMouse] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Mouse down → start dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setLastMouse({ x: e.clientX, y: e.clientY });
  };

  // Mouse move → rotate cube
  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastMouse.x;
    const deltaY = e.clientY - lastMouse.y;

    setLastMouse({ x: e.clientX, y: e.clientY });

    setRotation((prev) => ({
      x: prev.x - deltaY * 0.3, // invert Y for natural feel
      y: prev.y + deltaX * 0.3,
    }));
  };

  // Mouse up → stop dragging
  const handleMouseUp = () => setIsDragging(false);

  // Attach global listeners for dragging
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });

  // Auto rotation (when not dragging and not hovering)
  useEffect(() => {
    let frameId;
    const animate = () => {
      if (!isDragging ) {
        setRotation((prev) => ({
          x: prev.x + 0.0, // slower on X
          y: prev.y + 0.4, // faster on Y
        }));
      }
      frameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frameId);
  }, [isDragging, isHovering]);

  // Cube faces
  const cubeFaces = [
    {
      icon: Code,
      label: "Frontend",
      colors: ["#3b82f6", "#06b6d4"],
      techs: ["React", "TypeScript", "Next.js", ],
    },
    {
      icon: Server,
      label: "Backend",
      colors: ["#a855f7", "#ec4899"],
      techs: ["Node.js", "Express", "GraphQL"],
    },
    {
      icon: Database,
      label: "Database",
      colors: ["#10b981", "#14b8a6"],
      techs: ["MongoDB", "PostgreSQL", "SQLite"],
    },
    {
      icon: Cloud,
      label: "Cloud",
      colors: ["#f97316", "#ef4444"],
      techs: ["AWS", "Docker", "Cloudinary"],
    },
    {
      icon: Workflow,
      label: "Testing & Automation",
      colors: ["#6366f1", "#a855f7"],
      techs: ["Pytest", "Playwright", "Selenium"],
    },
    {
      icon: Shield,
      label: "Security",
      colors: ["#eab308", "#f97316"],
      techs: ["Auth", "Encryption", "OAuth"],
    },
  ];

  const mdTransforms = [
    "translateZ(154px)", // front
    "rotateY(180deg) translateZ(154px)", // back
    "rotateY(90deg) translateZ(154px)", // right
    "rotateY(-90deg) translateZ(154px)", // left
    "rotateX(90deg) translateZ(154px)", // top
    "rotateX(-90deg) translateZ(154px)", // bottom
  ];
  const smTransforms = [
    "translateZ(115px)", // front
    "rotateY(180deg) translateZ(115px)", // back
    "rotateY(90deg) translateZ(115px)", // right
    "rotateY(-90deg) translateZ(115px)", // left
    "rotateX(90deg) translateZ(115px)", // top
    "rotateX(-90deg) translateZ(115px)", // bottom
  ];
  

  return (
    <div
      className="relative w-96 h-96 mx-auto [perspective:1000px] cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Cube container */}
      <motion.div
      
        ref={cubeRef}
        className="relative w-full h-full [transform-style:preserve-3d]"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          
        }}
      >
        {/* Cube faces */}
        {cubeFaces.map((face, index) => (
          <>
          <div
            key={index}
            className="absolute p-4 m-4 inset-0 w-72 h-72 rounded-3xl border border-white/20 backdrop-blur-sm overflow-hidden hidden md:block"
            style={{
              transform: mdTransforms[index],
              opacity: 0.9,
            }}
          >
            
            {/* Face content */}
            <div className="relative w-full h-full flex flex-col items-center justify-center p-8 text-white">
              {/* Main icon */}
              <div className="mb-6">
                <div className="w-20 h-20 m-2 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-lg">
                  <face.icon size={40} className="text-white" />
                </div>
              </div>

              {/* Label */}
              <h3 className="text-2xl mb-4 text-center">{face.label}</h3>

              {/* Tech list */}
              <div className="flex flex-wrap gap-2 justify-center">
                {face.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm border border-white/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            key={index}
            className="absolute p-4 m-4 inset-0 w-56 h-56 rounded-3xl border border-white/20 backdrop-blur-sm overflow-hidden block md:hidden"
            style={{
              transform: smTransforms[index],
              opacity: 0.9,
            }}
          >
            
            {/* Face content */}
            <div className="relative w-full h-full flex flex-col items-center justify-center  text-white">
              {/* Main icon */}
              <div className="mb-2">
                <div className="w-16 h-16  bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-lg">
                  <face.icon size={32} className="text-white" />
                </div>
              </div>

              {/* Label */}
              <h3 className="text-xl mb-4 text-center">{face.label}</h3>

              {/* Tech list */}
              <div className="flex flex-wrap gap-2 justify-center">
                {face.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/20 rounded-full text-[12px] backdrop-blur-sm border border-white/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          </>
        ))}

      </motion.div>

      {/* Glow under cube */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-4 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent rounded-full blur-lg" />
    </div>
  );
}
