import React, { Component } from 'react';
import './ArticleList.scss';
import ArticleSpot from './ArticleSpot';

class ArticleList extends Component {

    constructor(props){
        super(props);
    }

  render() {
    return (
      <div className="article-list">
        <h1> article list</h1>
        <div>
          <ArticleSpot content="article spot" />
          <ArticleSpot content="some spot" />
          <ArticleSpot url="some-url" content="other spot"/>
        </div>
      </div>
    );
  }
}

export default ArticleList;
