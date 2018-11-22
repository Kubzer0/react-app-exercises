import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Counter from './Counter'
import Form from './Form'
import Form2 from './Form2'
import Users from './Users'

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
    </div>
  </MuiThemeProvider>
)


export default App
