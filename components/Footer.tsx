"use client";

import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "next-themes";
import Link from "next/link";

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleThemeChange = (event: any) => {
    console.log(event.target.value);
    setTheme(event.target.value);
  };

  return (
    <footer className="z-10 flex shrink-0 flex-col items-center justify-between py-3 px-5 dark:bg-transparent md:flex-row">
      <div className="flex justify-center md:justify-start">
        <div className="">
          <a
            href="https://github.com/danielschuster-muc"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">GitHub</span>
            <FaGithub className="h-6 w-6" />
          </a>
        </div>
        <div className="mx-4">
          <a
            href="https://www.linkedin.com/in/danielschuster-muc/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>
        <div className="mx-4">
          <select
            value={theme}
            onChange={handleThemeChange}
            className="rounded-md border border-gray-300 dark:bg-[#141E30]"
          >
            <option value="dark" className="bg-gray-300 dark:bg-gray-900">
              Dark
            </option>
            <option value="light" className="bg-gray-300 dark:bg-gray-900">
              Light
            </option>
            <option value="system" className="bg-gray-300 dark:bg-gray-900">
              System
            </option>
          </select>
        </div>
      </div>
      <div className="my-4 text-center md:text-left">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Daniel Schuster. All Rights
          Reserved.
        </p>
      </div>
      <div className="ml-4 text-center md:text-right">
        <p className="text-sm">
          <Link href="/legal-notice">Legal Notice</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
