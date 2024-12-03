import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View, Image, Pressable, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/header/Header';
import { updateSelectedCategoryId } from '../../redux/reducers/Categories';

import globalStyle from '../../assets/style/GlobalStyle';
import style from './style';
import Search from '../../components/search/Search';
import Tab from '../../components/tab/Tab';
import SingleDonationItem from '../../components/singleDonationItem/SingleDonationItem';



const [donationItems, setDonationItems] = useState([]);
const [categoryPage, setCategoryPage] = useState(1);
const [categoryList, setCategoryList] = useState([]);
const [isLoadingCategories, setIsLoadingCategories] = useState(false);
const categoryPageSize = 4;

useEffect(() => {
    const items = donations.items.filter(value =>
        value.categoryIds.includes(categories.selectedCategoryId),
    );
    setDonationItems(items);
}, [categories.selectedCategoryId]);

useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
        pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);
}, []);

const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
        return [];
    }
    return items.slice(startIndex, endIndex);
};

const HomePage = () => {

    const user = useSelector(state => state.user);
    const categories = useSelector(state => state.categories);
    const donations = useSelector(state => state.donations);


    const dispatch = useDispatch();

    return (
        <SafeAreaView style={[globalStyle.background, globalStyle.flex]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={style.header}>
                    <View>
                        <Text style={style.headerGreetingText}>Hello,</Text>
                        <View style={style.username}>
                            <Header title={user.firstName + ' ' + user.lastName[0] + '.'} type={1} />
                        </View>
                    </View>
                    <Image
                        source={{ uri: user.profileImage }}
                        style={style.profileImage}
                        resizeMode='contain'
                    />
                </View>

                <View style={style.searchContainer}>
                    <Search />
                </View>

                <Pressable style={style.pressableBanner}>
                    <Image
                        style={style.banner}
                        source={require('../../assets/images/highlighted_image.png')}
                        resizeMode='contain'
                    />
                </Pressable>

                <View style={style.categoryHeader}>
                    <Header title={'Select Category'} type={2} />
                </View>
                <View style={style.categories}>
                    <FlatList
                        onEndReachedThreshold={0.5}
                        onEndReached={() => {
                            if (isLoadingCategories) {
                                return;
                            }
                            console.log(
                                'User has reached the end and we are getting more data for page number ',
                                categoryPage,
                            );
                            setIsLoadingCategories(true);
                            let newData = pagination(
                                categories.categories,
                                categoryPage,
                                categoryPageSize,
                            );
                            if (newData.length > 0) {
                                setCategoryList(prevState => [...prevState, ...newData]);
                                setCategoryPage(prevState => prevState + 1);
                            }
                            setIsLoadingCategories(false);
                        }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={categoryList}
                        renderItem={({ item }) => (
                            <View style={style.categoryItem} key={item.categoryId}>
                                <Tab
                                    tabId={item.categoryId}
                                    onPress={value => dispatch(updateSelectedCategoryId(value))}
                                    title={item.name}
                                    isInactive={item.categoryId !== categories.selectedCategoryId}
                                />
                            </View>
                        )}
                    />
                </View>

                {donationItems.length > 0 && (
                    <View style={style.donationItemsContainer}>
                        {donationItems.map(value => (
                            <View key={value.donationItemId} style={style.singleDonationItem}>
                                <SingleDonationItem
                                    onPress={selectedDonationId => { }}
                                    donationItemId={value.donationItemId}
                                    uri={value.image}
                                    donationTitle={value.name}
                                    badgeTitle={
                                        categories.categories.filter(
                                            val => val.categoryId === categories.selectedCategoryId,
                                        )[0].name
                                    }
                                    price={parseFloat(value.price)}
                                />
                            </View>
                        ))}
                    </View>
                )}

            </ScrollView>

        </SafeAreaView>
    );
};

export default HomePage;
