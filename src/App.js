import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Counter from './Counter'
import Form from './Form'
import Form2 from './Form2'
import Users from './Users'
import Users2 from './Users2'

const App = () => (
  <MuiThemeProvider>
    <div>
      <Counter
        startValue={5}
        maxValue={10}
        minValue={-10}
      />
      <Form />
      <Form2 />
      <Users />
      <Users2 />
    </div>
  </MuiThemeProvider>
)


export default App
