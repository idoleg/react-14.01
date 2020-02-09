import {bindActionCreators} from "redux";
import {userNameAction} from "../store/chatAction";
import {connect} from "react-redux";
import {Profile} from "../components/Profile/Profile";

const mapStateToProps = ({chatReducer}) => {
    console.log('name:', chatReducer.profile.userName)
    return {
        userName: chatReducer.profile.userName,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        userNameAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
