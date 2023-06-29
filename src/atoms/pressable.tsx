import {
  BackgroundColorProps,
  BorderProps,
  ColorProps,
  LayoutProps,
  SpacingProps,
  backgroundColor,
  border,
  composeRestyleFunctions,
  spacing,
  useRestyle,
  useTheme,
} from '@shopify/restyle';
import { Pressable as NativePressable } from 'react-native';
import { Theme } from '../theme';
import { ReactNode } from 'react';
import Box from './box';

type RestyleProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  LayoutProps<Theme>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  border,
  backgroundColor,
]);

export type Props = RestyleProps & {
  onPress: () => void;
  children: ReactNode;
  rippleColor?: keyof Theme['colors'];
};

const Pressable = ({ onPress, children, rippleColor, ...rest }: Props) => {
  const props = useRestyle(restyleFunctions, rest);
  const { colors } = useTheme<Theme>();

  return (
    <NativePressable
      onPress={onPress}
      android_ripple={{
        color: rippleColor && colors[rippleColor],
      }}
    >
      <Box {...props}>{children}</Box>
    </NativePressable>
  );
};

export default Pressable;
