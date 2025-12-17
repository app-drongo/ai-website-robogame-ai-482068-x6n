'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Zap, Users, Trophy } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  title: 'Build, Battle & Dominate with AI-Powered Robots',
  subtitle:
    'Experience the future of gaming with RoboGame AI - where advanced artificial intelligence meets immersive robot combat. Create intelligent battle bots, train neural networks, and compete in dynamic arenas.',
  ctaText: 'Start Building',
  ctaHref: '/build',
  secondaryCtaText: 'Watch Demo',
  secondaryCtaHref: '/demo',
  heroImageUrl:
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200&h=800&random=robogame1',
  heroImageAlt: 'AI robot in futuristic battle arena',
  stats: [
    { label: 'Active Players', value: '50K+', icon: 'Users' },
    { label: 'Battles Won', value: '2M+', icon: 'Trophy' },
    { label: 'AI Models', value: '500+', icon: 'Zap' },
  ],
  badgeText: 'Next-Gen Gaming',
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [currentStatIndex, setCurrentStatIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStatIndex(prev => (prev + 1) % config.stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [config.stats.length]);

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
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="hero"
      className="bg-background text-foreground min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:gap-20 lg:grid-cols-2 items-center">
          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Badge */}
            <div className="flex justify-start">
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium"
              >
                <Zap className="w-4 h-4 mr-2" />
                <span data-editable="badgeText">{config.badgeText}</span>
              </Badge>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                <span data-editable="title">{config.title}</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                <span data-editable="subtitle">{config.subtitle}</span>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handlePrimaryClick}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <span data-editable="ctaText">{config.ctaText}</span>
                <Zap className="w-5 h-5 ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleSecondaryClick}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
                className="border-border hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg font-semibold transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {config.stats.map((stat, idx) => (
                <Card
                  key={idx}
                  className={`bg-card/50 border-border/50 backdrop-blur-sm transition-all duration-500 hover:bg-card/80 hover:scale-105 ${
                    currentStatIndex === idx ? 'ring-2 ring-primary/50' : ''
                  }`}
                >
                  <CardContent className="p-4 text-center">
                    <div className="flex justify-center mb-2 text-primary">
                      {getStatIcon(stat.icon)}
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-60" />

              {/* Image container */}
              <div className="relative bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden">
                <Image
                  src={config.heroImageUrl}
                  alt={config.heroImageAlt}
                  data-editable-src="heroImageUrl"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/20 rounded-full blur-lg animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-ping" />
      <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-accent/40 rounded-full animate-ping delay-500" />
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-ping delay-1000" />
    </section>
  );
}
