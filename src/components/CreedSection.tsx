import SmoothenedCard from "./SmothenedCard"

export default function CreedSection() {
    return (
        <>
            <section className="w-full bg-background pb-10">
                <h2 className="font-medium w-4/5 big:w-[48%] mx-auto py-5 big:py-16 text-xl big:text-3xl">
                    Simple<span className="font-light"> yet </span>beautiful,
                    <br />
                    easy to use<span className="font-light"> regardless of complexity</span>
                </h2>
            </section>
            <SmoothenedCard.Bottom />
        </>

    )
}