import { Loader } from '../Loader/Loader';
import * as s from './Button.styled';

export const Button = ({ onClick, isLoading }) => {
  return (
    <s.Div>
      <s.Button onClick={onClick} type="Submit">
        {!isLoading ? 'Load more' : <Loader />}
      </s.Button>
    </s.Div>
  );
};
