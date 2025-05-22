import { Box, Divider, VStack, Text } from '@/components/ui';
import { useCalendarStore } from '@/store/weekly-calendar';
import { MacroDistribution } from './macro-distribution';
import { CalorieConsumed } from './calorie-consumed';
import { DailyCutoffInfo } from './daily-cutoff-info';

export const DailyReport = () => {
  const { activeDate } = useCalendarStore();
  const timestamp = activeDate.format('MMM DD, YYYY');

  return (
    <VStack className="gap-4">
      <Box className="mb-2 items-center gap-4">
        <Divider className="flex-1 text-gray-400" />
        <Text className="text-sm text-gray-400">Daily Report</Text>
        <Divider className="flex-1 text-gray-400" />
      </Box>

      <Box className="items-baseline">
        <Text className="flex-1 text-xl font-semibold">Daily Summary</Text>
        <Text className="text-sm text-gray-400">{timestamp}</Text>
      </Box>

      <DailyCutoffInfo />
      <CalorieConsumed />
      <MacroDistribution />
    </VStack>
  );
};
