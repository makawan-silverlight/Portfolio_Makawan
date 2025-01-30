import { ReactElement } from "react"

interface MagicBorderProp {
    icon : ReactElement
    title?: string
}

function MagicBorder({icon,title}:MagicBorderProp) {
    return (
        <button className={`relative inline-flex h-12 ${title? "w-32":"w-12"} overflow-hidden rounded-full p-[1px] focus:outline-none`}>
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-full bg-primary text-base font-normal text-header backdrop-blur-3xl">
                <div>{icon}</div>
                {title && <div>{title}</div>}
            </span>
        </button>
    )
}

export default MagicBorder