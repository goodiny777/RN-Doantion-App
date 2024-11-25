import React from 'react';
import { SafeAreaView } from 'react-native';

import globalStyle from '../assets/style/GlobalStyle';
import Header from '../components/header/Header';
import SingleDonationItem from '../components/singleDonationItem/SingleDonationItem';

const HomePage = () => {

    return (
        <SafeAreaView style={[globalStyle.background, globalStyle.flex]}>
            <Header title={'Guest'} type={1} />
        </SafeAreaView>
    );
};

export default HomePage;
