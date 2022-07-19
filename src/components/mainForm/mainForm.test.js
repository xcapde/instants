import { render, screen, fireEvent } from "@testing-library/react";
import Router from '../../application/Router';

// PER NO POSAR-HO A L'INICI DE CADA TEST
// beforeEach(() => {render(<MainForm/>)
beforeEach(() => {render(<Router/>)
});

// ASYNC - AWAIT PER ESPERAR QUE FACI LES ACCIONS PER FER EL TEST
test('should get a image title', async () =>{
    const buttonCreate = screen.getByRole('button',{name: /create/i});
    fireEvent.click(buttonCreate);

    const inputTitle = screen.getByLabelText(/title/i);
    const inputLocation = screen.getByLabelText(/location/i);
    const inputDescription = screen.getByLabelText(/description/i);
    const inputImageUrl = screen.getByLabelText(/image/i);
    const buttonAdd = screen.getByRole('button',{name: /share/i});

    fireEvent.change(inputTitle, {target:{value: 'Ornitorrinc'}});
    fireEvent.change(inputLocation, {target:{value: 'Vic, Catalunya'}});
    fireEvent.change(inputDescription, {target:{value: 'Amazing animal'}});
    fireEvent.change(inputImageUrl, {target:{value: 'beatuy.jpg'}});
    fireEvent.click(buttonAdd);

    const imageTitle = await screen.findByText(/Ornitorrinc/i);
    expect(imageTitle).toBeInTheDocument();
    screen.debug();
})