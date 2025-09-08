import { ReactNode } from "react";

type SmoothenedCardProps = {
    children: ReactNode
}

export default function SmoothenedCard({ children }: SmoothenedCardProps) {
    return (
        <div className="w-4/5 mx-auto border-2 [border-image:linear-gradient(to_bottom,transparent,var(--foreground),transparent)_1] border-opacity-50 relative overflow-hidden">
            <SmoothenedCard.Top />
            <div className="bg-background">
                {children}
            </div>
            <SmoothenedCard.Bottom />
        </div >
    )
}

SmoothenedCard.Top = function Top() {
    return (
        <div className="w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
    )
}

SmoothenedCard.Bottom = function Bottom() {
    return (
        <div className="w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
    )
}