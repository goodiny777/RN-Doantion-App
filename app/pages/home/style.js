import { StyleSheet } from 'react-native';

import { getFontFamily } from '../../helpers/FontsHelper';
import { horizontalScale, scaleFontSize, verticalScale } from '../../helpers/Scaling';

const style: StyleSheet = StyleSheet.create({
    header: {
        marginTop: verticalScale(20),
        marginHorizontal: horizontalScale(24),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerGreetingText: {
        fontFamily: 'Inter',
        fontSize: scaleFontSize(16),
        lineHeight: scaleFontSize(19),
        fontWeight: '400',
        color: '#636766'
    },
    username: {
        marginTop: verticalScale(5),
    },
    profileImage: {
        width: horizontalScale(50),
        height: verticalScale(50)
    },
    searchContainer: {
        marginHorizontal: horizontalScale(24),
        marginTop: verticalScale(20),
    },
    banner: {
        width: '100%',
        height: verticalScale(160),
    },
    pressableBanner: {
        marginHorizontal: horizontalScale(24),
    },
    categoryHeader: {
        marginHorizontal: horizontalScale(24),
        marginBottom: verticalScale(16),
        marginTop: verticalScale(6),
    },
    categories: {
        marginLeft: horizontalScale(24),
    },
    categoryItem: {
        marginRight: horizontalScale(10),
    },
    donationItemsContainer: {
        marginTop: verticalScale(20),
        marginHorizontal: horizontalScale(24),
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    singleDonationItem: {
        maxWidth: '49%',
        marginBottom: verticalScale(23),
    },
});

export default style;