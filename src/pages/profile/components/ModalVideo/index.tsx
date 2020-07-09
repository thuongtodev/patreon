import React from 'react';
import ReactPlayer from 'react-player';
import Modal from 'react-responsive-modal';

interface Props {
  open: boolean;
  toggleModal: () => void;
}

const ModalVideo: React.FC<Props> = ({ open, toggleModal }) => {
  return (
    <Modal
      open={open}
      onClose={toggleModal}
      styles={{
        modal: {
          maxWidth: 'unset',
          width: '100%',
          padding: 'unset',
          background: '#262626',
        },
        overlay: { zIndex: 1111111, background: 'rgba(0, 0, 0, 0.5)' },
        closeIcon: {
          fill: 'white',
          outline: 'none',
        },
      }}
      center
    >
      <ReactPlayer
        url="https://storage.googleapis.com/superpeer-prod.appspot.com/hosts/Wrg3QfdEPDmrjE8jQkLU/video-1591320054285-transcoded.mp4?fbclid=IwAR16D4raG-L50EW-If5O53Lvh3ASeAb_FNb02FuQLixtGosNFPvl9VSlMB0"
        playing
        loop
        width="100%"
        height="calc(100vh - 100px)"
      />
    </Modal>
  );
};

export default ModalVideo;
