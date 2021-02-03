import React from 'react'

class SignUp extends React.Component {
    constructor(props){
        super(props);

        this.state={
            name: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        var {name} = thsi.state;

        return(
            <from onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                        type='text'
                        name={'name'}
                        value={name}
                        onChange={this.handleChange}/>
                </label>
                <input type='submit' value='Submit' />
            </from>
        )
    }
}

export default SignUp;