import React, { ReactNode } from 'react';
import { TextStyle, TouchableOpacity, ViewStyle, Text } from 'react-native';
import styles from './primaryButton.style';

export enum ButtonTypes {
  Default = "default_button",
  Outline = "outline_button",
  WithIcon = "withIcon_button"
}

const BUTTON_STYLES = {
  [ButtonTypes.Default]: {
    container: styles.deafultButtonContainer,
    text: styles.defaultText,
  },
  [ButtonTypes.Outline]: {
    container: styles.outLineButtonContainer,
    text: styles.outLineText,
  },
  [ButtonTypes.WithIcon]: {
    container: styles.withIconButtonContainer,
    text: styles.withIconText,
  },
};

type Props = {
  type?: ButtonTypes;
  title?: string;
  disable?: boolean;
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export const PrimeryButton: React.FC<Props> = ({
  type,
  title,
  onPress,
  style,
  leftIcon,
  disable,
  textStyle,
  rightIcon,
}) => {

  return (
    <TouchableOpacity
      disabled={disable}
      style={[BUTTON_STYLES[type ?? "default_button"].container, style, disable && styles.disableButton]}
      onPress={onPress}>
      {leftIcon}
      <Text style={[BUTTON_STYLES[type ?? "default_button"].text, styles.text, textStyle]}>
        {title}
      </Text>
      {rightIcon}
    </TouchableOpacity>
  )
};
