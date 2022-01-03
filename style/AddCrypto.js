import styled from 'styled-components/native';

export const Container = styled.View`
padding: 20px;
  flex: 1;
  justify-content: center;
  align-self: stretch;
  text-align: center;
  background-color: #fafbfc;
`;

export const InputContainer = styled.View`
  height: 75%;
`;

export const BotonBack = styled.TouchableOpacity`
  flex: 1;
`;
export const TextBack = styled.Text`
  color: #385775;
`;
export const TextInput = styled.TextInput`
  align-self: stretch;
  margin-top: 20px;
  margin-bottom: 20px;
  border-width: 1px;
  border-color: #b7c0c6;
  border-radius: 10px;
`;

export const Title = styled.Text`
  text-align: left;
  color: #212B36;
  font-size: 24px;
  font-weight: bold;
`;

export const AddBoton = styled.TouchableHighlight`
  background-color: #FBD24D;
  width: 100px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const TextActive = styled.Text`
  color: #385775;
`
export const TextDisable = styled.Text`
  color: #EEEEEE;
`