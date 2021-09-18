import React from "react";
import { Form, Message } from "semantic-ui-react";

const AuthTemplateForWelcome = props => {

    const { error, login, setLogin } = props;
    const { formdata, setFormdata } = props;
    const [showPass, setShowPass] = React.useState(false);

    return <div className="auth-form-welcome">

        <h3>Авторизация</h3>

        <Form>

            <Form.Input
                placeholder="E-mail"
                value={formdata.email || ""}
                onChange={(e, { value }) => setFormdata({ ...formdata, email: value })}
            />

            <Form.Input
                icon={{
                    name: showPass ? "eye" : "eye slash",
                    link: true,
                    onClick: () => setShowPass(!showPass)
                }}
                placeholder="Пароль"
                type={showPass ? "text" : "password"}
                value={formdata.password || ""}
                onChange={(e, { value }) => setFormdata({ ...formdata, password: value })}
            />

            <Form.Button
                icon="sign-in alternate"
                content="Войти"
                fluid
                labelPosition="right"
                color="green"
                onClick={() => login ? null : setLogin(true)}
                loading={login}
            />

        </Form>

        {error
            ? <Message error content={error} />
            : null
        }

    </div>

}

export default AuthTemplateForWelcome;