import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import axios from 'axios';

import App from '..';
import store from '../../../store';
import { defaultState, loadedState } from './state-mocks';

jest.mock('axios');

const render = state =>
  mount(
    <Provider store={store(state)}>
      <App />
    </Provider>
  );

const flushAllPromises = () => new Promise(resolve => setTimeout(resolve, 0));

describe('When user first visits www.goribbit.com', function() {
  const component = render(defaultState);

  it('LoadingScreen renders without crashing', () => {
    expect(component.find('[data-test-id="loading-screen"]').exists()).toBe(
      true
    );
  });
});

describe('When user first visits www.goribbit.com', function() {
  const component = render(loadedState);

  it('Loading screen does not render', () => {
    expect(component.find('[data-test-id="loading-screen"]').exists()).toBe(
      false
    );
  });
});
