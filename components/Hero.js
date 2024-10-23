import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero-first mx-auto -mt-1 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20 2xl:px-24 bg-[#013533]">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start text-white">
        <h1 className="font-extrabold text-4xl lg:text-[2.5rem] tracking-tight md:-mb-4">
          WorkPadHQ – Powering Connections, Opportunities, and Growth
        </h1>
        <p className="text-lg opacity-80 leading-relaxed ">
          Unlock opportunities across ecosystems, networks, and industries — from venture capital,
          private equity, Web3, B2B SaaS, and startup communities.
        </p>
        <Link
          href="/demo"
          className="bg-white text-[#013533] transition-colors px-5 py-2 rounded border border-white text-center btn-wide font-semibold hover:bg-white/90">
          Get {config.appName}
        </Link>
      </div>
      <div className="lg:w-full">
        <Image
          src="/assets/images/hero-image.jpeg"
          alt="Product Demo"
          className="w-full rounded-lg border-[1.5px] border-base-300 drop-shadow-xl"
          priority={true}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
