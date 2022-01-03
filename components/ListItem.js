import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  ItemWrapper,
  LeftWrapper,
  Image,
  TitlesWrapper,
  Title,
  RightWrapper,
  Subtitle,
} from '../style/ListItem';
const ListItem = ({
  name,
  symbol,
  currentPrice,
  priceChangePercentage24hs,
  logoUrl,
  onPress,
}) => {
  const priceChangeColor =
    priceChangePercentage24hs > 0 ? '#34C759' : '#FF3B30';
  return (
    <TouchableOpacity onPress={onPress}>
      <ItemWrapper>
        {/* Left side */}
        <LeftWrapper>
          <Image source={{uri: logoUrl}} />
          <TitlesWrapper>
            <Title>{name}</Title>
            <Subtitle>{symbol.toUpperCase()}</Subtitle>
          </TitlesWrapper>
        </LeftWrapper>

        {/* Right side */}
        <RightWrapper>
          <Title>
            $
            {currentPrice.toFixed(2).toLocaleString('en-US', {currency: 'USD'})}
          </Title>
          <Subtitle style={{color: priceChangeColor}}>
            {priceChangePercentage24hs.toFixed(2)}%
          </Subtitle>
        </RightWrapper>
      </ItemWrapper>
    </TouchableOpacity>
  );
};

export default ListItem;
