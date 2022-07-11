
import { mount } from '@cypress/react';
import Product from './Product';
import {products} from "../fixtures/products"

describe("Product component", () => {
  it('should mount', () => {
    mount(<Product product={products[0]} />);
    cy.get('h4').contains(products[0].name);
  });
})