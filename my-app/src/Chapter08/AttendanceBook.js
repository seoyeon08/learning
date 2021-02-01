import React from 'react';

class AttendanceBook extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            students: [
                {id: 1, name: 'Mike'},
                {id: 2, name: 'Jane'},
                {id: 3, name: 'Diana'},
                {id: 4, name: 'Luna'},
                {id: 5, name: 'Estelle'},
                {id: 6, name: 'Silver'},
                {id: 7, name: 'Aragon'},
                {id: 8, name: 'Agero'},
                {id: 9, name: 'Kate'},
            ]
        }
    }

    render(){
        var {students} = this.state;

        return (
            <ul>
                {students.map((student) => 
                 <li key={student.id}>{student.name}</li>
                )}
            </ul>
        )
    }
}

export default AttendanceBook;