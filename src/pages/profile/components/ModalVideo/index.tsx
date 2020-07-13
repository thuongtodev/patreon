import React from 'react';
import ReactPlayer from 'react-player';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    backgroundColor: 'transparent',
    border: 'none',
    transform: 'translate(-50%, -50%)',
  },
  overlay: { zIndex: 1111111, backgroundColor: 'rgba(0, 0, 0, 0.5)' },
};

interface Props {
  open: boolean;
  toggleModal: () => void;
}

const ModalVideo: React.FC<Props> = ({ open, toggleModal }) => {
  return (
    <Modal isOpen={open} onRequestClose={toggleModal} style={customStyles}>
      <ReactPlayer
        url="https://storage.googleapis.com/superpeer-prod.appspot.com/hosts/Wrg3QfdEPDmrjE8jQkLU/video-1591320054285-transcoded.mp4?fbclid=IwAR16D4raG-L50EW-If5O53Lvh3ASeAb_FNb02FuQLixtGosNFPvl9VSlMB0"
        playing
        loop
        controls
        width="100%"
        height="calc(100vh - 100px)"
      />
    </Modal>
  );
};

export default ModalVideo;
