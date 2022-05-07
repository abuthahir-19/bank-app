import React from 'react';
import Budget from '../../images/icon-budgeting.svg';
import onBoarding from '../../images/icon-onboarding.svg';
import openAPI from '../../images/icon-api.svg';
import onBank from '../../images/icon-online.svg';
import BoxSec from '../BoxSection/BoxSec';
import '../../App.css';

const Reason = () => {
    const para1 = 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world';
    const para2 = 'See exactly where your money goes each month. Recieve notifications when you\'re close to hitting your limits';
    const para3 = 'We don\'t do branches. Open your account in minutes online and start taking control of your finances right away.';
    const para4 = 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier';

    return (
        <div className="reason-container">
            <div className="head-part">
                <h1>Why choose Easybank?</h1>
                <div className="descrip">
                    <p>We leverage Open Banking to turn your bank account into your financial hub.
                        Control your finances like never before.
                    </p>
                </div>
            </div>
            <div className="box-section-reason">
                <BoxSec picture={onBank} head="Online Banking" para={para1} />
                <BoxSec picture={Budget} head="Simple Budgeting" para={para2} />
                <BoxSec picture={onBoarding} head="Fast Onboarding" para={para3} />
                <BoxSec picture={openAPI} head="Open API" para={para4} />
            </div>
        </div>
    );
};

export default Reason;