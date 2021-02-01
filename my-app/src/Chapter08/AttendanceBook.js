import React from 'react';

class AttendanceBook extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            students: [
                {name: 'Mike'},
                {name: 'Jane'},
                {name: 'Diana'},
                {name: 'Luna'},
                {name: 'Estelle'},
                {name: 'Silver'},
                {name: 'Aragon'},
                {name: 'Agero'},
                {name: 'Kate'},
            ]
        }
    }

    render(){
        var {students} = this.state;
        const studentList = students.map((student) => 
            <li>{student.name}</li>
        );

        return (
            <ul>{studentList}</ul>
        )
    }
}

export default AttendanceBook;