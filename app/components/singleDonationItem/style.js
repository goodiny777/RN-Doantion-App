
import { StyleSheet } from 'react-native';

import { getFontFamily } from '../../helpers/FontsHelper';
import { horizontalScale, scaleFontSize, verticalScale } from '../../helpers/Scaling';

const style = StyleSheet.create({
    image: {
        width: horizontalScale(140),
        height: verticalScale(170),
        borderRadius: horizontalScale(20),
    },
    badge: {
        position: 'absolute',
        top: verticalScale(13),
        left: horizontalScale(10),
    },
    donationInformationCtntainer: {
        marginTop: verticalScale(16),
    },
    priceContainer: {
        marginTop: verticalScale(16),
    },
});

export default style;
