import Image from 'next/image'
export default function Hero() {
  return (
    <section className="w-full">
      <Image
        src={`/images/Bannerwebp.webp`} 
        alt={`Hero streetwear`}
        width={1530}
        height={100}
        className='block max-md:hidden'
      />
      <Image
        src={`/images/mobilewebp.webp`} 
        alt={`Hero streetwear`}
        width={1530}
        height={100}
        className='block md:hidden'
      />
    </section>
  );
}
