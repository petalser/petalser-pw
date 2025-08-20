"use client"
import { useState } from "react"
import ErrorWindow from "./ErrorWindow"
import { InView } from "react-intersection-observer"

import { motion } from "motion/react"

const SECTIONS = [
    { title: "Updated", text: "Looks modern, works fast. It is secure and efficient." },
    { title: "Outdated", text: "Not the latest trend, but still doing its job." },
    { title: "Deprecated", text: "It works… but nobody knows why or for how long." },
    { title: "Obsolete", text: "Does not work anymore. So... There is a lot of work. Let's start" }
]

export default function AboutStatesSection() {
    const [cardInViewIndex, setCardInViewIndex] = useState(0)
    const [isModalAllowed, setIsModalAllowed] = useState(true)
    const [isModalShown, setIsModalShown] = useState(false)

    function handleClose() {
        setIsModalAllowed(false)
        setIsModalShown(false)
    }

    function handleChange(inView: boolean, entry: IntersectionObserverEntry) {
        if (inView) {
            const cardId = parseInt(entry?.target.getAttribute("id") || "0")
            setCardInViewIndex(cardId)

            if (isModalAllowed && SECTIONS.length - 1 === cardId) setIsModalShown(true)
        }
    }

    return (
        <section className="w-4/5 big:w-3/5 mx-auto overflow-hidden">
            <h2 className="w-full mx-auto my-5 big:my-16 text-xl big:text-3xl">Just like hardware, software can be in different conditions</h2>

            {/* carousel itself */}
            <div className="relative">

                {/* carousel indicator */}
                <div className="flex z-50 flex-col absolute top-1/2 -translate-y-1/2 right-[10%]">
                    {SECTIONS.map((_, i) => {
                        return <motion.div
                            animate={{
                                opacity: i === cardInViewIndex ? 0.8 : 0.5,
                            }}
                            transition={{ duration: 0.3 }}
                            key={i}
                            className="size-2 m-0.5 border-2 rounded-xs"
                        ></motion.div>
                    })}
                </div>


                <motion.dl
                    className="w-full h-80 relative mx-auto bg-black/50 backdrop-blur-sm border-2 [border-image:linear-gradient(to_right_bottom,transparent,var(--foreground),transparent,var(--foreground),transparent)_1] border-opacity-50 overflow-y-auto flex flex-col snap-y snap-mandatory scroll-smooth no-scrollbar">

                    {SECTIONS.map((section, i) => (
                        <InView onChange={handleChange} threshold={0.8} key={section.title}>
                            {({ ref }) => {
                                return (
                                    <div id={`${i}`} ref={ref} className="size-4/5 p-4 flex flex-col gap-4 snap-center flex-none my-[10%] mx-auto rounded-xs bg-black">
                                        <dt className="text-2xl font-semibold">{section.title}:</dt>
                                        <dd >{section.text}</dd>
                                    </div>
                                );
                            }}
                        </InView>
                    ))}
                </motion.dl>
            </div>

            {/* "fake error" window for the last card */}
            <ErrorWindow isShown={isModalShown} onClose={handleClose} />

        </section >
    )
}
