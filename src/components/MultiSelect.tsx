import React from 'react'
import './MultiSelect.css'

interface Props {
  options: string[]
  selection: string[]
  onChange: (change: string[]) => any 
}

const MultiSelect: React.FC<Props> = ({ options, selection = [], onChange }) => {

  const toggleSelection = (s: string) => {
    const found = selection.indexOf(s) > -1

    const newSelection = found
      ? selection.filter(e => e !== s)
      : [...selection, s]

    onChange(newSelection)
  }

  const isSelected = (s: string) => selection.indexOf(s) > -1

  return (
    <div className="multi-select">
      { options.map((option, index) => <div
        className={`multi-select-option ${isSelected(option) && 'active'}`}
        key={option + index}
        onClick={() => toggleSelection(option)}> {option} </div>) }
    </div>
  );
};

export default MultiSelect
