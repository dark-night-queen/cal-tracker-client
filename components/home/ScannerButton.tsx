import { Camera } from 'lucide-react-native';
import { Button, ButtonIcon, ButtonText } from '../ui/button';

export const ScannerButton = () => {
  return (
    <Button className="rounded-lg bg-indigo-500 p-3">
      <ButtonIcon as={Camera} className="color-white" />
      <ButtonText className="color-white">Tap to Scan Food</ButtonText>
    </Button>
  );
};
