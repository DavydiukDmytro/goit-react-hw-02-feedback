import PropTypes from 'prop-types';
import { Container, Item, Button } from './FeedbackOptions.styled';
import { formatToUpperCaseFirstChar } from 'utils/formatToUpperCaseFirstChar';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Container>
      {options.map(type => (
        <Item key={type}>
          <Button type="button" onClick={() => onLeaveFeedback(type)}>
            {formatToUpperCaseFirstChar(type)}
          </Button>
        </Item>
      ))}
    </Container>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};
