import { Space_Mono } from "next/font/google";
import Image from "next/image";
const mono = Space_Mono({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex items-center justify-center max-width-4 mx-auto v-height-full mobile">
      <div className="logo mx-auto">
        <Image src={`/logo-natalie.png`} alt="Logo" fill={true}></Image>
      </div>
      <div className="card">
        <h1 className="h1">Natalie King</h1>
        <div className={`feature-items ${mono.className} border-bottom`}>
          <p>
            {[
              "HubSpot Specialist",
              "Digital Marketing",
              "Marketing Operations",
            ].map((item, index) => (
              <span key={index}>
                {item}
                {[0, 1].includes(index) ? " | " : ""}
              </span>
            ))}
          </p>
        </div>
        <div className="contact my2">
          <a className="mr1" href="mailto:natalieking1993@hotmail.co.uk">
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
