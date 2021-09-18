import React from 'react';
import axios from './../system/axios';
import { toast } from 'react-semantic-toasts';

function Main(props) {

    const { title } = props;

    React.useEffect(() => {

        // axios.get('/../sanctum/csrf-cookie').then(response => {
        // axios.post('user').then(response => {
        //     console.log(response);
        // })
        // .catch(error => {
        //     axios.getError(error, "message", console.error)
        //     axios.errorToast(error);
        // });

        // setTimeout(() => {
        //     toast(
        //         {
        //             title: 'Info Toast',
        //             description: <p>This <b>is</b> a Semantic UI toast</p>,
        //             time: 0,
        //             animation: "fly right"
        //         },
        //         () => console.log('toast closed'),
        //         () => console.log('toast clicked'),
        //         () => console.log('toast dismissed')
        //     );
        // }, 1000);

        // setTimeout(() => {
        //     toast(
        //         {
        //             title: 'Info Toast',
        //             description: <p>This <b>is</b> a Semantic UI toast</p>,
        //             time: 0,
        //             animation: "fly right",
        //             type: "success"
        //         },
        //         () => console.log('toast closed'),
        //         () => console.log('toast clicked'),
        //         () => console.log('toast dismissed')
        //     );
        // }, 2000);

    }, []);

    return <>
        
    </>

}

export default Main;