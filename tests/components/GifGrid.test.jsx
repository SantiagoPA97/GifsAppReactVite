import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

//Mock hook.
jest.mock('../../src/hooks/useFetchGifs');

describe('Tests in <GifGrid />', () => {

    const category = 'Naruto';

    test('should show the loading', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={ category }/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('should show items when the images are loaded', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Naruto',
                url: 'https://localhost/naruto.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={ category }/>);

        expect(screen.getAllByRole('img').length).toBe(2);
    });

});