import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      image: "/src/assets/kadim-tekin.jpg",
      name: "Kadim Tekin",
      userName: "Vocalist, Songwriter",
      comment: t("testimonials1"),
    },
    {
      image: "/src/assets/efe.jpg",
      name: "Effie",
      userName: "Vocalist",
      comment: t("testimonials2"),
    },

    {
      image: "/src/assets/seckin-turk.jpeg",
      name: "Seçkin Türk",
      userName: t("guitarist") + ", " + t("songwriter"),
      comment: t("testimonials3"),
    },
    {
      image: "/src/assets/kuntay.jpg",
      name: "Kuntay",
      userName: t("producer") + ", " + t("dj"),
      comment: t("testimonials4"),
    },
    {
      image: "/src/assets/cem-tore.jpg",
      name: "Cem Töre",
      userName: t("videographer") + ", " + t("director"),
      comment: t("testimonials5"),
    },
    {
      image: "/src/assets/cemil-cosan.jpg",
      name: "Cemil Coşan",
      userName: t("mixing") + ", " + t("dj"),
      comment: t("testimonials6"),
    },
    {
      image: "/src/assets/ozkan-unver.jpg",
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
