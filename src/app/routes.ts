/**
 * Маршруты приложения
 * Beauty Sphere — профессиональная платформа для косметологов
 */

import { createHashRouter } from 'react-router';

// Beauty Sphere компоненты
import { BeautySphereLayout } from './components/beauty-sphere/layout';
import { HomePage } from './components/beauty-sphere/home-page';
import { CatalogPage } from './components/beauty-sphere/catalog-page';
import { SeminarsPage } from './components/beauty-sphere/seminars-page';
import { ProductDetailPage } from './components/beauty-sphere/product-detail-page';
import { AboutBeautySpherePage } from './components/beauty-sphere/about-page';
import { ClubPage } from './components/beauty-sphere/club-page';
import { BrandsPage } from './components/beauty-sphere/brands-page';

// Обработка ошибок
import { ErrorBoundary } from './components/error-boundary';
import { NotFound } from './components/not-found';

export const router = createHashRouter([
  /* Beauty Sphere — основной сайт */
  {
    path: '/',
    Component: BeautySphereLayout,
    ErrorBoundary: ErrorBoundary,
    children: [
      /* Главная страница */
      { index: true, Component: HomePage },
      /* Каталог с фильтрами */
      { path: 'catalog', Component: CatalogPage },
      /* Детальная страница продукта */
      { path: 'product/:id', Component: ProductDetailPage },
      /* Бренды */
      { path: 'brands', Component: BrandsPage },
      /* Семинары */
      { path: 'seminars', Component: SeminarsPage },
      /* Профессиональный клуб */
      { path: 'club', Component: ClubPage },
      /* О нас */
      { path: 'about', Component: AboutBeautySpherePage },
      /* Catch-all для неизвестных роутов */
      { path: '*', Component: NotFound },
    ],
  },
]);
