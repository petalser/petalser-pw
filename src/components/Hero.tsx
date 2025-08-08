// 'use client'
// import { useRef } from "react";
// import { motion, rgba, useScroll, useTransform } from "framer-motion";

// export default function Hero() {
//     const ref = useRef(null);
//     const sectionRef = useRef(null)
//     const { scrollYProgress, scrollY } = useScroll({
//         target: ref,
//         offset: ['start center', 'end center']
//     });
//     const { scrollYProgress: fade } = useScroll({
//         target: ref,
//         // offset: ['end center', 'end start']
//         offset: ['start start', 'end start']
//     });

//     const rotateX = useTransform(scrollYProgress, [0, 1], [0, 90]);
//     const transparency = useTransform(fade, [0, 1], [1, 0])
//     const slowDownTheEntireSection = useTransform(scrollY, (velocity) => velocity * 0.5)

//     return (
//         <>
//             <div className="absolute z-10 bg-red-400 w-screen border top-[50%]"></div>
//             <div className="absolute z-10 bg-red-400 w-screen border top-[100%]"></div>
//             <motion.section
//                 ref={sectionRef}
//                 style={{ y: slowDownTheEntireSection }}
//                 className="flex flex-col min-h-screen m-auto">
//                 <div className="relative my-auto">
//                     <motion.h1 style={{ opacity: transparency }} className="leading-5 text-6xl uppercase font-black">
//                         updated or
//                     </motion.h1><br />
//                     <motion.h1 style={{ opacity: transparency }} className="leading-5 text-6xl uppercase font-black">
//                         deprecated
//                     </motion.h1>

//                     <motion.h1
//                         ref={ref}
//                         style={{
//                             rotateX,
//                             scaleY: -2,
//                             transformOrigin: 'bottom',
//                             maskImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
//                             WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))"
//                         }}
//                         className="text-6xl blur-xs leading-18 uppercase font-black absolute -top-6 left-0 opacity-70 origin-bottom"
//                     >
//                         updated or deprecated
//                     </motion.h1>
//                 </div>
//             </motion.section>
//         </>

//     );
// }

'use client'
import { useRef } from "react";
import { motion, rgba, useScroll, useTransform } from "framer-motion";

export default function Hero() {


    return (
        <>
            <div className="absolute z-10 bg-red-400 w-1/2 border top-[50%]"></div>
            <div className="absolute z-10 bg-red-400 w-1/2 border top-[100%]"></div>
            <motion.section
                className="flex flex-col-reverse overflow-visible w-3/5 h-[50dvh] m-auto">
                {/* {origin} */}
                <h1 className="mr-auto text-right text-5xl uppercase">
                    i build
                    <span className="font-light mr-8"> simple</span>
                    <br />
                    <span className="font-cursive font-medium text-7xl bg-gradient-to-b from-background via-foreground to-background bg-clip-text text-transparent leading-5 lowercase tracking-wider px-8">
                        yet beautiful
                    </span>
                    <br />
                    <span className="pr-8">
                        websites
                    </span>
                </h1>

            </motion.section>
        </>

    );
}



