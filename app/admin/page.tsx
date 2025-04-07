import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Users, Settings, BarChart2, Plus } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";

const page = () => {
  const stats = [
    {
      title: "Total Posts",
      value: "12",
      icon: FileText,
      description: "Blog posts published",
      trend: "+2 this month",
    },
    {
      title: "Active Users",
      value: "1.2K",
      icon: Users,
      description: "Monthly active users",
      trend: "+15% from last month",
    },
    {
      title: "Settings",
      icon: Settings,
      description: "Manage site settings",
      trend: "Last updated 2 days ago",
    },
    {
      title: "Analytics",
      icon: BarChart2,
      description: "View site analytics",
      trend: "Traffic up 25%",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening today.</p>
        </div>
        <Button variant="default" className="group self-start sm:self-auto bg-primary hover:bg-primary/90 text-primary-foreground">
          <Plus className="w-4 h-4 mr-2" />
          Create New Post
          <FileText className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
              <Badge variant="secondary" className="mt-2">
                {stat.trend}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 bg-background">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">
              Recent Posts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted/50" />
                  <div>
                    <p className="font-medium">New Project Announcement</p>
                    <p className="text-sm text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <Badge variant="outline">Draft</Badge>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted/50" />
                  <div>
                    <p className="font-medium">Construction Update</p>
                    <p className="text-sm text-muted-foreground">1 day ago</p>
                  </div>
                </div>
                <Badge variant="default">Published</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 bg-background">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start text-foreground hover:bg-primary hover:text-primary-foreground">
              <FileText className="mr-2 h-4 w-4" />
              Create New Post
            </Button>
            <Button variant="outline" className="w-full justify-start text-foreground hover:bg-primary hover:text-primary-foreground">
              <Settings className="mr-2 h-4 w-4" />
              Site Settings
            </Button>
            <Button variant="outline" className="w-full justify-start text-foreground hover:bg-primary hover:text-primary-foreground">
              <BarChart2 className="mr-2 h-4 w-4" />
              View Analytics
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
