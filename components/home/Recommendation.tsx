import { Info, TrendingDown } from 'lucide-react-native';
import { Box } from '../ui/box';
import { Icon } from '../ui/icon';
import { Text } from '../ui/text';
import { Card } from '../ui/card';

type IRecommendationCardProps = {
  icon: any;
  className: string;
  value: string;
};

const RecommendationCard = ({ icon, className, value }: IRecommendationCardProps) => {
  return (
    <Card className={styles.cardHeader}>
      <Icon as={icon} className={className} />
      <Text>{value}</Text>
    </Card>
  );
};

export const PersonalizedRecommendation = () => {
  return (
    <Box>
      <Box className="flex-row">
        <Text className="flex-1 text-xl font-semibold">Personalized Recommendation</Text>
        <Icon as={Info} />
      </Box>

      <RecommendationCard
        icon={TrendingDown}
        className="text-blue-400"
        value="You're 1108 calories under your target. Try adding a nutritious snack like Greek yogurt with
        berries, a handful of nuts, or a banana with peanut butter to meet your calorie goal."
      />
    </Box>
  );
};

const styles = {
  cardHeader: 'flex-row items-start gap-2',
};
