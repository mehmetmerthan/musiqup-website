import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Instagram, Linkedin, Github, Twitter } from "lucide-react";
import { FaArtstation, FaSpotify } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import mmh from "../assets/MMH.png";
import irem from "../assets/irem.png";
import latife from "../assets/latife.png";
import erkam from "../assets/erkam.png";
interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
  description: string;
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

export const Team = () => {
  const { t } = useTranslation();
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Github":
        return <Github size="20" />;

      case "Instagram":
        return <Instagram size="20" />;

      case "Artstation":
        return <FaArtstation size="20" />;
      case "Spotify":
        return <FaSpotify size="20" />;
      case "Twitter":
        return <Twitter size="20" />;
    }
  };
  const teamList: TeamProps[] = [
    {
      imageUrl: mmh,
      name: "Mehmet Mert HAN",
      description: t("user1"),
      position: t("coFounder") + ", " + t("developer"),
      socialNetworks: [
        { name: "Linkedin", url: "https://www.linkedin.com/in/mehmetmerthan/" },
        {
          name: "Github",
          url: "https://github.com/mehmetmerthan",
        },
      ],
    },
    {
      imageUrl: irem,
      name: "İrem ",
      position: t("coFounder") + ", " + t("artist"),
      description: t("user2"),
      socialNetworks: [
        {
          name: "Instagram",
          url: "https://www.instagram.com/thehiraa/?hl=tr",
        },
        {
          name: "Spotify",
          url: "https://open.spotify.com/artist/3ZBYm7UkzvaCyZlZajV6MU",
        },
      ],
    },
    {
      imageUrl: latife,
      name: "Latife Bilgili",
      position: t("coFounder") + ", " + t("visualArtist"),
      description: t("user3"),
      socialNetworks: [
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/latife-bilgili-885349213/",
        },
        {
          name: "Artstation",
          url: "https://www.artstation.com/latifebilgili6",
        },
      ],
    },
    {
      imageUrl: erkam,
      name: "Erkam Yasir Kaya",
      position: t("coFounder") + ", " + t("financialExpert"),
      description: t("user4"),
      socialNetworks: [
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/erkamyasirkaya/",
        },
        {
          name: "Twitter",
          url: "https://twitter.com/ErkamYasirKaya",
        },
      ],
    },
  ];
  return (
    <section id="team" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {t("teamTitle1")}{" "}
        </span>
        {t("teamTitle2")}
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        {t("teamDesc")}
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({
            imageUrl,
            name,
            position,
            socialNetworks,
            description,
          }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>{description}</p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
