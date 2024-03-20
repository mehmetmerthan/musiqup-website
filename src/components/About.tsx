import { useTranslation } from "react-i18next";
import home from "../assets/home.png";
export const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={home}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  {t("aboutTitle1")}{" "}
                </span>
                {t("aboutTitle2")}
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                {t("aboutText1")}
                <br />
                <br />
                {t("aboutText2")}
                <br />
                <br />
                {t("aboutText3")}
                <br />
                <br />
                {t("aboutText4")}
                <br />
                <br />
                {t("aboutText5")}
                <br />
                <br />
                {t("aboutText6")}
                <br />
                <br />
                {t("aboutText7")}
              </p>
            </div>

            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
