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
          <ArticleSpot />
          <ArticleSpot />
          <ArticleSpot />
        </div>
      </div>
    );
  }
}

export default ArticleList;
