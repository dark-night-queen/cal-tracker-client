import Feather from '@expo/vector-icons/Feather';

type IIconProps = {
  name: React.ComponentProps<typeof Feather>['name'];
  color?: string;
  size?: number;
  style?: React.ComponentProps<typeof Feather>['style'];
};

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
const Icon = (props: IIconProps) => {
  return <Feather {...props} />;
};

const TabBarIcon = (props: IIconProps) => {
  return <Icon size={22} style={{ marginBottom: -2 }} {...props} />;
};

export { Icon, TabBarIcon };
