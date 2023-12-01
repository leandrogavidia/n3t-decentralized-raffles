import { ReactNode } from "react"

export const N3tButton = ({ 
    children,
    color,
    width,
    className
}: { 
    children: ReactNode,
    color: "black",
    width: "full",
    className?: string
}) => {
    const bg = {
        "black": "bg-n3t-black"
    }

    const w = {
        "full": "w-full"
    }
    return (
        <button
            className={`${bg[color]} ${w[width]} rounded-md px-4 py-2 transition-all hover:bg-n3t-gradient ${className}`}
        >
            {children}
        </button>
    )
}