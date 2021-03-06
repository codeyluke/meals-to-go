import React from "react";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

import {
  Address,
  Icon,
  Info,
  RestaurantCard,
  RestaurantCardCover,
  Rating,
  Section,
  SectionEnd,
} from "./restaurant-info-card.styles";
import { Favourite } from "../../../components/favourites/favourite.component";

function RestaurantInfoCard({ restaurant = {} }) {
  const {
    address = "100 some random street",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    isOpenNow = true,
    isClosedTemporarily = true,
    name = "Some restaurant",
    photos = ["https://picsum.photos/700"],
    rating = 4,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <RestaurantCard>
        <Favourite restaurant={restaurant} />
        <RestaurantCardCover
          key={name}
          source={{
            uri: photos[0],
          }}
        />
        <Info>
          <Text variant="label">{name}</Text>
          <Section>
            <Rating>
              {ratingArray.map((_, i) => (
                <SvgXml
                  xml={star}
                  width={20}
                  height={20}
                  key={`star-${placeId}-${i}`}
                />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
              <Spacer position="left" size="large">
                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer>

              <Spacer position="left" size="large">
                <Icon source={{ uri: icon }} />
              </Spacer>
            </SectionEnd>
          </Section>
          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    </>
  );
}

export default RestaurantInfoCard;
