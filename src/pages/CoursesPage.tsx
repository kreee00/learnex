import { Link } from "react-router-dom";
import { BookOpen, Clock, Users, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const courses = [
  {
    id: 1,
    title: "Introduction to Philosophy",
    description: "Explore fundamental questions about existence, knowledge, values, and reason",
    progress: 45,
    duration: "6 weeks",
    students: 1420,
    rating: 4.8,
    level: "Beginner",
    category: "Philosophy"
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    description: "Master the fundamental building blocks of computer science",
    progress: 23,
    duration: "8 weeks",
    students: 2341,
    rating: 4.9,
    level: "Intermediate",
    category: "Computer Science"
  },
  {
    id: 3,
    title: "Conflict Resolution",
    description: "Learn effective strategies for resolving disputes and managing conflicts",
    progress: 78,
    duration: "4 weeks",
    students: 856,
    rating: 4.7,
    level: "Beginner",
    category: "Communication"
  },
  {
    id: 4,
    title: "Machine Learning Fundamentals",
    description: "Dive into the world of AI and machine learning algorithms",
    progress: 12,
    duration: "10 weeks",
    students: 3124,
    rating: 4.9,
    level: "Advanced",
    category: "AI & ML"
  },
  {
    id: 5,
    title: "Creative Writing Workshop",
    description: "Develop your storytelling skills and creative expression",
    progress: 67,
    duration: "5 weeks",
    students: 743,
    rating: 4.6,
    level: "Beginner",
    category: "Arts"
  },
  {
    id: 6,
    title: "Financial Literacy",
    description: "Build essential skills for personal finance and investment",
    progress: 89,
    duration: "3 weeks",
    students: 1987,
    rating: 4.8,
    level: "Beginner",
    category: "Finance"
  },
  {
    id: 7,
    title: "Quantum Physics Basics",
    description: "Understand the strange and fascinating world of quantum mechanics",
    progress: 34,
    duration: "7 weeks",
    students: 567,
    rating: 4.7,
    level: "Advanced",
    category: "Physics"
  },
  {
    id: 8,
    title: "Digital Marketing Strategy",
    description: "Master modern marketing techniques for the digital age",
    progress: 56,
    duration: "6 weeks",
    students: 2156,
    rating: 4.8,
    level: "Intermediate",
    category: "Marketing"
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner": return "bg-green-100 text-green-800";
    case "Intermediate": return "bg-yellow-100 text-yellow-800";
    case "Advanced": return "bg-red-100 text-red-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Explore Courses</h1>
        <p className="text-lg text-muted-foreground">
          Discover our comprehensive library of courses designed to accelerate your learning journey
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="shadow-card hover:shadow-hover transition-smooth">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge className={getLevelColor(course.level)} variant="secondary">
                  {course.level}
                </Badge>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-muted-foreground">{course.rating}</span>
                </div>
              </div>
              <CardTitle className="text-xl line-clamp-2">{course.title}</CardTitle>
              <CardDescription className="line-clamp-3">
                {course.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{course.progress}% complete</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {course.students.toLocaleString()} students
                </div>
              </div>
              
              <Button asChild className="w-full">
                <Link to={`/courses/${course.id}`}>
                  <BookOpen className="mr-2 h-4 w-4" />
                  Enter Course
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}