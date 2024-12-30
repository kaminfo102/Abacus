export const TEST_TYPES = [
  { value: 'Abacuse', label: 'چرتکه' },
  { value: 'Mental', label: 'ذهنی' },
] as const;

export const TEST_LEVELS = [
  { value: 'Starter', label: 'مقدماتی' },
  { value: 'Basic', label: 'پایه' },
  { value: 'Elementary1', label: 'مقدماتی ۱' },
] as const;

export const TEST_CATEGORIES = [
  { value: 'addition', label: 'جمع', icon: 'Plus' },
  { value: 'subtraction', label: 'تفریق', icon: 'Minus' },
  { value: 'multiplication', label: 'ضرب', icon: 'X' },
  { value: 'division', label: 'تقسیم', icon: 'Divide' },
  { value: 'mixed', label: 'ترکیبی', icon: 'Calculator' },
] as const;

export const DIFFICULTY_LEVELS = [
  { value: 'beginner', label: 'مبتدی', color: 'green' },
  { value: 'intermediate', label: 'متوسط', color: 'yellow' },
  { value: 'advanced', label: 'پیشرفته', color: 'orange' },
  { value: 'expert', label: 'حرفه‌ای', color: 'red' },
] as const;