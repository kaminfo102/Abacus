import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface TestResultsChartProps {
  data: {
    date: string;
    score: number;
    total: number;
  }[];
}

export function TestResultsChart({ data }: TestResultsChartProps) {
  const chartData = data.map(item => ({
    ...item,
    percentage: (item.score / item.total) * 100
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>نمودار پیشرفت</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="percentage"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                name="درصد"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}