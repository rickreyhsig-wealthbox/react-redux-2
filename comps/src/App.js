import Button from './Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function App() {
  return <div>
    <div>
      <Button success rounded>
        <GoBell />
        Click Me!!
      </Button>
    </div>
    <div>
      <Button primary>
        <GoCloudDownload />
        Click Me!!
      </Button>
    </div>
    <div><Button danger text="Another">
      <GoDatabase />
      Another default
      </Button>
    </div>
    <div><Button warning outline>Yet another default</Button></div>
    <div><Button warning>Yellow</Button></div>
    <div><Button secondary rounded>One more default</Button></div>

  </div>
}

export default App;
