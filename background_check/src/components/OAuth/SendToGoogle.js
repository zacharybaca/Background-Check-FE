import React, { Component } from 'react';
import { OauthSender} from 'react-oauth-flow';
var CLIENT_ID = '866746847618-ck44fdh5eh3j72elots76pg8u4icmfak.apps.googleusercontent.com';
var url = 'https://accounts.google.com/o/oauth2/v2/auth?';

export default class SendToGoogle extends Component {
    render() {
        return (
            <OauthSender 
                authorizeUrl="https://accounts.google.com/o/oauth2/v2/auth?"
                clientId={process.env.CLIENT_ID}
                redirectUri="http://backgroundcheck1.netlify.com"
                render={({ url }) => <a href={url}>Connect to Google</a>}
            />
        );
    }
}