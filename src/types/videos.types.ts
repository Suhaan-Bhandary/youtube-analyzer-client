export type CommentData = {
  comment: {
    cid: string;
    text: string;
    time: string;
    author: string;
    channel: string;
    votes: string;
    photo: string;
    heart: boolean;
    reply: boolean;
    time_parsed: number;
  };
  analytics: {
    sentiment: number;
    text_type: string;
  };
};

export type Comments = {
  spam_comments: CommentData[];
  positive_comments: CommentData[];
  negative_comments: CommentData[];
  neutral_comments: CommentData[];
};

export type VideoData = {
  comments: Comments;
  message: string;
  isVideoGood: boolean;
};
