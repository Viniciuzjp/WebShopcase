import Button from "@/components/button/Button"
import Cat from "@/ui/Header/Main/Cat/Cat"
import Hero from "@/ui/Header/Main/Hero/Hero"
import Info from "@/ui/Header/Main/Info/Info"
import Offer from "@/ui/Header/Main/Offer/Offers"
import Releases from "@/ui/Header/Main/Release/Release"
import Send from "@/ui/Header/Main/Send/Send"
import Image from "next/image"

export default function Home () {
    return (
        <>
        <main className="min-h-screen bg-neutral-50">
            <Hero />
            <Info />
            <Offer />
            <Cat />
            <Releases />
            <Send />
        </main>
        </>
    )
}