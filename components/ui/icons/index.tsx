import Feather from '@expo/vector-icons/Feather';

type IIconProps = {
  name: React.ComponentProps<typeof Feather>['name'];
  color?: string;
  size?: number;
  style?: React.ComponentProps<typeof Feather>['style'];
};

type NavBarIconProps = IIconProps & {
  pressed: boolean;
};

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
const Icon = (props: IIconProps) => {
  return <Feather {...props} />;
};

const TabBarIcon = (props: IIconProps) => {
  return <Icon size={22} style={{ marginBottom: -2 }} {...props} />;
};

const NavBarIcon = (props: NavBarIconProps) => {
  const { pressed, ...rest } = props;
  return <Feather size={20} style={{ marginBottom: -2, opacity: pressed ? 0.5 : 1 }} {...rest} />;
};

export { Icon, TabBarIcon, NavBarIcon };
