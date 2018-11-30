// 🐨 you're going to need to use React to create react elements, so import react
import React from 'react'
// 🐨 we're going to render the FavoriteNumber component with ReactDOM so you'll need to import react-dom
import {render} from 'react-dom'
// 🐨 Here's your component:
import {FavoriteNumber} from '../favorite-number'

test('renders a number input with a label "Favorite Number"', () => {
  // 🐨 create a div (💯 document.createElement)
  const container = document.createElement('div')
  // 🐨 render the FavoriteNumber component to that div with ReactDOM.render
  render(<FavoriteNumber />, container)
  // 🐨 assert the input type attribute is a number
  const inputNode = container.querySelector('input')
  expect(inputNode.type).toEqual('number')
  //:🐨 assert the label's text content is "Favorite Number"
  const labelNode = container.querySelector('label')
  expect(labelNode.textContent).toEqual('Favorite Number')
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=react-testing-library-course&e=react-dom&em=
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
