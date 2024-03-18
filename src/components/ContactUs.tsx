import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
export const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => setMessage(event.target.value);

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !email || !message) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section id="contactUs">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Contact{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Us
          </span>
        </h3>
        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <div style={{ flexDirection: "column", display: "flex", flex: 1 }}>
            <p className="text-xl text-muted-foreground  mt-4 mb-8">Name</p>
            <Input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="John Doe"
              className="bg-muted/50 dark:bg-muted/80 "
              aria-label="name"
              style={{ marginBottom: "1rem" }}
            />
            <p className="text-xl text-muted-foreground  mt-4 mb-8">Email</p>
            <Input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="example@mail.com"
              className="bg-muted/50 dark:bg-muted/80 "
              aria-label="email"
              style={{ marginBottom: "1rem" }}
            />
            <p className="text-xl text-muted-foreground  mt-4 mb-8">Message</p>
            <Input
              type="text"
              value={message}
              onChange={handleMessageChange}
              placeholder="Your message here..."
              className="bg-muted/50 dark:bg-muted/80 "
              aria-label="message"
              style={{ marginBottom: "1rem" }}
            />
            <Button type="submit" style={{ marginTop: 50 }}>Send</Button>
          </div>
        </form>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};