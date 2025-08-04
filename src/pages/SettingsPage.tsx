import { useState } from "react";
import { Moon, Sun, Brain, MessageSquare, RotateCcw, Volume2, Bell } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [facialAI, setFacialAI] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);
  const [aiDebateTone, setAiDebateTone] = useState("friendly");
  const [volume, setVolume] = useState([75]);
  const [autoSave, setAutoSave] = useState(true);

  const handleResetProgress = () => {
    if (confirm("Are you sure you want to reset all your progress? This action cannot be undone.")) {
      // In a real app, this would reset user progress
      alert("Progress reset for demo purposes!");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Settings</h1>
        <p className="text-lg text-muted-foreground">
          Customize your LEARNEX experience to match your learning preferences
        </p>
      </div>

      <div className="space-y-6">
        {/* Appearance */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {darkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              Appearance
            </CardTitle>
            <CardDescription>
              Customize the visual appearance of your learning interface
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Dark Mode</h3>
                <p className="text-sm text-muted-foreground">
                  Switch between light and dark themes
                </p>
              </div>
              <Switch
                checked={darkMode}
                onCheckedChange={setDarkMode}
              />
            </div>
            <Badge variant="secondary" className="w-fit">
              Currently using {darkMode ? 'Dark' : 'Light'} theme for demo
            </Badge>
          </CardContent>
        </Card>

        {/* AI Preferences */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              AI Learning Features
            </CardTitle>
            <CardDescription>
              Configure how AI assists your learning experience
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Facial Expression AI</h3>
                <p className="text-sm text-muted-foreground">
                  Allow AI to detect your emotions and adapt content accordingly
                </p>
              </div>
              <Switch
                checked={facialAI}
                onCheckedChange={setFacialAI}
              />
            </div>

            <Separator />

            <div className="space-y-3">
              <div>
                <h3 className="font-medium mb-2">AI Debate Tone</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Choose how AI mentors interact with you during debates
                </p>
              </div>
              <Select value={aiDebateTone} onValueChange={setAiDebateTone}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="academic">Academic - Formal and scholarly</SelectItem>
                  <SelectItem value="friendly">Friendly - Warm and encouraging</SelectItem>
                  <SelectItem value="socratic">Socratic - Question-based learning</SelectItem>
                  <SelectItem value="challenging">Challenging - Push your thinking</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="p-4 bg-accent rounded-lg">
              <p className="text-sm">
                <strong>Current setting:</strong> AI mentors will use a{' '}
                <span className="capitalize font-medium">{aiDebateTone}</span> tone during conversations
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Notifications & Sound */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications & Audio
            </CardTitle>
            <CardDescription>
              Control how you receive updates and audio feedback
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Push Notifications</h3>
                <p className="text-sm text-muted-foreground">
                  Receive reminders and progress updates
                </p>
              </div>
              <Switch
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Sound Effects</h3>
                <p className="text-sm text-muted-foreground">
                  Play audio feedback for interactions and achievements
                </p>
              </div>
              <Switch
                checked={soundEffects}
                onCheckedChange={setSoundEffects}
              />
            </div>

            <Separator />

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Volume2 className="h-4 w-4" />
                <h3 className="font-medium">Master Volume</h3>
              </div>
              <div className="space-y-2">
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  max={100}
                  step={5}
                  className="w-full"
                  disabled={!soundEffects}
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>0%</span>
                  <span className="font-medium">{volume[0]}%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Study Preferences */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Study Preferences</CardTitle>
            <CardDescription>
              Customize your learning experience and data management
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Auto-save Progress</h3>
                <p className="text-sm text-muted-foreground">
                  Automatically save your progress as you learn
                </p>
              </div>
              <Switch
                checked={autoSave}
                onCheckedChange={setAutoSave}
              />
            </div>
          </CardContent>
        </Card>

        {/* Data Management */}
        <Card className="shadow-card border-destructive/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <RotateCcw className="h-5 w-5" />
              Data Management
            </CardTitle>
            <CardDescription>
              Reset your progress for testing and demo purposes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
              <h3 className="font-medium text-destructive mb-2">Reset All Progress</h3>
              <p className="text-sm text-muted-foreground mb-4">
                This will reset all your course progress, XP, badges, and statistics. 
                This action is useful for demo purposes but cannot be undone.
              </p>
              <Button 
                variant="destructive" 
                onClick={handleResetProgress}
                className="w-full sm:w-auto"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset All Progress
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="p-3 bg-accent rounded-lg">
                <h4 className="font-medium mb-1">What gets reset:</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• All course progress</li>
                  <li>• XP and level</li>
                  <li>• Earned badges</li>
                  <li>• Study streaks</li>
                </ul>
              </div>
              <div className="p-3 bg-accent rounded-lg">
                <h4 className="font-medium mb-1">What stays:</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Your settings</li>
                  <li>• AI preferences</li>
                  <li>• Account information</li>
                  <li>• Course enrollment</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-center pt-4">
          <Button size="lg" className="w-full sm:w-auto">
            Save All Settings
          </Button>
        </div>
      </div>
    </div>
  );
}