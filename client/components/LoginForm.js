import { submitCredentials } from '../utilities/auth';
export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "Sincere@april.biz", 
            password: "hildegard.org", 
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });

    }

    submitHandler = event => {
        event.preventDefault();
        submitCredentials(this.state);
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}> 
                <div>
                    <input
                        name="email"
                        type="text"
                        placeholder="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                     />
                </div>
                <div>
                    <input
                        name="password"
                        type="password"
                        placeholder="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                </div>
                <button type="submit">
                    Submit
                </button>
            </form> 
        );
    };
};