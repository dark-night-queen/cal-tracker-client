import { Box } from '@/components/ui/box';
import { Menu } from './MenuSection';
import { Stats } from './StatsSection';

export const ProfileComponent = () => {
  return (
    <Box className="gap-8 p-5 dark:bg-gray-900">
      <Stats />
      <Menu />
    </Box>
  );
};
