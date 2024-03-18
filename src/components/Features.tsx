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
interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Create",
    description:
      "Create your own musical identity and broadcast it to the whole world.",
    image: createp,
  },
  {
    title: "Opportunity",
    description: "The easiest and free way to get noticed by big companies.",
    image: apply,
  },
  {
    title: "Connect",
    description:
      "Find the person you need, musician, director, graphic designer, etc. right away.",
    image: profile,
  },
  {
    title: "Find",
    description: "Find the right talent you're looking for.",
    image: profile2,
  },
  {
    title: "Socialize",
    description:
      "Socialize with people like you at app-specific events and concerts.",
    image: event,
  },
  {
    title: "Spotify",
    description:
      "You can see and preview the artist's songs on spotify and add the songs you made.",
    image: spoti,
  },
];

const featureList: string[] = [
  "Companies",
  "Venues",
  "Artists",
  "Events",
  "Dtages",
  "Bands",
  "Editors",
  "Musicians",
  "Visual Artists",
  "And More",
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
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
