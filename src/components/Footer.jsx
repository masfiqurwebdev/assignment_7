import Link from "next/link";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#244D42] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Logo */}
        <div className="text-center">
          <h2 className="text-5xl font-bold">KeenKeeper</h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-300">
            Your personal shelf of meaningful connections. Browse,
            tend, and nurture the relationships that matter most.
          </p>
        </div>

        {/* Social Links */}
        <div className="mt-10 text-center">
          <h3 className="mb-5 text-lg font-semibold">
            Social Links
          </h3>

          <div className="flex justify-center gap-4">

            <Link
              href="https://github.com"
              target="_blank"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#244D42] transition hover:scale-110 hover:bg-gray-200"
            >
               <FaGithub size={18} />
            </Link>

            <Link
              href="https://facebook.com"
              target="_blank"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#244D42] transition hover:scale-110 hover:bg-gray-200"
            >
              <FaFacebook size={18} />

            </Link>

            <Link
              href="https://twitter.com"
              target="_blank"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#244D42] transition hover:scale-110 hover:bg-gray-200"
            >
              <FaTwitter size={18} />
            </Link>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-6 text-sm text-gray-300 md:flex-row">

          <p>
            © 2026 KeenKeeper. All rights reserved.
          </p>

          <div className="flex gap-6">

            <Link
              href="/privacy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-white transition"
            >
              Terms of Service
            </Link>

            <Link
              href="/cookies"
              className="hover:text-white transition"
            >
              Cookies
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}