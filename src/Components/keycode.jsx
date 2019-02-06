import React, { Component } from "react";

class KeyCode extends Component {
  state = { keyCode: "Press key" };

  constructor() {
    super();
    this.setKeyCode = this.setKeyCode.bind(this);
  }

  setKeyCode(e) {
    this.setState({
      keyCode: e.keyCode,
      key: e.key,
      which: e.which,
      code: e.code
    });
  }

  render() {
    const { keyCode, key, which, code } = this.state;
    let style = { fontSize: '20vw' };
    return (
      <React.Fragment>
        <div className="row">
          <div className="col p-3">
            <h1 className="mx-auto text-center text-white align-middle" style={style}>{keyCode}</h1>
          </div>
        </div>
        {keyCode !== "Press key" && (
          <div className="row">
            <div className="col">
              <div className="card border-primary text-center">
                <div className="card-header bg-primary text-white">e.key</div>
                <div className="card-body p-1">
                  <h1 className="card-title">{key}</h1>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-success text-center">
                <div className="card-header bg-success text-white">e.which</div>
                <div className="card-body p-1">
                  <h1 className="card-title">{which}</h1>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-danger text-center">
                <div className="card-header bg-danger text-white">e.code</div>
                <div className="card-body p-1">
                  <h1 className="card-title">{code}</h1>
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }

  componentDidMount() {
    document.addEventListener("keydown", this.setKeyCode);
  }
}

export default KeyCode;
