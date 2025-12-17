'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Zap, Bot, Gamepad2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_NAVIGATION = {
  brandName: 'RoboAI',
  brandTagline: 'Next-Gen Gaming',
  navItems: [
    { label: 'Home', href: '#hero', icon: 'Zap' },
    { label: 'Features', href: '#features', icon: 'Bot' },
  ],
  ctaText: 'Launch Game',
  ctaHref: '/game',
  mobileMenuLabel: 'Open navigation menu',
  closeMenuLabel: 'Close navigation menu',
} as const;

type NavigationProps = Partial<typeof DEFAULT_NAVIGATION>;

export default function Navigation(props: NavigationProps) {
  const config = { ...DEFAULT_NAVIGATION, ...props };
  const navigate = useSmartNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };

  const handleCTAClick = () => {
    navigate(config.ctaHref);
    setIsOpen(false);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-4 h-4" />;
      case 'Bot':
        return <Bot className="w-4 h-4" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-4 h-4" />;
      default:
        return <Zap className="w-4 h-4" />;
    }
  };

  return (
    <section id="navigation">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-lg'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Brand */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span
                  className="text-lg font-bold text-foreground tracking-tight"
                  data-editable="brandName"
                >
                  {config.brandName}
                </span>
                <span
                  className="text-xs text-muted-foreground font-medium"
                  data-editable="brandTagline"
                >
                  {config.brandTagline}
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {config.navItems.map((item, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="sm"
                  onClick={() => handleNavClick(item.href)}
                  className="text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 px-4 py-2 rounded-lg font-medium"
                  data-editable-href={`navItems[${idx}].href`}
                  data-href={item.href}
                >
                  <div className="flex items-center space-x-2">
                    {getIcon(item.icon)}
                    <span data-editable={`navItems[${idx}].label`}>{item.label}</span>
                  </div>
                </Button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Button
                onClick={handleCTAClick}
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 px-6 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
              >
                <Gamepad2 className="w-4 h-4 mr-2" />
                <span data-editable="ctaText">{config.ctaText}</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden text-foreground hover:bg-accent hover:text-accent-foreground p-2"
                  aria-label={config.mobileMenuLabel}
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 bg-card text-card-foreground border-border"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-border">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <Bot className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="flex flex-col">
                        <span
                          className="text-lg font-bold text-card-foreground"
                          data-editable="brandName"
                        >
                          {config.brandName}
                        </span>
                        <span
                          className="text-xs text-muted-foreground"
                          data-editable="brandTagline"
                        >
                          {config.brandTagline}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex-1 py-6">
                    <nav className="space-y-2">
                      {config.navItems.map((item, idx) => (
                        <Button
                          key={idx}
                          variant="ghost"
                          onClick={() => handleNavClick(item.href)}
                          className="w-full justify-start text-card-foreground hover:bg-accent hover:text-accent-foreground p-4 h-auto rounded-lg"
                          data-editable-href={`navItems[${idx}].href`}
                          data-href={item.href}
                        >
                          <div className="flex items-center space-x-3">
                            {getIcon(item.icon)}
                            <span
                              className="text-base font-medium"
                              data-editable={`navItems[${idx}].label`}
                            >
                              {item.label}
                            </span>
                          </div>
                        </Button>
                      ))}
                    </nav>
                  </div>

                  {/* Mobile CTA */}
                  <div className="pt-6 border-t border-border">
                    <Button
                      onClick={handleCTAClick}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-lg font-semibold"
                      data-editable-href="ctaHref"
                      data-href={config.ctaHref}
                    >
                      <Gamepad2 className="w-4 h-4 mr-2" />
                      <span data-editable="ctaText">{config.ctaText}</span>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </section>
  );
}
