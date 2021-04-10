import React, { useState } from 'react';

import { FilterContainer, InputsRowContainer, InputRowItem } from './styles';

import { Button, InputSectionLabel } from '../../atoms';
import { Input, Modal } from '../../molecules';
import { useHousesHooks } from '../../../services/hooks';

export const FilterModal = ({ onClose, visible }) => {
  const [sizeMin, setSizeMin] = useState();
  const [sizeMax, setSizeMax] = useState();
  const [priceMin, setPriceMin] = useState();
  const [priceMax, setPriceMax] = useState();
  const [bedsMin, setBedsMin] = useState();
  const [bathsMin, setBathsMin] = useState();

  const { onFilterHousesList } = useHousesHooks();

  const onClickApply = () => {
    onFilterHousesList({
      sizeMin,
      sizeMax,
      priceMin,
      priceMax,
      bedsMin,
      bathsMin,
    });

    onClose();
  };

  return (
    <Modal visible={visible} onClose={onClose} title="Filtrar">
      <FilterContainer>
        <InputSectionLabel mt={16} mb={8}>
          Tamanho
        </InputSectionLabel>
        <InputsRowContainer>
          <InputRowItem>
            <Input
              label="Mínimo"
              placeholder="Ex: 77"
              keyboardType="numeric"
              value={sizeMin}
              onChangeText={value => setSizeMin(value)}
            />
          </InputRowItem>

          <InputRowItem>
            <Input
              label="Máximo"
              placeholder="Ex: 200"
              keyboardType="numeric"
              value={sizeMax}
              onChangeText={value => setSizeMax(value)}
            />
          </InputRowItem>
        </InputsRowContainer>

        <InputSectionLabel mt={16} mb={8}>
          Preço
        </InputSectionLabel>
        <InputsRowContainer>
          <InputRowItem>
            <Input
              label="Mínimo"
              placeholder="Ex: 500"
              keyboardType="numeric"
              value={priceMin}
              onChangeText={value => setPriceMin(value)}
            />
          </InputRowItem>

          <InputRowItem>
            <Input
              label="Máximo"
              placeholder="Ex: 2000"
              keyboardType="numeric"
              value={priceMax}
              onChangeText={value => setPriceMax(value)}
            />
          </InputRowItem>
        </InputsRowContainer>

        <InputSectionLabel mt={16} mb={8}>
          Quartos
        </InputSectionLabel>
        <InputsRowContainer>
          <InputRowItem>
            <Input
              label="Mínimo"
              placeholder="Ex: 77"
              keyboardType="numeric"
              value={bedsMin}
              onChangeText={value => setBedsMin(value)}
            />
          </InputRowItem>
        </InputsRowContainer>

        <InputSectionLabel mt={16} mb={8}>
          Banheiros
        </InputSectionLabel>
        <InputsRowContainer>
          <InputRowItem>
            <Input
              label="Mínimo"
              placeholder="Ex: 77"
              keyboardType="numeric"
              value={bathsMin}
              onChangeText={value => setBathsMin(value)}
            />
          </InputRowItem>
        </InputsRowContainer>
      </FilterContainer>

      <Button onPress={onClickApply} mt={24} mb={24}>
        Aplicar
      </Button>
    </Modal>
  );
};
