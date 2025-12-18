'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Zap, Shield, Cpu, Gamepad2, Rocket, Bot, Smartphone, Cloud, Users, Trophy, Target, Wifi, Lock, Sparkles } from 'lucide-react';
import Image from 'next/image';

const DEFAULT_FEATURES = {
  sectionTitle: 'Revolutionary Super App Features',
  sectionSubtitle:
    'Everything you need for AI robot gaming in one powerful super app. Advanced AI, seamless gameplay, and cutting-edge technology all in your pocket.',
  features: [
    {
      id: 'ai-brain',
      title: 'Advanced AI Brain',
      description:
        'Sophisticated neural networks power every robot with adaptive learning, strategic thinking, and evolving combat intelligence that grows stronger with each battle.',
      icon: 'Brain',
      imageUrl:
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&h=600&random=aibrain1',
      imageAlt: 'AI brain neural network visualization',
      badge: 'AI Core',
      isNew: true,
    },
    {
      id: 'super-app-platform',
      title: 'All-in-One Super App',
      description:
        'Complete gaming ecosystem in your pocket. Build robots, join tournaments, chat with players, stream battles, and manage your AI army - all in one seamless app.',
      icon: 'Smartphone',
      imageUrl:
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80&w=800&h=600&random=superapp2',
      imageAlt: 'Super app interface design',
      badge: 'Super App',
      isPopular: true,
    },
    {
      id: 'quantum-battles',
      title: 'Quantum Battle Engine',
      description:
        'Lightning-fast combat simulations powered by quantum computing algorithms. Experience real-time battles with unprecedented speed and complexity.',
      icon: 'Zap',
      imageUrl:
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80&w=800&h=600&random=quantum3',
      imageAlt: 'Quantum battle engine visualization',
      badge: 'Quantum Tech',
    },
    {
      id: 'cloud-gaming',
      title: 'Cloud Gaming Network',
      description:
        'Play anywhere, anytime with our global cloud infrastructure. Cross-platform battles, instant matchmaking, and zero-latency gaming experience.',
      icon: 'Cloud',
      imageUrl:
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80&w=800&h=600&random=cloud4',
      imageAlt: 'Cloud gaming network',
      badge: 'Cloud Power',
    },
    {
      id: 'social-arena',
      title: 'Social Gaming Arena',
      description:
        'Connect with millions of players worldwide. Form alliances, share strategies, compete in leagues, and build the ultimate robot gaming community.',
      icon: 'Users',
      imageUrl:
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80&w=800&h=600&random=social5',
      imageAlt: 'Social gaming community',
      badge: 'Community',
    },
    {
      id: 'tournament-system',
      title: 'Championship Tournaments',
      description:
        'Compete in global tournaments with massive prize pools. Ranked matches, seasonal championships, and exclusive rewards for the ultimate robot masters.',
      icon: 'Trophy',
      imageUrl:
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80&w=800&h=600&random=tournament6',
      imageAlt: 'Championship tournament arena',
      badge: 'Esports',
    },
    {
      id: 'offline-mode',
      title: 'Offline Gaming Mode',
      description:
        'Train your robots and play campaigns even without internet. Advanced offline AI ensures your gaming never stops, anywhere you go.',
      icon: 'Wifi',
      imageUrl:
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80&w=800&h=600&random=offline7',
      imageAlt: 'Offline gaming mode',
      badge: 'Offline Ready',
    },
    {
      id: 'security-privacy',
      title: 'Military-Grade Security',
      description:
        'Your data and gaming progress are protected with end-to-end encryption, secure cloud saves, and privacy-first design principles.',
      icon: 'Lock',
      imageUrl:
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80&w=800&h=600&random=security8',
      imageAlt: 'Security and privacy features',
      badge: 'Secure',
    },
    {
      id: 'ar-integration',
      title: 'Augmented Reality Battles',
      description:
        'Bring your robot battles into the real world with cutting-edge AR technology. Fight in your living room, backyard, or anywhere you can imagine.',
      icon: 'Sparkles',
      imageUrl:
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80&w=800&h=600&random=ar9',
      imageAlt: 'Augmented reality gaming',
      badge: 'AR Ready',
      isNew: true,
    },
  ],
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };

  const getIcon = (iconName: string) => {
    const icons = {
      Brain,
      Zap,
      Shield,
      Cpu,
      Gamepad2,
      Rocket,
      Bot,
      Smartphone,
      Cloud,
      Users,
      Trophy,
      Target,
      Wifi,
      Lock,
      Sparkles,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Brain;
    return <IconComponent className="h-8 w-8" />;
  };

  return (
    <section id="features" className="bg-background text-foreground py-24 lg:py-32 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl opacity-30 transform -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 lg:mb-28">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Bot className="h-5 w-5 text-primary" />
            <span className="text-sm font-bold text-primary">Super App Technology</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              <span data-editable="sectionTitle">{config.sectionTitle}</span>
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            <span data-editable="sectionSubtitle">{config.sectionSubtitle}</span>
          </p>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid gap-10 md:gap-12 lg:grid-cols-2 xl:grid-cols-3">
          {config.features.map((feature, idx) => (
            <Card
              key={feature.id}
              className="group bg-card/60 backdrop-blur-sm border-border/60 hover:border-primary/50 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden hover:scale-105 relative"
            >
              {/* Special badges for new/popular features */}
              {feature.isNew && (
                <div className="absolute top-4 right-4 z-10 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  NEW
                </div>
              )}
              {feature.isPopular && (
                <div className="absolute top-4 right-4 z-10 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  POPULAR
                </div>
              )}
              
              <CardContent className="p-0">
                {/* Feature Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={feature.imageUrl}
                    alt={feature.imageAlt}
                    data-editable-src={`features[${idx}].imageUrl`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/30 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="bg-primary/90 text-primary-foreground border-0 font-bold px-4 py-2"
                    >
                      <span data-editable={`features[${idx}].badge`}>{feature.badge}</span>
                    </Badge>
                  </div>

                  {/* Enhanced Icon */}
                  <div className="absolute bottom-4 right-4 p-4 bg-background/95 backdrop-blur-sm rounded-2xl border border-border/60 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    {getIcon(feature.icon)}
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="p-8 lg:p-10">
                  <h3 className="text-2xl lg:text-3xl font-black mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    <span data-editable={`features[${idx}].description`}>
                      {feature.description}
                    </span>
                  </p>
                  
                  {/* Feature status indicator */}
                  <div className="mt-6 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-muted-foreground font-medium">Available in Super App</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Bottom Call-to-Action */}
        <div className="mt-24 text-center">
          <div className="inline-flex flex-col items-center gap-6 px-8 py-8 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-2xl backdrop-blur-sm max-w-2xl mx-auto">
            <div className="flex items-center gap-3">
              <Rocket className="h-8 w-8 text-primary" />
              <span className="text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Ready to dominate the AI robot gaming universe?
              </span>
              <Gamepad2 className="h-8 w-8 text-accent" />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Smartphone className="w-4 h-4" />
                <span>Download on iOS & Android</span>
              </div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full hidden sm:block" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Cloud className="w-4 h-4" />
                <span>Cloud sync across all devices</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}