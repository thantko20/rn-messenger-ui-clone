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
  rippleColor?: string;
};

const Pressable = ({ onPress, children, ...rest }: Props) => {
  const { colors } = useTheme<Theme>();
  const { rippleColor = colors.$lightestGray, ...props } = useRestyle(
    restyleFunctions,
    rest,
  );

  return (
    <NativePressable onPress={onPress} android_ripple={{ color: rippleColor }}>
      <Box {...props}>{children}</Box>
    </NativePressable>
  );
};

export default Pressable;
