import {bindActionCreators} from "redux";
import {userNameAction} from "../store/userAction";
import {connect} from "react-redux";
import {Profile} from "../components/Profile/Profile";

const mapStateToProps = ({userReducer}) => {
    return {
        userName: userReducer.userName,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        userNameAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
