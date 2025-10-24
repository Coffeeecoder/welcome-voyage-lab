import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthModal from "@/components/AuthModal";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">RR</span>
            </div>
            <span className="text-xl font-bold gradient-text">Ravi Rautela</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={cn(
                "text-foreground/80 hover:text-primary transition-colors relative pb-1",
                isActive("/") && "text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-primary after:rounded-full"
              )}
            >
              Home
            </Link>
            <Link 
              to="/events" 
              className={cn(
                "text-foreground/80 hover:text-primary transition-colors relative pb-1",
                isActive("/events") && "text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-primary after:rounded-full"
              )}
            >
              Events
            </Link>
            <Link 
              to="/courses" 
              className={cn(
                "text-foreground/80 hover:text-primary transition-colors relative pb-1",
                isActive("/courses") && "text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-primary after:rounded-full"
              )}
            >
              Courses
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "text-foreground/80 hover:text-primary transition-colors relative pb-1",
                isActive("/about") && "text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-primary after:rounded-full"
              )}
            >
              About
            </Link>
            <Link 
              to="/portfolio" 
              className={cn(
                "text-foreground/80 hover:text-primary transition-colors relative pb-1",
                isActive("/portfolio") && "text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-primary after:rounded-full"
              )}
            >
              Portfolio
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsAuthModalOpen(true)}>
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:shadow-primary" asChild>
              <Link to="/get-started">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <Link
              to="/"
              className={cn(
                "block text-foreground/80 hover:text-primary transition-colors",
                isActive("/") && "text-primary font-semibold pl-3 border-l-2 border-primary"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/events"
              className={cn(
                "block text-foreground/80 hover:text-primary transition-colors",
                isActive("/events") && "text-primary font-semibold pl-3 border-l-2 border-primary"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              to="/courses"
              className={cn(
                "block text-foreground/80 hover:text-primary transition-colors",
                isActive("/courses") && "text-primary font-semibold pl-3 border-l-2 border-primary"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              to="/about"
              className={cn(
                "block text-foreground/80 hover:text-primary transition-colors",
                isActive("/about") && "text-primary font-semibold pl-3 border-l-2 border-primary"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className={cn(
                "block text-foreground/80 hover:text-primary transition-colors",
                isActive("/portfolio") && "text-primary font-semibold pl-3 border-l-2 border-primary"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="justify-start"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="h-4 w-4 mr-2" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4 mr-2" />
                    Dark Mode
                  </>
                )}
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsAuthModalOpen(true);
                }}
              >
                Sign In
              </Button>
              <Button 
                size="sm" 
                className="bg-gradient-primary"
                asChild
              >
                <Link to="/get-started" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </nav>
  );
};

export default Navigation;
