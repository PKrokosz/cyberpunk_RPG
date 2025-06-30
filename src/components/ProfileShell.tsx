import React, { useState } from 'react';

interface ProfileShellProps {
  onUserChange?: (user: string | null) => void;
}

const ProfileShell: React.FC<ProfileShellProps> = ({ onUserChange }) => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd.startsWith('profile')) {
      setInput('');
      return;
    }
    if (cmd.startsWith('profile inject:')) {
      const name = cmd.split(':')[1]?.trim() || '';
      if (name.toLowerCase() === 'guest' || name === '') {
        setCurrentUser(null);
        onUserChange?.(null);
      } else {
        setCurrentUser(name);
        onUserChange?.(name);
      }
    } else if (cmd === 'profile signoff') {
      setCurrentUser(null);
      onUserChange?.(null);
    }
    setInput('');
  };

  return (
    <div className="flex items-center h-8 px-2 bg-black border-b border-neon-cyan text-neon-cyan text-xs font-mono">
      <span className="flex-1">
        {currentUser ? `[LOGGED IN AS: ${currentUser.toUpperCase()}]` : '[NO USER]'}
      </span>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-black outline-none placeholder-gray-500 w-40"
          placeholder="profile ..."
        />
      </form>
    </div>
  );
};

export default ProfileShell;
