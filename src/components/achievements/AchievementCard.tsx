import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Medal } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AchievementCardProps {
  name: string;
  description: string;
  icon: string;
  isUnlocked: boolean;
  progress?: number;
}

export function AchievementCard({
  name,
  description,
  icon,
  isUnlocked,
  progress,
}: AchievementCardProps) {
  return (
    <Card className={cn(
      "transition-all",
      isUnlocked ? "bg-primary/5" : "opacity-50"
    )}>
      <CardHeader className="flex flex-row items-center gap-4">
        <div className={cn(
          "p-2 rounded-full",
          isUnlocked ? "bg-primary text-primary-foreground" : "bg-muted"
        )}>
          <Medal className="h-6 w-6" />
        </div>
        <div>
          <CardTitle className="text-lg">{name}</CardTitle>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardHeader>
      {progress !== undefined && (
        <CardContent>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2 text-center">
            {progress}% تکمیل شده
          </p>
        </CardContent>
      )}
    </Card>
  );
}