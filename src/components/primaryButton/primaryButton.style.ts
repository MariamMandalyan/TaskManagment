import { StyleSheet } from 'react-native';
import { nightSnow, primary, primaryWhite } from '../../utils/colors';
import { pixel } from '../../utils/pixel';

const style = StyleSheet.create({
    deafultButtonContainer: {
        borderRadius: pixel(12),
        backgroundColor: primary,
        paddingVertical: pixel(12),
        justifyContent: 'center'
    },
    outLineButtonContainer: {

    },
    withIconButtonContainer: {

    },
    text: {
        textAlign: 'center',
        fontSize: pixel(16),
    },
    defaultText: {
        color: primaryWhite
    },
    outLineText: {
    },
    withIconText: {
    },
    disableButton: {
        backgroundColor: nightSnow
    }
});

export default style;
