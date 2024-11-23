
import { StyleSheet } from 'react-native';

import { getFontFamily } from '../../../helpers/FontsHelper';
import { horizontalScale, scaleFontSize, verticalScale } from '../../../helpers/Scaling';

const style: StyleSheet = StyleSheet.create({
    tab: {
        backgroundColor: '#2979F2',
        height: verticalScale(50),
        justifyContent: 'center',
        borderRadius: horizontalScale(50),

    },
    inactiveTab: {
        backgroundColor: '#F3F5F9',
    },
    title: {
        fontFamily: 'Inter',
        fontSize: scaleFontSize(14),
        lineHeight: scaleFontSize(17),
        weight: '500',
        color: '#FFFFFF',
        textAligh: 'center',
    },
    inactiveTitle: {
        color: '#79869F',
    },
});

export default style;
