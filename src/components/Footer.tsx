import RingsBGMobile from "./RingsBGMobile"

export default function Footer() {
    return (
        <div
            className="relative w-full flex flex-col h-40 big:h-70 overflow-hidden">


            {/* upper border */}
            <div
                className="absolute z-30 -translate-x-36 bg-gradient-to-r from-transparent via-foreground/50 to-transparent top-0 right-0 w-100 h-0.5">
            </div>

            {/* button itself */}
            <button
                className="cursor-grab px-4 py-2 m-auto border-2 bg-black/50 backdrop-blur-lg"
                role="link">
                Get In Touch
            </button>

            <RingsBGMobile />

        </div >
    )
}