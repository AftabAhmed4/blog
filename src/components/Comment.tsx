'use client';

import React, { useState } from 'react';

type Comment = {
  name: string;
  text: string;
};

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([
    { name: 'Tayyab', text: 'This is an amazing article. Great job!' },
    { name: 'Junaid Khan', text: 'Amazing keep it up!' },
  ]);
  const [name, setName] = useState<string>('');
  const [text, setText] = useState<string>('');

  const handleAddComment = () => {
    if (name.trim() && text.trim()) {
      setComments([...comments, { name: name.trim(), text: text.trim() }]);
      setName('');
      setText('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 border rounded-lg shadow-lg ">
      <h2 className="text-2xl font-semibold mb-6">Comments</h2>

      {/* Input Section */}
      <div className="space-y-4 mb-6">
        {/* Name Input */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-full px-4 py-2 border bg-transparent  rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
        />

        {/* Comment Input */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a comment..."
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
        ></textarea>

        {/* Submit Button */}
        <button
          onClick={handleAddComment}
          className="w-full px-4 py-2 bg-slate-500 text-white font-semibold rounded-lg hover:bg-slate-600 transition"
        >
          Add Comment
        </button>
      </div>

      {/* Display Comments */}
      {comments.length > 0 ? (
        <ul className="space-y-6">
          {comments.map((comment, index) => (
            <li key={index} className="p-4  rounded-lg border border-gray-200">
              <div className="flex items-center space-x-4 mb-2">
                <div className="bg-slate-500 text-white w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                  {comment.name.charAt(0).toUpperCase()}
                </div>
                <p className="font-medium text-lg">{comment.name}</p>
              </div>
              <p className="">{comment.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No comments yet. Be the first to comment!</p>
      )}
    </div>
  );
};

export default CommentSection;
