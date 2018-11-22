import React from 'react'

class Users2 extends React.Component {

    state = {
        users: null
    }

    componentDidMount() {
        fetch('https://randomuser.me/api?/results=5')
            .then(response => response.json())
            .then(data => this.setState({ users: data.results }))
    }


    render() {
        return (
            <div>
                {
                    this.state.users &&
                    this.state.users.map((user) => (
                        <div>
                           {user.email}
                        </div>
                        
                    ))
                }
            </div>
        )
    }
}


export default Users2