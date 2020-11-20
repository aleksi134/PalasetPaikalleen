import React from 'react'
import './MultiSelect.scss'

type Option = { title: string, correct: boolean }

interface Props {
  options: Option[]
  selection: Option[]
  onChange: (change: Option[]) => any
  columns?: 1 | 2
}

const MultiSelect: React.FC<Props> = ({ options, selection = [], onChange, columns = 2 }) => {

  const toggleSelection = (o: Option) => {
    const found = selection.indexOf(o) > -1

    const newSelection = found
      ? selection.filter(e => e !== o)
      : [...selection, o]

    onChange(newSelection)
  }

  const isSelected = (o: Option) => selection.indexOf(o) > -1

  const classes = ['multi-select', (columns === 1) ? 'full-width' : ''].join(' ')

  return (
    <div className={classes}>
      { options.map((option, index) => <div
        className={`multi-select-option ${isSelected(option) && 'active'} ${!option.correct && 'incorrect'}`}
        key={option.title + index}
        onClick={() => toggleSelection(option)}> {option.title} </div>) }
    </div>
  );
};

export default MultiSelect
