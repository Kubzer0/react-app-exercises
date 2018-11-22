import React from 'react'

import Counter from './Counter'

const App = () => (
  <div>
    <Counter
      startValue={5}
      maxValue={10}
      minValue={-10}
    />
  </div>
)


export default App
