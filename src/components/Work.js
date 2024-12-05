import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content from '../content';
import useWindowPosition from '../hook/useWindowPosition';
// import github from '../../public/assets/github.png'

export default function Work() {
  const animated = useWindowPosition('header', 0.6);
  return (
    <div
      className="min-h-screen flex justify-center items-center flex-col"
      style={{
        background: '#FEFEFE',
      }}
      id="mywork"
    >
      <h1 className="text-5xl font-dosis font-bold">{content.work.title}</h1>
      <p className="text-gray-600 text-2xl font-dosis mb-10"></p>
      <div className="flex flex-col md:flex-row justify-between items-center w-11/12 ">
        <LazyLoadImage
          effect="blur"
          placeholderSrc={content.work.imgPlaceholder}
          src={content.work.img}
          alt="phone prototype"
          className="m-10 transtion duration-2000 ease-in-out z-10  md:w-3/5 w-4/5"
        />
        <div
          className="transtion duration-2000 ease-in-out p-10 max-w-xl lg:max-w-3xl rounded-lg hidden md:block"
          style={{
            border: '1px solid #e5ecf9',
            transform: animated
              ? 'translate(-10%, 0%) rotate3d(0.540, -0.95, 0, 22deg) rotateZ(7deg)'
              : '',
            boxShadow:
              '35px 50px 90px -25px rgba(50, 50, 95, 0.5), 20px 35px 75px -35px rgba(0, 0, 0, 0.5)',
          }}
        >
          <ProjectDetail />
        </div>
        <div className="flex justify-center items-center md:hidden">
          <ProjectDetail />
        </div>
      </div>
    </div>
  );
}

const ProjectDetail = () => {
  const animated = useWindowPosition('header', 0.6);
  return (
    <div>
      <h1
        className={` ${
          animated ? '' : 'translate-y-10 opacity-0'
        }   transform transition duration-2000 inline-block m-4  font-dosis text-xl font-bold`}
      >
        {content.work.projectName}
      </h1>
      <p
        className={`${
          animated ? '' : 'translate-y-10 opacity-0'
        }  transform transition duration-2000 inline-block w-11/12 m-4  text-xl font-dosis`}
      >
        {content.work.desc[0]}
        <br/>
        {/* {content.work.desc[1]} */}
      </p>
      <div class="ml-20 flex-shrink-0 flex">
      <a href="https://github.com/ngabomugisharobert" target="_blank" rel="noopener noreferrer"
        className={`${
          animated ? '' : 'translate-y-10 opacity-0'
        } transform transition duration-2000  px-20 py-3 m-4 bg-black flex justify-around text-white rounded-lg shadow-2xl`}
      >
        <img
          width ="35"
          height = "30"
          src={process.env.PUBLIC_URL + '/assets/github.png'}
          alt="rocket"
          className="max-w-min"
        />
        <p className="text-lg"></p>
      </a>
      <a href="https://www.linkedin.com/in/robert250/" target="_blank" rel="noopener noreferrer"
        className={`${
          animated ? '' : 'translate-y-10 opacity-0'
        } transform transition duration-2000  px-20 py-3 m-4 bg-black flex justify-around text-white rounded-lg shadow-2xl`}
      >
        <img
          width ="30"
          height = "30"
          src={ process.env.PUBLIC_URL + '/assets/in.png'}
          alt="rocket"
          className="mr-5"
        />
        <p className="text-lg"></p>
      </a>
      </div>
    </div>
  );
};
