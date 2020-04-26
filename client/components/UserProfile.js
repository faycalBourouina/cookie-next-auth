import { getUser } from '../utilities/auth';
import { USER_LOGIN, USER_PROFILE, USER_ERROR } from '../utilities/types';

import Error from 'next/error';

export default class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {}, 
            err: {}
        }
    }
     
    async componentDidMount() {
        const response = await getUser();
        if (response.type === USER_PROFILE) {
            this.setState({
                profile: response.payload
            });  
        } else if (response.type === USER_ERROR)
        this.setState({
            err: response.payload
        });
    }

    renderHelper() {
        const { profile, err } = this.state; 
        if (err) {
            return <Error statusCode={err.status} />
        }
        return <pre> {JSON.stringify(profile)} </pre>;
    }
    render() {
        return (
            <div> 
                { this.renderHelper() }
            </div>
        )
    }
}