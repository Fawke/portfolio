let display = false;

const onShowDetailsToggle = () => {
  if (!display) {
    display = true;
    render();
  } else {
    display = false;
    render();
  }
}

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onShowDetailsToggle}>
        {display ? 'Hide details' : 'Show details'}
      </button>
      {display ? <p>Hey. These are some details you can now see!</p> : undefined}
    </div>
  );

  ReactDOM.render(template, document.getElementById('app'));
}

render();