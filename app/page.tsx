import { Space_Mono } from "next/font/google";
import Image from "next/image";
const mono = Space_Mono({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="max-width-3 mx-auto mobile">
      <div className="card">
        <div className="intro mb2 py4 border-bottom">
          <div className="logo mx-auto">
            <Image src={`/logo-natalie.png`} alt="Logo" fill={true}></Image>
          </div>
          <div className="headline">
            <h1 className="h1">Natalie King</h1>
            <div className={`feature-items ${mono.className}`}>
              <p>
                {[
                  "HubSpot Specialist",
                  "Digital Marketing",
                  "Marketing Operations",
                  "Fractional Marketing",
                ].map((item, index) => (
                  <span key={index}>
                    {item}
                    <b>{[0, 1, 2].includes(index) ? " | " : ""}</b>
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
        <div className="services mb4 py2 border-bottom">
          <div>
            <h2 className="h2">Meet Natalie</h2>
            <p>
              Having worked in a range of industries, across B2B and B2C,
              Natalie has seen a lot of common mistakes made by businesses -
              start-up, scaling and enterprise - in setting up their marketing
              operations.
            </p>
          </div>

          <div>
            <h3 className="h3">Transform Your Marketing Operations</h3>
            <p>
              Natalie is equipped to help your business set up marketing
              operations correctly, to empower you to take the reins of your
              marketing with automated reporting and powerful workflows. Whether
              you have nothing yet in place, or a system that isn&apos;t working
              for you, get in touch to find out how she can help.
            </p>
          </div>

          <div>
            <h3 className="h3">Broad Digital Marketing Experience</h3>
            <p>
              Natalie also has broad experience in digital marketing including
              social media, website development, marketing email campaigns, paid
              advertising, and events.
            </p>
          </div>

          <div>
            <h3 className="h3">Contact Natalie</h3>
            <p>
              Get in touch today to find out how Natalie can help transform your
              marketing operations.
            </p>
          </div>
        </div>
        <div className="contact pb4 flex justify-end">
          <a className="mr1" href="mailto:contact@nataliekingmarketing.com">
            Email
          </a>
          <a href="https://www.linkedin.com/company/natalie-king-marketing/">
            LinkedIn
          </a>
        </div>
      </div>
    </main>
  );
}
