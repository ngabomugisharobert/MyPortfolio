import React from 'react'
import './Glass.css'
import robert from './asset/robert.jpg'; // with import
import Jump from 'react-reveal/Jump';
import HeadShake from 'react-reveal/HeadShake';

function Glass() {
    return (
        <>

    <main>
      <section className="glass">

        <div className="profile">
        <h1 className="titl">About Me</h1>
        <HeadShake>
            <div className="profile__picture">
                <img src={robert} alt={'Robert'}/>
                <span className="names">Robert NGABO MUGISHA</span>
            </div>
        </HeadShake>
            <div className="profile__about">
                <HeadShake>
                <div className="about__note">
                    <p>
                    I’m a software developer, I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as I continue to learn new languages and development techniques that are important to me and the success of the organization. 
                    </p>
                    <p>Through my Experience, I have developed a strong understanding of JavaScript (ES5 & ES6), React, Node.js, Express, Java, Php, just to name few. As a developer, I find a lot of joy and excitement utilizing my skills to help troubleshoot bugs and pushing projects forward. I enjoy learning new technologies and growing in a field that is constantly being pushed to new boundaries.</p>
                </div>
                </HeadShake>
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
