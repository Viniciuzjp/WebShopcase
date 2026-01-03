
import Image from "next/image";

export default function Hero() {
  return (
    <>
        <section className="w-full">
              <Image
                src="/images/bannerHero.png"
                width={1530}
                height={300}
                alt="image"
              />
        </section>
    </>
  );
}
