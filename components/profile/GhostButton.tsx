import React from 'react';
import { Box } from '@/components/ui/box';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react-native';
import { Text } from '@/components/ui/text';

type IGhostButtonProps = {
  icon: any;
  name: string;
  showArrow?: boolean;
  value?: string;
  onPress?: any;
};

export const GhostButton = ({ icon, name, showArrow, value, onPress }: IGhostButtonProps) => {
  return (
    <Button variant="ghost" className={styles.button} onPress={onPress}>
      <Box className={styles.buttonIconContainer}>
        <ButtonIcon as={icon} className={styles.buttonIcon} />
      </Box>
      <ButtonText className={styles.buttonText}>{name}</ButtonText>

      <Box className={styles.menuContainer}>
        {value && <Text className={styles.menuText}>{value}</Text>}
        {showArrow && <ButtonIcon as={ChevronRight} className={styles.arrowIcon} />}
      </Box>
    </Button>
  );
};

const styles = {
  button: 'items-center justify-start gap-4',
  buttonIconContainer:
    'h-8 w-8 items-center justify-center rounded-lg bg-background-0 dark:bg-gray-800',
  buttonIcon: 'text-indigo-400',
  buttonText: 'flex-1 text-sm font-medium capitalize',

  arrowIcon: 'text-gray-600',
  menuContainer: 'flex-row items-center gap-2',
  menuText: 'text-sm text-gray-400',
};
