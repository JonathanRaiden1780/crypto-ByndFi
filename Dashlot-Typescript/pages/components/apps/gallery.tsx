import { FC, Fragment } from 'react';
import { LightboxGallery1 } from '../../../shared/data/apps/gallerydata';
import PageheaderDB from '../../../shared/layout-components/pageheader/pageheaderDB';
import Seo from '@/shared/layout-components/seo/seo';

const Gallery = () => {
  return (
    <Fragment>
      <Seo title={"Gallery "} />
      <PageheaderDB heading="Apps" active="Gallery" />
      <div className="main-container container-fluid">
        <LightboxGallery1 />
      </div>
    </Fragment>
  );
};
Gallery.layout = "Contentlayout";
export default Gallery;
