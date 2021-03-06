import 'jest-dom/extend-expect'
import React from 'react'

// 🐨 you'll need to import the render function from 'react-testing-library'
import {render, cleanup} from 'react-testing-library'
import {FavoriteNumber} from '../favorite-number'

afterEach(cleanup)

test('renders a number input with a label "Favorite Number"', () => {
  // 🐨 remove this ReactDOM.render call and use render from react-testing-library instead.
  // 📖 read docs here: https://github.com/kentcdodds/react-testing-library/blob/master/README.md#render
  const {getByLabelText} = render(<FavoriteNumber />)
  // 🐨 you don't need this anymore, you'll get the getByLabelText function from calling `render`
  // const {getByLabelText} = getQueriesForElement(div)
  const input = getByLabelText(/favorite number/i)
  expect(input).toHaveAttribute('type', 'number')
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=react-testing-library-course&e=react-testing-library&em=
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
