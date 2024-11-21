
import { StyleSheet } from 'react-native';

import { getFontFamily } from '../../../helpers/FontsHelper';
import { scaleFontSize } from '../../../helpers/Scaling';

const style: StyleSheet = StyleSheet.create({

    title1: {
        fontFamily: 'Inter',
        fontSize: scaleFontSize(24),
        lineHeight: scaleFontSize(29),
    },
});

export default style;
