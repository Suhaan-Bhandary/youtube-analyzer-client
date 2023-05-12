import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Comments } from '../../types/videos.types';
import styles from './CommentsPieChart.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  comments: Comments;
};

function CommentsPieChart({ comments }: Props) {
  const data = {
    labels: ['Positive', 'Negative', 'Neutral', 'Spam'],
    datasets: [
      {
        label: 'Number of Comments',
        data: [
          comments.positive_comments.length,
          comments.negative_comments.length,
          comments.neutral_comments.length,
          comments.spam_comments.length,
        ],
        backgroundColor: [
          'rgba(0, 256, 0, 0.6)',
          'rgba(256, 0, 0, 0.6)',
          'rgba(0, 0, 256, 0.6)',
          'rgba(0, 0, 0, 0.6)',
        ],
        borderColor: [
          'rgba(0, 256, 0, 1)',
          'rgba(256, 0, 0, 1)',
          'rgba(0, 0, 256, 0.4)',
          'rgba(0, 0, 0, 0.4)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={styles.pieChart}>
      <Pie data={data} />
    </div>
  );
}

export default CommentsPieChart;
