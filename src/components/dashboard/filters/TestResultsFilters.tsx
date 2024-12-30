import React from 'react';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, SlidersHorizontal } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { TEST_TYPES, TEST_LEVELS } from '@/lib/constants';

interface FiltersProps {
  filters: {
    search: string;
    type: string;
    level: string;
    dateRange: string;
  };
  onFilterChange: (key: string, value: string) => void;
  onReset: () => void;
}

export function TestResultsFilters({ filters, onFilterChange, onReset }: FiltersProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <div className="relative flex-1">
        <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="جستجو در نتایج..."
          value={filters.search}
          onChange={(e) => onFilterChange('search', e.target.value)}
          className="pr-9"
        />
      </div>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            فیلترها
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">نوع آزمون</label>
              <Select
                value={filters.type}
                onValueChange={(value) => onFilterChange('type', value)}
              >
                <option value="">همه</option>
                {TEST_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">سطح</label>
              <Select
                value={filters.level}
                onValueChange={(value) => onFilterChange('level', value)}
              >
                <option value="">همه</option>
                {TEST_LEVELS.map((level) => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </Select>
            </div>

            <Button onClick={onReset} variant="outline" className="w-full">
              پاک کردن فیلترها
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}