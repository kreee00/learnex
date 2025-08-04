import { Trophy, Star, Flame, Target, BookOpen, MessageSquare, Users, Brain } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const userStats = {
  currentXP: 4800,
  targetXP: 10000,
  level: 12,
  streak: 7,
  coursesCompleted: 3,
  totalCourses: 8,
  studyTime: 45, // hours this month
  aiDebates: 12,
  coStudySessions: 6
};

const badges = [
  {
    name: "Early Bird",
    description: "Study for 7 days straight",
    icon: "🌅",
    earned: true,
    earnedDate: "2 days ago"
  },
  {
    name: "Philosopher",
    description: "Complete Introduction to Philosophy",
    icon: "🧠",
    earned: true,
    earnedDate: "1 week ago"
  },
  {
    name: "Debate Master",
    description: "Complete 10 AI debates",
    icon: "💭",
    earned: true,
    earnedDate: "3 days ago"
  },
  {
    name: "Team Player",
    description: "Complete 5 co-study sessions",
    icon: "🤝",
    earned: true,
    earnedDate: "5 days ago"
  },
  {
    name: "Knowledge Seeker",
    description: "Reach 5000 XP",
    icon: "📚",
    earned: false,
    progress: 96
  },
  {
    name: "Marathon Learner",
    description: "Study for 30 days straight",
    icon: "🏃",
    earned: false,
    progress: 23
  }
];

const leaderboard = [
  { rank: 1, name: "Alice Johnson", xp: 6800, avatar: "AJ", streak: 15 },
  { rank: 2, name: "Bob Chen", xp: 6200, avatar: "BC", streak: 12 },
  { rank: 3, name: "You", xp: 4800, avatar: "YO", streak: 7, isCurrentUser: true },
  { rank: 4, name: "Diana Ross", xp: 4600, avatar: "DR", streak: 9 },
  { rank: 5, name: "Erik Smith", xp: 4200, avatar: "ES", streak: 5 }
];

const xpActivities = [
  { activity: "Complete a lesson", xp: 50, icon: BookOpen },
  { activity: "Finish a course", xp: 500, icon: Trophy },
  { activity: "Answer quiz correctly", xp: 20, icon: Target },
  { activity: "AI debate session", xp: 100, icon: MessageSquare },
  { activity: "Co-study session", xp: 75, icon: Users },
  { activity: "Daily login streak", xp: 25, icon: Flame }
];

const recentActivity = [
  { action: "Completed module: Logic and Critical Thinking", xp: 50, time: "2 hours ago" },
  { action: "AI Debate with Aristotle", xp: 100, time: "1 day ago" },
  { action: "Co-study session completed", xp: 75, time: "2 days ago" },
  { action: "Quiz: Ancient Greek Philosophy (8/10)", xp: 20, time: "3 days ago" }
];

export default function DashboardPage() {
  const progressPercentage = (userStats.currentXP / userStats.targetXP) * 100;
  const courseProgress = (userStats.coursesCompleted / userStats.totalCourses) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Your Learning Journey</h1>
        <p className="text-lg text-muted-foreground">
          Track your progress, earn achievements, and compete with fellow learners
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Stats */}
        <div className="lg:col-span-2 space-y-6">
          {/* XP Progress */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                Experience Points
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-3xl font-bold">{userStats.currentXP.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Level {userStats.level}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-muted-foreground">
                    {userStats.targetXP.toLocaleString()} XP
                  </p>
                  <p className="text-sm text-muted-foreground">Next Level</p>
                </div>
              </div>
              <Progress value={progressPercentage} className="h-3" />
              <p className="text-sm text-muted-foreground">
                {Math.round((userStats.targetXP - userStats.currentXP) / 100)} more activities to level up!
              </p>
            </CardContent>
          </Card>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Flame className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{userStats.streak}</p>
                    <p className="text-sm text-muted-foreground">Day Streak</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{userStats.coursesCompleted}/{userStats.totalCourses}</p>
                    <p className="text-sm text-muted-foreground">Courses Completed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Brain className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{userStats.aiDebates}</p>
                    <p className="text-sm text-muted-foreground">AI Debates</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{userStats.coStudySessions}</p>
                    <p className="text-sm text-muted-foreground">Co-Study Sessions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Badges */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                Achievements
              </CardTitle>
              <CardDescription>
                Your earned badges and upcoming milestones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {badges.map((badge, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg border-2 text-center transition-smooth ${
                      badge.earned 
                        ? 'border-yellow-200 bg-yellow-50' 
                        : 'border-gray-200 bg-gray-50 opacity-60'
                    }`}
                  >
                    <div className="text-2xl mb-2">{badge.icon}</div>
                    <h3 className="font-semibold text-sm mb-1">{badge.name}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{badge.description}</p>
                    {badge.earned ? (
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 text-xs">
                        Earned {badge.earnedDate}
                      </Badge>
                    ) : (
                      <div className="space-y-1">
                        <Progress value={badge.progress || 0} className="h-1" />
                        <p className="text-xs text-muted-foreground">{badge.progress || 0}% complete</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-accent">
                    <div>
                      <p className="font-medium text-sm">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      +{activity.xp} XP
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Leaderboard */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                Leaderboard
              </CardTitle>
              <CardDescription>
                See how you rank among your peers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {leaderboard.map((user) => (
                  <div 
                    key={user.rank}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      user.isCurrentUser ? 'bg-primary/10 border border-primary/20' : 'bg-accent'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      user.rank === 1 ? 'bg-yellow-100 text-yellow-800' :
                      user.rank === 2 ? 'bg-gray-100 text-gray-800' :
                      user.rank === 3 ? 'bg-amber-100 text-amber-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {user.rank}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{user.name}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{user.xp.toLocaleString()} XP</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Flame className="h-3 w-3" />
                          {user.streak}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* How to Earn XP */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>How to Earn More XP</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {xpActivities.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.activity}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      +{item.xp} XP
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}