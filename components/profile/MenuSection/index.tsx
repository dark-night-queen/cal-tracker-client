import React from 'react';
import { Activity, BarChart2, Heart, User } from 'lucide-react-native';

import { Box } from '@/components/ui/box';
import { GhostButton } from '../GhostButton';
import { Settings } from '../SettingsSection';

export const Menu = () => {
  return (
    <Box className="gap-4">
      <GhostButton icon={BarChart2} name="Analytics" showArrow={true} />
      <GhostButton icon={Heart} name="Health Data" showArrow={true} />
      <GhostButton icon={Activity} name="Activity Level" showArrow={true} value="moderate" />
      <GhostButton icon={User} name="Edit Profile Info" showArrow={true} />

      <Settings />
    </Box>
  );
};
