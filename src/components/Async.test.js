import { render, screen } from "@testing-library/react";
import Async from "./Async";
describe('Async Component',()=>{
    test('Renders Posts if request succeeds', async ()=>{
        window.fetch = jest.fn()
        window.fetch.mockResolvedValueOnce({
            json: async ()=> [{id: 'p1', title: 'first post'}]
        })
        render(<Async/>)
        const listItemElements = await screen.findAllByRole('listitem',{},{timeout: 3000})
        // const helloworld = screen.getByText("first post", { exact: false });
        // expect(helloworld).toBeInTheDocument();
        expect(listItemElements).not.toHaveLength(0)
    })
})