import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { TestQuestion } from './TestQuestion';
import { submitTestResult } from '@/lib/api';

interface TakeTestProps {
  test: {
    id: number;
    questions: {
      items: number[];
      operators: string[];
      result: number;
    }[];
  };
}

export function TakeTest({ test }: TakeTestProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [results, setResults] = useState<Record<number, boolean>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (questionIndex: number, answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: answer,
    }));
  };

  const handleSubmit = async () => {
    const newResults: Record<number, boolean> = {};
    let score = 0;

    test.questions.forEach((question, index) => {
      const isCorrect = Number(answers[index]) === question.result;
      newResults[index] = isCorrect;
      if (isCorrect) score++;
    });

    setResults(newResults);
    setShowResults(true);

    await submitTestResult({
      test_id: test.id,
      answers,
      score,
      completed_at: new Date().toISOString(),
    });
  };

  return (
    <div className="space-y-6">
      {test.questions.map((question, index) => (
        <TestQuestion
          key={index}
          questionNumber={index + 1}
          items={question.items}
          operators={question.operators}
          onAnswerChange={(answer) => handleAnswerChange(index, answer)}
          isCorrect={showResults ? results[index] : undefined}
        />
      ))}
      
      <div className="flex justify-center">
        <Button
          onClick={handleSubmit}
          disabled={Object.keys(answers).length !== test.questions.length}
          className="w-full max-w-md"
        >
          ثبت پاسخ‌ها
        </Button>
      </div>

      {showResults && (
        <div className="text-center text-lg font-bold">
          نتیجه: {Object.values(results).filter(Boolean).length} از {test.questions.length}
        </div>
      )}
    </div>
  );
}