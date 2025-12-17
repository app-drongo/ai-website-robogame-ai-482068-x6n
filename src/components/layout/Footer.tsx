'use client';

import { Bot, Gamepad2, Zap, Github, Twitter, Youtube, Mail } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  logo: 'RoboGame AI',
  logoHref: '/',
  description: 'The ultimate super app for AI robot gaming. Build, battle, and dominate with intelligent robots.',
  sections: [
    {
      title: 'Super App',
      links: [
        { label: 'Download App', href: '/download' },
        { label: 'Play Now', href: '/play' },
        { label: 'Features', href: '#features' },
        { label: 'Tournaments', href: '/tournaments' },
      ],
    },
    {
      title: 'AI Robots',
      links: [
        { label: 'Build Robots', href: '/build' },
        { label: 'AI Training', href: '/training' },
        { label: 'Battle Arena', href: '/arena' },
        { label: 'Leaderboards', href: '/leaderboards' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Discord', href: 'https://discord.gg/robogame' },
        { label: 'Forums', href: '/forums' },
        { label: 'Support', href: '/support' },
        { label: 'Blog', href: '/blog' },
      ],
    },
  ],
  socialLinks: [
    { icon: 'Twitter', href: 'https://twitter.com/robogameai', label: 'Twitter' },
    { icon: 'Youtube', href: 'https://youtube.com/robogameai', label: 'YouTube' },
    { icon: 'Github', href: 'https://github.com/robogameai', label: 'GitHub' },
    { icon: 'Mail', href: 'mailto:hello@robogameai.com', label: 'Email' },
  ],
  copyright: '© 2024 RoboGame AI. All rights reserved.',
  bottomLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleLogoClick = () => {
    navigate(config.logoHref);
  };

  const handleLinkClick = (href: string) => {
    navigate(href);
  };

  const getSocialIcon = (iconName: string) => {
    const icons = {
      Twitter,
      Youtube,
      Github,
      Mail,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Mail;
    return <IconComponent className="h-5 w-5" />;
  };

  return (
    <footer className="bg-background border-t border-border/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <button
                onClick={handleLogoClick}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity group mb-6"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative bg-gradient-to-r from-primary to-accent p-3 rounded-xl">
                    <Bot className="h-7 w-7 text-white" />
                  </div>
                </div>
                <span className="text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  <span data-editable="logo">{config.logo}</span>
                </span>
              </button>
              
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                <span data-editable="description">{config.description}</span>
              </p>
              
              {/* Super App Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm font-bold text-primary">Super App Technology</span>
              </div>
            </div>

            {/* Footer Sections */}
            <div className="lg:col-span-3">
              <div className="grid gap-8 sm:grid-cols-3">
                {config.sections.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="text-lg font-bold text-foreground mb-6">
                      <span data-editable={`sections[${idx}].title`}>{section.title}</span>
                    </h3>
                    <ul className="space-y-4">
                      {section.links.map((link, linkIdx) => (
                        <li key={linkIdx}>
                          <button
                            onClick={() => handleLinkClick(link.href)}
                            className="text-muted-foreground hover:text-primary transition-colors font-medium"
                          >
                            <span data-editable={`sections[${idx}].links[${linkIdx}].label`}>
                              {link.label}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-muted-foreground text-center lg:text-left">
              <span data-editable="copyright">{config.copyright}</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {config.socialLinks.map((social, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLinkClick(social.href)}
                  className="p-3 bg-card/60 hover:bg-primary/10 border border-border/50 hover:border-primary/30 rounded-xl transition-all duration-300 hover:scale-110 group"
                  aria-label={social.label}
                >
                  <div className="text-muted-foreground group-hover:text-primary transition-colors">
                    {getSocialIcon(social.icon)}
                  </div>
                </button>
              ))}
            </div>

            {/* Bottom Links */}
            <div className="flex items-center gap-6 text-sm">
              {config.bottomLinks.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  <span data-editable={`bottomLinks[${idx}].label`}>{link.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gaming Elements */}
        <div className="absolute bottom-4 left-4 opacity-10">
          <Gamepad2 className="h-8 w-8 text-primary" />
        </div>
        <div className="absolute top-4 right-4 opacity-10">
          <Bot className="h-8 w-8 text-accent" />
        </div>
      </div>
    </footer>
  );
}