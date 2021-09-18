import React from 'react';
import axios from './../system/axios';
import { BrowserRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { setIsLogin, setUserData } from './../store/actions';

import { SemanticToastContainer } from 'react-semantic-toasts';
import { Loader } from 'semantic-ui-react';

import Welcome from './Welcome';
import Header from './header/Header';
import Routes from './Routes';

function App(props) {

    const { isLogin, setIsLogin } = props;
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {

        setLoading(true);

        axios.post('user').then(({ data }) => {
            setIsLogin(true);
            setUserData(data)
        }).catch(error => {

            if (error?.response?.status === 401) {

            }

        }).then(() => {
            setLoading(false);
        });

    }, []);

    if (loading)
        return <div className="global-loading"><Loader active /></div>

    return <>

        <SemanticToastContainer position="bottom-left" className="global-toasts" />

        <BrowserRouter>

            {isLogin
                ? <div className="d-flex flex-column h-100">
                    <Header />
                    <div className="h-100"><Routes /></div>
                </div>
                : <Welcome {...props} />
            }

        </BrowserRouter>

    </>

}

const mapStateToProps = state => ({
    isLogin: state.main.isLogin,
    isBlock: state.main.isBlock,
    user: state.main.user,
});

const mapDispatchToProps = {
    setIsLogin, setUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(App);