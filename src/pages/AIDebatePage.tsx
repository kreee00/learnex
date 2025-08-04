import { useState } from "react";
import { MessageSquare, Send, Loader2, User, Bot } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const mentors = [
  {
    id: "aristotle",
    name: "Aristotle",
    description: "Ancient Greek philosopher and scientist",
    specialty: "Logic, Ethics, Politics",
    avatar: "🏛️"
  },
  {
    id: "confucius",
    name: "Confucius",
    description: "Chinese philosopher and politician",
    specialty: "Ethics, Morality, Social Philosophy",
    avatar: "🎎"
  },
  {
    id: "turing",
    name: "Alan Turing",
    description: "British mathematician and computer scientist",
    specialty: "Computer Science, Mathematics, AI",
    avatar: "💻"
  },
  {
    id: "curie",
    name: "Marie Curie",
    description: "Polish-French physicist and chemist",
    specialty: "Physics, Chemistry, Scientific Method",
    avatar: "🧪"
  },
  {
    id: "musk",
    name: "Elon Musk",
    description: "Entrepreneur and business magnate",
    specialty: "Innovation, Technology, Space Exploration",
    avatar: "🚀"
  },
  {
    id: "einstein",
    name: "Albert Einstein",
    description: "German-born theoretical physicist",
    specialty: "Physics, Relativity, Scientific Philosophy",
    avatar: "⚡"
  }
];

const sampleConversations = {
  aristotle: [
    {
      role: "user",
      content: "What is the purpose of human life?"
    },
    {
      role: "assistant",
      content: "Ah, young seeker of wisdom! The purpose of human life, or what I call 'eudaimonia,' is the flourishing of the soul through the cultivation of virtue. It is not a feeling or a temporary state, but rather a way of living - a life of excellent character where one actualizes their highest potential. True happiness comes not from pleasure or wealth, but from living in accordance with virtue and reason. What specific aspect of human flourishing would you like to explore further?"
    }
  ],
  turing: [
    {
      role: "user",
      content: "Do you think machines can truly think?"
    },
    {
      role: "assistant",
      content: "A fascinating question that I've pondered deeply! Rather than asking whether machines can 'think' - which becomes a semantic debate about consciousness - I propose we ask: can machines behave intelligently? My 'imitation game' suggests that if a machine can engage in conversations indistinguishable from a human, we might consider it intelligent. The question isn't whether machines think like humans, but whether they can process information and respond in ways that demonstrate intelligence. What's your perspective on distinguishing between simulation and genuine understanding?"
    }
  ]
};

export default function AIDebatePage() {
  const [selectedMentor, setSelectedMentor] = useState<string>("");
  const [question, setQuestion] = useState("");
  const [conversation, setConversation] = useState<Array<{role: string, content: string}>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [conversationStarted, setConversationStarted] = useState(false);

  const selectedMentorData = mentors.find(m => m.id === selectedMentor);

  const handleStartConversation = () => {
    if (!selectedMentor || !question.trim()) return;
    
    setIsLoading(true);
    setConversationStarted(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const sampleConv = sampleConversations[selectedMentor as keyof typeof sampleConversations];
      if (sampleConv) {
        setConversation([
          { role: "user", content: question },
          sampleConv[1] // Use the sample response
        ]);
      } else {
        // Default response for mentors without sample conversations
        setConversation([
          { role: "user", content: question },
          { 
            role: "assistant", 
            content: `Greetings! I am ${selectedMentorData?.name}. Your question about "${question}" is quite thought-provoking. From my perspective and experience in ${selectedMentorData?.specialty}, I would approach this by first examining the fundamental principles involved. What specific aspect interests you most?`
          }
        ]);
      }
      setIsLoading(false);
      setQuestion("");
    }, 2000);
  };

  const handleContinueConversation = () => {
    if (!question.trim()) return;
    
    setIsLoading(true);
    const newMessage = { role: "user", content: question };
    setConversation(prev => [...prev, newMessage]);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's an excellent follow-up question. Let me elaborate on that point...",
        "I appreciate your curiosity! This reminds me of a similar situation I encountered...",
        "You're thinking deeply about this. Consider this perspective...",
        "Building on what we discussed, I believe the key insight is...",
        "Your question touches on something fundamental. In my experience..."
      ];
      
      const aiResponse = {
        role: "assistant",
        content: responses[Math.floor(Math.random() * responses.length)] + " " + 
                "This is a simulated response for demonstration purposes. The AI would provide contextual, personality-appropriate answers based on the selected mentor."
      };
      
      setConversation(prev => [...prev, aiResponse]);
      setIsLoading(false);
      setQuestion("");
    }, 1500);
  };

  const resetConversation = () => {
    setConversation([]);
    setConversationStarted(false);
    setSelectedMentor("");
    setQuestion("");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Ask the Great Minds</h1>
        <p className="text-lg text-muted-foreground">
          Engage in philosophical and intellectual discussions with history's greatest thinkers
        </p>
      </div>

      {!conversationStarted ? (
        <div className="space-y-6">
          {/* Mentor Selection */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Choose Your Mentor
              </CardTitle>
              <CardDescription>
                Select a historical figure to discuss ideas with
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {mentors.map((mentor) => (
                  <Card 
                    key={mentor.id}
                    className={`cursor-pointer transition-smooth hover:shadow-hover ${
                      selectedMentor === mentor.id ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setSelectedMentor(mentor.id)}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="text-4xl mb-2">{mentor.avatar}</div>
                      <h3 className="font-semibold mb-1">{mentor.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{mentor.description}</p>
                      <Badge variant="secondary" className="text-xs">
                        {mentor.specialty}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Question Input */}
          {selectedMentor && (
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Ask Your Question</CardTitle>
                <CardDescription>
                  What would you like to discuss with {selectedMentorData?.name}?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Enter your philosophical or technical question here..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="min-h-[120px]"
                />
                <Button 
                  onClick={handleStartConversation}
                  disabled={!question.trim() || isLoading}
                  className="w-full"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Starting Conversation...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Start Discussion
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          {/* Conversation Header */}
          <Card className="shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{selectedMentorData?.avatar}</span>
                  <div>
                    <h3 className="font-semibold">Discussing with {selectedMentorData?.name}</h3>
                    <p className="text-sm text-muted-foreground">{selectedMentorData?.specialty}</p>
                  </div>
                </div>
                <Button variant="outline" onClick={resetConversation}>
                  New Conversation
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Conversation */}
          <Card className="shadow-card">
            <CardContent className="p-0">
              <div className="max-h-96 overflow-y-auto p-4 space-y-4">
                {conversation.map((message, index) => (
                  <div key={index} className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex gap-3 max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'
                      }`}>
                        {message.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                      </div>
                      <div className={`rounded-lg p-3 ${
                        message.role === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-accent text-accent-foreground'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex gap-3 justify-start">
                    <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="bg-accent text-accent-foreground rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span className="text-sm">{selectedMentorData?.name} is thinking...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <Separator />
              
              <div className="p-4">
                <div className="flex gap-2">
                  <Textarea
                    placeholder="Continue the conversation..."
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="flex-1"
                    rows={2}
                  />
                  <Button 
                    onClick={handleContinueConversation}
                    disabled={!question.trim() || isLoading}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}