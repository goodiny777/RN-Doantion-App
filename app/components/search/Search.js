import { React, useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import style from './style';
import PropTypes from 'prop-types';
import { horizontalScale, scaleFontSize } from '../../helpers/Scaling';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TextInput } from 'react-native-gesture-handler';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = props => {
    const textInputRef = useRef(null);
    const [search, setSearch] = useState('');

    const handleFocus = () => {
        textInputRef.current.focus();
    };

    const handleSearch = (value) => {
        setSearch(value);
        props.onTextChanged(value);
    };
    return (
        <Pressable style={style.searchInputContainter} onPress={handleFocus}>
            <FontAwesomeIcon
                icon={faSearch}
                color="#25C0FF"
                size={scaleFontSize(22)}
            />
            <TextInput
                ref={textInputRef}
                style={style.searchInput}
                value={search}
                onChangeText={(value) => handleSearch(value)}
            />
        </Pressable>
    );
};

Search.propTypes = {
    onTextChanged: PropTypes.func,
};

export default Search;
