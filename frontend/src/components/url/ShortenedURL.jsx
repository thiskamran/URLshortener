import React from 'react';
import { Copy, ExternalLink } from 'lucide-react';
import { API_BASE_URL } from '../../config/api.config';

const ShortenedURL = ({ shortUrl }) => {
  const fullUrl = `${API_BASE_URL}/${shortUrl}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="mt-6">
      <div className="rounded-md bg-gray-50 p-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 truncate">
            <a
              href={fullUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              {fullUrl}
            </a>
          </div>
          <div className="ml-4 flex-shrink-0 flex space-x-2">
            <button
              onClick={copyToClipboard}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Copy className="h-5 w-5" />
            </button>
            <a
              href={fullUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortenedURL;