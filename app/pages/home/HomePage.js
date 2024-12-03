import React from 'react';
import { SafeAreaView, ScrollView, Text, View, Image, Pressable, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/header/Header';


import globalStyle from '../../assets/style/GlobalStyle';
import style from './style';
import Search from '../../components/Search';
import Tab from '../../components/Tab';
import { updateSelectedCategoryId } from '../../redux/reducers/Categories';

const HomePage = () => {

    const user = useSelector(state => state.user);
    const categories = useSelector(state => state.categories);
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
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={categories.categories}
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

            </ScrollView>

        </SafeAreaView>
    );
};

export default HomePage;
