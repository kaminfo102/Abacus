import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TestTimer } from './TestTimer';
import { TestProgress } from './TestProgress';
import { TestQuestion } from './TestQuestion';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription } from '@/components/ui/alert-dialog';
import { Trophy } from 'lucide-react';

interface TestInterfaceProps {
  test: {
    id: number;
    name: string;
    questions: Array<{
      items: number[];
      operators: string[];
      result: number;
    }>;
    timeLimit?: number; // in seconds
  };
}

export function TestInterface({ test }: TestInterfaceProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [timeUp, setTimeUp] = useState(false);

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestion < test.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    Object.entries(answers).forEach(([index, answer]) => {
      if (Number(answer) === test.questions[Number(index)].result) {
        correct++;
      }
    });
    return (correct / test.questions.length) * 100;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{test.name}</h1>
        {test.timeLimit && (
          <TestTimer
            duration={test.timeLimit}
            onTimeUp={() => setTimeUp(true)}
          />
        )}
      </div>

      <TestProgress
        current={currentQuestion + 1}
        total={test.questions.length}
      />

      <Card className="p-6">
        <TestQuestion
          questionNumber={currentQuestion + 1}
          {...test.questions[currentQuestion]}
          onAnswerChange={handleAnswer}
          value={answers[currentQuestion] || ''}
        />

        <div className="mt-4 flex justify-end">
          <Button
            onClick={handleNext}
            disabled={!answers[currentQuestion]}
          >
            {currentQuestion === test.questions.length - 1 ? 'پایان آزمون' : 'سوال بعدی'}
          </Button>
        </div>
      </Card>

      <AlertDialog open={showResults || timeUp}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              {timeUp ? 'زمان به پایان رسید' : 'نتیجه آزمون'}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-lg">
              نمره شما: {calculateScore().toFixed(1)}%
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}