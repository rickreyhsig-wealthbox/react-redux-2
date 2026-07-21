import Button from './Button';

function App() {
  return <div>
    <div><Button success rounded text="Click me!" /></div>
    <div><Button primary>text</Button></div>
    <div><Button danger text="Another">Another default</Button></div>
    <div><Button warning outline>Yet another default</Button></div>
    <div><Button warning>Yellow</Button></div>
    <div><Button secondary rounded>One more default</Button></div>

  </div>
}

export default App;
