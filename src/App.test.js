import { render, screen } from "@testing-library/react";
import Router from '../src/application/Router';

// PER NO POSAR-HO A L'INICI DE CADA TEST
beforeEach(() => {render(<Router/>)
});

test('render create tab',()=>{
    // render(<Router/>);
    const createTab = screen.getByText(/create/i);
    expect(createTab).toBeInTheDocument();
})

test('render create button',()=>{
  const createButton = screen.getByRole('link', {name: /create/i});
  expect(createButton).toBeInTheDocument();
})


// screen.find = per trobar elements assíncrons
// screen.get = per trobar elements síncrons que haurien d'existri a l'app
// screen.query = per consultar elements que poden estar o no al dom

// screen.findAll = retorna tots els elements 
// screen.findBy = retorna un element únic

// eslint-disable-next-line testing-library/no-debugging-utils
// screen-debug(); = per fer un console.log del que troba 