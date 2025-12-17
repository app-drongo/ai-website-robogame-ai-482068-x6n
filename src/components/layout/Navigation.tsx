'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Bot, Gamepad2, Zap } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_NAV = {
  logo: 'RoboGame AI',
  logoHref: '/',
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'Play Now', href: '/play' },
    { label: 'Features', href: '#features' },
    { label: 'Download', href: '/download' },
  ],
  ctaText: 'Start Gaming',
  ctaHref: '/play',
} as const;

type NavigationProps = Partial<typeof DEFAULT_NAV>;

export default function Navigation(props: NavigationProps) {
  const config = { ...DEFAULT_NAV, ...props };
  const navigate = useSmartNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsMobileOpen(false);
  };

  const handleLogoClick = () => {
    navigate(config.logoHref);
  };

  const handleCtaClick = () => {
    navigate(config.ctaHref);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-gradient-to-r from-primary to-accent p-2 rounded-xl">
                <Bot className="h-6 w-6 text-white" />
              </div>
            </div>
            <span className="text-xl lg:text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              <span data-editable="logo">{config.logo}</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {config.navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground hover:text-primary transition-colors font-medium relative group"
              >
                <span data-editable={`navItems[${idx}].label`}>{item.label}</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              onClick={handleCtaClick}
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90 font-bold px-6 py-2 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/25"
            >
              <Gamepad2 className="w-4 h-4 mr-2" />
              <span data-editable="ctaText">{config.ctaText}</span>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="relative">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-background/95 backdrop-blur-md">
              <div className="flex flex-col gap-6 mt-8">
                {/* Mobile Logo */}
                <div className="flex items-center gap-3 pb-6 border-b border-border/50">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl blur-sm opacity-50" />
                    <div className="relative bg-gradient-to-r from-primary to-accent p-2 rounded-xl">
                      <Bot className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <span className="text-xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {config.logo}
                  </span>
                </div>

                {/* Mobile Navigation Items */}
                <div className="flex flex-col gap-4">
                  {config.navItems.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleNavClick(item.href)}
                      className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-primary/10"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="pt-6 border-t border-border/50">
                  <Button
                    onClick={handleCtaClick}
                    className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90 font-bold py-3 transition-all duration-300 shadow-lg"
                  >
                    <Gamepad2 className="w-5 h-5 mr-2" />
                    {config.ctaText}
                  </Button>
                </div>

                {/* Mobile App Badge */}
                <div className="mt-4 p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                  <div className="flex items-center gap-2 text-sm font-medium text-primary mb-2">
                    <Zap className="w-4 h-4" />
                    Super App Experience
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Everything you need for AI robot gaming in one powerful app.
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}