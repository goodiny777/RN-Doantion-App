import React from 'react';
import { Text, View } from 'react-native';

import style from './style';
import PropTypes from 'prop-types';

const Header = props => {

    const getStyleByType = () => {
        switch (props.type) {
            case 1:
                return style.title1;
            case 2:
                return style.title2;
            case 3:
                return style.title3;
            default:
                return style.title1;
        }
    };

    return (
        <View>
            <Text style={getStyleByType()}>
                {props.title}
            </Text>
        </View>
    );
};

Header.default = {
    title: '',
};
Header.propTypes = {
    title: PropTypes.string,
    type: PropTypes.number,
};

export default Header;
