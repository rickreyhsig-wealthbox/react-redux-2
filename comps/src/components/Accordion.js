function Accordion({ items }) {
  const renderedItems = items.map((item) => {
    return (
      <div key={item.id}>
        <h3>{item.label}</h3>
        <p>{item.content}</p>
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
