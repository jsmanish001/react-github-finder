import React, { Component } from "react";

class UserItem extends Component {
    constructor() {
        super();
        this.state = {
            login: "defunkt",
            id: 2,
            avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
            url: "https://api.github.com/users/defunkt",
            html_url: "https://github.com/defunkt"
        }
    }
    render() {
        return (
            <div className='card text-center'>
                <img src={this.state.avatar_url} alt="" className="round-img" style={{ width: "60px" }} />
            </div>
        )
    }
}

export default UserItem;
