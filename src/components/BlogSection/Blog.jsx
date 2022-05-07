import React from 'react';
import ArticleBox from './ArticleBox';
import currency from '../../images/image-currency.jpg';
import restaurent from '../../images/image-restaurant.jpg';
import plane from '../../images/image-plane.jpg';
import confetti from '../../images/image-confetti.jpg';

const Blog = () => {
    const cont1 = 'The world is getting smaller and we\'re becomming more mobile. So why should you be forced to only recive money in a single...';
    const cont2 = 'Our simple budgeting feature allows you to seperate out your spending and set realistic limits each month. That means you...';
    const cont3 = 'We want you to enjoy your travels. This is why we don\'t charge any fees on purchases while you\'re abroad. We\'ll even show you..';
    const cont4 = 'After a lot of hard work by the whole team. we\'re excited to launch our closed beta. It\'s easy to request an invite through the site...';

    return (
        <div className="blogs-details-cont">
            <div className="blog-heading-con">
                <h1>Latest Articles</h1>
            </div>
            <div className="blogs-list">
                <ArticleBox 
                    img={currency} 
                    author="Claire Robinson" 
                    title="Recieve money in any currency with no fees"
                    content={cont1}
                />
                <ArticleBox 
                    img={restaurent} 
                    author="Wilson Hutton" 
                    title="Treat yourself without worrying about money"
                    content={cont2}
                />
                <ArticleBox 
                    img={plane} 
                    author="Wilson Hutton" 
                    title="Take your Easybank card wherever you go"
                    content={cont3}
                />
                <ArticleBox 
                    img={confetti} 
                    author="Claire Robinson" 
                    title="Our invite-only Beta accounts are now live!"
                    content={cont4}
                />
            </div>
        </div>
    );
}

export default Blog;