import React, { useState } from 'react';
import { shortenUrl } from '../../api/urlApi';
import Button from '../common/Button';
import Input from '../common/Input';

const URLShortenForm = ({ onSuccess }) => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await shortenUrl(url);
      setUrl('');
      onSuccess(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        type="url"
        id="url"
        label="URL to shorten"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://example.com"
        required
        error={error}
      />
      <Button
        type="submit"
        isLoading={isLoading}
        disabled={!url}
      >
        Shorten URL
      </Button>
    </form>
  );
};

export default URLShortenForm;