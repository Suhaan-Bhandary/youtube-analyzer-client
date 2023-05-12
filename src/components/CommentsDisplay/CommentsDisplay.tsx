import { Collapse } from 'antd';
import { Comments } from '../../types/videos.types';
import styles from './CommentsDisplay.module.css';

const { Panel } = Collapse;

type Props = {
  comments: Comments;
};

function CommentsDisplay({ comments }: Props) {
  return (
    <div className={styles.CommentsDisplay}>
      <Collapse>
        <Panel
          header={`Positive Comments [${comments.positive_comments.length}]`}
          key="1"
        >
          <ul>
            {comments.positive_comments.map((commentData) => (
              <li key={commentData.comment.cid}>
                {commentData.comment.text}
                <br />
                <span className="bold">
                  Author: {commentData.comment.author}
                </span>
                <br />
                <span className="bold">
                  Votes: {commentData.comment.votes}, Time:{' '}
                  {commentData.comment.time}
                </span>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel
          header={`Negative Comments [${comments.negative_comments.length}]`}
          key="2"
        >
          <ul>
            {comments.negative_comments.map((commentData) => (
              <li key={commentData.comment.cid}>
                {commentData.comment.text} <br />
                <span className="bold">
                  Author: {commentData.comment.author}
                </span>
                <br />
                <span className="bold">
                  Votes: {commentData.comment.votes}, Time:{' '}
                  {commentData.comment.time}
                </span>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel
          header={`Neutral Comments [${comments.neutral_comments.length}]`}
          key="3"
        >
          <ul>
            {comments.neutral_comments.map((commentData) => (
              <li key={commentData.comment.cid}>
                {commentData.comment.text} <br />
                <span className="bold">
                  Author: {commentData.comment.author}
                </span>
                <br />
                <span className="bold">
                  Votes: {commentData.comment.votes}, Time:{' '}
                  {commentData.comment.time}
                </span>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel
          header={`Spam Comments [${comments.spam_comments.length}]`}
          key="4"
        >
          <ul>
            {comments.spam_comments.map((commentData) => (
              <li key={commentData.comment.cid}>
                {commentData.comment.text} <br />
                <span className="bold">
                  Author: {commentData.comment.author}
                </span>
                <br />
                <span className="bold">
                  Votes: {commentData.comment.votes}, Time:{' '}
                  {commentData.comment.time}
                </span>
              </li>
            ))}
          </ul>
        </Panel>
      </Collapse>
    </div>
  );
}

export default CommentsDisplay;
