import { View } from 'react-native';
import { Box } from '@/components/ui/box';
import { MacroCard, MetricsCard, WeeklyCalendar, ScannerButton } from '@/components/home';

export default function Home() {
  return (
    <View>
      <Box className="h-full gap-5 px-5 dark:bg-gray-900">
        <WeeklyCalendar />
        <MacroCard />
        <MetricsCard />
        <ScannerButton />
        {/*
      <RecentlyLogged /> */}
      </Box>
    </View>
  );
}
