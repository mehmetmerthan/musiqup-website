// import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
//import { HeroCards } from "./HeroCards";
import { FaGooglePlay, FaApple } from "react-icons/fa";
export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Musiqup
            </span>{" "}
            is a social platform
          </h1>{" "}
          for{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Music
            </span>{" "}
            industry
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Build your own musical journey with a strong community
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a
            href=""
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            <FaApple className="w-full md:w-1/3" size={30} />
            Get app on App Store
          </a>

          <a
            href=""
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            <FaGooglePlay className="w-full md:w-1/3" size={30} />
            Get app on Play Store
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <img
          src="/src/assets/login.png"
          style={{ width: 250, height: "auto" }}
        />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
