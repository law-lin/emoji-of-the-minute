import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Popconfirm, message } from "antd"
import "antd/dist/antd.css"
import styled from 'styled-components';
import Emoji from 'react-apple-emojis'

class EmojiButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name,
            upvote: false,
            downvoate: false,
            numvote: 0,
        }
    }

    render() { 
        const emojiStyle = {
            height: "30px",
            width: "30px",
            padding: "5px",
            zIndex: "0"
        }

        let boxStyle = {
            border: "2px solid black",
            height: "20px",
            width: "20px",
        }

        let upvote = () => {
            if(this.state.upvote === false)
            {
                this.setState({numvote: this.state.numvote + 1})
                this.setState({upvote: true})
                message.success('Upvoted emoji')
            }
            else if (this.state.downvote === true)
            {
                this.setState({numvote: this.state.numvote + 2})
                this.setState({upvote: true})
                message.success('Upvoted emoji')
            }
            else
            {
                this.setState({numvote: this.state.numvote - 1})
                this.setState({upvote: false})
                message.success('Undid upvoted emoji')
            }
        }

        let downvote = () => {
            if(this.state.downvote === false)
            {
                this.setState({numvote: this.state.numvote - 1})
                this.setState({downvote: true})
                message.success('Downvoted emoji')
            }
            else if (this.state.upvote === true)
            {
                this.setState({numvote: this.state.numvote - 2})
                this.setState({downvote: true})
                message.success('Downvoted emoji')
            }
            else
            {
                this.setState({numvote: this.state.numvote + 1})
                this.setState({downvote: false})
                message.success('Undid downvoted emoji')
            }
        }

        return ( 
            <span>
                <Popconfirm
                    title = "Vote for this emoji?" 
                    okText = "Thumbs up"
                    cancelText = "Thumbs Down"
                    onConfirm = {upvote}
                    onCancel = {downvote}
                >
                    <Emoji 
                    name = {this.state.name}
                    style = {emojiStyle}
                    />
                </Popconfirm>
            </span>
         );
    }
}
 
export default EmojiButton;