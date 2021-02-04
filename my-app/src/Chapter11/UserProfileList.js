import React from 'react';
import UserProfile from './UserProfile';

class UserProfileList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            users : [
                { id: 1, name: 'SeoYeon', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'Software Engineer'},
                { id: 2, name: 'Leo', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'Student'},
                { id: 3, name: 'Rabbit', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'Singer'},
                { id: 4, name: 'Luna', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'Actor'},
                { id: 5, name: 'Estelle', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'Teacher'},
                { id: 6, name: 'Etoile', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png', job: 'Professor'},
            ]
        }
    }

    render() {
        const {user} = this.state;

        return(
            <div>
                {users.map((user) => {
                    return (
                        <UserProfile
                            user={user} />
                    )
                })}
            </div>
        )
    }
}

export default UserProfileList;