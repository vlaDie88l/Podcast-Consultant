// import { render, screen, waitFor } from '@testing-library/react';
// import { describe, beforeEach, it, expect } from '@jest/globals';
// import userEvent from '@testing-library/user-event';
// import MainView from './MainView.jsx';

// jest.mock('../../api/api', () => ({
//   fetchTopPodcasts: jest.fn(() => Promise.resolve([])),
// }));

// describe('MainView', () => {
//   beforeEach(() => {
//     localStorage.clear();
//   });

//   it('renders search input', () => {
//     render(<MainView />);
//     const inputElement = screen.getByPlaceholderText(/Search podcasts.../i);
//     expect(inputElement).toBeInTheDocument();
//   });

//   it('fetches podcasts from API and stores them in localStorage', async () => {
//     const mockData = [
//       {
//         id: { attributes: { 'im:id': '1' } },
//         title: { label: 'Podcast 1' },
//         'im:artist': { label: 'Artist 1' },
//         'im:name': { label: 'Name 1' },
//         'im:image': [
//           { label: 'image1' },
//           { label: 'image2' },
//           { label: 'image3' },
//         ],
//       },
//       {
//         id: { attributes: { 'im:id': '2' } },
//         title: { label: 'Podcast 2' },
//         'im:artist': { label: 'Artist 2' },
//         'im:name': { label: 'Name 2' },
//         'im:image': [
//           { label: 'image1' },
//           { label: 'image2' },
//           { label: 'image3' },
//         ],
//       },
//     ];
//     const mockFetchTopPodcasts = jest.fn(() => Promise.resolve(mockData));
//     jest.mock('../../api/api', () => ({
//       fetchTopPodcasts: mockFetchTopPodcasts,
//     }));

//     render(<MainView />);
//     await waitFor(() => expect(mockFetchTopPodcasts).toHaveBeenCalledTimes(1));
//     expect(localStorage.getItem('podcastData')).toEqual(
//       JSON.stringify(mockData)
//     );
//     expect(localStorage.getItem('podcastDataTimestamp')).not.toBeNull();
//   });

//   it('retrieves podcasts from localStorage if data is less than one day old', async () => {
//     const mockData = [
//       {
//         id: { attributes: { 'im:id': '1' } },
//         title: { label: 'Podcast 1' },
//         'im:artist': { label: 'Artist 1' },
//         'im:name': { label: 'Name 1' },
//         'im:image': [
//           { label: 'image1' },
//           { label: 'image2' },
//           { label: 'image3' },
//         ],
//       },
//       {
//         id: { attributes: { 'im:id': '2' } },
//         title: { label: 'Podcast 2' },
//         'im:artist': { label: 'Artist 2' },
//         'im:name': { label: 'Name 2' },
//         'im:image': [
//           { label: 'image1' },
//           { label: 'image2' },
//           { label: 'image3' },
//         ],
//       },
//     ];
//     localStorage.setItem('podcastData', JSON.stringify(mockData));
//     localStorage.setItem(
//       'podcastDataTimestamp',
//       Date.now() - 23 * 60 * 60 * 1000
//     );

//     render(<MainView />);
//     await waitFor(() => expect(screen.getAllByRole('link')).toHaveLength(2));
//   });

//   it('displays error message if API call fails', async () => {
//     const mockErrorMessage = 'Error fetching podcasts. Please try again later.';
//     const mockFetchTopPodcasts = jest.fn(() =>
//       Promise.reject(new Error(mockErrorMessage))
//     );
//     jest.mock('../../api/api', () => ({
//       fetchTopPodcasts: mockFetchTopPodcasts,
//     }));

//     render(<MainView />);
//     await waitFor(() => expect(mockFetchTopPodcasts).toHaveBeenCalledTimes(1));
//     expect(screen.getByText(mockErrorMessage)).toBeInTheDocument();
//   });

//   it('filters podcasts by title or artist name', async () => {
//     const mockData = [
//       {
//         id: { attributes: { 'im:id': '1' } },
//         title: { label: 'Podcast 1' },
//         'im:artist': { label: 'Artist 1' },
//         'im:name': { label: 'Name 1' },
//         'im:image': [
//           { label: 'image1' },
//           { label: 'image2' },
//           { label: 'image3' },
//         ],
//       },
//       {
//         id: { attributes: { 'im:id': '2' } },
//         title: { label: 'Podcast 2' },
//         'im:artist': { label: 'Artist 2' },
//         'im:name': { label: 'Name 2' },
//         'im:image': [
//           { label: 'image1' },
//           { label: 'image2' },
//           { label: 'image3' },
//         ],
//       },
//     ];
//     localStorage.setItem('podcastData', JSON.stringify(mockData));
//     localStorage.setItem(
//       'podcastDataTimestamp',
//       Date.now() - 23 * 60 * 60 * 1000
//     );

//     render(<MainView />);
//     const inputElement = screen.getByPlaceholderText(/Search podcasts.../i);
//     userEvent.type(inputElement, 'podcast 1');
//     expect(screen.getAllByRole('link')).toHaveLength(1);
//     expect(screen.getByText('Podcast 1')).toBeInTheDocument();
//     expect(screen.getByText('Artist 1')).toBeInTheDocument();
//   });
// });
