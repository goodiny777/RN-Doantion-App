import React from 'react';
import { Text, View } from 'react-native';

import style from './style';

const Header = props => {

    return (<View>
        <Text>
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
