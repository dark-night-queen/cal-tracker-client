import { LogOut } from 'lucide-react-native';
import { VStack, Button, ButtonIcon, ButtonText } from '@/components/ui';

import { Menu } from './MenuSection';
import { Stats } from './StatsSection';
import { User } from './UserSection';

export const ProfileComponent = () => {
  return (
    <VStack className="gap-8 p-5 dark:bg-gray-900">
      <User />
      <Stats />
      <Menu />

      <VStack className="gap-4">
        <Button variant="outline" action="warning">
          <ButtonText>Reset Onboarding</ButtonText>
        </Button>

        <Button variant="ghost">
          <ButtonIcon as={LogOut} />
          <ButtonText>Sign Out</ButtonText>
        </Button>
      </VStack>
    </VStack>
  );
};
