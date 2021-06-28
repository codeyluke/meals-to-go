import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Address = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.caption};
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const Info = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

export const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.ui.quaternary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${({ theme }) => theme.colors.ui.quaternary};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-bottom: ${({ theme }) => theme.space[2]};
  padding-top: ${({ theme }) => theme.space[2]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
