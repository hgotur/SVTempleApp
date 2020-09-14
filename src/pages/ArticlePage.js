import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getPage } from '../redux/PageSlice';
import Loading from '../components/UI/Loading';
import Article from '../components/Articles/Article';

const ArticlePage = (props) => {
    const { articleId } = props.route.params;

    const refreshArticle = () => {
        // TODO: HARSHA: don't fetch if we already have article.
        props.getPage(articleId);
    };

    useEffect(() => {
        refreshArticle();
    }, [articleId]);

    const { pages } = props;
    if (!pages[articleId]) {
        return <Loading />;
    }

    const content = pages[articleId].content.rendered;
    return <Article content={content} />;
};

const mapStateToProps = (state) => state.pages;

const mapDispatchToProps = {
    getPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
