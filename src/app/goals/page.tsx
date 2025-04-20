import Image from "next/image";
import Link from 'next/link';

const prefix = process.env.NODE_ENV === 'production' ? '/words-pictureslander' : '';

export default function GoalsPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert block mx-auto"
          src={`${prefix}/WP.svg`}
          alt="Words & Pictures Logo"
          width={180}
          height={38}
          priority
        />
        <div className="prose prose-lg text-center max-w-3xl">
          <h1 className="text-3xl font-bold mb-4">Our Goals</h1>
          <section>
            <p className="text-lg">
              The <strong>Words & Pictures Comic Jam</strong> is a project born from love and spite.
            </p>
            <p className="text-lg pb-5">
              This project is our way of saying:
            </p>
            <ul className="list-disc list-inside">
              <li>Fuck Generative AI.</li>
              <li>Fuck the exploitation of Comics.</li>
              <li>Fuck Transphobia.</li>
              <li>Never stop making comics.</li>
            </ul>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-2">Our Standard Ruleset</h2>
            <p className="text-lg pb-5">
              In every comic jam we will often follow some variation of these rules:
            </p>
            <ol className="list-decimal list-inside">
              <li>No AI. Just create like you always did, you do not need it</li>
              <li>No NFT related anything.</li>
              <li>No Pornographic content.</li>
              <li>No Gratuitous Violence.</li>
              <li>No Hate Content.</li>
              <li>You can use your personally owned existing IP.</li>
              <li>Works must be submitted in English or something intelligible to any language.</li>
            </ol>
          </section>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/"
          target=""
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={`${prefix}/file.svg`}
            alt="File icon"
            width={16}
            height={16}
          />
          Home
        </Link>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://links.webcomicshub.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={`${prefix}/bsky.svg`}
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
            src={`${prefix}/kofi.svg`}
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
