import React from "react";
import axios from "./../../system/axios";
import { withRouter } from "react-router";
import Cookies from 'js-cookie';

import { connect } from 'react-redux';
import { setIsLogin, setUserData } from './../../store/actions';

import AuthTemplateForWelcome from "./AuthTemplateForWelcome";

const Auth = props => {

    const { setIsLogin, setUserData } = props;
    const template = props.template || null;

    const [login, setLogin] = React.useState(false);
    const [formdata, setFormdata] = React.useState({});

    const [error, setError] = React.useState(null);

    const subprops = {
        error,
        login, setLogin,
        formdata, setFormdata,
    }

    React.useEffect(() => {

        if (login) {

            axios.post('login', formdata).then(({ data }) => {

                let key = process.env.REACT_APP_TOKEN_KEY || "access_token";

                localStorage.setItem(key, data.token);
                Cookies.set(key, data.token);

                setUserData(data.user);
                setIsLogin(true);

            }).catch(error => {
                setError(axios.getError(error));
            }).then(() => {
                setLogin(false);
            });

        }

    }, [login]);

    switch (template) {

        case "for welcome":
            return <AuthTemplateForWelcome {...props} {...subprops} />
    
        default:
            return <AuthTemplateForWelcome {...props} {...subprops} />;

    }

}

const mapDispatchToProps = {
    setIsLogin, setUserData
}

export default withRouter(connect(null, mapDispatchToProps)(Auth));
