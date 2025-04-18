import type { FC } from "react"

interface LogoProps {
    size?: "sm" | "md" | "lg"
}

const Logo: FC<LogoProps> = ({ size = "md" }) => {
    const sizeClasses = {
        sm: "h-6",
        md: "h-8",
        lg: "h-12",
    }

    return (
        <div className="flex items-center gap-2">
            <div className={`relative ${sizeClasses[size]}`}>
                <svg viewBox="0 0 40 40" className={`${sizeClasses[size]}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#3028B2" />
                    <path
                        d="M12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20C28 24.4183 24.4183 28 20 28"
                        stroke="#FAED2B"
                        strokeWidth="3"
                    />
                    <path
                        d="M20 28C17.7909 28 16 26.2091 16 24C16 21.7909 17.7909 20 20 20C22.2091 20 24 21.7909 24 24C24 26.2091 22.2091 28 20 28Z"
                        fill="#C46AD8"
                    />
                    <path d="M14 14L26 26" stroke="#F4BB0A" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </div>
            <span className={`font-bold ${size === "sm" ? "text-lg" : size === "md" ? "text-xl" : "text-2xl"}`}>
        <span className="text-primary">Re</span>
        <span className="text-secondary">Trade</span>
      </span>
        </div>
    )
}

export default Logo