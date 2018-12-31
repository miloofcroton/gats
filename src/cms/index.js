import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import ThoughtsPostPreview from './preview-templates/ThoughtsPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('thoughts', ThoughtsPostPreview);
