window.onload = () => {
  const e = React.createElement;

  const LikeButton = () => {
    const [state, setState] = React.useState(1);

    return e(
      'div',
      {},
      'test',
      e('button', { onClick: () => setState(state + 1) }, `click${state}`)
    );
  };

  const Box = () => {
    return e('div', {}, e('h1', {}, 'title'), e(LikeButton));
  };

  const domContainer = document.querySelector('#root');
  ReactDOM.render(e(Box), domContainer);
};
