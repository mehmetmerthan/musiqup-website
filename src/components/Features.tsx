import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import apply from "../assets/apply.png";
import createp from "../assets/createp.png";
import spoti from "../assets/spoti.png";
import profile from "../assets/profiles.png";
import profile2 from "../assets/profiles2.png";
import event from "../assets/event.png";
import { useTranslation } from "react-i18next";
interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

export const Features = () => {
  const { t } = useTranslation();
  const features: FeatureProps[] = [
    {
      title: t("create"),
      description: t("createDesc"),
      image: createp,
    },
    {
      title: t("opportunity"),
      description: t("opportunityDesc"),
      image: apply,
    },
    {
      title: t("connect"),
      description: t("connectDesc"),
      image: profile,
    },
    {
      title: t("find"),
      description: t("findDesc"),
      image: profile2,
    },
    {
      title: t("socialize"),
      description: t("socializeDesc"),
      image: event,
    },
    {
      title: t("spotify"),
      description: t("spotifyDesc"),
      image: spoti,
    },
  ];

  const featureList: string[] = [
    t("companies"),
    t("venues"),
    t("artists"),
    t("events"),
    t("stages"),
    t("bands"),
    t("editors"),
    t("musicians"),
    t("visualArtists"),
    t("andMore"),
  ];
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        {t("featuresTitle1")}{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {t("featuresTitle2")}
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
                style={{ width: 250, height: "auto" }}
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
