import { Component } from 'react';
import * as s from './Searchbar.styled';

export class Searchbar extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.text.value;

    this.props.onSubmit(value);
  };
  render() {
    return (
      <header>
        <s.SearchForm onSubmit={this.handleSubmit}>
          <s.SearchFormButton type="button">
            <s.SearchFormLabel>Search</s.SearchFormLabel>
          </s.SearchFormButton>

          <s.SearchFormInput
            name="text"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </s.SearchForm>
      </header>
    );
  }
}
