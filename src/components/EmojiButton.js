import React, { useState } from "react";
import Emoji from "react-apple-emojis";
import { Popconfirm, message } from "antd";
import "antd/dist/antd.css";
import {
  downvoteEmoji,
  unDownvoteEmoji,
  unUpvoteEmoji,
  upvoteEmoji,
} from "./Firebase/firebase";

function EmojiButton(props) {
  const [name, setName] = useState(props.name);
  const [upvote, setUpvote] = useState(false);
  const [downvote, setDownvote] = useState(false);

  const emojiStyle = {
    padding: "5px",
    zIndex: "0",
  };

  const onUpvoteClick = () => {
    if (upvote === false) {
      setUpvote(true);
      upvoteEmoji(name);
      message.success("Upvoted emoji");
    } else if (downvote === true) {
      setUpvote(true);
      upvoteEmoji(name);
      message.success("Upvoted emoji");
    } else {
      setUpvote(false);
      unUpvoteEmoji(name);
      message.success("Undid upvoted emoji");
    }
  };

  const onDownvoteClick = () => {
    if (downvote === false) {
      setDownvote(true);
      downvoteEmoji(name);
      message.success("Downvoted emoji");
    } else if (upvote === true) {
      setDownvote(true);
      downvoteEmoji(name);
      message.success("Downvoted emoji");
    } else {
      setDownvote(false);
      unDownvoteEmoji(name);
      message.success("Undid downvoted emoji");
    }
  };

  let thumbsUp = <Emoji name="thumbs-up" width={24} />;
  let thumbsDown = <Emoji name="thumbs-down" width={24} />;
  let thumbsUpStyle = {
    backgroundColor: "#42FF00",
    borderRadius: "15px",
    border: "none",
    height: "30px",
    width: "70px",
  };
  let thumbsDownStyle = {
    backgroundColor: "#FF0000",
    borderRadius: "15px",
    border: "none",
    height: "30px",
    width: "70px",
  };
  return (
    <span>
      <Popconfirm
        title="Vote for this emoji?"
        onConfirm={onUpvoteClick}
        onCancel={onDownvoteClick}
        okText=" "
        cancelText=" "
        okButtonProps={{ icon: thumbsUp, style: thumbsUpStyle }}
        cancelButtonProps={{ icon: thumbsDown, style: thumbsDownStyle }}
        icon={<Emoji name={name} width={24} />}
      >
        <Emoji name={name} style={emojiStyle} width={48} />
      </Popconfirm>
    </span>
  );
}

export default EmojiButton;
