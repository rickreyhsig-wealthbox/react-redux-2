import { useState } from 'react';


function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}


console.log(getRandomAnimal());
function App() {
  // const [count, setCount] = useState(0);
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    // when the setter function is called, it triggers a re-render
    // setCount(count + 1);
    setAnimals([...animals, getRandomAnimal()]);
  }

  return <div>
    <button onClick={handleClick}>
      Add Animal
    </button>
    <div>
      Animals: {animals.join(', ')}
    </div>
  </div>
}

export default App;