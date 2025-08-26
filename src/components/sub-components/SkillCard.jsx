import { div } from "framer-motion/client"
import { Const } from "three/tsl"

export default function SkillCard ({SkillTitle, Skill1, Skill2, Skill3, Skill4, Color1, Color2, Color3, bgColor, Icons}){

    return(
        <div className={`group w-full text-white bg-slate-700/50  ${bgColor} backdrop-blur-sm border-slate-600 border-[0.2px] p-3 md:p-5 rounded-xl transition-transform duration-100 ease-in-out hover:scale-80 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-700`}>
            <div className="w-[60px] h-[60px] flex justify-center items-center">
                <div className={`w-14 h-14 group-hover:w-[58px] group-hover:h-[58px] group-hover:h-15 flex justify-center items-center rounded-xl bg-gradient-to-br ${Color1} ${Color2}`}>{Icons}</div>
            </div>
            <h1 className="md:text-lg my-3">{SkillTitle}</h1>
            <ul className={`${Color3} ml-4 list-disc text-[12px] md:text-sm space-y-2 marker:font-bold`}>
                <li>{Skill1}</li>
                <li>{Skill2}</li>
                <li>{Skill3}</li>
                <li>{Skill4}</li>
            </ul>

        </div>
    )
}