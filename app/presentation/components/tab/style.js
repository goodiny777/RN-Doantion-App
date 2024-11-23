
import { StyleSheet } from 'react-native';

import { getFontFamily } from '../../../helpers/FontsHelper';
import { horizontalScale, scaleFontSize, verticalScale } from '../../../helpers/Scaling';

const style: StyleSheet = StyleSheet.create({
    badge: {
        backgroundColor: '#145855',
        height: verticalScale(22),
        justifyContent: 'center',
        borderRadius: horizontalScale(50),

    },
    title: {
        fontFamily: 'Inter',
        fontSize: scaleFontSize(10),
        lineHeight: scaleFontSize(12),
        weight: '600',
        color: '#FFFFFF',
        textAligh: 'center',
    },
});

export default style;
