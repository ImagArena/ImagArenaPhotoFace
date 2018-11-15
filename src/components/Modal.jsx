import React, { Component } from 'react';

class Modal extends Component {

	constructor() {
		super();
	}

  render = () => {
    return (
      <div id="static-modal" className={this.props.show ? "" : " hidden"}>
        <div className="modal-backdrop"></div>
				<div className="modal-contents">{this.props.children}</div>
      </div>
    )
  }

}

export default Modal;
