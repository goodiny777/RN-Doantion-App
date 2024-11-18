import React from 'react';
import {
    SafeAreaView,
} from 'react-native';

import { globalStyle } from '../../assets/style/GlobalStyle';
import Header from '../components/header/Header';

const HomePage = () => {

    return (
        <SafeAreaView style={[globalStyle.background, globalStyle.flex]}>
            <Header />
        </SafeAreaView>
    );
};

export default HomePage;
