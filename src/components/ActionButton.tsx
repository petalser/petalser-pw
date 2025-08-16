'use client'
import { useRef } from "react"
import { MouseEvent } from "react"
import { useSpring, useTransform, motion, useScroll } from "motion/react"

const STIFFNESS = 300;
const DAMPING = 50;
const SHADOW_MORPH_MULTIPLIER = 500

function normalize(cursorOffset: number) {
    return (cursorOffset / SHADOW_MORPH_MULTIPLIER) + 1
}

export default function ActionButton() {
    const containerRef = useRef<HTMLDivElement>(null)
    const shadowRef = useRef<HTMLDivElement>(null)
    const left = useSpring(0, { damping: DAMPING, stiffness: STIFFNESS, })
    const top = useSpring(0, { damping: DAMPING, stiffness: STIFFNESS, })
    const blur = useSpring(500, { damping: DAMPING, stiffness: STIFFNESS })
    const scaleX = useSpring(1, { damping: DAMPING, stiffness: STIFFNESS })
    const scaleY = useSpring(1, { damping: DAMPING, stiffness: STIFFNESS })
    const conrainerBorderOpacity = useSpring(0, { damping: DAMPING, stiffness: STIFFNESS })

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [200, -400])

    function handleMouseMoves(e: MouseEvent) {
        const rect = e.currentTarget.getBoundingClientRect()
        const centerY = rect!.height / 2
        const centerX = rect!.width / 2

        const buttonW = shadowRef.current?.offsetWidth || 0
        const buttonH = shadowRef.current?.offsetHeight || 0

        const posY = centerY - (buttonH / 2) - (e.clientY - centerY - rect.top) * 2
        const posX = centerX - (buttonW / 2) - (e.clientX - centerX) * 2

        const verticalCursorOffset = Math.abs(e.clientY - centerY - rect.top)
        const horizontalCursorOffset = Math.abs(e.clientX - centerX)

        top.set(posY)
        left.set(posX)

        scaleX.set(normalize(horizontalCursorOffset));
        scaleY.set(normalize(verticalCursorOffset));

        blur.set(Math.max(verticalCursorOffset + horizontalCursorOffset) / 20)

        conrainerBorderOpacity.set(e.clientY - centerY - rect.top)
    }

    const topBorderOpacity = useTransform(conrainerBorderOpacity, [0, 50], [0, 1])
    const bottomBorderOpacity = useTransform(conrainerBorderOpacity, [0, -50], [0, 1])
    const filter = useTransform(blur, (b) => `blur(${b}px)`);

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMoves}
            className="relative w-full flex flex-col h-40 big:h-70 overflow-hidden">

            {/* scroll spotlight */}
            <motion.div
                style={{ y }}
                className="size-150 block big:hidden bg-radial-[at_50%_50%] from-foreground/30 via-transparent to-transparent left-0 absolute"></motion.div>

            {/* upper border */}
            <motion.div
                style={{
                    left,
                    opacity: topBorderOpacity
                }}
                className="absolute z-30 -translate-x-36 bg-gradient-to-r from-transparent via-foreground/50 to-transparent top-0 right-0 w-100 h-0.5">
            </motion.div>

            {/* button itself */}
            <button
                className="cursor-grab px-4 py-2 m-auto border-2 bg-black/50 backdrop-blur-sm"
                role="link">
                Say Hello
            </button>

            {/* lower border */}
            <motion.div
                style={{
                    left,
                    opacity: bottomBorderOpacity
                }}
                className="absolute -translate-x-36 bg-gradient-to-r from-transparent via-foreground/50 to-transparent bottom-0 w-100 h-0.5">
            </motion.div>

            {/* shadow */}
            <motion.div
                ref={shadowRef}
                style={{
                    left,
                    top,
                    scaleX,
                    scaleY,
                    filter,
                }}
                className="hidden big:block absolute -z-10 top-48 text-nowrap px-4 py-2 m-auto shadow-[0_0_70px_rgb(255,255,255)] bg-black/50 backdrop-blur-sm"
                role="link">
                Say Hello
            </motion.div>
        </div>
    )
}