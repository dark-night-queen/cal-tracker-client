import React from 'react';
import { Bell, Moon } from 'lucide-react-native';

import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { GhostButton } from '../GhostButton';

import { useColorScheme } from 'nativewind';

export const Settings = () => {
  const { toggleColorScheme, colorScheme } = useColorScheme();

  return (
    <Box className="gap-4">
      <Text className={styles.header}>Settings</Text>

      <GhostButton icon={Moon} name={`${colorScheme} Mode`} onClick={toggleColorScheme} />
      <GhostButton icon={Bell} name="Notification" />
    </Box>
  );
};

const styles = {
  header: 'px-4 text-sm font-medium text-gray-400',
};
