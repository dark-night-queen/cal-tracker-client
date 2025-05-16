import React from 'react';
import { Bell, Moon } from 'lucide-react-native';

import { Text } from '@/components/ui/text';
import { GhostButton } from '../GhostButton';

import { useColorScheme } from 'nativewind';

export const Settings = () => {
  const { toggleColorScheme, colorScheme } = useColorScheme();

  return (
    <>
      <Text className={styles.header}>Settings</Text>

      <GhostButton icon={Moon} name={`${colorScheme} Mode`} onPress={toggleColorScheme} />
      <GhostButton icon={Bell} name="Notification" />
    </>
  );
};

const styles = {
  header: 'px-4 text-sm font-medium text-gray-400',
};
