import Image from "next/image";
import { Rye } from "next/font/google";
import { Libre_Bodoni } from "next/font/google"

const rye = Rye({
  weight: "400",
  subsets: ["latin"],
});
const libreBodoni = Libre_Bodoni({
  weight: "700",
  subsets: ["latin"],
});
const smlibreBodoni = Libre_Bodoni({
  weight: "500",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <nav
        style={{ backgroundColor: "#a29875" }}
        className="p-5 flex justify-between items-center h-[134px]"
      >
        <h1 className={`${rye.className} font text-[75px] text-white`}>
          Manzzari
        </h1>
      </nav>
      <main className="m-20 flex justify-around items-center">
        <section className="left w-1/2">
          <h1 className={`${libreBodoni.className} text-[40px] w-[496px] h-[189px]`}>
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p
            className={`${smlibreBodoni.className} leading-[49.35px] text-2xl font-bold my-4 webcolor w-[602px] h-[147px]`}
          >
            An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our desirable collection.
          </p>
          <button
            className={`${smlibreBodoni.className} text-lg webbg text-white px-8 py-2 rounded-lg`}
          >
            Explore Now
          </button>
        </section>
        <section className="right">
          <Image
            src="/jewellery.jpg"
            alt="Jewellery"
            width={400}
            height={700}
            className="rounded-ee-3xl rounded-ss-3xl"
          />
        </section>
      </main>
    </div>
  );
}
