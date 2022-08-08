import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { Theme } from '../../components/Theme';
import { SelectOption } from '../../components/SelectOption';
import { UseForm, FormActions } from '../../contexts/FormContext';
import { useEffect } from 'react';

export const FormStep2 = () => {

    const navigate = useNavigate();
    const {state, dispatch} = UseForm(); //state contém os dados e dispatch eu uso para alterar os dados

    useEffect(()=>{
        if(state.name === ''){
            navigate('/');
        }else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }
    },[])

    const handleNextStep = () => {
        if(state.name !== ''){
            navigate('/step3');
        }else{
            alert('Preencha os dados');
        }        
    }

    const setLevel = (level:number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    return(
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com o seu estado atual, profissionalmente</p>

                <hr/>


                <SelectOption title="Sou iniciante" description="Comecei a programar há menos de 2 anos" icon="🥳" selected={state.level === 0} onClick={()=>setLevel(0)} />
                <SelectOption title="Sou programador" description="Já programo há 2 anos ou mais" icon="😎" selected={state.level === 1} onClick={()=>setLevel(1)} />

                <Link to="/" className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Proximo</button>
            </C.Container>
        </Theme>
    );
}