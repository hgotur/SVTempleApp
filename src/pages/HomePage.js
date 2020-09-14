import React, { useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { getPagesMetadata } from '../redux/PageSlice';
import globalStyles from '../styles/globalStyle';
import ArticleInfo from '../components/ArticleInfo';

const HomePage = (props) => {
    const refreshArticles = () => {
        props.getPagesMetadata();
    };

    useEffect(() => {
        refreshArticles();
    }, []);

    const { pagesMetadataInitialized, pagesMetadata } = props;
    if (!pagesMetadataInitialized) {
        return (
            <View style={globalStyles.body}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    const renderArticle = ({ item }) => {
        return (
            <ArticleInfo
                title={item.title.rendered}
                date={item.date}
                excerpt={item.excerpt.rendered}
            />
        );
    };

    // return (
    //     <View style={globalStyles.body}>
    //         <Text>Home Screen</Text>
    //     </View>
    // );
    return (
        <View style={globalStyles.body}>
            <FlatList
                refreshing={!pagesMetadataInitialized}
                onRefresh={refreshArticles}
                data={pagesMetadata}
                keyExtractor={(article) => article.id.toString()}
                renderItem={renderArticle}
            />
        </View>
    );
};

const mapStateToProps = (state) => state.pages;

const mapDispatchToProps = {
    getPagesMetadata,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
