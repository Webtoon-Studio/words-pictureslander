import Image from "next/image";
import Link from 'next/link';


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert block mx-auto"
          src="/WP.svg"
          alt="Words & Pictures Logo"
          width={180}
          height={38}
          priority
        />
        <div className="flex justify-center items-center w-full">
          <a className="list-inside list-decimal text-sm/6 text-center font-[family-name:var(--font-geist-mono)]">
            Words & Pictures 2025 dates & theme will be announced soon
          </a>
        </div>
        <div id="winners" className="flex flex-col gap-8">
          <div className="">
            <h2 className="text-2xl font-bold mb-4 text-center">2024 Winners</h2>
            <div id="2024" className="pb-4">
              <div className="flex flex-wrap gap-4 justify-center items-center">
                <div className="relative">
                  <a href="https://bsky.app/profile/cloudymagpie.bsky.social" target="_blank" rel="noopener noreferrer">
                    <Image
                      className="border-5 border-yellow-500 hover:scale-110 transition-transform duration-300"
                      src="/winner12024.png"
                      alt="Winner 1"
                      width={150}
                      height={75}
                    />
                  </a>
                  <span className="absolute top-0 left-0 bg-black text-white text-xs px-2 py-1 rounded">
                    1st
                  </span>
                </div>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="border-5 border-gray-400 hover:scale-110 transition-transform duration-300"
                    src="/winner22024.png"
                    alt="Winner 2"
                    width={150}
                    height={75}
                  />
                </a>
                <a href="https://bsky.app/profile/nesokaiyoh.bsky.social" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="border-5 border-amber-700 hover:scale-110 transition-transform duration-300"
                    src="/winner32024.png"
                    alt="Winner 3"
                    width={150}
                    height={75}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="text-lg font-bold mb-4 text-center">2023 Winners</h2>
            <div id="2023">
              <div className="flex gap-4 justify-center items-center">
                <div className="relative">
                  <a href="https://bsky.app/profile/cloudymagpie.bsky.social" target="_blank" rel="noopener noreferrer">
                    <Image
                      className="border-5 border-yellow-500 hover:scale-110 transition-transform duration-300"
                      src="/winner12023.jpg"
                      alt="Winner 1"
                      width={100}
                      height={100}
                      style={{ objectFit: "cover" }}
                    />
                  </a>
                  <span className="absolute top-0 left-0 bg-black text-white text-xs px-2 py-1 rounded">
                    1st
                  </span>
                </div>
                <a href="https://x.com/raccoon0ncaf" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="border-5 border-gray-400 hover:scale-110 transition-transform duration-300"
                    src="/winner22023.PNG"
                    alt="Winner 2"
                    width={100}
                    height={100}
                    style={{ objectFit: "contain" }}
                  />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Image
                    className="border-5 border-amber-700 hover:scale-110 transition-transform duration-300"
                    src="/winner32023.jpg"
                    alt="Winner 3"
                    width={100}
                    height={100}
                    style={{ objectFit: "contain" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/goals"
          target=""
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Our Goals and Rules
        </Link>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://links.webcomicshub.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/bsky.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Our Socials
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://ko-fi.com/webcomicshub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className=""
            aria-hidden
            src="/kofi.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Support Us on Ko-Fi
        </a>
      </footer>
    </div>
  );
}
