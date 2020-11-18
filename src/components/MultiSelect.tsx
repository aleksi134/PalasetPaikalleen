import React from 'react'
import './MultiSelect.scss'

interface Props {
  options: string[]
  selection: string[]
  onChange: (change: string[]) => any
  columns?: 1 | 2
}

const MultiSelect: React.FC<Props> = ({ options, selection = [], onChange, columns = 2 }) => {

  const toggleSelection = (s: string) => {
    const found = selection.indexOf(s) > -1

    const newSelection = found
      ? selection.filter(e => e !== s)
      : [...selection, s]

    onChange(newSelection)
  }

  const isSelected = (s: string) => selection.indexOf(s) > -1

  const classes = ['multi-select', (columns === 1) ? 'full-width' : ''].join(' ')

  return (
    <div className={classes}>
      { options.map((option, index) => <div
        className={`multi-select-option ${isSelected(option) && 'active'}`}
        key={option + index}
        onClick={() => toggleSelection(option)}> {option} </div>) }
    </div>
  );
};

export default MultiSelect
