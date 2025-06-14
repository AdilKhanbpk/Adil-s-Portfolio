"use client";

import { useNavigation } from "@/context/navigation-context";
import { useTheme } from "@/context/theme-context";
import { Home, User, FileText, Briefcase, Mail, GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon, ChevronLeft, ChevronRight, Moon, Sun } from "lucide-react";
import Image from "next/image";

export function Sidebar() {
  const { isSidebarOpen, toggleSidebar, closeSidebar, activeSection, scrollToSection } = useNavigation();
  const { theme } = useTheme();

  const navItems = [
    { title: "Home", href: "#home", icon: <Home className="h-5 w-5" /> },
    { title: "About", href: "#about", icon: <User className="h-5 w-5" /> },
    { title: "Resume", href: "#resume", icon: <FileText className="h-5 w-5" /> },
    { title: "Portfolio", href: "#portfolio", icon: <Briefcase className="h-5 w-5" /> },
    { title: "Contact", href: "#contact", icon: <Mail className="h-5 w-5" /> },
  ];

  const handleNavClick = (section: string) => {
    scrollToSection(section);
    closeSidebar();
  };

  // Mobile open button - positioned in the top left
  const MobileOpenButton = () => (
    <button
      className={`fixed top-3 left-3 z-[60] flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 backdrop-blur-xl border border-primary/30 shadow-md hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 lg:hidden ${
        isSidebarOpen ? "opacity-0 pointer-events-none translate-x-[-20px]" : "opacity-100 translate-x-0"
      }`}
      onClick={toggleSidebar}
      aria-label="Open sidebar"
    >
      <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
    </button>
  );

  // Centered sidebar toggle button - only visible on desktop
  const CenteredSidebarToggle = () => (
    <button
      className={`fixed top-1/2 transform -translate-y-1/2 z-[60] hidden lg:flex items-center justify-center w-6 h-16 sm:w-8 sm:h-24 rounded-r-md sm:rounded-r-lg bg-primary/10 backdrop-blur-xl border-y border-r border-primary/30 shadow-md hover:bg-primary/20 hover:scale-105 transition-all duration-300 ${
        isSidebarOpen ? "left-64" : "left-0"
      }`}
      onClick={toggleSidebar}
      aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
    >
      <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
        <span className="text-primary">
          {isSidebarOpen ? (
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          ) : (
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          )}
        </span>
      </div>
    </button>
  );

  return (
    <>
      {/* Mobile open button */}
      <MobileOpenButton />

      {/* Centered sidebar toggle - desktop only */}
      <CenteredSidebarToggle />

      {/* Mobile sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-background/80 backdrop-blur-xl border-r border-border/40 transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button inside mobile sidebar */}
        <button
          className="absolute top-3 right-3 z-[60] flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 backdrop-blur-xl border border-primary/30 shadow-md hover:bg-primary/20 transition-all duration-300 hover:scale-110"
          onClick={closeSidebar}
          aria-label="Close sidebar"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
        </button>

        <div className="pt-16"> {/* Added padding top for header */}
          <SidebarContent
            activeSection={activeSection}
            handleNavClick={handleNavClick}
            theme={theme}
            navItems={navItems}
          />
        </div>
      </div>

      {/* Desktop sidebar - collapsible on larger screens */}
      <aside className={`hidden lg:flex fixed left-0 top-0 h-screen flex-col border-r border-border/40 bg-background/80 backdrop-blur-xl transition-all duration-300 ${
        isSidebarOpen ? "w-64 overflow-y-auto" : "w-0 opacity-0 overflow-hidden"
      }`}>
        <div className="pt-16 w-64"> {/* Added padding top for header */}
          <SidebarContent
            activeSection={activeSection}
            handleNavClick={handleNavClick}
            theme={theme}
            navItems={navItems}
          />
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}
    </>
  );
}

function SidebarContent({
  activeSection,
  handleNavClick,
  navItems,
  theme
}: {
  activeSection: string;
  handleNavClick: (section: string) => void;
  navItems: { title: string; href: string; icon: React.ReactNode }[];
  theme: string;
}) {
  const { toggleTheme } = useTheme(); // Remove currentTheme from destructuring
  return (
    <div className="flex h-full flex-col glass-card overflow-y-auto max-h-screen sidebar-content">
      {/* Profile section */}
      <div className="flex flex-col items-center p-6 border-b border-border/40">
        <div className="relative h-24 w-24 rounded-full bg-primary/20 mb-4 overflow-hidden shadow-lg">
          <Image
            src="/images/profile.jpg"
            alt="Muhammad Adil"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-xl font-bold gradient-text">
          Muhammad Adil
        </h1>
        <p className="text-muted-foreground mt-1">Web Developer</p>
        
        {/* Add theme toggle button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110 mt-4"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>

        <div className="flex gap-3 mt-4">
          <a href="#" className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110">
            <GithubIcon className="h-4 w-4" />
          </a>
          <a href="#" className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110">
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a href="#" className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110">
            <TwitterIcon className="h-4 w-4" />
          </a>
          <a href="#" className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110">
            <InstagramIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 overflow-y-auto">
        <ul className="space-y-2 px-3">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-300 relative overflow-hidden ${
                    isActive
                      ? "bg-primary/10 text-primary font-medium shadow-md"
                      : "hover:bg-background/90"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    // Close sidebar on mobile after clicking
                    if (window.innerWidth < 1024) {
                      // We don't need to call closeSidebar here since it's called in handleNavClick
                    }
                    handleNavClick(item.href.substring(1));
                  }}
                >
                  <span className="text-primary">{item.icon}</span>
                  <span>{item.title}</span>
                  {isActive && (
                    <div className="absolute left-0 top-0 w-1 h-full bg-primary rounded-r-md" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="border-t border-border/40 p-4">
        <p className="text-center text-xs text-muted-foreground">
          © 2024 Muhammad Adil
        </p>
      </div>
    </div>
  );
}
