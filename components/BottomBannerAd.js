import React from 'react';
import { FacebookAds } from 'expo';

const BottomBannerAd = () => (
  <FacebookAds.BannerView
    placementId = "435076070296249_435080486962474"
    type="standard"
    onPress = { () => console.log('Banner ad clicked')}
    onError = { err => console.log('Banner ad error: ', err)}
  />
);

export default BottomBannerAd;
// banner ad id: 435076070296249_435080486962474
