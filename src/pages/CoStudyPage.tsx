import { useState } from "react";
import { Users, MessageCircle, Video, Monitor, Play, Pause, RotateCcw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const courses = [
  { id: "1", name: "Introduction to Philosophy", progress: 45 },
  { id: "2", name: "Data Structures & Algorithms", progress: 23 },
  { id: "3", name: "Conflict Resolution", progress: 78 },
  { id: "4", name: "Machine Learning Fundamentals", progress: 12 }
];

const studyBuddy = {
  name: "Akram Faisal",
  avatar: "/placeholder.svg",
  location: "Espira Kinrara, Puchong",
  currentCourse: "Introduction to Philosophy",
  progress: 52,
  studyStreak: 7,
  timeZone: "GMT+0",
  onlineStatus: "online"
};

const chatMessages = [
  { user: "Akram", message: "Hey! Ready to tackle this philosophy module?", time: "2 min ago" },
  { user: "You", message: "Absolutely! I'm excited to discuss Aristotle's ethics", time: "1 min ago" },
  { user: "Akram", message: "Perfect! I had some questions about virtue ethics", time: "30 sec ago" }
];

export default function CoStudyPage() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isMatched, setIsMatched] = useState(false);
  const [studyMode, setStudyMode] = useState<"together" | "solo">("together");
  const [isLoading, setIsLoading] = useState(false);
  const [videoProgress, setVideoProgress] = useState(34);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleFindBuddy = () => {
    setIsLoading(true);
    // Simulate matching process
    setTimeout(() => {
      setIsMatched(true);
      setIsLoading(false);
    }, 2000);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // In a real app, this would sync with the study buddy
  };

  const handleSeek = (newProgress: number) => {
    setVideoProgress(newProgress);
    // In a real app, this would sync with the study buddy
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Find a Study Buddy</h1>
        <p className="text-lg text-muted-foreground">
          Learn together with peers from around the world in real-time synchronization
        </p>
      </div>

      {!isMatched ? (
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Course Selection
              </CardTitle>
              <CardDescription>
                Choose a course to find a study partner for
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Select Course</label>
                <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a course to study together" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course.id} value={course.id}>
                        <div className="flex justify-between items-center w-full">
                          <span>{course.name}</span>
                          <Badge variant="secondary" className="ml-2">
                            {course.progress}% complete
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">What to expect:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Monitor className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-sm">Synchronized Learning</p>
                      <p className="text-xs text-muted-foreground">Watch videos and complete exercises together</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-sm">Real-time Chat</p>
                      <p className="text-xs text-muted-foreground">Discuss concepts as you learn</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Video className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-sm">Voice/Video Calls</p>
                      <p className="text-xs text-muted-foreground">Optional face-to-face discussions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-sm">Peer Support</p>
                      <p className="text-xs text-muted-foreground">Motivation and accountability</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleFindBuddy}
                disabled={!selectedCourse || isLoading}
                className="w-full"
                size="lg"
              >
                {isLoading ? (
                  <>
                    <Users className="mr-2 h-4 w-4 animate-spin" />
                    Finding Your Study Buddy...
                  </>
                ) : (
                  <>
                    <Users className="mr-2 h-4 w-4" />
                    Pair Me With Someone
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Study Buddy Info */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Your Study Buddy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={studyBuddy.avatar} alt={studyBuddy.name} />
                    <AvatarFallback>{studyBuddy.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{studyBuddy.name}</h3>
                    <p className="text-sm text-muted-foreground">{studyBuddy.location}</p>
                    <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                      {studyBuddy.onlineStatus}
                    </Badge>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Course Progress</span>
                    <span>{studyBuddy.progress}%</span>
                  </div>
                  <Progress value={studyBuddy.progress} className="h-2" />
                </div>
                
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Study Streak:</span>
                    <span className="font-medium">{studyBuddy.studyStreak} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time Zone:</span>
                    <span className="font-medium">{studyBuddy.timeZone}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant={studyMode === "together" ? "default" : "outline"}
                    size="sm"
                    className="flex-1"
                    onClick={() => setStudyMode("together")}
                  >
                    Study Together
                  </Button>
                  <Button 
                    variant={studyMode === "solo" ? "default" : "outline"}
                    size="sm"
                    className="flex-1"
                    onClick={() => setStudyMode("solo")}
                  >
                    Solo Mode
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Chat */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Live Chat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-48 overflow-y-auto">
                  {chatMessages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.user === "You" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[80%] rounded-lg p-2 ${
                        msg.user === "You" 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-accent text-accent-foreground"
                      }`}>
                        <p className="text-sm">{msg.message}</p>
                        <p className="text-xs opacity-70 mt-1">{msg.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Separator className="my-3" />
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Type a message..."
                    className="flex-1 px-3 py-2 border rounded-md text-sm"
                  />
                  <Button size="sm">Send</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Shared Learning Area */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Module: What is Philosophy?</CardTitle>
                    <CardDescription>
                      {studyMode === "together" ? "Synchronized with your study buddy" : "Individual study mode"}
                    </CardDescription>
                  </div>
                  <Badge variant={studyMode === "together" ? "default" : "secondary"}>
                    {studyMode === "together" ? "Synced" : "Solo"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Video Player */}
                <div className="space-y-4">
                  <div className="aspect-video rounded-lg overflow-hidden bg-black relative">
                    <iframe
                      src="https://www.youtube.com/embed/1A_CAkYt3GY"
                      title="What is Philosophy?"
                      className="w-full h-full"
                      allowFullScreen
                    />
                    {studyMode === "together" && (
                      <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        Synced with {studyBuddy.name}
                      </div>
                    )}
                  </div>
                  
                  {/* Video Controls */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={handlePlayPause}
                      >
                        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      </Button>
                      <div className="flex-1">
                        <Progress value={videoProgress} className="h-2 cursor-pointer" />
                      </div>
                      <Button size="sm" variant="outline">
                        <RotateCcw className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>12:45 / 37:23</span>
                      {studyMode === "together" && (
                        <span>🔄 Auto-synced with study buddy</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Shared Notes */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Shared Notes</h3>
                  <div className="bg-accent rounded-lg p-4 space-y-2">
                    <div className="text-sm">
                      <span className="font-medium text-primary">{studyBuddy.name}:</span>
                      <span className="ml-2">Philosophy = "love of wisdom" in Greek</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium text-primary">You:</span>
                      <span className="ml-2">Key areas: metaphysics, epistemology, ethics, logic</span>
                    </div>
                  </div>
                </div>

                {/* Study Actions */}
                <div className="flex gap-4">
                  <Button className="flex-1">
                    Take Quiz Together
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Share Notes
                  </Button>
                  <Button variant="outline">
                    <Video className="mr-2 h-4 w-4" />
                    Video Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}