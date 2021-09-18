import React from "react";
import axios from "./../../system/axios";
import { withRouter } from "react-router";

import { connect } from 'react-redux';
import { setIsLogin } from './../../store/actions';

import { Button } from "semantic-ui-react";

import './header.css';

const Header = props => {

    const { setIsLogin } = props;

    const [logout, setLogout] = React.useState(false);

    const doneLogout = () => {

        props.history.push("/");
        setIsLogin(false);

        return null;

    }

    React.useEffect(() => {

        if (logout) {

            axios.post('logout').then(() => {
                doneLogout();
            }).catch(error => {

                if (error?.response?.status === 401)
                    return doneLogout();

                axios.errorToast(error);
                setLogout(false);

            });

        }

    }, [logout]);

    return <div className="d-flex justify-content-between align-items-center header-block">
        
        <div className="header-logo" onClick={() => props.history.push("/")}>
            <img src="/logo192.png" alt="logo" />
            <strong>Kolgaev.ru</strong>
            <span>Шаблонизатор</span>
        </div>

        <div>
            <Button
                icon="log out"
                basic
                className="btn-compact"
                title="Выход"
                onClick={() => setLogout(true)}
                loading={logout}
                disabled={logout}
            />
        </div>

    </div>

}

const mapDispatchToProps = {
    setIsLogin
}

export default withRouter(connect(null, mapDispatchToProps)(Header));