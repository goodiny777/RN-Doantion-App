import React from 'react';
import { useSelector } from 'react-redux';
import { Image, SafeAreaView, ScrollView, View, Text } from 'react-native';
import BackButton from '../../components/back_button/BackButton';
import Badge from '../../components/badge/Badge';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

const SingleDonationItem = ({ navigation, route }) => {
    const donationItemInformation = useSelector(
        state => state.donations.selectedDonationInformation,
    );
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
                <BackButton onPress={() => navigation.goBack()} />
                <Image
                    source={{ uri: donationItemInformation.image }}
                    style={style.image}
                />
                <View style={style.badge}>
                    <Badge title={categoryInformation.name} />
                </View>
                <Header type={1} title={donationItemInformation.name} />
                <Text style={style.description}>
                    {donationItemInformation.description}
                    {donationItemInformation.description}
                    {donationItemInformation.description}
                    {donationItemInformation.description}
                    {donationItemInformation.description}
                    {donationItemInformation.description}
                    {donationItemInformation.description}
                </Text>
            </ScrollView>
            <View style={style.button}>
                <Button title={'Donate'} />
            </View>
        </SafeAreaView>
    );
};

export default SingleDonationItem;