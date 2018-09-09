import React, { Component } from 'react';
import { shallow } from 'enzyme';
import App from './App';
import requestAnimationFrame from '../tempPolyfills';
 
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter(), disableLifecycleMethods: true });

describe('App 컴포넌트 테스트', () => {
  const app = shallow(<App />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it(`initalizes the 'state' with an empty list of gifts`, () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('when clicking the `add-gift` button', () => {
    const id = 1;

    beforeEach(() => {
      // 매 테스트 전에 실행됨
      app.find('.btn-add').simulate('click');
    });

    afterEach(() => {
      // 매 테스트 후에 실행됨
      app.setState({ gifts: [] });
    });

    it('adds a new gift to `state` when clicking the `add gift` button', () => {
      expect(app.state().gifts).toEqual([{ id }]);
    });

    it('adds a new gift to the rendered list when clicking the `add gift`', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });

    it('creates a Gift component', () => {
      expect(app.find('Gift').exists()).toBe(true);
    });

    describe(`and the user wants to remove the added gift`, () => {
      beforeEach(() => {
        app.instance().removeGift(id);
      });

      it('removes the gift from `state`', () => {
        expect(app.state().gifts).toEqual([]);
      });
    })
  });
});