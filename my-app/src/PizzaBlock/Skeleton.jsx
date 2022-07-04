import React from 'react';
import ContentLoader from 'react-content-loader';
import '../scss/app.scss'

const Skeleton = (props) => (
    <ContentLoader 
    className='pizza-block'
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="137" cy="119" r="103" /> 
    <rect x="-1" y="238" rx="15" ry="15" width="280" height="32" /> 
    <rect x="0" y="299" rx="10" ry="10" width="280" height="76" /> 
    <rect x="0" y="397" rx="7" ry="7" width="90" height="30" /> 
    <rect x="124" y="397" rx="9" ry="9" width="152" height="30" /> 
    <rect x="226" y="417" rx="0" ry="0" width="16" height="0" />
  </ContentLoader>
);

export default Skeleton;
