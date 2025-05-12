import { Box } from '../ui/box';
import { DailyReport } from './DailyReport';
import { MacroCard } from './MacroCard';
import { MetricsCard } from './MetricsCard';
import { RecentlyLoggedItem } from './RecentlyLoggedItem';
import { PersonalizedRecommendation } from './Recommendation';
import { ScannerButton } from './ScannerButton';
import { WeeklyCalendar } from './WeeklyCalendar';

export const HomeComponent = () => {
  return (
    <Box className="h-full gap-8 px-5 pb-8 dark:bg-gray-900">
      <Box className="gap-4">
        <WeeklyCalendar />
        <MacroCard />
        <MetricsCard />
        <ScannerButton />
      </Box>
      <RecentlyLoggedItem />
      <DailyReport />
      <PersonalizedRecommendation />
    </Box>
  );
};
