import React from 'react'

class Counter extends React.Component {

    state = { currentNumber: this.props.startValue }


    incHandler() {
        if (this.state.currentNumber >= this.props.maxValue) {
            return
        } else
            this.setState({ currentNumber: this.state.currentNumber + 1 })
    }

    decHandler() {
        if (this.state.currentNumber <= this.props.minValue) {
            return
        } else
            this.setState({ currentNumber: this.state.currentNumber - 1 })
    }


    render() {
        return (
            <div>

                <h1>
                    {this.state.currentNumber}
                </h1>

                <button
                    onClick={this.incHandler.bind(this)}
                >
                    +
                </button>

                <button
                    onClick={this.decHandler.bind(this)}
                >
                    -
                </button>
                <div>
                    {this.state.currentNumber === this.props.minValue ?
                        <h1>
                            przekroczony zakres dolny
                        </h1>
                        :
                        this.state.currentNumber === this.props.maxValue ?
                        <h1>
                                przekroczony zakres górny
                        </h1>
                            :
                            null
                    }
                </div>

            </div>
        )
    }

}


Counter.defaultProps = {
    startValue: 0,
    minValue: -5,
    maxValue: 5
}

export default Counter