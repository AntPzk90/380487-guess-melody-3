import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcome-screen.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should welcome button be pressed`, () => {
  const welcomeButtonHandler = jest.fn();

  const WelcomeScreenComponent = shallow(
      <WelcomeScreen
        errorsCount={3}
        welcomeButtonHandler={welcomeButtonHandler}
      />
  );

  const welcomeButton = WelcomeScreenComponent.find(`button.welcome__button`);

  welcomeButton.simulate(`click`);

  expect(welcomeButtonHandler).toHaveBeenCalledTimes(1);
});
