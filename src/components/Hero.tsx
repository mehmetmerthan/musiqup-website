import { buttonVariants } from "./ui/button";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { useTranslation } from "react-i18next";
export const Hero = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          {i18n.language === "en" ? (
            <div>
              <h1 className="inline">
                <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
                  Musiqup
                </span>{" "}
                {t("heroText1")}
              </h1>{" "}
              {t("heroText2")}{" "}
              <h2 className="inline">
                <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                  {t("heroText3")}
                </span>{" "}
                {t("heroText4")}
              </h2>
            </div>
          ) : (
            <div>
              <h1 className="inline">
                <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
                  Musiqup
                </span>{" "}
                {t("heroText1")}
              </h1>{" "}
              {t("heroText2")}{" "}
              <h2 className="inline">
                {t("heroText3")}{" "}
                <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                  {t("heroText4")}
                </span>{" "}
              </h2>
            </div>
          )}
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          {t("heroDesc")}
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
            {t("heroAppStore")}
          </a>

          <a
            href=""
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            <FaGooglePlay className="w-full md:w-1/3" size={30} />
            {t("heroPlayStore")}
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
