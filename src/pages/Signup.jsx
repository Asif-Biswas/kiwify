import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../images/kiwify.png";

export default function Signup() {
    const [email, setEmail] = React.useState("");
    const [email2, setEmail2] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [checkbox, setCheckbox] = React.useState(false);
    const [emailError, setEmailError] = React.useState(false);
    const [email2Error, setEmail2Error] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);
    const [checkboxError, setCheckboxError] = React.useState(false);


    const validateForm = () => {
        focusOutEmail()
        focusOutEmail2()
        focusOutPassword()
        if (emailError || email2Error || passwordError) return;
        
        if (!checkbox) {
            setCheckboxError(true);
            return;
        } else {
            setCheckboxError(false);
        }
        // submit form
        alert("Form submitted");
    }

    const focusOutEmail = () => {
        // check email is valid email
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        const emailValid = emailRegex.test(email);
        setEmailError(!emailValid);
        return emailValid;
    }

    const focusOutEmail2 = () => {
        // check email2 is equal to email
        const email2Valid = email2 === email;
        setEmail2Error(!email2Valid);
        return email2Valid;
    }

    const focusOutPassword = () => {
        // check password is at least 8 characters
        const passwordValid = password.length >= 8;
        setPasswordError(!passwordValid);
        return passwordValid;
    }


  return (
    <div>
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div>
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                    src={logo}
                    alt="Kiwify"
                    className="mx-auto h-12 w-auto"
                />
                <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                    Criar nova conta
                </h2>
                <p className="mt-2 text-center text-base leading-5 text-gray-600">
                    Ou
                    <Link
                    to={"/login"}
                    className="ml-1 font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                    >
                    entrar na sua conta existente
                    </Link>
                </p>
                </div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <div>
                    <label className="block text-sm font-medium leading-5 mb-1 text-gray-700">
                        E-mail
                    </label>
                    <div>
                        <input
                            type="text"
                            autoComplete="off"
                            name="email"
                            className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${emailError ? 'border-red-500' : ''}`}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            onBlur={focusOutEmail}
                        />
                    </div>
                    <div>
                        {emailError && <div className="mt-1 text-xs text-red-500">O e-mail deve ser válido</div>}
                        
                    </div>
                    </div>
                    <div className="mt-6">
                    <label className="block text-sm font-medium leading-5 mb-1 text-gray-700">
                        Repetir e-mail
                    </label>
                    <div>
                        <input
                            type="email"
                            autoComplete="off"
                            name="email2"
                            className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${email2Error ? 'border-red-500' : ''}`}
                            value={email2}
                            onChange={e => setEmail2(e.target.value)}
                            onBlur={focusOutEmail2}
                        />
                    </div>
                    <div>
                        {email2Error && <div className="mt-1 text-xs text-red-500">Os dois e-mails devem ser iguais.</div>}
                        
                    </div>
                    </div>
                    <div className="mt-6">
                    <label className="block text-sm font-medium leading-5 text-gray-700">
                        Senha
                    </label>
                    <div>
                        <input
                            type="password"
                            autoComplete="off"
                            name="password"
                            className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${passwordError ? 'border-red-500' : ''}`}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            onBlur={focusOutPassword}
                        />
                    </div>
                    {passwordError && <div className="mt-1 text-xs text-red-500">A senha deve ter no mínimo 8 caracteres.</div>}
                    </div>
                    <div className="mt-6">
                    <label className="relative flex items-start mt-2">
                        <div className="flex items-center h-5">
                        <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer border-red-500"
                            checked={checkbox}
                            onChange={e => setCheckbox(e.target.checked)}
                        />
                        </div>
                        <div className="ml-2 text-sm leading-5">
                        <span className="font-medium text-gray-700">
                            Eu li e aceito os
                            <a
                            href="#/"
                            target="_blank"
                            className="underline"
                            >
                            
                            termos de uso
                            </a>
                            ,
                            <a
                            href="#/"
                            target="_blank"
                            className="underline"
                            >
                            
                            termos de licença de uso de software
                            </a>
                            ,
                            <a
                            href="#/"
                            target="_blank"
                            className="underline"
                            >
                            
                            política de conteúdo
                            </a>
                            da Kiwify
                        </span>
                        {checkboxError && 
                            <div className="text-red-500 border-b-0">
                                (Esse campo é obrigatório)
                            </div>
                        }
                        </div>
                    </label>
                    </div>
                    
                    <div className="mt-6">
                    <span className="block w-full rounded-md shadow-sm">
                        <button onClick={validateForm} className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                         Criar conta
                        </button>
                    </span>
                    </div>
                </div>
                </div>
            </div>
        </div>;

    </div>
  )
}
