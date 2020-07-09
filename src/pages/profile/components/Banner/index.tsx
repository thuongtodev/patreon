import React, { useState } from 'react';

import { BannerContainer } from './banner.styled';
import background from './background.jpg';
import ModalVideo from '../ModalVideo';

interface Props {}

const Banner: React.FC<Props> = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => {
    setOpen(!open);
  };
  return (
    <BannerContainer>
      <ModalVideo open={open} toggleModal={onOpenModal} />
      <div>
        <div
          className="banner"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <div>
            <a onClick={() => setOpen(true)}>
              <div className="imageBanner"></div>
            </a>
          </div>
        </div>
      </div>
    </BannerContainer>
  );
};

export default Banner;
