
import { mount } from '@cypress/react';
import Homepage from './Homepage';

describe("Homepage component", () => {
  it('should mount', () => {
    mount(<Homepage />);
  });
})