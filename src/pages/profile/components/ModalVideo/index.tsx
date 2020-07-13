import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

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
  const [mute, setMute] = useState(false);

  return (
    <Modal isOpen={open} onRequestClose={toggleModal} style={customStyles}>
      <div style={{ position: 'relative' }}>
        <div
          onClick={() => toggleModal()}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            cursor: 'pointer',
            zIndex: 9999999,
          }}
        >
          <AiOutlineClose style={{ color: '#fff', width: 30, height: 30 }} />
        </div>
        <div
          onClick={() => setMute(!mute)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            cursor: 'pointer',
            zIndex: 9999999,
          }}
        >
          {!mute && (
            <FaVolumeUp style={{ color: '#fff', width: 30, height: 30 }} />
          )}
          {mute && (
            <FaVolumeMute style={{ color: '#fff', width: 30, height: 30 }} />
          )}
        </div>
        <ReactPlayer
          url="https://storage.googleapis.com/superpeer-prod.appspot.com/hosts/Wrg3QfdEPDmrjE8jQkLU/video-1591320054285-transcoded.mp4?fbclid=IwAR16D4raG-L50EW-If5O53Lvh3ASeAb_FNb02FuQLixtGosNFPvl9VSlMB0"
          playing
          loop
          volume={1}
          muted={mute}
          width="100%"
          height="100%"
        />
      </div>
    </Modal>
  );
};

export default ModalVideo;
