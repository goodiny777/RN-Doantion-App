import React from 'react';
import { Pressable, Text, View } from 'react-native';

import style from './style';
import PropTypes from 'prop-types';

const Button = props => {

    return (
        <Pressable disabled={props.isDisabled} style={[style.button, props.isDisabled && style.buttonDisabled]} onPress={() => props.onPress()}>
            <Text style={style.title}>
                {props.title}
            </Text>
        </Pressable >
    );
};

Button.default = {
    isDisabled: false,
};
Button.propTypes = {
    title: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    onPress: PropTypes.func,
};

export default Button;
