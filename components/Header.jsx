"use client";

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-white/85 hover:text-blue-400 transition duration-300"
    >
      {children}
    </a>
  );
}

function InfoBlock({ title, description, linkText, href = "#" }) {
  return (
    <div className="border-b border-white/10 pb-5">
      <h3 className="text-white text-base font-semibold tracking-wide uppercase mb-2">
        {title}
      </h3>

      <p className="text-white/65 leading-6 text-[14px] max-w-sm">
        {description}
      </p>

      <a
        href={href}
        className="inline-flex items-center gap-2 mt-3 text-white font-semibold tracking-wide uppercase text-xs border-b border-white/40 pb-1 hover:text-blue-400 hover:border-blue-400 transition"
      >
        {linkText}
        <span>→</span>
      </a>
    </div>
  );
}

export default function Header() {
  return (
    <section
      id="top"
      className="relative mt-20 h-[calc(100vh-80px)] overflow-hidden bg-[#0b0f19] text-white"
    >
      {/* subtle background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:120px_120px] opacity-20" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:120px_120px] opacity-10" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] h-full px-6 sm:px-10 lg:px-14 xl:px-20 py-5 lg:py-6">
        <div className="grid h-full grid-cols-1 lg:grid-cols-[1.05fr_0.9fr_0.9fr] items-center gap-6 lg:gap-5">
          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1 flex flex-col justify-center lg:pr-4">
            <div className="w-20 h-[5px] bg-white mb-5" />

            <h1 className="font-bold leading-[1] text-[40px] sm:text-[54px] lg:text-[62px] xl:text-[68px] max-w-[520px]">
              I&apos;m Sajidan <br />
              Web Developer
            </h1>

            <p className="mt-4 text-white/65 text-sm sm:text-[15px] leading-7 max-w-[520px]">
              Saya membangun website modern, responsif, dan elegan dengan fokus
              pada performa, pengalaman pengguna, dan tampilan yang profesional
              untuk personal branding maupun kebutuhan bisnis.
            </p>

            <div className="mt-6">
              <a
                href="#about"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500 transition duration-300 shadow-[0_10px_40px_rgba(37,99,235,0.35)]"
                aria-label="Scroll down"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </a>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="order-1 lg:order-2 relative flex h-full items-end justify-center min-h-[260px]">
            <div className="absolute inset-x-0 bottom-0 mx-auto h-[70%] w-[72%] rounded-full bg-blue-500/10 blur-3xl" />

            <img
              src="/assets/foto-hero.png"
              alt="Sajidan"
              className="relative z-10 w-full max-w-[500px] max-h-[68vh] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
            />
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="order-3 flex flex-col justify-center gap-6 lg:pl-4">
            <InfoBlock
              title="About Me"
              description="Saya adalah fullstack web developer yang berfokus pada pembuatan aplikasi web yang cepat, rapi, dan mudah digunakan dengan pendekatan desain yang modern."
              linkText="Learn More"
              href="#about"
            />

            <InfoBlock
              title="My Work"
              description="Saya mengerjakan berbagai project mulai dari landing page, company profile, dashboard, hingga aplikasi web interaktif yang mendukung kebutuhan personal maupun bisnis."
              linkText="Browse Portfolio"
              href="#work"
            />

            <div>
              <h3 className="text-white text-base font-semibold tracking-wide uppercase mb-4">
                Follow Me
              </h3>

              <div className="flex items-center gap-4">
                <SocialIcon href="https://facebook.com" label="Facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13 22v-8h3l1-4h-4V8c0-1.156.276-2 2-2h2V2.14C16.651 2.092 15.595 2 14.5 2 11.231 2 9 3.657 9 7.2V10H6v4h3v8z" />
                  </svg>
                </SocialIcon>

                <SocialIcon href="https://twitter.com" label="Twitter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22 5.924c-.736.327-1.527.548-2.357.647a4.11 4.11 0 001.804-2.27 8.224 8.224 0 01-2.605.996A4.103 4.103 0 0015.847 4c-2.266 0-4.104 1.838-4.104 4.104 0 .322.036.636.106.937-3.41-.171-6.434-1.805-8.459-4.287a4.084 4.084 0 00-.555 2.063c0 1.423.725 2.678 1.827 3.413a4.074 4.074 0 01-1.858-.513v.052c0 1.987 1.414 3.646 3.29 4.023a4.1 4.1 0 01-1.852.07c.522 1.628 2.038 2.813 3.833 2.846A8.235 8.235 0 012 18.407 11.616 11.616 0 008.29 20.25c7.547 0 11.674-6.252 11.674-11.674 0-.178-.004-.355-.012-.531A8.33 8.33 0 0022 5.924z" />
                  </svg>
                </SocialIcon>

                <SocialIcon
                  href="https://instagram.com/sajidanrfn"
                  label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </SocialIcon>

                <SocialIcon
                  href="https://linkedin.com/in/sajidanrfn"
                  label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </SocialIcon>

                <SocialIcon href="https://youtube.com" label="YouTube">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.186a2.997 2.997 0 00-2.11-2.12C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.388.566a2.997 2.997 0 00-2.11 2.12C0 8.078 0 12 0 12s0 3.922.502 5.814a2.997 2.997 0 002.11 2.12C4.495 20.5 12 20.5 12 20.5s7.505 0 9.388-.566a2.997 2.997 0 002.11-2.12C24 15.922 24 12 24 12s0-3.922-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z" />
                  </svg>
                </SocialIcon>

                <SocialIcon
                  href="https://github.com/sajidan03"
                  label="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </SocialIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}