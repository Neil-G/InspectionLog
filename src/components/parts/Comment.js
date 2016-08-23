import React, { Component } from 'react';
import moment from 'moment';
require('./../../../public/css/custom.css')

export class Comment extends Component {
  render() {
    const { comment } = this.props
    return (
      <div className="comment-card">
        <p> {comment.title} </p>
        <p> {moment(comment.date).format("M/D/YY")} </p>
        <p> {comment.body} </p>
      </div>
    );
  }
}
