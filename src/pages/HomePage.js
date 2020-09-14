import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { getPagesMetadata } from '../redux/PageSlice';
import globalStyles from '../styles/globalStyle';
import Loading from '../components/UI/Loading';
import ArticleCard from '../components/Articles/ArticleCard';

const HomePage = (props) => {
    const refreshArticles = () => {
        props.getPagesMetadata();
    };

    useEffect(() => {
        refreshArticles();
    }, []);

    const { pagesMetadataInitialized, pagesMetadata } = props;
    if (!pagesMetadataInitialized) {
        return <Loading />;
    }

    const renderArticle = ({ item }) => {
        const goToArticle = () => {
            props.navigation.push('Article', { articleId: item.id });
        };

        return (
            <ArticleCard
                title={item.title.rendered}
                date={item.date}
                excerpt={item.excerpt.rendered}
                goToArticle={goToArticle}
            />
        );
    };

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
