import React from 'react';
import Image from 'next/image';

function Logo(props:any) {
    const {renderDefault,title}=props;
  return (
    <div className='flex item-center space-x-2'>
      <Image className='rounded-full object-cover' 
      height={50} width={50}
      src="/logo.jpg"alt="logo"/>
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
