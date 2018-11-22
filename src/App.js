import React from 'react'

import Counter from './Counter'
import Form from './Form'

const App = () => (
  <div>
    <Counter
      startValue={5}
      maxValue={10}
      minValue={-10}
    />
    <Form />
  </div>
)


export default App
