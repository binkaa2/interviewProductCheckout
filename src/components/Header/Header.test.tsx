
import { mount } from '@cypress/react';
import Header from './Header';

describe("Header component", () => {
  it('should mount', () => {
    mount(<Header />);
  });
})