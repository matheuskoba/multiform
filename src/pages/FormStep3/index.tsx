import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { Theme } from '../../components/Theme';
import { UseForm, FormActions } from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {

    const navigate = useNavigate();
    const {state, dispatch} = UseForm(); //state contém os dados e dispatch eu uso para alterar os dados

    useEffect(()=>{
        if(state.name === ''){
            navigate('/');
        }else(
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
        )
    },[])

    const handleNextStep = () => {
       if(state.github !== '' && state.email !== ''){
            navigate('/step4');
       }else{
            alert('Preencha os dados');
       }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        })
    }

    return(
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>

                <hr/>

                <label>
                    Qual seu email?
                    <input type="text" value={state.email} onChange={handleEmailChange} />
                </label>

                <label>
                    Qual seu github?
                    <input type="url" value={state.github} onChange={handleGithubChange} />
                </label>

                <Link to="/step2" className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}