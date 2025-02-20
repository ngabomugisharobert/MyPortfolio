import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import content from '../content';
import { Helmet } from 'react-helmet-async';

export default function Navigation() {
  return (
      <>
              <Helmet>
                <title>Robert Ngabo Mugisha - Android Developer</title>
              <meta name="description" content="Robert Ngabo Mugisha | Senior Android Developer" />
            </Helmet>
    <div
      style={{
        background: '#091C29',
      }}
      className="font-dosis fixed top-0 w-screen z-40"
    >
      <div className="flex items-center w-10/12  mx-auto py-3">
        <ScrollLink
          to="header"
          smooth={true}
          className="text-3xl  font-bold text-white flex-1 cursor-pointer"
        >
          <h1>
            {content.nav.logo}
            <span className="h-3 w-3 bg-red-400 inline-block ml-2  rounded-full"></span>
          </h1>
        </ScrollLink>

        <div className="text-white text-xl">
          {content.nav.links.map((link, index) => {
            return (
              <ScrollLink to={link.to} smooth={true} key={index}>
                <span className="mr-4 cursor-pointer">
                  {link.text}
                </span>
              </ScrollLink>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
}
