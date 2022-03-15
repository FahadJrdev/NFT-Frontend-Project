import React from 'react';
import Carousel from 'react-elastic-carousel';
import "./about.css";

const AboutUs = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1, itemsToScroll: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 1 },
        { width: 768, itemsToShow: 3, itemsToScroll: 1 }
    ];
  return (
    <div className='pt6 bg-black about'>
        <div className="carousel">
            <Carousel breakPoints={breakPoints}>
                <img src="Images/about1.png" alt="about" />
                <img src="Images/about2.png" alt="about" />
                <img src="Images/about3.png" alt="about" />
                <img src="Images/about1.png" alt="about" />
                <img src="Images/about2.png" alt="about" />
                <img src="Images/about3.png" alt="about" />
                <img src="Images/about1.png" alt="about" />
                <img src="Images/about2.png" alt="about" />
                <img src="Images/about3.png" alt="about" />
            </Carousel>
        </div>
        <div className='ph5 pt5 description w-100 flex white'>
        <div className="about-desc w-50 mr3">
            <h1>About Us</h1>
            <p>The Pop Belly NFT collection is a very fresh and special take on the world of NFT art as it serves to bring iconic individuals into the future. <br /><br />

                The Metaverse is upon us and there is no way to stop this technological evolution from taking place. We are in the beginning stages of a new world and a new era. Those who find their way into the world of NFTs are going to be prepared for that new and exciting way of life.<br /><br />

                The team behind the Pop Belly NFT collection is one that brings an incredible level of commitment to the project. The strength of the team comes from the passion we all feel for the Metaverse and the undeniably radical changes that this will bring to our lives.<br /><br />

                When you purchase a Pop Belly, you will be able to choose from a vast number of iconic characters. Those that beat the pop culture standards to a pulp, the ones who enter the lair of the dragon to conquer evil, or the ones that took the red pill and started a revolution.<br /><br />

                History has given us amazing icons and they all represent an important time in our lives. Be it for politics, for entertainment, or for science, the Pop Belly NFT collection offers the perfect opportunity for anyone to enter this incredible world and step into the new era with full force.<br /><br />
            </p>
        </div>
        <div className="utility-desc w-50 ml3">
            <h1>UTILITY</h1>
            <p>The sky is the limit when it comes to the value of your NFT and how it can evolve in the future. The world of NFTs brings an exciting proposal in terms of long-term value of the acquisition, but the greatest aspect of the Pop Belly NFT is the community.<br /><br />

                We already started a community of likeminded people that created the POP Belly NFT project and we are now looking to expand that community to incredible levels. Every new NFT holder is going to join the ranks of a group of people who are there to support each other and take the leap into the Metaverse together.<br /><br />

                The Metaverse is such a huge change, that it can be intimidating to even consider entering it alone. When you join Pop Belly NFT, you are joining a community that will support you as you learn all about the many possibilities that open up by becoming an NFT holder.<br /><br />

                You owe it to yourself to be the type of person that is going to move into the new era of technology with all the tools for success. When you acquire Pop Belly NFTs, you are immersing yourself into the world of crypto and the many ways in which it will be implemented to the Metaverse.<br /><br />

                The ultimate reward of this involvement is the incredibly insightful and helpful community that will be there to share knowledge and evolve together as we move forward and find ourselves in the outskirts of a world that is going to be changed forever.<br /><br />

                This is the reason why the Pop Belly NFT project is one with all the requirements and potential to become an outstanding part of the NFT world. The supportive community element is the strongest point of this amazingly stylish collection.
            </p>
        </div>
        </div>
    </div>
  );
};

export default AboutUs;