import { React, useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import style from '../tab/style';
import PropTypes from 'prop-types';
import { horizontalScale } from '../../../helpers/Scaling';

const Badge = props => {
    const [width, setWidth] = useState(0);
    const textRef = useRef(null);
    const paddingHorizontal = 10;
    const tabWidth = {
        width: horizontalScale(paddingHorizontal * 2 + width),
    };
    return (
        <View style={[style.badge, tabWidth]}>
            <Text
                ref={textRef}
                onTextLayout={event => {
                    setWidth(event.nativeEvent.lines[0].width);
                }}
                style={style.title}>
                {props.title}
            </Text>
        </View >
    );
};

Badge.default = {
    inactive: false,
};
Badge.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Badge;
