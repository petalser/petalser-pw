'use client'
import { useRef } from "react"
import { MouseEvent } from "react"
import { useSpring, motion } from "motion/react"

export default function ActionButton() {
    const shadowRef = useRef<HTMLButtonElement>(null)
    const left = useSpring(0, { damping: 100, stiffness: 100, })
    const top = useSpring(0, { damping: 100, stiffness: 100, })
    const scale = useSpring(1, { damping: 100, stiffness: 100, })



    function handleMouseMoves(e: MouseEvent) {
        const rect = e.currentTarget.getBoundingClientRect()
        const centerY = rect.height / 2
        const centerX = rect.width / 2

        const buttonW = shadowRef.current?.offsetWidth || 0
        const buttonH = shadowRef.current?.offsetHeight || 0

        const posY = centerY - (buttonH / 2) - (e.clientY - centerY - rect.top) * 2
        const posX = centerX - (buttonW / 2) - (e.clientX - centerX) * 2

        const verticalCursorOffset = Math.abs(e.clientY - centerY - rect.top)
        const horizontalCursorOffset = Math.abs(e.clientX - centerX)
        const distance = Math.sqrt((verticalCursorOffset ** 2) + (horizontalCursorOffset ** 2))

        top.set(posY)
        left.set(posX)
        scale.set(1 + (distance / 200))
    }

    return (
        <div
            onMouseMove={handleMouseMoves}
            className="relative w-full flex h-[50dvh] overflow-hidden">
            <button
                className="px-4 py-2 m-auto border-2 bg-black/50 backdrop-blur-sm"
                role="link">
                I'm a link
            </button>
            <motion.button
                ref={shadowRef}
                style={{
                    left,
                    top,
                    scale,
                    filter: `blur(${scale.get()}px)`
                }}
                className="absolute -z-10 text-nowrap top-[30%] left-10 px-4 py-2 m-auto shadow-[0_0_70px_rgb(255,255,255)] bg-black/50 backdrop-blur-sm"
                role="link">
                I'm a link
            </motion.button>
        </div>
    )
}