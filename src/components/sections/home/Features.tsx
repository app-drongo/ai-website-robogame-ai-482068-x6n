'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Zap, Shield, Cpu, Gamepad2, Rocket } from 'lucide-react';
import Image from 'next/image';

const DEFAULT_FEATURES = {
  sectionTitle: 'Revolutionary AI Gaming Features',
  sectionSubtitle:
    'Cutting-edge technology that transforms how you create and battle with AI robots',
  features: [
    {
      id: 'neural-ai',
      title: 'Neural AI Engine',
      description:
        'Advanced machine learning algorithms that enable robots to learn, adapt, and evolve their combat strategies in real-time',
      icon: 'Brain',
      imageUrl:
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&h=600&random=neural1',
      imageAlt: 'Neural network visualization',
      badge: 'Core Technology',
    },
    {
      id: 'quantum-processing',
      title: 'Quantum Processing Power',
      description:
        'Harness quantum computing capabilities for lightning-fast decision making and complex battle simulations',
      icon: 'Zap',
      imageUrl:
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80&w=800&h=600&random=quantum2',
      imageAlt: 'Quantum computing interface',
      badge: 'Performance',
    },
    {
      id: 'adaptive-defense',
      title: 'Adaptive Defense Matrix',
      description:
        'Dynamic shield systems that learn from enemy attack patterns and automatically optimize defensive strategies',
      icon: 'Shield',
      imageUrl:
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80&w=800&h=600&random=defense3',
      imageAlt: 'Defense matrix visualization',
      badge: 'Security',
    },
    {
      id: 'multi-core-ai',
      title: 'Multi-Core AI Processing',
      description:
        'Distributed AI architecture enabling simultaneous tactical analysis, movement optimization, and weapon targeting',
      icon: 'Cpu',
      imageUrl:
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80&w=800&h=600&random=multicore4',
      imageAlt: 'Multi-core processor',
      badge: 'Architecture',
    },
    {
      id: 'immersive-control',
      title: 'Immersive Control Interface',
      description:
        'Next-generation haptic feedback and neural-link controls for unprecedented robot command precision',
      icon: 'Gamepad2',
      imageUrl:
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80&w=800&h=600&random=control5',
      imageAlt: 'Gaming control interface',
      badge: 'Interface',
    },
    {
      id: 'evolution-engine',
      title: 'Evolution Engine',
      description:
        'Genetic algorithm system that breeds superior robot generations through competitive selection and mutation',
      icon: 'Rocket',
      imageUrl:
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80&w=800&h=600&random=evolution6',
      imageAlt: 'Evolution algorithm visualization',
      badge: 'Innovation',
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
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Brain;
    return <IconComponent className="h-8 w-8" />;
  };

  return (
    <section id="features" className="bg-background text-foreground py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            <span data-editable="sectionTitle">{config.sectionTitle}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <span data-editable="sectionSubtitle">{config.sectionSubtitle}</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 xl:grid-cols-3">
          {config.features.map((feature, idx) => (
            <Card
              key={feature.id}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Feature Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={feature.imageUrl}
                    alt={feature.imageAlt}
                    data-editable-src={`features[${idx}].imageUrl`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="bg-primary/90 text-primary-foreground border-0"
                    >
                      <span data-editable={`features[${idx}].badge`}>{feature.badge}</span>
                    </Badge>
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-4 right-4 p-3 bg-background/90 backdrop-blur-sm rounded-full border border-border/50 text-primary group-hover:scale-110 transition-transform duration-300">
                    {getIcon(feature.icon)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <span data-editable={`features[${idx}].description`}>
                      {feature.description}
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 border border-accent/20 rounded-full">
            <Zap className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium text-accent-foreground">
              Powered by Advanced AI Technology
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
