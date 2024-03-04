import React from "react";

interface EmailTemplateProps{
    name: string;
    email: string;
    message:string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    email,
    message
}) => {
    return (
        <div>
            <h1>Hi, my name is {name}!</h1>
            <p>{message}</p>
            <p>Send me a reply to my email: {email}</p>
        </div>
    )
}