window.onload = () => {
  const e = React.createElement;

  
  class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: 1 };
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({ liked: this.state.liked + 1 });
      }, 1000)
    }

    render() {
      return e(
        'div',
        {},
        'test',
        e(
          'button',
          { onClick: () => this.setState({ liked: this.state.liked + 1 }) },
          `click${this.state.liked}`
        )
      );
    }
  }

  class Box extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: 1 };
    }

    render() {
      return e('div', {}, e('h1', {}, 'title'), e(LikeButton));
    }
  }


  const domContainer = document.querySelector('#root');
  ReactDOM.render(e(Box), domContainer);
};
