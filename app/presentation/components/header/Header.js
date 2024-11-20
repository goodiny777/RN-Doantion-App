import React from 'react';
import { Text, View } from 'react-native';

import style from './style';
import PropTypes from 'prop-types';

const Header = props => {

    return (<View>
        <Text style={style.title1}>
            {props.title}
        </Text>
    </View>);
};

Header.default = {
    title: '',
};
Header.propTypes = {
    title: PropTypes.string,
};

export default Header;
