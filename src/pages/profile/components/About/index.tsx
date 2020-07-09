import React, { useState } from 'react';
import { AboutContainer } from './about.styled';

interface IData {
  about: string;
}
interface Props {
  data: IData;
}
const About: React.FC<Props> = ({ data }) => {
  const { about } = data;
  return (
    <AboutContainer>
      <div className='about-wrap'>
        <div className='about-content'>
          <div className='content-wrap'>
            <div className='content-title'>
              <h2>About</h2>
            </div>
          </div>
          <div className='content'>
            <div className='content-padding'>
              <div className='main-content'>
                <div className='relative'>
                  <div>
                    <div className='center'>
                      <strong>
                        <span className='markdown-color'>
                          <a href='#'>SPOTIFY</a> &nbsp;·&nbsp; &nbsp;
                          <a href='#'>HOMEPAGE</a> &nbsp;·&nbsp; &nbsp;
                        </span>
                        <a href='#'>
                          <span className='markdown-color'>INSTAGRAM</span>
                        </a>
                      </strong>
                      <br></br>
                    </div>
                    <br></br>
                    <div
                      className='center'
                      dangerouslySetInnerHTML={{ __html: about }}
                    ></div>
                  </div>
                  <div className='absolute'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutContainer>
  );
};

export default About;
