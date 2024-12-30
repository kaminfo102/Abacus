import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface TestQuestionProps {
  questionNumber: number;
  items: number[];
  operators: string[];
  onAnswerChange: (answer: string) => void;
  isCorrect?: boolean;
}

export function TestQuestion({
  questionNumber,
  items,
  operators,
  onAnswerChange,
  isCorrect,
}: TestQuestionProps) {
  const expression = items.reduce((acc, item, index) => {
    if (index === 0) return item.toString();
    return `${acc} ${operators[index - 1]} ${item}`;
  }, '');

  return (
    <Card className={isCorrect !== undefined ? (isCorrect ? 'border-green-500' : 'border-red-500') : ''}>
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          <Label className="text-lg font-bold">سوال {questionNumber}:</Label>
          <div className="text-lg font-mono" dir="ltr">
            {expression}
          </div>
          <div className="flex-1">
            <Input
              type="number"
              placeholder="پاسخ خود را وارد کنید"
              onChange={(e) => onAnswerChange(e.target.value)}
              className="text-left"
              dir="ltr"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}