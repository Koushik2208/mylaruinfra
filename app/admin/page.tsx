import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Users, Settings, BarChart2 } from "lucide-react";
import React from "react";

const page = () => {
  const stats = [
    {
      title: "Total Posts",
      value: "12",
      icon: FileText,
      description: "Blog posts published",
    },
    {
      title: "Active Users",
      value: "1.2K",
      icon: Users,
      description: "Monthly active users",
    },
    {
      title: "Settings",
      icon: Settings,
      description: "Manage site settings",
    },
    {
      title: "Analytics",
      icon: BarChart2,
      description: "View site analytics",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <Button variant="default" className="group">
          Create New Post
          <FileText className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="group overflow-hidden hover:shadow-lg transition-all duration-300 bg-background"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              {stat.value && (
                <div className="text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
              )}
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 bg-background">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">
              Recent Posts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              No recent posts available.
            </p>
          </CardContent>
        </Card>

        <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 bg-background">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start text-foreground hover:text-white">
              <FileText className="mr-2 h-4 w-4" />
              Create New Post
            </Button>
            <Button variant="outline" className="w-full justify-start text-foreground hover:text-white">
              <Settings className="mr-2 h-4 w-4" />
              Site Settings
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
