'use client'
import { motion } from "motion/react"

// requires relative position for parent
export default function RingsBGMobile() {
    return (
        <>
            {Array.from({ length: 10 }).map((_, i) => {
                return <motion.div
                    key={i}
                    className="block big:hidden absolute top-1/2 left-1/2 
                        -translate-x-1/2 -translate-y-1/2
                        rounded-full border-3 border-[var(--foreground)]"
                    style={{ filter: "blur(5px)", zIndex: i - 100 }}
                    animate={{ width: "110dvw", height: "110dvw" }}
                    initial={{ width: "1dvw", height: "1dvw" }}
                    transition={{ delay: i, duration: 5, repeat: Infinity, ease: "linear" }}
                ></motion.div>
            })}
        </>
    )
}