import React from 'react';

import { userService, authenticationService, topicService } from '@/_services';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            users: null,
            topics: null
        };
    }

    componentDidMount() {
        topicService.getAll().then(topics => this.setState({ topics }));
    }

    render() {
        const { currentUser, users } = this.state;
        return (
            <div>
                <h1>Hi {currentUser.user.username}!</h1>
                <p>You're logged in</p>
                <h3>Topics</h3>
                {users &&
                <ul>
                    {topics.map(topic =>
                        <li key={topic.id}>{topic.title} {topic.content}</li>
                    )}
                </ul>
                }
            </div>
        );
    }
}

export { HomePage };