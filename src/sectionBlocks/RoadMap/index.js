import React from 'react';
import "./roadMap.css";

const RoadMap = () => {
  return (
    <div className='roadMap pt4 pb7 ph4 bg-black white'>
        <div className="roadMap-header pb5 perfect-center tc"><h1>ROADMAP</h1></div>
        <div className="roadMap-body pt3 pb2 w-100 flex tl">
            <div className="Map roadMap1 ph4 pt5 flex flex-column f6">
                <div className='dot'></div>
                <h5>Stage 1 - 25%</h5>
                <p>We are giving away 10 Pop Belly NFT once we reach 25% on sales. This is to be randomly handed out to members who participate in our discord.</p>
            </div>
            <div className="Map roadMap2 ph4 pb6 flex justify-center flex-column f6">
                <h5>Stage 2 – 50%</h5>
                <p>There are going to be many relevant updates and giveaways for the community as well as live streams and special events for all members.</p>
            </div>
            <div className="Map roadMap3 ph4 pt6 flex justify-center flex-column f6">
                <h5>Stage 3 – 75%</h5>
                <p>We are launching the initial steps to the creation of a game for the Metaverse that will feature Pop Belly NFTs. All NFT holders will have VIP access to all features and benefits for releases, updates, etc.</p>
            </div>
            <div className="Map roadMap4 ph4 pb6 flex justify-center flex-column f6">
                <h5>Stage 4 – 100%</h5>
                <p className='pb5'>Pop Belly NFT merchandise will become available and all holders will get VIP early access and special discounts on every item in the store. We plan to ask our members for their input on the kind of merchandise they would want to see.</p>
            </div>
            <div className="Map roadMap5 ph4 pt6 flex justify-center flex-column f6">
                <h5 className='pt4'>Stage 5 </h5>
                <p>Once the 100% milestone has been reached, we will focus on the creation of a whole new collection of Pop Belly characters. This would bring us full circle with a strong community and a large number of benefits for all existing members.</p>
            </div>
        </div>
    </div>
  );
};

export default RoadMap;