import { Loader } from '../Loader/Loader';
import * as s from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <s.Div>
      <s.Button onClick={onClick} type="Submit">
        <Loader />
      </s.Button>
    </s.Div>
  );
};
