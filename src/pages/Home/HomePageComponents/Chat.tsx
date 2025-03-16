import React, { useState } from 'react';
import { useStore } from '../../../store/useStore';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/index.mjs';

interface Message {
  role: 'user' | 'ai';
  content: string;
}

const Chat: React.FC = () => {
  const { storedApiKey, openAIVersion, selectedRole } = useStore();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');

  const handleSendMessage = async () => {
    if (input.trim()) {
      // Add the user's message to the chat
      const userMessage: Message = { role: 'user', content: input };
      setMessages((prev) => [...prev, userMessage]);
      const userInput = input;
      setInput('');

      try {
        const client = new OpenAI({
          apiKey: storedApiKey,
          dangerouslyAllowBrowser: true,
        });

        // Build the message payload with proper typing.
        let messagePayload: ChatCompletionMessageParam;
        if (selectedRole === 'function') {
          // When the role is "function", a "name" property is required.
          messagePayload = {
            role: selectedRole,
            content: userInput,
            name: 'defaultFunction',
          };
        } else {
          // For other roles, the "name" property should not be present.
          messagePayload = {
            role: selectedRole,
            content: userInput,
          } as ChatCompletionMessageParam;
        }

        const completion = await client.chat.completions.create({
          model: openAIVersion,
          messages: [messagePayload],
        });

        const aiContent = completion.choices[0].message.content;
        const aiMessage: Message = { role: 'ai', content: aiContent ?? '' };
        setMessages((prev) => [...prev, aiMessage]);
      } catch (error: any) {
        console.error('Error fetching AI response:', error);
        const errorMessage: Message = {
          role: 'ai',
          content: 'Error: Could not fetch response.',
        };
        setMessages((prev) => [...prev, errorMessage]);
      }
    }
  };

  return (
    <div className="w-full bg-gray-800 text-white flex flex-col h-full relative">
      {/* Chat Content: Scrollable Messages */}
      <div className="flex-1 flex flex-col overflow-y-auto px-8 py-4 space-y-4 max-h-[calc(100vh-220px)]">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 rounded-md max-w-[70%] ${
              message.role === 'user'
                ? 'bg-gray-600 self-start'
                : 'bg-gray-300 text-black self-end'
            }`}
          >
            {message.content}
          </div>
        ))}
      </div>

      {/* Textarea and Submit Button */}
      <div className="left-8 flex items-center p-4 bg-gray-700 border-t border-gray-600 absolute bottom-0 right-8">
        <textarea
          className="flex-1 p-2 bg-gray-900 text-white rounded-md focus:outline-none resize-none"
          rows={3}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 p-2 bg-orange-600 text-white rounded-md hover:bg-orange-500 focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
