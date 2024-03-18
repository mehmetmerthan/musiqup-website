import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { WalletIcon, ChartIcon } from "./Icons";
import create from "../assets/create.png";
import { GrSecure } from "react-icons/gr";
import { TbWorld } from "react-icons/tb";
interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Discovered by companies",
    description:
      "You can find companies  to send your music safely and securely. You can also find companies to work with and get your music to the world.",
    icon: <ChartIcon />,
  },
  {
    title: "Opportunity to go on stage",
    description:
      "You can find a stage to take a concert and find events to participate in.",
    icon: <WalletIcon />,
  },
  {
    title: "Find Musicians or Bands",
    description:
      "You can find a music group and look for musicians for your group by placing an ad.",
    icon: <TbWorld size={50} style={{ color: "green", padding: 5 }} />,
  },
  {
    title: "Secure and safety",
    description:
      "Your artworks that you send to companies are carefully kept in our system, so the copyright of your works is protected and prevented from being copied.",
    icon: <GrSecure size={50} style={{ color: "green", padding: 5 }} />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            We want to bring you
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              UP
            </span>
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Our data is carefully stored for the confidentiality of your works
            and productions
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
