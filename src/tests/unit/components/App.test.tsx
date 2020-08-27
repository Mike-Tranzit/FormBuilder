import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import formReducer from "../../../store/reducers/formReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import App from "../../../App";

const AppWrapper = () => {
  const store = createStore(formReducer, composeWithDevTools());
  return (
      <Provider store={store}>
        <App/>
      </Provider>
  )
};

describe('<App/>', () => {
  let component: any;

  beforeEach(() => {
    component = mount(<AppWrapper/>);
  });


  test('Should have container', () => {
    expect(component.find('div.container').length).toBe(1);
  });

});
