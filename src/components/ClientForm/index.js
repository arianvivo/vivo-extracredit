import { useState, useEffect } from 'react'
import './styles.css'

import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig";


const ClientForm = ({onConfirm}) => {

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [confirmedEmail, setConfirmedEmail] = useState('')

    const [isValidMail, setIsValidMail] = useState(false);
    const [isValidNombre, setIsValidNombre] = useState(false);
    const [isValidApellido, setIsValidApellido] = useState(false);
    const [isValidTelefono, setIsValidTelefono] = useState(false);

    const [isEverytingValid, setIsEverytingValid] = useState(false);

    const handleEmail = (evt) => {
        setEmail(evt.target.value)
    } 

    const handleConfirmedEmail = (evt) => {
        setConfirmedEmail(evt.target.value)
    }

    const handleNombre = (evt) => {
        setNombre(evt.target.value)
    }

    const handleApellido = (evt) => {
        setApellido(evt.target.value)
    }

    const handleTelefono = (evt) => {
        setTelefono(evt.target.value)
    }


    useEffect(() => {

        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(email !== confirmedEmail) {
            console.log("email is not valid");
            setIsValidMail(false);
        }else if (!email.match(mailformat)) {
            console.log("email is not valid");
            setIsValidMail(false);
        }else if (email === '') {
            console.log("email is not valid");
            setIsValidMail(false);
        } else {
            console.log("email is valid");
            setIsValidMail(true);
        }
    }, [email, confirmedEmail])

    useEffect( () => {
        const regex = /^[\s\p{L}]+$/u;
        nombre.match(regex) ? setIsValidNombre(true) :setIsValidNombre(false)
    }, [nombre])

    useEffect( () => {
        const regex = /^[\s\p{L}]+$/u;
        apellido.match(regex) ? setIsValidApellido(true) : setIsValidApellido(false);
    }, [apellido])

    useEffect( () => {
        const regex = /^[0-9]+$/;
        telefono.match(regex) ? setIsValidTelefono(true) : setIsValidTelefono(false);
    }, [telefono])

    useEffect( () => {
        
        if (isValidNombre && isValidApellido && isValidTelefono && isValidMail){
         setIsEverytingValid(true) 
         console.log("Everything is valid")
        } else {
         setIsEverytingValid(false);
         console.log("Something is not valid")
        }

    }, [isValidNombre, isValidApellido, isValidTelefono, isValidMail])

    const handleConfirm = (evt) => {
        evt.preventDefault();

        const userData = {
            nombre, telefono, email
        }

        onConfirm(userData);

    }


    return (
        <form className='client-form' onSubmit={handleConfirm}>
            <section className='mail-validation'>
                <input type='text' placeholder='Nombre' value={nombre} onChange={handleNombre} />
                <span> { isValidNombre ? "✔️"  : "❌ " }</span>
            </section>

            <section className='mail-validation'>
                <input type='text' placeholder='Apellido' value={apellido} onChange={handleApellido} />
                <span> { isValidApellido ? "✔️"  : "❌ " }</span>
            </section>
            
            <section className='mail-validation'>
                <input type="text" placeholder="Teléfono" value={telefono} onChange={handleTelefono}/>
                <span> { isValidTelefono ? "✔️"  : "❌ " }</span>
            </section>
            
            <section className='mail-validation'>
                <section>
                    <input type='email' placeholder='Email' value={email} onChange={handleEmail} />
                    <input type='email' placeholder='Confirmar email' value={confirmedEmail} onChange={handleConfirmedEmail} /> 
                </section>
                <span> { isValidMail ? "✔️"  : "❌ " }</span>
            </section>

            <button className='confirmar' disabled={ isEverytingValid ? false : true } type='submit' onClick={onConfirm}>Confirmar compra!</button>
        </form>
    )
}

export default ClientForm;