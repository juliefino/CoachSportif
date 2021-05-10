import React, {useState} from 'react';
import '../../../App.css';
import Nutri from '../../nutriCard'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button, useDisclosure, Text
} from "@chakra-ui/react"

export default function Nutrition() {
    const [items, setItems] = useState(null)
    const {isOpen, onOpen, onClose} = useDisclosure()


    return (
        <div className='cards'>
            <h1>NUTRITION</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>

                    <ul className='cards__items'>

                            <Nutri
                                src='images/malbouffe.jpg'
                                text='Pas de malbouffe'
                                label='Malbouffe'
                                path="/malbouffe"
                            />

                        <Nutri
                            src='images/calcul.jpg'
                            text='Ne pas tout calculer'
                            label='Calcul'
                            path='/calculer'
                        />
                        <Nutri
                            src='images/cuisson.jpg'
                            text='Cuisson à la vapeur'
                            label='Cuisson'
                            path='/cuisson'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <Nutri
                            src='images/hydration.jpg'
                            text="L'hydratation est également importante"
                            label='Hydratation'
                            path='/hydratation'
                        />
                        <Nutri
                            src='images/fruitlegumes.jpg'
                            text="Fruits et légumes frais"
                            label='Fruits et légumes'
                            path='/fruit_legumes'
                        />
                        <Nutri
                            src='images/laitiers.jpg'
                            text="Produits laitiers"
                            label='Laitier'
                            path='/produit_laitiers'
                        />
                    </ul>

                </div>
            </div>
        </div>
    );


}