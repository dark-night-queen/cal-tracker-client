import React from 'react';
import { Link } from 'expo-router';
import { Activity, BarChart2, Heart, User } from 'lucide-react-native';

import { Box } from '@/components/ui/box';

import { GhostButton } from '../GhostButton';
import { Settings } from '../SettingsSection';
import { ActivityModal } from './ActivityModal';

export const Menu = () => {
  const [showModal, setShowModal] = React.useState(false);

  const onPressActivity = () => setShowModal(true);
  const closeActivityModal = () => setShowModal(false);

  return (
    <Box className="gap-4">
      <Link href="/analytics" asChild>
        <GhostButton icon={BarChart2} name="Analytics" showArrow={true} />
      </Link>

      <Link href="/modal/heart-data" asChild>
        <GhostButton icon={Heart} name="Health Data" showArrow={true} />
      </Link>

      <GhostButton
        icon={Activity}
        name="Activity Level"
        showArrow={true}
        value="moderate"
        onPress={onPressActivity}
      />
      <GhostButton icon={User} name="Edit Profile Info" showArrow={true} />

      <Settings />

      {/* Modals */}
      <ActivityModal showModal={showModal} closeModal={closeActivityModal} />
    </Box>
  );
};
