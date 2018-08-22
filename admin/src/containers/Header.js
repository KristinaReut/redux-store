import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CategotyInput from '../components/CategoryInput'
import { addCategory } from '../actions'

export const Header = ({ addTodo }) => (
  <header className="header">
    <CategotyInput
      newTodo
      onSave={(text) => {
        if (text.length !== 0) {
          addCategory(text)
        }
      }}
      placeholder="Categories"
    />
  </header>
)

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default connect(null, { addCategory })(Header)