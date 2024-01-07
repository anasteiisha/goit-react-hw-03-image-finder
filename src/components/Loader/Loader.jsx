import { Audio } from 'react-loader-spinner';
import * as s from './Loader.styled';

export const Loader = () => {
  return (
    <s.Div>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      >
        Load more
      </Audio>
    </s.Div>
  );
};
