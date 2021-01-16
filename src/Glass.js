import React from 'react'
import './Glass.css'
import robert from './asset/robert.jpg'; // with import

function Glass() {
    return (
        <>

    <main>
      <section className="glass">
        <div className="dashboard">

        <div className="profile">
            <div className="profile__picture">
                <img src={robert} alt={'Robert'}/>
            </div>
            <div className="profile__about">
                <div className="about__title">
                    <p>Meet Robert</p>
                </div>
                <div className="about__note">
                    <p>
                    I’m a software developer, I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as I continue to learn new languages and development techniques that are important to me and the success of the organization. 
                    </p>
                </div>
            </div>
        </div>

        </div>
      </section>
    </main>
    <div className="circle1"></div>
    <div className="circle2"></div>

        </>
    )
}

export default Glass
