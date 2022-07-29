import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe('Tests in GifItem component', () => {
    
    const title = 'Naruto';
    const url = 'https://naruto.com/naruto.jpg';

    test('should match snapshot', () => {
        const { container } = render(<GifItem title={ title } url={url} />);
        expect(container).toMatchSnapshot();    
    });

    test('should show the image with the src and alt indicated', () => {
        render(<GifItem title={ title } url={url} />);
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url); 
        expect(alt).toBe(title); 
    });

    test('should show the title in the component', () => { 
        render(<GifItem title={ title } url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });


 })