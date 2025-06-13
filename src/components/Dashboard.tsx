
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, User } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user, logout, token } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Welcome, {user?.name}!
          </CardTitle>
          <CardDescription>You are successfully logged in</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium">Email:</p>
            <p className="text-sm text-muted-foreground">{user?.email}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">User ID:</p>
            <p className="text-sm text-muted-foreground">{user?.id}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">JWT Token (first 50 chars):</p>
            <p className="text-xs text-muted-foreground font-mono bg-muted p-2 rounded">
              {token?.substring(0, 50)}...
            </p>
          </div>
          <Button onClick={logout} variant="outline" className="w-full">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
