import 'jest-dom/extend-expect'
import React from 'react'
import ReactDOM from 'react-dom'
// 🐨 you'll need the getQueriesForElement function from 'dom-testing-library'
// 📖 read more in the docs: https://github.com/kentcdodds/dom-testing-library/blob/7cb84a9068fd04d17d89edb8988fcc181a40becf/README.md#within-and-getqueriesforelement-apis
import {getQueriesForElement} from 'dom-testing-library'
import {FavoriteNumber} from '../favorite-number'

test('renders a number input with a label "Favorite Number"', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FavoriteNumber />, div)
  // use getQueriesForElement with the `div` to get the "getByLabelText" query
  // use the "getByLabelText" query to get the input, then you can
  // remove the assertion on the label.
  // 📖 read more in the docs: https://github.com/kentcdodds/dom-testing-library/blob/7cb84a9068fd04d17d89edb8988fcc181a40becf/README.md#getbylabeltext
  const queries = getQueriesForElement(div)
  const labelNode = queries.getByLabelText(/favorite number/i)
  expect(labelNode).toHaveAttribute('type', 'number')
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=react-testing-library-course&e=dom-testing-library&em=
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
