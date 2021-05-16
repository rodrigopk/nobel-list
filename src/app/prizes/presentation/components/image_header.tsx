import React from 'react';

import {
  Text,
  Image,
} from '../../../../libs/ui';
import nobelHeroTablet from '../assets/nobel_hero_tablet.jpeg';

export const ImageHeader: React.FC<{}> = () => (
  <>
    <Image
      src={nobelHeroTablet}
      alt="nobel_hero_tablet"
      fallbackSrc="https://via.placeholder.com/2560x960?text=nobel_hero_tablet.jpeg"
    />
    <Text variant="caption" color="gray.600" mt={1} ml={2}>
      © Nobel Media. Photo: Nanaka Adachi
    </Text>
  </>
);
