import React from 'react';

import {
  Text,
  Image,
} from '../../../../libs/ui';
import nobelHeroTablet from '../assets/nobel_hero_tablet.jpeg';

export const ImageHeader: React.FC<{}> = () => (
  <>
    <Image src={nobelHeroTablet} alt="nobel_hero_tablet" />
    <Text variant="caption" color="gray.600" mt={1} ml={2}>
      © Nobel Media. Photo: Nanaka Adachi
    </Text>
  </>
);
