import React, { Component } from "react"

class Search extends Component {

    state = {
        text: ""
    }

    handleChange = e => this.setState({
        [e.target.name]: e.target.value
    })

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.text)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className='form'>
                <input onChange={this.handleChange}
                    type='text'
                    name='text'
                    value={this.state.text}
                    placeholder='Search Users...' />
                <input
                    type='submit'
                    value='Search'
                    className='btn btn-dark btn-block'
                />
            </form>
        )
    }
}

export default Search;