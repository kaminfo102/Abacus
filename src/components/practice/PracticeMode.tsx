import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { TEST_CATEGORIES, DIFFICULTY_LEVELS } from '@/lib/constants';
import { TestInterface } from '../test/TestInterface';

export function PracticeMode() {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [isPracticing, setIsPracticing] = useState(false);

  const handleStart = () => {
    setIsPracticing(true);
  };

  if (isPracticing) {
    return (
      <TestInterface
        test={{
          id: 0,
          name: 'تمرین',
          questions: [], // Generate questions based on category and difficulty
          timeLimit: undefined,
        }}
        isPractice
      />
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>حالت تمرین</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">دسته‌بندی</label>
          <Select
            value={category}
            onValueChange={setCategory}
          >
            {TEST_CATEGORIES.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">سطح دشواری</label>
          <Select
            value={difficulty}
            onValueChange={setDifficulty}
          >
            {DIFFICULTY_LEVELS.map((level) => (
              <option key={level.value} value={level.value}>
                {level.label}
              </option>
            ))}
          </Select>
        </div>

        <Button
          onClick={handleStart}
          disabled={!category || !difficulty}
          className="w-full"
        >
          شروع تمرین
        </Button>
      </CardContent>
    </Card>
  );
}