import React from 'react';

const DisplayCard = ({ businessData, setBusinessData }) => {
  const handleRegenerateHeadline = async () => {
    const response = await fetch(`http://localhost:5000/regenerate-headline?name=${businessData.name}&location=${businessData.location}`);
    const data = await response.json();
    setBusinessData(prevState => ({
      ...prevState,
      headline: data.headline
    }));
  };

  return (
    <div className="p-4 mt-4 rounded-lg bg-gray-50">
      <h2 className="mb-2 text-xl font-semibold">Business Data</h2>
      <p className="text-gray-700"><strong>Rating:</strong> {businessData.rating}</p>
      <p className="text-gray-700"><strong>Reviews:</strong> {businessData.reviews}</p>
      <p className="text-gray-700"><strong>Headline:</strong> {businessData.headline}</p>
      <button
        onClick={handleRegenerateHeadline}
        className="px-4 py-2 mt-4 text-white bg-green-500 rounded-md hover:bg-green-600"
      >
        Regenerate SEO Headline
      </button>
    </div>
  );
};

export default DisplayCard;
