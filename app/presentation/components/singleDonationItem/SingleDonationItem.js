import { React, useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import style from './style';
import PropTypes from 'prop-types';
import { horizontalScale } from '../../../helpers/Scaling';
import Header from '../header/Header';
import Badge from '../badge/Badge';
import { Image } from 'react-native-svg';
import Search from '../search/Search';

const SingleDonationItem = props => {

    return (
        <View>
            <View >
                <Badge title={props.badgeText} style={style.badge} />
                <Image source={{ uri: props.imageUrl }} resizeMode={'contain'} style={style.image} />
            </View>
            <View style={style.donationInformationCtntainer}>
                <Header title={props.title} type={3} color={'#0A043C'} />
                <View style={style.priceContainer}>
                    <Header title={'$' + props.price.toFixed(2)} type={3} color={'#0A043C'} />
                </View>
            </View>
        </View>
    );
};

SingleDonationItem.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    badgeText: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default SingleDonationItem;
