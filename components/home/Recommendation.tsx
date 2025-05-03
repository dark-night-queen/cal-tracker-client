import { Info } from 'lucide-react-native';
import { Box } from '../ui/box';
import { Icon } from '../ui/icon';
import { Text } from '../ui/text';

export const PersonalizedRecommendation = () => {
  return (
    <Box>
      <Box className='flex-row'>
        <Text className="flex-1 text-xl font-semibold">Personalized Recommendation</Text>
        <Icon as={Info} />
      </Box>
    </Box>
  );
};
