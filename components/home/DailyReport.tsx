import moment from 'moment';
import { Box } from '../ui/box';
import { Divider } from '../ui/divider';
import { Text } from '../ui/text';
import { Card } from '../ui/card';
import { Icon } from '../ui/icon';
import { Clock, Utensils, TrendingUp } from 'lucide-react-native';
import { Progress, ProgressFilledTrack } from '../ui/progress';

export const DailyReport = () => {
  const timestamp = moment().format('MMM DD, YYYY');
  const caloriesConsumed = 400;
  const targetCalories = 1458;

  const percentageConsumed = (caloriesConsumed / targetCalories) * 100;

  const statusBg = {
    high: 'bg-rose-400/10',
    warning: 'bg-amber-400/10',
    good: 'bg-emerald-400/10',
  };

  const progressBg = {
    high: 'bg-rose-500',
    warning: 'bg-amber-500',
    good: 'bg-emerald-500',
  };

  const getCalorieStatus = () => {
    if (percentageConsumed > 105) return 'high';
    if (percentageConsumed > 95) return 'warning';
    return 'good';
  };
  const status = getCalorieStatus();

  return (
    <Box className="gap-4">
      <Box className="flex-row items-center gap-4 mb-2">
        <Divider className="flex-1 text-gray-400" />
        <Text className="text-sm text-gray-400">Daily Report</Text>
        <Divider className="flex-1 text-gray-400" />
      </Box>

      <Box>
        <Text className="text-xl font-semibold">Daily Summary</Text>
        <Text className="text-sm text-gray-400">{timestamp}</Text>
      </Box>

      <Card variant="outline" className="gap-2 border border-indigo-900/50 bg-indigo-950/50">
        <Box className="flex-row gap-3">
          <Icon as={Clock} className="text-indigo-400" />
          <Text className="text-sm text-indigo-400">Daily Summary Cutoff: 12:00 AM</Text>
        </Box>
        <Text className="text-sm text-indigo-300/80">
          Complete your meals before midnight for accurate tracking. Food logged after cutoff will
          count towards tomorrow.
        </Text>
      </Card>

      <Card variant="outline" className={statusBg[status] + ` gap-4 border-0`}>
        <Box className="flex-row items-center gap-3">
          <Icon as={TrendingUp} className="text-emerald-400" />
          <Text className="flex-1 text-gray-400">Calories Today</Text>

          <Box className="flex-row items-baseline gap-1">
            <Text className="text-2xl font-bold tabular-nums">{caloriesConsumed}</Text>
            <Text className="text-xs tabular-nums text-gray-400">/ {targetCalories}</Text>
          </Box>
        </Box>

        <Progress value={40}>
          <ProgressFilledTrack className={progressBg[status]} />
        </Progress>
      </Card>

      <Card className="gap-4">
        <Box className="flex-row">
          <Text className="flex-1">Macro Distribution</Text>
          <Icon as={Utensils} className="text-gray-400" />
        </Box>

        <Box className="flex-row justify-around">
          <Box className="items-center">
            <Text className="text-base font-bold tabular-nums text-rose-400">15.00%</Text>
            <Text className="text-xs text-gray-400">Protein</Text>
          </Box>
          <Box className="items-center">
            <Text className="text-base font-bold tabular-nums text-amber-400">15.00%</Text>
            <Text className="text-xs text-gray-400">Carbs</Text>
          </Box>
          <Box className="items-center">
            <Text className="text-base font-bold tabular-nums text-blue-400">15.00%</Text>
            <Text className="text-xs text-gray-400">Fat</Text>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
