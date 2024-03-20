import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import kadim from "../assets/kadim-tekin.jpg";
import efe from "../assets/efe.jpg";
import seckin from "../assets/seckin-turk.jpeg";
import kuntay from "../assets/kuntay.jpg";
import cem from "../assets/cem-tore.jpg";
import cemil from "../assets/cemil-cosan.jpg";
import ozkan from "../assets/ozkan-unver.jpg";
import { useTranslation } from "react-i18next";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

export const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials: TestimonialProps[] = [
    {
      image: kadim,
      name: "Kadim Tekin",
      userName: "Vocalist, Songwriter",
      comment: t("testimonials1"),
    },
    {
      image: efe,
      name: "Effie",
      userName: "Vocalist",
      comment: t("testimonials2"),
    },

    {
      image: seckin,
      name: "Seçkin Türk",
      userName: t("guitarist") + ", " + t("songwriter"),
      comment: t("testimonials3"),
    },
    {
      image: kuntay,
      name: "Kuntay",
      userName: t("producer") + ", " + t("dj"),
      comment: t("testimonials4"),
    },
    {
      image: cem,
      name: "Cem Töre",
      userName: t("videographer") + ", " + t("director"),
      comment: t("testimonials5"),
    },
    {
      image: cemil,
      name: "Cemil Coşan",
      userName: t("mixing") + ", " + t("dj"),
      comment: t("testimonials6"),
    },
    {
      image: ozkan,
      name: "Özkan Ünver",
      userName: t("dj"),
      comment: t("testimonials7"),
    },
  ];
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        {t("testimonialsTitle1")}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          {t("testimonialsTitle2")}{" "}
        </span>
        {t("testimonialsTitle3")}
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        {t("testimonialsDesc")}
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt="" src={image} />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
