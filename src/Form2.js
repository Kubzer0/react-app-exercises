import React from 'react'
import TextField from 'material-ui/TextField'

class Form2 extends React.Component {
    state = {
        text: 'initial value'
    }

    render() {
        return (
            <div>
                <TextField
                    type='text'
                    value = {this.state.text}
                    onChange={(event) => this.setState({text: event.target.value})}
                />
                <TextField
                    type='text'
                    value = {this.state.text}
                    readOnly= {true}
                />
            </div>
        )
    }
}
export default Form2