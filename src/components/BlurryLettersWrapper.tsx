"use client"
import { ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type BlurryLettersWrapperProps = {
    children: ReactNode
}

const CHARS = "nZkXoFqvLaQyRjPWhsdUeTGlrVfMIZcptbDkSgYwHOmCjNRuXxAqvKfLzJoEyPThBdWnCmUiRsVgYkXaQmFjLpZcDoWrNtHbUzSxVyKeCfMiGpJlQdXaOwRnTuZsVkHpCbYjMgLfQrNaWiXtUzPvKhDcSbYoJmGlQfRnXwTaUzKvHpCdSiMbYoLgQnFrXwTtUaZpKhDvCmSnZkXoFqvLaQyRjPWhsdUeTGlrVfMIZcptbDkSgYwHOmCjNRuXxAqvKfLzJoEyPThBdWnCmUiRsVgYkXaQmFjLpZcDoWrNtHbUzSxVyKeCfMiGpJlQdXaOwRnTuZsVkHpCbYjMgLfQrNaWiXtUzPvKhDcSbYoJmGlQfRnXwTaUzKvHpCdSiMbYoLgQnFrXwTtUaZpKhDvCmSnZkXoFqvLaQyRjPWhsdUeTGlrVfMIZcptbDkSgYwHOmCjNRuXxAqvKfLzJoEyPThBdWnCmUiRsVgYkXaQmFjLpZcDoWrNtHbUzSxVyKeCfMiGpJlQdXaOwRnTuZsVkHpCbYjMgLfQrNaWiXtUzPvKhDcSbYoJmGlQfRnXwTaUzKvHpCdSiMbYoLgQnFrXwTtUaZpKhDvCmSnZkXoFqvLaQyRjPWhsdUeTGlrVfMIZcptbDkSgYwHOmCjNRuXxAqvKfLzJoEyPThBdWnCmUiRsVgYkXaQmFjLpZcDoWrNtHbUzSxVyKeCfMiGpJlQdXaOwRnTuZsVkHpCbYjMgLfQrNaWiXtUzPvKhDcSbYoJmGlQfRnXwTaUzKvHpCdSiMbYoLgQnFrXwTtUaZpKhDvCmSnZkXoFqvLaQyRjPWhsdUeTGlrVfMIZcptbDkSgYwHOmCjNRuXxAqvKfLzJoEyPThBdWnCmUiRsVgYkXaQmFjLpZcDoWrNtHbUzSxVyKeCfMiGpJlQdXaOwRnTuZsVkHpCbYjMgLfQrNaWiXtUzPvKhDcSbYoJmGlQfRnXwTaUzKvHpCdSiMbYoLgQnFrXwTtUaZpKhDvCmS"

export default function BlurryLettersWrapper({ children }: BlurryLettersWrapperProps) {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    //"y" positions for different layers
    //of background decoration
    const y1 = useTransform(scrollYProgress, velocity => velocity * 500)
    const y2 = useTransform(scrollYProgress, velocity => (velocity * 1500) - 300)

    return (
        <div ref={containerRef} className="w-full relative overflow-hidden">

            {children}

            <motion.div style={{ y: y1 }} className="flex absolute blur-[3px] z-[-3] -translate-y-24 inset-0 flex-wrap gap-2 justify-around align-middle text-white/70 text-8xl">
                {CHARS.split('').map((char: string, i: number) => <span className="" key={i}>{char}</span>)}
            </motion.div>

            <motion.div style={{ y: y2 }} className="absolute inset-0 blur-[5px] z-[-4] left-0 -translate-y-24 flex flex-wrap gap-4 justify-around align-middle text-white/70 text-6xl">
                {CHARS.split('').map((char: string, i: number) => <span className="" key={i}>{char}</span>)}
            </motion.div>

        </div >
    )
}