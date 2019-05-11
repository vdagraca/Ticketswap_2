import React, { Component } from 'react'

export default class CommentList extends Component {
    renderCommentList(comment) {
        return <li
            key={comment.id}
        ><br />
            Author:{comment.userName}
            <br />
            Comment:{comment.comment}
            <br />
        </li>
    }

    render() {
        const { comments } = this.props
        console.log('comments', comments)
        return (
            <div className="comment-list">
                <h1>Comments:</h1>
                {comments === null && 'Loading...'}
                {comments !== null &&
                    <ul className={'Commentlist'}>
                        {comments.map(this.renderCommentList)}
                    </ul>
                }
            </div>
        )
    }
}