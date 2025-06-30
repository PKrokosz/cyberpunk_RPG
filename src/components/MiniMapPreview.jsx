import React from 'react';
import { useNavigate } from 'react-router-dom';

const MiniMapPreview = () => {
  const navigate = useNavigate();
  return (
    <img
      src="data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAAAQBACdASpQAFAAPm02mUmkIyKhIUgAgA2JaQAACfGjRo0aNGjRo0Z+AAD++sGAAAAAAA=="
      width={80}
      height={80}
      onClick={() => navigate('/map')}
      className="cursor-pointer border-cyan-500"
      alt="mini map preview"
    />
  );
};

export default MiniMapPreview;
