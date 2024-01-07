import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

import { Component } from 'react';
import { getImages } from 'service/image-service';
import { makeNormalizeDataImg } from 'helpers/normalize-data-img';

import ModalLibrary from 'react-modal';
ModalLibrary.setAppElement('#root');

export class App extends Component {
  state = {
    searchValue: '',
    hits: [],
    page: 1,
    error: null,
    isVisibleLoadMoreBtn: false,
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    if (
      this.state.searchValue !== prevState.searchValue ||
      this.state.page !== prevState.page
    ) {
      try {
        this.setState({ isLoading: true });

        const { hits, totalHits } = await getImages(
          this.state.searchValue,
          this.state.page
        );

        this.setState(prev => ({
          hits: [...prev.hits, ...makeNormalizeDataImg(hits)],
          isVisibleLoadMoreBtn: this.state.page < Math.ceil(totalHits / 12),
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  onSubmit = searchValue => {
    this.setState({
      searchValue,
      page: 1,
      isVisibleLoadMoreBtn: false,
      hits: [],
      error: null,
      largeImageURL: '',
      tags: '',
      isShowModal: false,
    });
  };
  handleClickOnBtn = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  handleClickOnImg = (largeImageURL, tags) => {
    this.setState({ largeImageURL, tags, isShowModal: true });
  };

  onCloseModal = () => {
    this.setState({ isShowModal: false });
  };

  isLoading = () => {};

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.hits.length > 0 && (
          <ImageGallery
            hits={this.state.hits}
            handleClickOnImg={this.handleClickOnImg}
          />
        )}
        {this.state.isVisibleLoadMoreBtn && (
          <Button
            onClick={this.handleClickOnBtn}
            isLoading={this.state.isLoading}
          />
        )}
        {this.state.isShowModal && (
          <Modal
            isShowModal={this.state.isShowModal}
            onCloseModal={this.onCloseModal}
            largeImageURL={this.state.largeImageURL}
          />
        )}
      </>
    );
  }
}
