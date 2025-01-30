import { API_BASE_URL } from '../config/api.config';

export const shortenUrl = async (url) => {
  try {
    console.log('Sending request to:', `${API_BASE_URL}/shorten`);
    console.log('Request payload:', { url });
    
    const response = await fetch(`${API_BASE_URL}/shorten`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify({ url }),
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.error('Error response:', errorData);
        throw new Error(errorData?.error || 'Failed to shorten URL');
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to shorten URL:', error);
      throw error; }
 };