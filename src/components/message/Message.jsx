import React, { Fragment } from "react";

const Message = ({ owner, createdAt, name, text, isImage }) => {
  return (
    <Fragment>
      {owner ? (
        <li className="clearfix">
          <div className="message-data align-right">
            <span className="message-data-time">{createdAt}</span> &nbsp; &nbsp;
            <span className="message-data-name">{name}</span>{" "}
            <i className="fa fa-circle me" />
          </div>
          <div className="message other-message float-right">{text}</div>
          {isImage && (
            <img className="float-right" src={text} alt={text} width="90%" />
          )}
        </li>
      ) : (
        <li>
          <div className="message-data">
            <span className="message-data-name">
              <i className="fa fa-circle online" />
              {name}
            </span>
            <span className="message-data-time">{createdAt}</span>
          </div>
          <div className="message my-message">{text}</div>
          {isImage && <img src={text} alt={text} width="90%" />}
        </li>
      )}
    </Fragment>
  );
};

export default Message;
