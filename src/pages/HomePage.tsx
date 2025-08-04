import { Link } from "react-router-dom";
import { BookOpen, Brain, Trophy, Eye, MessageSquare, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const mainFeatures = [
  {
    title: "View All Courses",
    description: "Explore our comprehensive library of interactive courses",
    icon: BookOpen,
    href: "/courses",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    title: "Explore AI Features",
    description: "Experience cutting-edge AI learning assistance",
    icon: Brain,
    href: "/ai-debate",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    title: "Gamification Dashboard",
    description: "Track your progress and earn achievements",
    icon: Trophy,
    href: "/dashboard",
    gradient: "from-amber-500 to-amber-600"
  }
];

const aiFeatures = [
  {
    title: "Facial Expression AI",
    description: "Detects learner emotion to dynamically adjust lessons",
    icon: Eye,
    color: "text-blue-500"
  },
  {
    title: "AI Debate",
    description: "Talk to simulated mentors like Aristotle, Einstein, and Tesla",
    icon: MessageSquare,
    color: "text-purple-500"
  },
  {
    title: "Co-Study Mode",
    description: "Match with a peer to study synchronously in real-time",
    icon: Users,
    color: "text-green-500"
  }
];

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to{" "}
          <span className="hero-gradient bg-clip-text text-transparent">
            LEARNEX
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Where Learning Meets Intelligence
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Experience the future of education with AI-powered personalization, 
          real-time collaboration, and intelligent progress tracking.
        </p>
      </div>

      {/* Main Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {mainFeatures.map((feature) => (
          <Link key={feature.title} to={feature.href}>
            <Card className="h-full shadow-card hover:shadow-hover transition-smooth cursor-pointer group">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full" variant="default">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* AI Features Section */}
      <div className="bg-accent rounded-2xl p-8 mb-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-accent-foreground">
          Powered by Advanced AI
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {aiFeatures.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-background flex items-center justify-center">
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-accent-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Learning?</h2>
        <p className="text-muted-foreground mb-6">
          Join thousands of learners already experiencing the future of education
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/courses">
              Start Learning Today
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/ai-debate">
              Try AI Debate
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}