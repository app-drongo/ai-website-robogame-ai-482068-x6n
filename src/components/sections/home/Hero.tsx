'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Zap, Users, Trophy, Bot, Gamepad2, Smartphone, Download, Star } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  title: 'The Ultimate AI Robot Game Super App',
  subtitle:
    'Experience the future of gaming with our revolutionary super app. Build, train, and battle with intelligent AI robots in immersive virtual arenas. Advanced machine learning meets cutting-edge gameplay in one powerful mobile platform.',
  ctaText: 'Download Super App',
  ctaHref: '/download',
  secondaryCtaText: 'Watch Demo',
  secondaryCtaHref: '/demo',
  heroImageUrl:
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200&h=800&random=superapp1',
  heroImageAlt: 'AI robot game super app interface',
  stats: [
    { label: 'Active Gamers', value: '5M+', icon: 'Users' },
    { label: 'AI Battles Daily', value: '100M+', icon: 'Trophy' },
    { label: 'Smart Robots', value: '50K+', icon: 'Bot' },
  ],
  badgeText: 'Super App Revolution',
  appStoreRating: '4.9',
  totalDownloads: '10M+',
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [currentStatIndex, setCurrentStatIndex] = useState(0);
  const [downloadCount, setDownloadCount] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStatIndex(prev => (prev + 1) % config.stats.length);
    }, 3000);
    
    // Animate download counter
    const targetCount = parseInt(config.totalDownloads.replace(/[^0-9]/g, ''));
    const increment = targetCount / 100;
    let current = 0;
    const countInterval = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setDownloadCount(targetCount);
        clearInterval(countInterval);
      } else {
        setDownloadCount(Math.floor(current));
      }
    }, 30);
    
    return () => {
      clearInterval(interval);
      clearInterval(countInterval);
    };
  }, [config.stats.length, config.totalDownloads]);

  const handlePrimaryClick = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5" />;
      case 'Bot':
        return <Bot className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="hero"
      className="bg-background text-foreground min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Enhanced animated background with futuristic grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        {/* Enhanced floating particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/40 rounded-full animate-ping" />
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-accent/50 rounded-full animate-ping delay-500" />
        <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-primary/30 rounded-full animate-ping delay-1000" />
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-accent/20 rounded-full animate-pulse delay-700" />
        <div className="absolute bottom-1/3 right-1/2 w-3 h-3 bg-primary/25 rounded-full animate-pulse delay-300" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:gap-20 lg:grid-cols-2 items-center">
          {/* Enhanced Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Enhanced Badge with app info */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Badge
                variant="secondary"
                className="bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-primary/30 px-6 py-3 text-sm font-bold backdrop-blur-sm"
              >
                <Smartphone className="w-4 h-4 mr-2" />
                <span data-editable="badgeText">{config.badgeText}</span>
              </Badge>
              
              {/* App Store Rating */}
              <div className="flex items-center gap-2 bg-card/60 backdrop-blur-sm rounded-full px-4 py-2 border border-border/60">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-foreground">{config.appStoreRating}</span>
                <span className="text-xs text-muted-foreground">App Store</span>
              </div>
            </div>

            {/* Enhanced Title */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                  <span data-editable="title">{config.title}</span>
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                <span data-editable="subtitle">{config.subtitle}</span>
              </p>
            </div>

            {/* Enhanced CTAs with download info */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  onClick={handlePrimaryClick}
                  data-editable-href="ctaHref"
                  data-href={config.ctaHref}
                  className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90 px-10 py-7 text-xl font-bold transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-primary/25"
                >
                  <Download className="w-6 h-6 mr-3" />
                  <span data-editable="ctaText">{config.ctaText}</span>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleSecondaryClick}
                  data-editable-href="secondaryCtaHref"
                  data-href={config.secondaryCtaHref}
                  className="border-2 border-border hover:bg-accent hover:text-accent-foreground px-10 py-7 text-xl font-bold transition-all duration-300 hover:scale-105"
                >
                  <Play className="w-6 h-6 mr-3" />
                  <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
                </Button>
              </div>
              
              {/* Download Counter */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span className="font-bold text-foreground">
                    {downloadCount > 0 ? `${Math.floor(downloadCount / 1000000)}M+` : config.totalDownloads}
                  </span>
                  <span>downloads worldwide</span>
                </div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                <span>Available on iOS & Android</span>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              {config.stats.map((stat, idx) => (
                <Card
                  key={idx}
                  className={`bg-card/60 border-border/60 backdrop-blur-sm transition-all duration-500 hover:bg-card/80 hover:scale-110 hover:shadow-2xl hover:shadow-primary/10 ${
                    currentStatIndex === idx ? 'ring-2 ring-primary/60 shadow-lg shadow-primary/20' : ''
                  }`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-3 text-primary">
                      {getStatIcon(stat.icon)}
                    </div>
                    <div className="text-3xl font-black text-foreground mb-1">
                      <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced Hero Image with mobile mockup */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <div className="relative">
              {/* Enhanced glow effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-3xl blur-3xl opacity-70 animate-pulse" />
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-60" />

              {/* Mobile App Mockup Container */}
              <div className="relative bg-card/40 backdrop-blur-sm rounded-3xl border-2 border-border/60 overflow-hidden shadow-2xl">
                <Image
                  src={config.heroImageUrl}
                  alt={config.heroImageAlt}
                  data-editable-src="heroImageUrl"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-110"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                
                {/* Enhanced floating UI elements */}
                <div className="absolute top-6 right-6 bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm flex items-center gap-2">
                  <Bot className="w-4 h-4" />
                  AI Powered
                </div>
                <div className="absolute bottom-6 left-6 bg-accent/90 text-accent-foreground px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm flex items-center gap-2">
                  <Gamepad2 className="w-4 h-4" />
                  Super App
                </div>
                
                {/* Live indicator */}
                <div className="absolute top-6 left-6 bg-green-500/90 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  LIVE
                </div>
              </div>

              {/* Enhanced floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-accent/20 rounded-full blur-lg animate-pulse delay-1000" />
              <div className="absolute top-1/2 -right-4 w-16 h-16 bg-primary/15 rounded-full blur-lg animate-pulse delay-500" />
              
              {/* Platform indicators */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
                <div className="bg-card/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-border/60 text-xs font-medium">
                  iOS
                </div>
                <div className="bg-card/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-border/60 text-xs font-medium">
                  Android
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}