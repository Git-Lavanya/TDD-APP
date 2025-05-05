import { render, screen } from "@testing-library/react";
import TextInput from "./TextInput";

test('render text input component', () => {
    render(<TextInput />);
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument();
})