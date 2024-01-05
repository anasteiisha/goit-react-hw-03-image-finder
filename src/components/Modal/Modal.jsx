import ReactModal from 'react-modal';
import * as s from './Modal.styled';

export const Modal = ({ largeImageURL, tags, isShowModal, onCloseModal }) => {
  return (
    <div>
      <ReactModal isOpen={isShowModal} onRequestClose={onCloseModal}>
        <s.Img src={largeImageURL} alt={tags} />
      </ReactModal>
    </div>
  );
};
