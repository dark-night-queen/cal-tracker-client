import { VStack } from '@/components/ui/vstack';
import { DailyReport } from './DailyReport';
import { MacroCard } from './MacroCard';
import { MetricsCard } from './MetricsCard';
import { RecentlyLoggedItem } from './RecentlyLoggedItem';
import { PersonalizedRecommendation } from './Recommendation';
import { ScannerButton } from './ScannerButton';
import { WeeklyCalendar } from './WeeklyCalendar';

export const HomeComponent = () => {
  return (
    <VStack className="gap-8 px-5 pb-8 dark:bg-gray-900">
      <VStack className="gap-4">
        <WeeklyCalendar />
        <MacroCard />
        <MetricsCard />
        <ScannerButton />
      </VStack>
      <RecentlyLoggedItem />
      <DailyReport />
      <PersonalizedRecommendation />
    </VStack>
  );
};
