import { LogOut } from 'lucide-react-native';
import { Box } from '@/components/ui/box';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';

import { Menu } from './MenuSection';
import { Stats } from './StatsSection';
import { User } from './UserSection';

export const ProfileComponent = () => {
  return (
    <Box className="gap-8 p-5 dark:bg-gray-900">
      <User />
      <Stats />
      <Menu />

      <Box className="gap-4">
        <Button variant="outline" action="warning">
          <ButtonText>Reset Onboarding</ButtonText>
        </Button>

        <Button variant="ghost">
          <ButtonIcon as={LogOut} />
          <ButtonText>Sign Out</ButtonText>
        </Button>
      </Box>
    </Box>
  );
};
