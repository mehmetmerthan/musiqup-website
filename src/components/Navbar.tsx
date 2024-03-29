import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import icon from "../assets/icon.png";
import tur64 from "../assets/tur64.png";
import uk64 from "../assets/uk64.png";

interface RouteProps {
  href: string;
  label: string;
}
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [lang, setLang] = useState<string>("en");
  const { i18n, t } = useTranslation();
  const toggleState = async () => {
    setLang(lang === "en" ? "tr" : "en");
    await i18n.changeLanguage(lang === "en" ? "tr" : "en");
  };
  const routeList: RouteProps[] = [
    { href: "#about", label: t("about") },
    {
      href: "#features",
      label: t("features"),
    },
    {
      href: "#testimonials",
      label: t("testimonials"),
    },
    {
      href: "#team",
      label: t("team"),
    },
    {
      href: "#contactUs",
      label: t("contact"),
    },
  ];
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a href="/" className="ml-2 font-bold text-xl flex">
              <img src={icon} className="w-8 h-8 mr-2" />
              Musiqup
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">Musiqup</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                  <button
                    onClick={toggleState}
                    className={`border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    {lang === "en" ? (
                      <>
                        <img src={tur64} className="mr-2 w-5 h-5" />
                        tr
                      </>
                    ) : (
                      <>
                        <img src={uk64} className="mr-2 w-5 h-5" />
                        en
                      </>
                    )}
                  </button>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex gap-2">
            <button
              onClick={toggleState}
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              {lang === "en" ? (
                <>
                  <img src={tur64} className="mr-2 w-5 h-5" />
                  tr
                </>
              ) : (
                <>
                  <img src={uk64} className="mr-2 w-5 h-5" />
                  en
                </>
              )}
            </button>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
