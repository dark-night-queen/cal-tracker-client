import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';

export const NoItemAvailable = () => {
  return (
    <Card size="lg" className="mt-4">
      <Text className="text-center text-gray-400">No food items logged for this day</Text>
    </Card>
  );
};
