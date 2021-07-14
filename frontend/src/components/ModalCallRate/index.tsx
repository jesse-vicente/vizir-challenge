import { useRef, useCallback, useState } from 'react';
import * as Yup from 'yup';

import { FiPhoneCall } from 'react-icons/fi';

import { FormHandles } from '@unform/core';

import Modal from '../Modal';
import Select from '../Select';
import Input from '../Input';

import api from '../../services/api';

import { formatter } from '../../utils/currencyFormatter';
import getValidationErrors from '../../utils/getValidationErrors';

import { Form, Title, InputGroup, Label, TotalContainer } from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const dddOptions = [
  { label: '(011) - São Paulo e região', value: '011' },
  { label: '(016) - Ribeirão Preto e região', value: '016' },
  { label: '(017) - São José do Rio Preto e região', value: '017' },
  { label: '(018) - Presidente Prudente e região', value: '018' },
];

const planOptions = [
  { label: 'FaleMais (30 minutos)', value: 30 },
  { label: 'FaleMais (60 minutos)', value: 60 },
  { label: 'FaleMais (120 minutos)', value: 120 },
]

interface CallRateFormData {
  origin: string;
  destination: string;
  duration: number;
  plan_minutes: number;
}

function ModalCallRate({ isOpen, setIsOpen }: IModalProps) {
  const formRef = useRef<FormHandles>(null);

  const [totalCurrency, setTotalCurrency] = useState(formatter.format(0));
  const [totalPlanCurrency, setTotalPlanCurrency] = useState(formatter.format(0));

  const handleSubmit = useCallback(async (data: CallRateFormData) => {
    console.log(data);


    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        duration: Yup
        .number().typeError('Campo obrigatório.')
        .positive('A duração deve ter no mínimo 1 minuto.'),
      });


      await schema.validate(data, {
        abortEarly: false,
      });

      const { origin, destination, duration, plan_minutes } = data;

      const response = await api.post('/call-rate', {
        origin,
        destination,
        duration,
        plan_minutes,
      });

      const { total, total_plan } = response.data;

      setTotalCurrency(formatter.format(total));
      setTotalPlanCurrency(formatter.format(total_plan));
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);

        formRef.current?.setErrors(errors);

        return;
      }

      alert('Não existem planos disponíveis para as regiões informadas!');
    }
  }, []);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Title>
          Calcular ligação
          <FiPhoneCall />
        </Title>

        <InputGroup>
          <Label>Origem</Label>

          <Select
            name="origin"
            options={dddOptions}
            defaultValue={{ label: '(011) - São Paulo e região', value: '011' }}
          />
        </InputGroup>

        <InputGroup>
          <Label>Destino</Label>

          <Select
            name="destination"
            options={dddOptions}
            defaultValue={{ label: '(016) - Ribeirão Preto e região', value: '016' }}
          />
        </InputGroup>

        <InputGroup>
          <Label>Duração (em minutos)</Label>

          <Input
            type="number"
            name="duration"
          />
        </InputGroup>

        <InputGroup>
          <Label>Plano</Label>

          <Select
            name="plan_minutes"
            options={planOptions}
            defaultValue={{ label: 'FaleMais (30 minutos)', value: 30 }}
          />
        </InputGroup>

        {/* {error && <strong className="error">{error}</strong>} */}

        {/* {!error && */}
          <TotalContainer>
            <p>Com o FaleMais: <strong className="green">{` ${totalPlanCurrency}`}</strong></p>
            <p>Ligação padrão: <strong >{totalCurrency}</strong></p>
          </TotalContainer>
        {/* } */}

        <button type="submit">Calcular</button>
      </Form>
    </Modal>
  );
};

export default ModalCallRate;
