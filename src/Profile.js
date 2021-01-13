import React from 'react'
import './Profile.css'

function Profile() {
    return (
        <div className="profile">
            <div className="profile__picture">
                <img src="https://picsum.photos/200/300"/>
            </div>
            <div className="profile__about">
                <div className="About__title">
                    <h3>Meet Robert</h3>
                </div>
                <div className="about__note">
                    <p>
                    I’m a software developer, I have been working in company named High Hill Software for two years. I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as I continue to learn new languages and development techniques that are important to me and the success of the organization. 
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default Profile
