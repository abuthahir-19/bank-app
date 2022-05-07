import React from 'react'
import './ArticleSty.css';

const ArticleBox = ({ img, author, title, content }) => {
    return (
        <div className="box-arti">
            <div className="img-sec">
                <img src={img} alt="BlogImage" id="blogImg" />
            </div>
            <div className="content-sec">
                <p id="auth">By { author }</p>
                <h3>{ title }</h3>
                <p id="cont">{ content }</p>
            </div>
        </div>
    );
}

export default ArticleBox;