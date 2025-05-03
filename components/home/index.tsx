import { Box } from '../ui/box';
import { DailyReport } from './DailyReport';
import { MacroCard } from './MacroCard';
import { MetricsCard } from './MetricsCard';
import { RecentlyLogged } from './RecentlyLogged';
import { ScannerButton } from './ScannerButton';
import { WeeklyCalendar } from './WeeklyCalendar';

export const HomeComponent = () => {
  return (
    <Box className="h-full gap-5 px-5 dark:bg-gray-900">
      <WeeklyCalendar />
      <MacroCard />
      <MetricsCard />
      <ScannerButton />
      <RecentlyLogged />
      <DailyReport />
    </Box>
  );
};
