import { useState, useEffect, useRef } from 'react';
import { GoChevronDown, GoChevronLeft} from "react-icons/go";
import Panel from './Panel';

function Dropdown({options, value, onChange}) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (divEl.current && !divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    }
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  window.timeTwo = performance.now();
  const handleOptionClick = (option) => {
    window.timeOne = performance.now();
    setIsOpen(false);

    onChange(option);

  }

  const renderedOptions = options.map((option) => {
    return (
      <div className="hover:bg-sky-100 cursor-pointer p-1" key={option.value} value={option.value} onClick={() => handleOptionClick(option)}>
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative" >
      <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
        {value?.label || 'Select...'}
        {isOpen ? <GoChevronDown className="text-lg" /> : <GoChevronLeft className="text-lg" />}
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full">
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
}

export default Dropdown;