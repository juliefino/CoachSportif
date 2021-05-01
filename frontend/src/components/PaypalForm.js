import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import axios from 'axios';
import './PaypalForm.css';

const PaypalForm = () => {
    return (
        <div className='container-premium'>
            <h1>Toujours plus avec notre formule PREMIUM !</h1>
            <h3>Première semaine gratuite puis seulement 5,99 € par mois !</h3>
                <p>Accès à des conseils de nutritions</p>
                <p>Accès à des conseils de professionnels</p>
                <p>Un Pseudo couleur or</p>
            <div className='container-paypal'>
                    <PayPalButton
                        options={{
                            vault: true,
                            clientId: "AX6812X_V-4Clzi08FkLsbPl10aZ86x-cxNXoAAIYKhoFj1KbaEfFsyDnv3USxRObzhP_vNeJX7Stz_s",
                            currency: "EUR"
                        }}
                        createSubscription={(data, actions) => {
                          return actions.subscription.create({
                            plan_id: 'P-6DW43585EH102802KMCFR64Y'
                          });
                        }}
                        onApprove={(data, actions) => {
                          // Capture the funds from the transaction
                          return actions.subscription.get().then(function(details) {
                            // Show a success message to your buyer
                            alert("Subscription completed");

                            // OPTIONAL: Call your server to save the subscription
                            return axios.post('/api/payment', {
                                user_id: localStorage.getItem('id')
                            }
                            )});
                        }}
                    />
            </div>
        </div>
    );
};

export default PaypalForm;