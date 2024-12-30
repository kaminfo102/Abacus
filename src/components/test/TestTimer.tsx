import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Timer } from 'lucide-react';

interface TestTimerProps {
  onTimeUp?: () => void;
  duration: number; // in seconds
}

export function TestTimer({ duration, onTimeUp }: TestTimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp?.();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <Card>
      <CardContent className="flex items-center justify-center p-4">
        <Timer className="mr-2 h-4 w-4" />
        <span className="text-xl font-bold" dir="ltr">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>
      </CardContent>
    </Card>
  );
}