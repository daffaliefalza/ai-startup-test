import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";

export const Hero = () => {
  return (
    <section
      className="relative flex h-[492px] md:h-[800px]  items-center overflow-hidden [mask-image:linear-gradient(to_bottom,_transparent,_black_10%,_black_90%,_transparent)]"
      style={{
        backgroundImage: `url(${starsBg.src})`,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      {/* start planet */}

      <div className="absolute top-1/2 left-1/2 h-64 w-64 md:h-96 md:w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,_white,_rgb(184,148,255)_37.7%,_rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,0.5),_-20px_-20px_80px_rgb(255,255,255,0.1),_0_0_50px_rgb(140,69,255)]"></div>

      <div className="absolute h-[344px] w-[344px]  md:h-[580px] md:w-[580px] border opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-2 w-2  bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2  bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5  border border-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </div>

      <div className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"></div>

      <div className="absolute h-[544px] w-[544px]  md:h-[980px] md:w-[980px] rounded-full border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="absolute h-2 w-2  bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2  bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      {/* end planet */}

      <div className="container relative mt-16">
        <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter  bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          AI SEO
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto text-white/80 mt-5 text-center">
          Elevate your site's visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="flex justify-center mt-5">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </section>
  );
};
