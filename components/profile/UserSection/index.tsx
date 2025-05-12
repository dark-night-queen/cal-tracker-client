import React from 'react';

import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Camera, Settings } from 'lucide-react-native';
import { Button, ButtonIcon } from '@/components/ui/button';
import { Avatar, AvatarFallbackText } from '@/components/ui/avatar';

export const User = () => {
  const name = 'Jane Doe';
  const email = 'john.doe@ipsum.com';

  return (
    <Box className="flex-row items-center gap-4">
      <Box>
        <Avatar size="lg" className="rounded-xl">
          <AvatarFallbackText>{name}</AvatarFallbackText>

          <Button className="absolute -bottom-1 -right-1 rounded-xl bg-indigo-600 p-2">
            <ButtonIcon as={Camera} size="sm" className="text-white" />
          </Button>
        </Avatar>
      </Box>

      <Box className="flex-1">
        <Text className="text-xl font-bold">{name}</Text>
        <Text className="text-sm text-gray-400">{email}</Text>
      </Box>

      <Button variant="ghost" className="rounded-lg p-2.5">
        <ButtonIcon as={Settings} className="text-gray-400" />
      </Button>
    </Box>
  );
};
