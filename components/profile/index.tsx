import { Box } from '@/components/ui/box';
import { Menu } from './MenuSection';
import { Stats } from './StatsSection';

export const ProfileComponent = () => {
  return (
    <Box className="h-full gap-8 px-5 py-8 dark:bg-gray-900">
      <Stats />
      <Menu />
    </Box>
  );
};
