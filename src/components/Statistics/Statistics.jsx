import PropTypes from 'prop-types';
import { StatisticItem } from './Statistics.styled';

export const Statistics = ({ statistics, total, positivePercentage }) => {
  return (
    <>
      {Object.keys(statistics).map(kindStatistic => (
        <StatisticItem key={kindStatistic}>
          {kindStatistic}: {statistics[kindStatistic]}
        </StatisticItem>
      ))}
      <StatisticItem>Total: {total}</StatisticItem>
      <StatisticItem>Positive feedback: {positivePercentage}%</StatisticItem>
    </>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  statistics: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
