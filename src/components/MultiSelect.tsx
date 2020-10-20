import React, { useState } from 'react'
import './MultiSelect.css'

interface Props {
  options: string[]
}

const MultiSelect: React.FC<Props> = ({ options }) => {
  const [selection, setSelection] = useState<string[]>([])

  const toggleSelection = (s: string) => {
    const found = selection.indexOf(s) > -1

    if (found) {
      setSelection(selection.filter(e => e !== s))
    } else {
      setSelection([...selection, s])
    }
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
