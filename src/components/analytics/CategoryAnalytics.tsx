import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';

interface CategoryStats {
  category: string;
  accuracy: number;
  speed: number;
  consistency: number;
  improvement: number;
}

interface CategoryAnalyticsProps {
  stats: CategoryStats[];
}

export function CategoryAnalytics({ stats }: CategoryAnalyticsProps) {
  const chartData = stats.map(stat => ({
    category: stat.category,
    دقت: stat.accuracy,
    سرعت: stat.speed,
    ثبات: stat.consistency,
    پیشرفت: stat.improvement,
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>تحلیل دسته‌بندی‌ها</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={chartData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="category" />
              <Radar
                name="دقت"
                dataKey="دقت"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.2}
              />
              <Radar
                name="سرعت"
                dataKey="سرعت"
                stroke="hsl(var(--destructive))"
                fill="hsl(var(--destructive))"
                fillOpacity={0.2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}