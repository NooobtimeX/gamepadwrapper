"use client";
import { Github, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaNpm } from "react-icons/fa";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

const navigation = [{ href: "/docs/introduction", name: "Documentation" }];

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar sticky top-0 z-50 mb-8 bg-white dark:bg-black shadow py-2">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/favicon.png"
              alt="Portfolio"
              className="rounded-full"
              width={40}
              height={40}
            />
          </Link>
          <em className="text-xl font-bold">@nooobtimex/gamepadwrapper</em>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="btn btn-ghost text-sm "
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <div className="hidden md:flex ml-10">
          <div className="ml-auto flex items-center gap-2">
            <Link href="https://www.npmjs.com/package/@nooobtimex/gamepadwrapper">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-8 h-8 bg-background"
                asChild
              >
                <FaNpm className="h-7 w-7" />
              </Button>
            </Link>
            <Link href="https://github.com/NooobtimeX/gamepadwrapper">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-8 h-8 bg-background"
                asChild
              >
                <Github className="h-7 w-7" />
              </Button>
            </Link>
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <div onClick={handleMenuToggle} className="btn btn-ghost btn-square">
            <em className="sr-only">
              {isMobileMenuOpen ? "Close main menu" : "Open main menu"}
            </em>
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="menu bg-white  dark:bg-black  absolute top-full left-0 w-full shadow-md md:hidden">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-sm "
            >
              {item.name}
            </Link>
          ))}
          <div className="ml-auto flex items-center gap-2 justify-center py-2">
            <Link href="https://www.npmjs.com/package/@nooobtimex/gamepadwrapper">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-8 h-8 bg-background"
                asChild
              >
                <FaNpm className="h-7 w-7" />
              </Button>
            </Link>
            <Link href="https://github.com/NooobtimeX/gamepadwrapper">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-8 h-8 bg-background"
                asChild
              >
                <Github className="h-7 w-7" />
              </Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
