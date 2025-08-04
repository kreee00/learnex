import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { 
  Play, 
  Download, 
  CheckCircle, 
  Circle, 
  MessageCircle, 
  Clock,
  Users,
  Star,
  Brain,
  RefreshCw
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";

const courseData = {
  1: {
    title: "Introduction to Philosophy",
    description: "Explore fundamental questions about existence, knowledge, values, and reason",
    progress: 45,
    totalModules: 6,
    completedModules: 3,
    duration: "6 weeks",
    students: 1420,
    rating: 4.8,
    instructor: "Dr. Sarah Williams",
    modules: [
      {
        id: 1,
        title: "What is Philosophy?",
        completed: true,
        duration: "45 min",
        videoUrl: "https://www.youtube.com/embed/1A_CAkYt3GY",
        quiz: [
          {
            question: "What does 'philosophy' literally mean?",
            options: ["Love of wisdom", "Study of nature", "Art of debate", "Search for truth"],
            correct: 0
          }
        ],
        comments: [
          { user: "Alex", comment: "Great introduction! Really helped me understand the basics.", time: "2 days ago" },
          { user: "Maya", comment: "The historical context was fascinating.", time: "1 day ago" }
        ]
      },
      {
        id: 2,
        title: "Ancient Greek Philosophy",
        completed: true,
        duration: "52 min",
        videoUrl: "https://www.youtube.com/embed/VDiyQub6vpw",
        quiz: [
          {
            question: "Who is considered the father of Western philosophy?",
            options: ["Aristotle", "Plato", "Socrates", "Pythagoras"],
            correct: 2
          }
        ],
        comments: [
          { user: "James", comment: "Socrates' method of questioning is brilliant!", time: "3 hours ago" }
        ]
      },
      {
        id: 3,
        title: "Logic and Critical Thinking",
        completed: true,
        duration: "38 min",
        videoUrl: "https://www.youtube.com/embed/6OLPL5p0fMg",
        quiz: [
          {
            question: "What is a syllogism?",
            options: ["A type of logic puzzle", "A form of reasoning", "A philosophical debate", "An ancient text"],
            correct: 1
          }
        ],
        comments: []
      },
      {
        id: 4,
        title: "Ethics and Moral Philosophy",
        completed: false,
        duration: "41 min",
        videoUrl: "https://www.youtube.com/embed/kBdfcR-8hEY",
        quiz: [
          {
            question: "What is utilitarianism?",
            options: ["Acting for personal gain", "Greatest good for greatest number", "Following divine commands", "Acting according to duty"],
            correct: 1
          }
        ],
        comments: []
      },
      {
        id: 5,
        title: "Metaphysics and Reality",
        completed: false,
        duration: "47 min",
        videoUrl: "https://www.youtube.com/embed/YxBShJU_CKs",
        quiz: [],
        comments: []
      },
      {
        id: 6,
        title: "Modern Philosophy",
        completed: false,
        duration: "43 min",
        videoUrl: "https://www.youtube.com/embed/9AZJnZwNu6w",
        quiz: [],
        comments: []
      }
    ]
  }
};

const emotions = ["Focused 😊", "Confused 😕", "Bored 😐", "Excited 🤩", "Tired 😴"];

export default function CourseDetailPage() {
  const { id } = useParams();
  const [openModules, setOpenModules] = useState<number[]>([1]);
  const [currentEmotion, setCurrentEmotion] = useState("Focused 😊");
  const [aiSuggestion, setAiSuggestion] = useState("Great focus! Continue with the current pace.");
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: string]: number}>({});

  const course = courseData[id as unknown as keyof typeof courseData];

  // Simulate emotion detection
  useEffect(() => {
    const interval = setInterval(() => {
      const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];
      setCurrentEmotion(randomEmotion);
      
      // Generate AI suggestions based on emotion
      const suggestions = {
        "Focused 😊": "Great focus! Continue with the current pace.",
        "Confused 😕": "Detected confusion. Switching to recap mode with visual aids.",
        "Bored 😐": "Engagement dropping. Let's try a quick interactive quiz!",
        "Excited 🤩": "High engagement detected! Ready for advanced concepts?",
        "Tired 😴": "Taking a break recommended. Shorter content ahead."
      };
      
      setAiSuggestion(suggestions[randomEmotion as keyof typeof suggestions] || "Monitoring your learning state...");
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  if (!course) {
    return <div className="container mx-auto px-4 py-8">Course not found</div>;
  }

  const toggleModule = (moduleId: number) => {
    setOpenModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const handleQuizAnswer = (moduleId: number, questionIndex: number, answerIndex: number) => {
    const key = `${moduleId}-${questionIndex}`;
    setSelectedAnswers(prev => ({ ...prev, [key]: answerIndex }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Course Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            <p className="text-lg text-muted-foreground mb-4">{course.description}</p>
            
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{course.students} students</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">{course.rating} rating</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Course Progress</span>
                <span>{course.progress}% complete ({course.completedModules}/{course.totalModules} modules)</span>
              </div>
              <Progress value={course.progress} className="h-3" />
            </div>
          </div>

          {/* Modules */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Course Modules</h2>
            
            {course.modules.map((module) => (
              <Card key={module.id} className="shadow-card">
                <Collapsible 
                  open={openModules.includes(module.id)}
                  onOpenChange={() => toggleModule(module.id)}
                >
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer hover:bg-accent/50 transition-smooth">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {module.completed ? (
                            <CheckCircle className="h-6 w-6 text-success" />
                          ) : (
                            <Circle className="h-6 w-6 text-muted-foreground" />
                          )}
                          <div>
                            <CardTitle className="text-lg">{module.title}</CardTitle>
                            <div className="flex items-center gap-2 mt-1">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{module.duration}</span>
                              {module.completed && (
                                <Badge variant="secondary" className="bg-success/10 text-success">
                                  Completed
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <CardContent className="space-y-6">
                      {/* Video Player */}
                      <div className="aspect-video rounded-lg overflow-hidden bg-black">
                        <iframe
                          src={module.videoUrl}
                          title={module.title}
                          className="w-full h-full"
                          allowFullScreen
                        />
                      </div>
                      
                      <div className="flex gap-4">
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download Slides
                        </Button>
                        <Button variant="outline" size="sm">
                          <Play className="mr-2 h-4 w-4" />
                          Watch Again
                        </Button>
                      </div>

                      {/* Quiz */}
                      {module.quiz.length > 0 && (
                        <div className="space-y-4">
                          <Separator />
                          <h4 className="text-lg font-semibold">Quick Quiz</h4>
                          {module.quiz.map((question, qIndex) => (
                            <div key={qIndex} className="space-y-3">
                              <p className="font-medium">{question.question}</p>
                              <div className="grid grid-cols-1 gap-2">
                                {question.options.map((option, oIndex) => {
                                  const key = `${module.id}-${qIndex}`;
                                  const isSelected = selectedAnswers[key] === oIndex;
                                  const isCorrect = question.correct === oIndex;
                                  const hasAnswered = key in selectedAnswers;
                                  
                                  return (
                                    <Button
                                      key={oIndex}
                                      variant={
                                        hasAnswered 
                                          ? (isCorrect ? "default" : isSelected ? "destructive" : "outline")
                                          : "outline"
                                      }
                                      className="justify-start text-left h-auto p-3"
                                      onClick={() => handleQuizAnswer(module.id, qIndex, oIndex)}
                                      disabled={hasAnswered}
                                    >
                                      {option}
                                    </Button>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Comments */}
                      <div className="space-y-4">
                        <Separator />
                        <h4 className="text-lg font-semibold flex items-center gap-2">
                          <MessageCircle className="h-5 w-5" />
                          Discussion ({module.comments.length})
                        </h4>
                        
                        {module.comments.length > 0 ? (
                          <div className="space-y-3">
                            {module.comments.map((comment, index) => (
                              <div key={index} className="bg-accent rounded-lg p-4">
                                <div className="flex justify-between items-start mb-2">
                                  <span className="font-medium">{comment.user}</span>
                                  <span className="text-sm text-muted-foreground">{comment.time}</span>
                                </div>
                                <p className="text-sm">{comment.comment}</p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-muted-foreground text-sm">No comments yet. Be the first to share your thoughts!</p>
                        )}
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </div>

        {/* AI Emotion Widget */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                AI Learning Assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center p-4 bg-accent rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Current Mood:</p>
                <p className="text-2xl font-bold">{currentEmotion}</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-medium">AI Recommendation:</p>
                <p className="text-sm text-muted-foreground">{aiSuggestion}</p>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <RefreshCw className="h-3 w-3 animate-spin" />
                Analyzing your learning state...
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <p className="text-sm font-medium">Today's Progress</p>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Modules completed</span>
                    <span>2/3</span>
                  </div>
                  <Progress value={67} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Focus time</span>
                    <span>45 min</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}