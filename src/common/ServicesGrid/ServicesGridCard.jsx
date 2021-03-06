import React from 'react';
import {
  Card,
  Label,
  Description,
  Number,
} from './ServicesGrid.style';

const ServicesGridCard = ({ item, order }) => {
  const { title, description } = item;

  return (
    <Card>
      <Label>
        {title}
      </Label>
      <Description>{description}</Description>
      <Number>
        0{order + 1}
      </Number>
    </Card>
  );
};

export default ServicesGridCard;
