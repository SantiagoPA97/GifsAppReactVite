import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Tests in hook useFetchGifs', () => {

    test('should return the initial state', () => {
        
        const { result } = renderHook( () => useFetchGifs('Naruto'));
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('should return an array of images and isLoading equals to false.', async() => {
        
        const { result } = renderHook( () => useFetchGifs('Naruto'));
        
        await waitFor( () => expect(result.current.images.length).toBeGreaterThan(0));
        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});