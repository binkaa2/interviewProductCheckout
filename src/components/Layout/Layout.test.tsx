
import { mount } from '@cypress/react';
import Layout from './Layout';
describe("Layout component", () => {
  it('should mount', () => {
    mount(<Layout>
        </Layout>);
  });
})