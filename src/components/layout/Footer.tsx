'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Twitter, Linkedin, Bot, Zap, Shield } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  brandName: 'RoboAI Gaming',
  brandDescription: 'The Ultimate AI-Powered Robot Gaming Platform for Next-Gen Experiences',
  companyLinks: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
  ],
  legalLinks: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
  socialLinks: [
    { platform: 'GitHub', href: 'https://github.com', icon: 'github' },
    { platform: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
    { platform: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  ],
  copyrightText: '© 2024 RoboAI Gaming. All rights reserved.',
  newsletterTitle: 'Stay Updated',
  newsletterDescription: 'Get the latest updates on AI robot gaming technology',
  newsletterPlaceholder: 'Enter your email',
  newsletterButtonText: 'Subscribe',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleLinkClick = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      navigate(href);
    }
  };

  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github className="h-5 w-5" />;
      case 'twitter':
        return <Twitter className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      default:
        return <Bot className="h-5 w-5" />;
    }
  };

  return (
    <section id="footer" className="bg-card text-card-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <Bot className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">
                <span data-editable="brandName">{config.brandName}</span>
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              <span data-editable="brandDescription">{config.brandDescription}</span>
            </p>

            {/* Newsletter Signup */}
            <div className="bg-muted/50 p-4 rounded-lg border border-border">
              <h4 className="font-semibold mb-2">
                <span data-editable="newsletterTitle">{config.newsletterTitle}</span>
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                <span data-editable="newsletterDescription">{config.newsletterDescription}</span>
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={config.newsletterPlaceholder}
                  className="flex-1 px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Zap className="h-4 w-4 mr-1" />
                  <span data-editable="newsletterButtonText">{config.newsletterButtonText}</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              Company
            </h4>
            <ul className="space-y-3">
              {config.companyLinks.map((link, idx) => (
                <li key={idx}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start"
                    onClick={() => handleLinkClick(link.href)}
                    data-editable-href={`companyLinks[${idx}].href`}
                    data-href={link.href}
                  >
                    <span data-editable={`companyLinks[${idx}].label`}>{link.label}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {config.legalLinks.map((link, idx) => (
                <li key={idx}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start"
                    onClick={() => handleLinkClick(link.href)}
                    data-editable-href={`legalLinks[${idx}].href`}
                    data-href={link.href}
                  >
                    <span data-editable={`legalLinks[${idx}].label`}>{link.label}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            <span data-editable="copyrightText">{config.copyrightText}</span>
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">Follow us:</span>
            <div className="flex gap-2">
              {config.socialLinks.map((social, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="sm"
                  className="h-9 w-9 p-0 text-muted-foreground hover:text-foreground hover:bg-accent"
                  onClick={() => handleLinkClick(social.href)}
                  data-editable-href={`socialLinks[${idx}].href`}
                  data-href={social.href}
                  aria-label={social.platform}
                >
                  {renderSocialIcon(social.icon)}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
