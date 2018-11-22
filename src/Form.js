import React from 'react'

class Form extends React.Component {
    state = {
        text: 'initial value'
    }

    render() {
        return (
            <div>
                <h1>

                </h1>
                <input
                    type='text'
                    value = {this.state.text}
                    onChange={(event) => this.setState({text: event.target.value})}
                />
            </div>
        )
    }
}
export default Form