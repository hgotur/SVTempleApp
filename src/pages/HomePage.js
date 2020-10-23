import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { getHomePage } from '../redux/PageSlice';
import globalStyles from '../styles/globalStyle';
import Loading from '../components/UI/Loading';
import Headline from '../components/Home/Headline';

const HomePage = (props) => {
    const refreshHomePage = () => {
        props.getHomePage();
    };

    const renderHeadline = ({ item }) => {
        const [headline, imgSrc] = item;
        return <Headline headline={headline} imgSrc={imgSrc} />;
    };

    useEffect(() => {
        refreshHomePage();
    }, []);

    const { homePageHeadlines, homePageInitialized } = props;

    if (!homePageInitialized) {
        return <Loading />;
    }

    return (
        <View style={globalStyles.body}>
            <FlatList
                refreshing={!homePageInitialized}
                onRefresh={refreshHomePage}
                data={homePageHeadlines}
                keyExtractor={([headline, _]) => headline}
                renderItem={renderHeadline}
                contentContainerStyle={styles.contentContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        alignItems: 'center',
        width: '100%',
    },
});

const mapStateToProps = (state) => state.pages;

const mapDispatchToProps = {
    getHomePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
