import React, { Component } from 'react';
import './ArticleSpot.scss';

class ArticleSpot extends Component {

    constructor(props){
        super(props);
    }

  render() {
    return (

    <div className="article-spot">        

      { this.props.url && 
        <a href={"#"+this.props.url}>
          <div className="article-spot__content">  
            {this.props.content}
          </div>
        </a>
      }
      { !this.props.url && 
        <div className="article-spot__content">  
          {this.props.content}
        </div>
      }
                   
      </div>
    );
  }
}

export default ArticleSpot;
