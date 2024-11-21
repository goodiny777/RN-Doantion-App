
import { StyleSheet } from 'react-native';

import { getFontFamily } from '../../../helpers/FontsHelper';
import { horizontalScale, scaleFontSize, verticalScale } from '../../../helpers/Scaling';

const style: StyleSheet = StyleSheet.create({
    button: {
        backgroundColor: '#2979F2',
        height: verticalScale(55),
        justifyContent: 'center',
        borderRadius: horizontalScale(50),

    },
    buttonDisabled: {
        opacity: 0.5,
    },
    title: {
        fontFamily: 'Inter',
        fontSize: scaleFontSize(16),
        lineHeight: scaleFontSize(19),
        weight: '500',
        color: '#FFFFFF',
        textAligh: 'center',
    },
});

export default style;
