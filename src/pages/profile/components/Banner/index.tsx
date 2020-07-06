import React from 'react';

import { BannerContainer } from './banner.styled';
import background from './background.jpg';

interface Props {}

const Banner: React.FC<Props> = () => {
  return (
    <BannerContainer>
      <div>
        <div
          className="banner"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <div>
            <a href="">
              <div className="imageBanner"></div>
            </a>
          </div>
        </div>
      </div>
    </BannerContainer>
  );
};

export default Banner;
