import React, {useEffect, useState} from 'react';
import {PayPalButton} from "react-paypal-button-v2";
import axios from 'axios';
import './PaypalForm.css';
import {isLoggedIn} from './auth.js';
import {Link} from "react-router-dom";
import {Button} from './Button';

const PaypalForm = () => {
    const [content, setContent] = useState(null);
    const url1 = "/api/isPremium";
    let idOfUser = localStorage.getItem('id');
    let idSubscription;
    let token;

    const getToken = () => {
        axios({
            method: 'post',
            url: 'https://api.sandbox.paypal.com/v1/oauth2/token',
            data: 'grant_type=client_credentials', // => this is mandatory x-www-form-urlencoded. DO NOT USE json format for this
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',// => needed to handle data parameter
                'Accept-Language': 'en_US',
            },
            auth: {
                username: 'AX6812X_V-4Clzi08FkLsbPl10aZ86x-cxNXoAAIYKhoFj1KbaEfFsyDnv3USxRObzhP_vNeJX7Stz_s',
                password: 'EAIoVjOpeGjHs2XJzRzQQ8VMuCjmUxuA5lpl_8IhDA7jrZv8msY5TKQwofXc_9TGxM3zGFo9IgyEqgdv'
            },
        }).then(response => {
            token =response.data['access_token'];
            axios.get('/api/order')
                .then(function (response) {
                    for (let i in response.data) {
                        if (response.data[i].id_user == idOfUser) {
                            idSubscription=response.data[i].id_sub;
                            cancelSub();
                        }
                    }
                })
        })
    }


    const cancelSub = () => {
        axios.post('https://api-m.sandbox.paypal.com/v1/billing/subscriptions/'+ idSubscription  +'/cancel', {},{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(response => {
            if (response.status == 204){
                axios.post('/api/expired',{
                    user_id: idOfUser
                })
                    .then((response) => {
                        if (response.data === "SUCCESS"){
                            alert("Abonnement annulé !");
                            document.location.href = "/";
                        }
                        else{
                            alert("Erreur lors de l'annulation de l'abonnement !");
                        }
                    })
            }
        })
    }

    useEffect(() => {
        axios.get(url1)
            .then(function (response) {
                for (let i in response.data) {
                    if (response.data[i].id_user == idOfUser) {
                        if (response.data[i].premium == false) {
                            setContent(
                                <>
                                    <h1>Toujours plus avec notre formule PREMIUM !</h1>
                                    <h3>Seulement 5,99 € HTVA par mois !</h3>
                                    <p>Accès à des conseils de nutritions</p>
                                    <p>Accès à des conseils de professionnels</p>
                                    <p>Un pseudo couleur or</p>
                                    <div className='container-paypal'>
                                        <PayPalButton
                                            options={{
                                                vault: true,
                                                clientId: "AX6812X_V-4Clzi08FkLsbPl10aZ86x-cxNXoAAIYKhoFj1KbaEfFsyDnv3USxRObzhP_vNeJX7Stz_s",
                                                currency: "EUR"
                                            }}
                                            createSubscription={(data, actions) => {
                                                return actions.subscription.create({
                                                    plan_id: 'P-68442339S6765701AMCNLKAQ'
                                                });
                                            }}
                                            onApprove={(data, actions) => {
                                                return actions.subscription.get().then(function (details) {
                                                    return axios.post('/api/payment', {
                                                        user_id: idOfUser,
                                                        order_id: data.orderID,
                                                        subscription_id: data.subscriptionID
                                                    })
                                                        .then(function () {
                                                            document.location.href = "/";
                                                            console.log(data);
                                                        })
                                                });
                                            }}
                                        />
                                    </div>
                                </>
                            )
                        } else {
                            setContent(
                                <>
                                    <h1>Toujours plus avec notre formule PREMIUM !</h1>
                                    <h3>Vous êtes déjà un membre PREMIUM !</h3>
                                    <button className="form-input-btn" onClick={getToken}>
                                        Annuler l'abonnement
                                    </button>
                                <p>Attention vous perdrez vos privilèges instantanément !</p>
                                </>
                            )
                        }
                    }
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [url1])

    if (isLoggedIn()) {
        return (
            <div className='container-premium'>
                {content}
            </div>
        );
    } else {
        return (
            <div className="container-premium">
                <h1>Toujours plus avec notre formule PREMIUM !</h1>
                <h3>Première semaine gratuite puis seulement 5,99 € par mois !</h3>
                <p>Accès à des conseils de nutritions</p>
                <p>Accès à des conseils de professionnels</p>
                <p>Un pseudo couleur or</p>
                <h3>Connectez vous pour vous abonner !</h3>
                <div className='hero-btns'>
                    <Button className='form-input-btn'>
                        <Link to="/login">Se connecter</Link>
                    </Button>
                </div>
            </div>
        );
    }
};

export default PaypalForm;