import Button from "@/components/button/Button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <>
        <section className="w-full">
              <Image
                src="/images/enontre2.png"
                width={1530}
                height={300}
                alt="image"
              />
        </section>
    </>
  );
}
