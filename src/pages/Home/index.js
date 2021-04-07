import React from 'react';

import { BannerHome } from '../../components/BannerHome';

export default function Home() {
  const infosBanner = {
    title: 'Nikon Z7',
    subtitle: 'More than mirrorless. Nikon mirrorless.',
    text: 'Our vision has always been to create cameras and lense that capture more light. More light means more detail. More speed. More possibilities. The Z 7 brings that vision to life (and then some).',
    price: 'R$ 1550,00',
  }
    return (
      <BannerHome infos={infosBanner} />
    )
}
