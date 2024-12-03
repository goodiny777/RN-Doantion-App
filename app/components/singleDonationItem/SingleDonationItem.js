import { React } from 'react';
import { Pressable, View, Pressable } from 'react-native';

import style from './style';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import Badge from '../badge/Badge';
import { Image } from 'react-native-svg';

const SingleDonationItem = props => {

    return (
        <Pressable
            onPress={() => {
                props.onPress(props.donationItemId);
            }}>
            <View >
                <Badge
                    title={props.badgeText}
                    style={style.badge}
                />
                <Image
                    source={{ uri: props.imageUrl }}
                    resizeMode={'cover'}
                    style={style.image}
                />
            </View>
            <View style={style.donationInformationCtntainer}>
                <Header
                    title={props.donationTitle}
                    type={3}
                    color={'#0A043C'}
                    numberOfLines={1}
                />
                <View style={style.priceContainer}>
                    <Header title={'$' + props.price.toFixed(2)} type={3} color={'#0A043C'} />
                </View>
            </View>
        </Pressable>
    );
};

SingleDonationItem.defaultProps = {
    onPress: () => { },
};

SingleDonationItem.propTypes = {
    donationItemId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    badgeText: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onPress: PropTypes.func,
};

export default SingleDonationItem;
