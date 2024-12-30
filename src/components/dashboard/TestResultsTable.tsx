import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatDate } from '@/lib/utils';

interface TestResult {
  id: number;
  test_name: string;
  score: number;
  total_questions: number;
  completed_at: string;
  type: string;
  level: string;
}

interface TestResultsTableProps {
  results: TestResult[];
}

export function TestResultsTable({ results }: TestResultsTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>نام آزمون</TableHead>
            <TableHead>نوع</TableHead>
            <TableHead>سطح</TableHead>
            <TableHead>نمره</TableHead>
            <TableHead>تاریخ</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((result) => (
            <TableRow key={result.id}>
              <TableCell className="font-medium">{result.test_name}</TableCell>
              <TableCell>{result.type}</TableCell>
              <TableCell>{result.level}</TableCell>
              <TableCell>
                {result.score} از {result.total_questions}
              </TableCell>
              <TableCell dir="ltr" className="text-left">
                {formatDate(result.completed_at)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}