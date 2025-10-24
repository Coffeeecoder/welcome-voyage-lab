import { Award, Users, Zap, MessageSquare, Trophy, TrendingUp, X } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Form groups, chat in real-time, and work together on creative challenges with built-in communication tools.",
  },
  {
    icon: Zap,
    title: "Gamified Tasks",
    description: "Complete timed tasks, earn points, and climb the leaderboard with our engaging gamification system.",
  },
  {
    icon: Award,
    title: "Digital Certificates",
    description: "Receive professional certificates upon completion with LinkedIn integration for easy sharing.",
  },
  {
    icon: Trophy,
    title: "Live Leaderboards",
    description: "Track your team's performance in real-time and compete with others across all tasks.",
  },
  {
    icon: MessageSquare,
    title: "Expert Mentorship",
    description: "Gain guidance from industry experts to sharpen skills and achieve goals.",
  },
  {
    icon: TrendingUp,
    title: "Skill Development",
    description: "Enhance your abilities with practical challenges and learning opportunities.",
  },
];

const Features = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-5 relative z-10">
          <h2 className="gradient-text pb-2">Why Choose Our Platform?</h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Everything you need to create, participate, and excel in collaborative events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isFlipped = flippedCard === index;
            
            return (
              <div
                key={index}
                className="flip-card-container h-[280px] sm:h-[300px]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`flip-card ${isFlipped ? 'flipped' : ''}`}
                  onClick={() => handleCardClick(index)}
                >
                  {/* Front of card */}
                  <div className="flip-card-front glass-card p-6 sm:p-8 rounded-xl cursor-pointer">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 sm:mb-6 group-hover:shadow-glow transition-shadow">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">Click to learn more</p>
                  </div>

                  {/* Back of card */}
                  <div className="flip-card-back glass-card p-6 sm:p-8 rounded-xl cursor-pointer">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(index);
                      }}
                      className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-colors"
                      aria-label="Close"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <h3 className="text-lg sm:text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
