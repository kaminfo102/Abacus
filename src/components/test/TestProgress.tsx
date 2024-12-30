import React from 'react';
import { Progress } from '@/components/ui/progress';

interface TestProgressProps {
  current: number;
  total: number;
}

export function TestProgress({ current, total }: TestProgressProps) {
  const progress = (current / total) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>پیشرفت آزمون</span>
        <span>{current} از {total}</span>
      </div>
      <Progress value={progress} />
    </div>
  );
}