import React from 'react'

export default function Alert(props){
                                            //here we accepted the alert{which is a simple js object} using props then displayed alert with its content
    return(
        props.alert && <div class="alert alert-info" role="alert">       {/*here if you see the props.alert&& this is here to prevent the error we get when props.alert is empty so it will first check if alert is set if true then only it will execute next code*/}
            {props.alert.type}: {props.alert.mess}            
        </div>
    );

}