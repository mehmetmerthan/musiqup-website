import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { WalletIcon, ChartIcon } from "./Icons";
import create from "../assets/create.png";
import { GrSecure } from "react-icons/gr";
import { TbWorld } from "react-icons/tb";
import { useTranslation } from "react-i18next";
interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

export const Services = () => {
  const { t } = useTranslation();

  const serviceList: ServiceProps[] = [
    {
      title: t("services1"),
      description: t("services1Desc"),
      icon: <ChartIcon />,
    },
    {
      title: t("services2"),
      description: t("services2Desc"),
      icon: <WalletIcon />,
    },
    {
      title: t("services3"),
      description: t("services3Desc"),
      icon: <TbWorld size={50} style={{ color: "green", padding: 5 }} />,
    },
    {
      title: t("services4"),
      description: t("services4Desc"),
      icon: <GrSecure size={50} style={{ color: "green", padding: 5 }} />,
    },
  ];
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("servicesTitle1")}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              {t("servicesTitle2")}
            </span>
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            {t("servicesDesc")}
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={create}
          className="w-[200px] md:w-[400px] lg:w-[300px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
