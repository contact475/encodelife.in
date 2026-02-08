"use client";

import { Menu, X, Moon, Sun, ChevronDown, ChevronRight, Linkedin, Instagram, Phone, Mail } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "PLA", href: "/pla" },
  { name: "Products", href: "/products" },
  { name: "Circularity", href: "/circularity" },
  { name: "Collaborations", href: "/collaborations" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const EncodeLifeHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 4);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className={cn(
          "group fixed z-50 w-full transition-colors duration-300",
          isScrolled ? "px-3 md:px-4" : ""
        )}
      >
        <div
          className={cn(
            "mx-auto transition-all duration-300 bg-background/95 backdrop-blur-xl",
            isScrolled 
              ? "mt-2 max-w-6xl rounded-2xl border px-3" 
              : "w-full border-b px-4 md:px-6"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-3 py-3">
            <div className="flex w-full justify-between lg:w-auto">
              <a
                href="/"
                aria-label="home"
                className="flex gap-2 items-center"
              >
                <img
                  src="/logo.png"
                  alt="Encode Life Logo"
                  height={40}
                  width={40}
                  className="h-8 w-8 object-contain"
                />
                <span className="text-lg font-bold text-foreground">
                  Encode Life
                </span>
              </a>
              <div className="flex gap-2">
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                  className="relative z-20 pr-4 block cursor-pointer p-2.5 lg:hidden"
                >
                  <Menu className={cn(
                    "m-auto duration-200 w-6 h-6 transition-all",
                    menuState ? "rotate-180 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                  )} />
                  <X className={cn(
                    "absolute inset-0 m-auto size-6 duration-200 transition-all",
                    menuState ? "rotate-0 scale-100 opacity-100" : "-rotate-180 scale-0 opacity-0"
                  )} />
                </button>
              </div>
            </div>

            <div className="absolute inset-0 m-auto hidden lg:block size-fit">
              <EncodeLifeMenus />
            </div>

            {/* Mobile Menu */}
            <div className={cn(
              "absolute top-full left-0 right-0 mt-3 mx-3 bg-card border border-border rounded-2xl shadow-2xl shadow-black/20 lg:hidden transition-all duration-300 max-h-[80vh] overflow-y-auto",
              menuState ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
            )}>
              <div className="p-6">
                <MobileMenu onClose={() => setMenuState(false)} />
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:w-fit lg:gap-6 lg:items-center">
              <ModeToggle />
              <Button
                variant="default"
                asChild
                className={cn(
                  "bg-primary hover:bg-primary/90 text-primary-foreground",
                  isScrolled && "lg:hidden"
                )}
              >
                <a href="/contact">
                  <span>Get in Touch</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [expandedSection, setExpandedSection] = React.useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="lg:hidden block w-full">
      {/* Main Navigation */}
      <div className="space-y-2">
        {/* Home */}
        <a
          href="/"
          onClick={onClose}
          className="flex items-center justify-between px-4 py-3 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-xl transition-all duration-200 group"
        >
          <span>Home</span>
          <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>

        {/* About */}
        <a
          href="/#about"
          onClick={onClose}
          className="flex items-center justify-between px-4 py-3 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-xl transition-all duration-200 group"
        >
          <span>About</span>
          <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>

        {/* PLA */}
        <a
          href="/pla"
          onClick={onClose}
          className="flex items-center justify-between px-4 py-3 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-xl transition-all duration-200 group"
        >
          <span>PLA</span>
          <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>

        {/* Products */}
        <a
          href="/products"
          onClick={onClose}
          className="flex items-center justify-between px-4 py-3 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-xl transition-all duration-200 group"
        >
          <span>Products</span>
          <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>

        {/* Circularity */}
        <a
          href="/circularity"
          onClick={onClose}
          className="flex items-center justify-between px-4 py-3 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-xl transition-all duration-200 group"
        >
          <span>Circularity</span>
          <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>

        {/* Collaborations */}
        <a
          href="/collaborations"
          onClick={onClose}
          className="flex items-center justify-between px-4 py-3 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-xl transition-all duration-200 group"
        >
          <span>Collaborations</span>
          <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>

        {/* Blog */}
        <a
          href="/blog"
          onClick={onClose}
          className="flex items-center justify-between px-4 py-3 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-xl transition-all duration-200 group"
        >
          <span>Blog</span>
          <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>

        {/* Careers - Expandable */}
        <div className="space-y-2">
          <button
            onClick={() => toggleSection('careers')}
            className={cn(
              "flex items-center justify-between w-full px-4 py-3 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-xl transition-all duration-200",
              expandedSection === 'careers' && "bg-accent text-accent-foreground"
            )}
          >
            <span>Careers</span>
            <ChevronDown 
              className={cn(
                "h-4 w-4 transition-transform duration-300",
                expandedSection === 'careers' ? "rotate-180" : ""
              )}
            />
          </button>
          
          {expandedSection === 'careers' && (
            <div className="ml-2 space-y-1 border-l-2 border-primary/20 pl-4 animate-in slide-in-from-top-2 duration-300">
              <a
                href="/careers"
                onClick={onClose}
                className="block px-3 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <div className="font-medium text-sm">Career Opportunities</div>
                  <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                  Explore our mission, culture, and career opportunities
                </div>
              </a>
              <a
                href="/careers/jobs"
                onClick={onClose}
                className="block px-3 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <div className="font-medium text-sm">Open Positions</div>
                  <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                  Browse current job openings across all departments
                </div>
              </a>
              <a
                href="/careers/jobs?type=internship"
                onClick={onClose}
                className="block px-3 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <div className="font-medium text-sm">Internships</div>
                  <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                  Launch your career with our internship program
                </div>
              </a>
            </div>
          )}
        </div>

        {/* Contact */}
        <a
          href="/contact"
          onClick={onClose}
          className="flex items-center justify-between px-4 py-3 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-xl transition-all duration-200 group"
        >
          <span>Contact</span>
          <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-border/50"></div>

      {/* Additional Actions */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-4 py-2 bg-muted/30 rounded-xl">
          <span className="text-sm font-medium text-muted-foreground">Appearance</span>
          <ModeToggle />
        </div>
        
        <div className="px-2">
          <Button
            variant="default"
            asChild
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 rounded-xl h-12"
          >
            <a href="/contact" onClick={onClose}>
              <span className="font-medium">Get in Touch</span>
            </a>
          </Button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-6 pt-6 border-t border-border/50 space-y-4">
        {/* Contact Info */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <div className="flex flex-col">
              <a href="tel:+917000017005" className="hover:text-primary transition-colors">
                +91 70000 17005
              </a>
              <a href="tel:+919873156938" className="hover:text-primary transition-colors">
                +91 98731 56938
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <a href="mailto:contact@encodelife.in" className="hover:text-primary transition-colors">
              contact@encodelife.in
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex items-center gap-4 pt-2">
          <a
            href="https://www.linkedin.com/company/encode-life/"
            target="_blank"
            rel="noreferrer"
            onClick={onClose}
            className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/encodelife.ltd"
            target="_blank"
            rel="noreferrer"
            onClick={onClose}
            className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-200"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground">
          © 2025 <span className="font-semibold text-foreground">Encode Life</span>. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export function EncodeLifeMenus() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(navigationMenuTriggerStyle(), "bg-transparent text-sm")}
          >
            <a href="/">Home</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(navigationMenuTriggerStyle(), "bg-transparent text-sm")}
          >
            <a href="/#about">About</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(navigationMenuTriggerStyle(), "bg-transparent text-sm")}
          >
            <a href="/pla">PLA</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(navigationMenuTriggerStyle(), "bg-transparent text-sm")}
          >
            <a href="/products">Products</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(navigationMenuTriggerStyle(), "bg-transparent text-sm")}
          >
            <a href="/circularity">Circularity</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(navigationMenuTriggerStyle(), "bg-transparent text-sm")}
          >
            <a href="/collaborations">Collaborations</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(navigationMenuTriggerStyle(), "bg-transparent text-sm")}
          >
            <a href="/blog">Blog</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-sm">
            Careers
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-2">
            <ul className="grid gap-3 w-80">
              <ListItem
                title="Career Opportunities"
                href="/careers"
              >
                Explore our mission, culture, and why you should join our biotech revolution.
              </ListItem>
              <ListItem
                title="Open Positions"
                href="/careers/jobs"
              >
                Browse current job openings across all departments and experience levels.
              </ListItem>
              <ListItem
                title="Internship Program"
                href="/careers/jobs?type=internship"
              >
                Launch your career with our comprehensive internship program.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(navigationMenuTriggerStyle(), "bg-transparent text-sm")}
          >
            <a href="/contact">Contact</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a 
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" 
          href={href}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <div className="flex flex-col justify-center">
      <div>
        <Toggle
          className="group bg-secondary dark:bg-secondary data-[state=on]:hover:bg-muted cursor-pointer size-9 data-[state=on]:bg-transparent"
          pressed={theme === "dark"}
          onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          <Moon
            size={16}
            className="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
            aria-hidden="true"
          />
          <Sun
            size={16}
            className="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
            aria-hidden="true"
          />
        </Toggle>
      </div>
    </div>
  );
}

export { EncodeLifeHeader };