import { React, useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import style from './style';
import PropTypes from 'prop-types';
import { horizontalScale } from '../../../helpers/Scaling';

const Tab = props => {
    const [width, setWidth] = useState(0);
    const textRef = useRef(null);
    const paddingHorizontal = 33;
    const tabWidth = {
        width: horizontalScale(paddingHorizontal * 2 + width),
    };
    return (
        <Pressable disabled={props.isDisabled} style={[style.tab, props.inactive && style.inactiveTab, tabWidth]} onPress={() => props.onPress()}>
            <Text
                ref={textRef}
                onTextLayout={event => {
                    setWidth(event.nativeEvent.lines[0].width);
                }}
                style={[style.title, props.inactive && style.inactiveTitle]
                }>
                {props.title}
            </Text>
        </Pressable >
    );
};

Tab.default = {
    inactive: false,
};
Tab.propTypes = {
    title: PropTypes.string.isRequired,
    inactive: PropTypes.bool,
    onPress: PropTypes.func,
};

export default Tab;
