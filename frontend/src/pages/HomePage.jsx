import React, { useState } from 'react';
import { Link as LinkIcon } from 'lucide-react';
import URLShortenForm from '../components/url/URLShortenForm';
import ShortenedURL from '../components/url/ShortenedURL';

const HomePage = () => {
  const [shortenedUrl, setShortenedUrl] = useState(null);

  const handleUrlShortened = (data) => {
    setShortenedUrl(data.short_url);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <LinkIcon className="mx-auto h-12 w-12 text-blue-500" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">URL Shortener</h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter a long URL and get a shortened version
          </p>
        </div>

        <div className="bg-white py-8 px-4 shadow rounded-lg sm:px-10">
          <URLShortenForm onSuccess={handleUrlShortened} />
          {shortenedUrl && <ShortenedURL shortUrl={shortenedUrl} />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;