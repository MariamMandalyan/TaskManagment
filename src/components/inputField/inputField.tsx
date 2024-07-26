import React, { ReactNode } from 'react';
import { View, TextInput, Text, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import { lightGrey, primaryText, red } from '../../utils/colors';
import styles from './inputField.style';

interface ITextInput {
    value?: string,
    placeholder: string,
    containerStyle?: ViewStyle,
    leftIcon?: ReactNode,
    rightIcon?: ReactNode,
    valid?: boolean,
    inputStyle?: TextStyle,
    errorMessage?: string,
    propsContainer?: ViewStyle,
    onChangeText: (value: string) => void,
    onPressLeftIcon?: () => void,
    onPressRightIcon?: () => void,
}

const InputField: React.FC<ITextInput> = (props) => {
    const {
        value,
        valid,
        leftIcon,
        rightIcon,
        placeholder,
        inputStyle,
        errorMessage,
        containerStyle,
        propsContainer,
        onChangeText,
        onPressLeftIcon,
        onPressRightIcon,
    } = props

    return (
        <View style={propsContainer}>
            <View style={[styles.container, { borderColor: valid ? red : lightGrey }, containerStyle]}>
                {leftIcon && (
                    <TouchableOpacity style={styles.leftIcon}
                        onPress={onPressLeftIcon}>
                        {leftIcon}
                    </TouchableOpacity>
                )}
                <View style={styles.subContainer}>
                    <TextInput
                        value={value}
                        onChangeText={onChangeText}
                        placeholder={placeholder}
                        placeholderTextColor={primaryText}
                        style={[styles.textInput, inputStyle]}
                    />
                </View>
                {rightIcon && (
                    <TouchableOpacity onPress={onPressRightIcon}>
                        {rightIcon}
                    </TouchableOpacity>
                )}
            </View>
            {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
        </View>
    );
};

export default InputField;