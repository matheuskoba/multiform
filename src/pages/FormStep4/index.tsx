import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { Theme } from '../../components/Theme';
import { SelectOption } from '../../components/SelectOption';
import { UseForm, FormActions } from '../../contexts/FormContext';
import { useEffect } from 'react';

export const FormStep4 = () => {

    const navigate = useNavigate();
    const {state, dispatch} = UseForm(); //state contém os dados e dispatch eu uso para alterar os dados

    useEffect(()=>{
        if(state.name === ''){
            navigate('/');
        }else(
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            })
        )
    },[])

    const handleNextStep = () => {
       if(state.github !== '' && state.email !== '' && state.name !== ''){
            console.log(state);
       }else{
            alert('Preencha os dados');
       }
    }

    return(
        <Theme>
            <C.Container>
                <p>Passo 4/4</p>
                <h1>Beleza {state.name}, essa é a última etapa</h1>
                <p>Confira se todos os seus dados estão corretos</p>

                <hr/>

                <C.InfoArea>
                    <p>Nome</p>
                    <h2>{state.name}</h2>
                    
                    {state.level === 0 &&
                        <SelectOption title="Sou iniciante" description="Comecei a programar há menos de 2 anos" icon="🥳" selected={state.level === 0} />
                    }
                    {state.level === 1 &&
                        <SelectOption title="Sou programador" description="Já programo há 2 anos ou mais" icon="😎" selected={state.level === 1} />    
                    }

                    <p>Email</p>
                    <h2>{state.email}</h2>

                    <p>Github</p>
                    <h2>{state.github}</h2>
                </C.InfoArea>
                
                

                <Link to="/step3" className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    );
}