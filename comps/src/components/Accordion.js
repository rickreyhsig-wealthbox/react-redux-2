import { useState } from 'react';

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    return (
      <div key={item.id}>
        <h3>{item.label}</h3>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });

  return (
    <div>
      <h1>Accordion</h1>
      {renderedItems} 
    </div>
  )
}

export default Accordion;
