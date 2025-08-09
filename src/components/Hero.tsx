'use client'
import { useRef } from "react";
import { motion, rgba, useScroll, useTransform } from "framer-motion";

export default function Hero() {
    const ref = useRef(null);
    const sectionRef = useRef(null)
    const { scrollYProgress, scrollY } = useScroll({
        target: ref,
        offset: ['end end', 'end start']
    });
    const { scrollYProgress: fade } = useScroll({
        target: ref,
        offset: ['start center', 'end start']
    });

    const rotateX = useTransform(scrollYProgress, [0, 1], [0, 90]);
    const slowDownTheEntireSection = useTransform(scrollY, (velocity) => velocity * 0.5)

    return (
        <motion.section
            ref={sectionRef}
            style={{ y: slowDownTheEntireSection }}
            className="relative flex flex-col min-h-screen ml-auto mr-[15%] big:m-auto">
            <div className="relative my-auto">
                <h1 className="mr-auto text-right text-2xl big:text-5xl uppercase">
                    i build
                    <span className="font-light mr-8"> simple</span>
                    <br />
                    <span className="font-cursive font-medium text-5xl big:text-7xl bg-gradient-to-b from-background via-foreground to-background bg-clip-text text-transparent leading-5 lowercase tracking-wider px-8 text-nowrap">
                        yet beautiful
                    </span>
                    <br />
                    <span className="pr-8">
                        websites
                    </span>
                </h1>

                <motion.h1
                    ref={ref}
                    style={{
                        rotateX,
                        scaleY: -1.5,
                        transformOrigin: 'bottom',
                        maskImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.001))",
                        WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))"
                    }}
                    className="blur-[2px] mr-auto -translate-y-27 big:-translate-y-37 text-right text-2xl big:text-5xl uppercase opacity-70 origin-bottom"
                >
                    i build
                    <span className="font-light mr-8"> simple</span>
                    <br />
                    <span className="font-cursive text-5xl big:text-7xl bg-gradient-to-b from-background via-foreground to-background bg-clip-text text-transparent leading-5 lowercase tracking-wider px-8 font-bold">
                        yet beautiful
                    </span>
                    <br />
                    <span className="pr-8">
                        websites
                    </span>
                </motion.h1>
            </div>
        </motion.section>

    );
}
