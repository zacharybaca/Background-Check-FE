import React, { Component } from 'react';
import { OauthReceiver } from 'react-oauth-flow';
var CLIENT_ID = '866746847618-ck44fdh5eh3j72elots76pg8u4icmfak.apps.googleusercontent.com';
var CLIENT_SECRET = 'gMPGtwbA2sqIQsPh-Oh6ucaM';

export default class ReceiveFromGoogle extends Component {
    handleSuccess = async (accessToken, { response, state }) => {
        console.log('Successfully authorized');
        await setProfileFromGoogle(accessToken);
        await RTCIceCandidatePairChangedEvent(state.from);
    };

    handleError = error => {
        console.error('An error occured');
        console.error(error.message);
    };

    render() {
        return (
            <OauthReceiver
                tokenUrl="www.googleapis.com/oauth2/v4/token"
                clientId={process.env.CLIENT_ID}
                clientSecret={process.env.CLIENT_SECRET}
                redirectUri="http://backgroundcheck1.netlify.com"
                onAuthSuccess={this.handleSuccess}
                onAuthError={this.handleError}
                render={({ processing, state, error }) => (
                    <div>
                        {processing && <p>Authorizing now...</p>}
                        {error && (
                            <p className="error">An error occured: {error.message}</p>
                        )}
                    </div>
                )}
            />
        );
    }
}