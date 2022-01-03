import styled from 'styled-components/native';

export const ItemWrapper = styled.View`
  padding-horizontal: 16px;
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LeftWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  height: 48px;
  width: 48px;
`;

export const TitlesWrapper = styled.View`
  margin-left: 8px;
`;

export const Title = styled.Text`
  font-size: 18px;
`;

export const RightWrapper = styled.View`
    align-items: flex-end;
`;

export const Subtitle = styled.Text`
  margin-top: 4px;
  font-size: 14px;
  color: #a9abb1;
`;
