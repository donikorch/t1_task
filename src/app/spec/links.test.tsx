import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import store from '../store';
import Links from '../../components/ui/Links/Links';

jest.mock('../../components/ui/Links/links.module.css', () => ({
  link: 'mocked-link-class',
}));

jest.mock('@reduxjs/toolkit/query/react', () => ({
  ...jest.requireActual('@reduxjs/toolkit/query/react'),
  fetchBaseQuery: jest.fn(),
}));

describe('Компонент Links', () => {
  it('Рендерит ссылки на каталог и FAQ?', () => {
    const { getByText } = render(
      <Router>
        <Provider store={store}>
          <Links />
        </Provider>
      </Router>,
    );

    const catalogLink = getByText('Catalog');
    const faqLink = getByText('FAQ');

    expect(catalogLink).toBeInTheDocument();
    expect(faqLink).toBeInTheDocument();
  });

  it('Рендерит ссылку на корзину, без передаваемых пропсов?', () => {
    const { getByText } = render(
      <Router>
        <Provider store={store}>
          <Links />
        </Provider>
      </Router>,
    );

    const cartLink = getByText('Cart');
    const cartIcon = getByText('Cart').querySelector('svg');

    expect(cartLink).toBeInTheDocument();
    expect(cartIcon).toBeInTheDocument();
  });

  it('Не рендерит ссылку на корзину, если значение пропса menu=true?', () => {
    const { queryByText } = render(
      <Router>
        <Provider store={store}>
          <Links menu />
        </Provider>
      </Router>,
    );

    const cartIcon = queryByText('Cart')?.querySelector('svg');

    expect(cartIcon).toBeNull();
  });

  it('Рендерит ссылку с корректным классом в зависимости от пропса variant?', () => {
    const { getByText } = render(
      <Router>
        <Provider store={store}>
          <Links variant='secondary' />
        </Provider>
      </Router>,
    );

    const catalogLink = getByText('Catalog');
    expect(catalogLink).toHaveClass('mocked-link-class');
  });

  it('Рендерит ссылку с корректным текстом и атрибутом aria-label?', () => {
    const { getByText } = render(
      <Router>
        <Provider store={store}>
          <Links />
        </Provider>
      </Router>,
    );

    const cartLink = getByText('Cart');
    expect(cartLink).toHaveAttribute('aria-label', 'Cart');
  });

  it('Рендерит ссылку с иконкой корзины, если передан пропс size=small?', () => {
    const { getByLabelText } = render(
      <Router>
        <Provider store={store}>
          <Links size='small' />
        </Provider>
      </Router>,
    );

    const cartIcon = getByLabelText('Cart');
    expect(cartIcon).toBeInTheDocument();
  });
});
