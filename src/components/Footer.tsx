import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a href="/" className="font-bold text-xl flex">
            <img src="/src/assets/icon.png" className="w-8 h-8 mr-2" />
            musiqup
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">{t("followUs")}</h3>
          <div>
            <a href="" className="opacity-60 hover:opacity-100">
              Instagram
            </a>
          </div>

          <div>
            <a href="" className="opacity-60 hover:opacity-100">
              Linkedin
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Platforms</h3>
          <div>
            <a href="" className="opacity-60 hover:opacity-100">
              Ios
            </a>
          </div>

          <div>
            <a href="" className="opacity-60 hover:opacity-100">
              Android
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 {t("rights")}{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mehmetmerthan/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Mehmet Mert HAN
          </a>
        </h3>
      </section>
    </footer>
  );
};
