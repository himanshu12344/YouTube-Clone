import React from 'react';
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import './SearchPage.css';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
            <TuneOutlinedIcon/>
            <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow
            image=""
            channel="DeVil"
            verified
            subs="1M"
            noOfVideos={456}
            description="You can find awesome programming"
            />
            <hr/>
            <VideoRow
            views="1.5M"
            subs="676K"
            description="Do you want a free one hour training"
            timestamp="59 seconds ago"
            channel="DeVil"
            title="Let's build a Youtube Clone with React.js"
            image=""
            />
            <VideoRow
            views="1.9M"
            subs="343K"
            description="Join the 3-part epic masterclass that show how to deal with React.js"
            timestamp="5 seconds ago"
            channel="DeVil"
            title="React.js tutorial for beginners"
            image=""
            />
            <VideoRow
            views="1.9M"
            subs="343K"
            description="Join the 3-part epic masterclass that show how to deal with React.js"
            timestamp="5 seconds ago"
            channel="DeVil"
            title="React.js tutorial for beginners"
            image=""
            />
            <VideoRow
            views="1.9M"
            subs="343K"
            description="Join the 3-part epic masterclass that show how to deal with React.js"
            timestamp="5 seconds ago"
            channel="DeVil"
            title="React.js tutorial for beginners"
            image=""
            />
            <VideoRow
            views="1.9M"
            subs="343K"
            description="Join the 3-part epic masterclass that show how to deal with React.js"
            timestamp="5 seconds ago"
            channel="DeVil"
            title="React.js tutorial for beginners"
            image=""
            />
        </div>
    );
}

export default SearchPage;
