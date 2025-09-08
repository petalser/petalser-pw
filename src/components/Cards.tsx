"use client"
import { useState } from "react"
import ErrorWindow from "./ErrorWindow"
import { InView } from "react-intersection-observer"

import { motion } from "motion/react"

type CarouselIndicatorProps = { chosenCard: number, contentLength: number, className?: string }

type CardsProps = {
    headerText: string;
    content: {
        title: string;
        text: string;
    }[];
    hasFakeError?: boolean;
}

export default function Cards({ headerText, content, hasFakeError = true }: CardsProps) {
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

            if (hasFakeError && isModalAllowed && content.length - 1 === cardId) setIsModalShown(true)
        }
    }

    return (
        <section className="w-4/5 big:w-3/5 py-5 mx-auto overflow-hidden">
            <h2 className="w-full mx-auto big:my-16 text-xl big:text-3xl">{headerText}</h2>

            {/* carousel itself */}
            <div className="relative">

                <CarouselIndicator chosenCard={cardInViewIndex} contentLength={content.length} className={"left-0"} />
                <CarouselIndicator chosenCard={cardInViewIndex} contentLength={content.length} className={"right-0"} />

                <motion.dl
                    className="bg-[repeating-linear-gradient(45deg,var(--penumbra)_0_1px,var(--background)_3px_13px)] w-full h-80 relative mx-auto overflow-y-auto flex flex-col snap-y snap-mandatory scroll-smooth no-scrollbar">

                    {content.map((section, i) => (
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

function CarouselIndicator({ chosenCard, contentLength, className }: CarouselIndicatorProps) {
    return (
        <div className={`flex z-50 flex-col absolute h-full gap-1.5 top-0 ${className}`}>
            {Array.from({ length: contentLength }).map((_, i) => {
                return <motion.div
                    animate={{ opacity: i === chosenCard ? 0.8 : 0.5 }}
                    transition={{ duration: 0.3 }}
                    key={i}
                    className="h-1/4 border-1"
                ></motion.div>
            })}
        </div>
    )
}