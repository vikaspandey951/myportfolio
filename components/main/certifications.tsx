import Link from "next/link";

import { CERTIFICATIONS } from "@/constants";

export const Certifications = () => {
  return (
    <section
      id="certifications"
      className="flex flex-col items-center justify-center py-20 px-6"
    >
      <h1 className="py-20 text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        Certifications
      </h1>
      <div className="grid w-full max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {CERTIFICATIONS.map((certificate) => (
          <article
            key={certificate.title}
            className="rounded-xl border border-[#2A0E61] bg-[#030014]/70 p-6 shadow-lg"
          >
            <h2 className="text-xl font-semibold text-white">{certificate.title}</h2>
            <p className="mt-2 text-sm text-gray-300">{certificate.description}</p>
            <Link
              href={certificate.file}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-4 inline-block text-sm font-medium text-[#b49bff] transition hover:text-cyan-400"
            >
              View certificate
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};
