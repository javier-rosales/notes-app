import PropTypes from 'prop-types'

const Note = ({ note, toggleImportanceOf }) => {
  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <li className='note'>
      {note.content}
      <button onClick={toggleImportanceOf}>
        {label}
      </button>
    </li>
  )
}

Note.propTypes = {
  note: PropTypes.object.isRequired,
  toggleImportanceOf: PropTypes.func.isRequired
}

export default Note
