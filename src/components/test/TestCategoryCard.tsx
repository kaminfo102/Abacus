import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestCategoryCardProps {
  title: string;
  icon: keyof typeof Icons;
  difficulty: string;
  completedTests: number;
  bestScore: number;
  onClick: () => void;
}

export function TestCategoryCard({
  title,
  icon,
  difficulty,
  completedTests,
  bestScore,
  onClick,
}: TestCategoryCardProps) {
  const Icon = Icons[icon];

  return (
    <Card 
      className="cursor-pointer transition-all hover:shadow-lg"
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Icon className="h-5 w-5 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Badge>{difficulty}</Badge>
          <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            <div>تعداد آزمون: {completedTests}</div>
            <div>بهترین نمره: {bestScore}%</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}