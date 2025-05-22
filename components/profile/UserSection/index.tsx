import React from 'react';
import { Camera, Settings } from 'lucide-react-native';

import { Box, Text, VStack, Button, ButtonIcon } from '@/components/ui';
import { Avatar, AvatarFallbackText } from '@/components/ui/avatar';

export const User = () => {
  const name = 'Jane Doe';
  const email = 'john.doe@ipsum.com';

  return (
    <Box className="items-center gap-4">
      <Avatar size="lg" className="rounded-xl">
        <AvatarFallbackText>{name}</AvatarFallbackText>

        <Button className="absolute -bottom-1 -right-1 rounded-xl bg-indigo-600 p-2">
          <ButtonIcon as={Camera} size="sm" className="text-white" />
        </Button>
      </Avatar>

      <VStack className="flex-1">
        <Text className="text-xl font-bold">{name}</Text>
        <Text className="text-sm text-gray-400">{email}</Text>
      </VStack>

      <Button variant="ghost" className="rounded-lg p-2.5">
        <ButtonIcon as={Settings} className="text-gray-400" />
      </Button>
    </Box>
  );
};
