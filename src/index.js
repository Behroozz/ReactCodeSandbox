import React from 'react'
import ReactDOM from 'react-dom'
import Toggle from './toggle'

function App() {
  return (
    <Toggle onToggle={on => console.log(on)}>
      <Toggle.On>The button is on</Toggle.On>
      <Toggle.Off>The button is off</Toggle.Off>
      <Toggle.Button />
    </Toggle>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
