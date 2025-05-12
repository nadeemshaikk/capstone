import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you today?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Buy Cars', path: '/buy' },
    { name: 'Sell Car', path: '/sell' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const handleBotResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();

    if (lowerInput.includes('services')) {
      return { text: 'We offer web development, cloud consulting, and AI integrations.', sender: 'bot' };
    } else if (lowerInput.includes('hi') || lowerInput.includes('hello')) {
      return { text: 'Hello there! How can I assist you today?', sender: 'bot' };
    } else if (lowerInput.includes('buy') || lowerInput.includes('purchase')) {
      return { text: 'You can find our available cars on the Buy page.', sender: 'bot' };
    } else if (lowerInput.includes('contact')) {
      return { text: 'You can reach us on the Contact page.', sender: 'bot' };
    } else if (lowerInput.includes('pricing')) {
      return { text: 'Pricing varies depending on the car and services. Visit car listings or contact us for details.', sender: 'bot' };
    } else if (lowerInput.includes('quick links') || lowerInput.includes('navigate') || lowerInput.includes('pages')) {
      return { type: 'quickLinks', links: quickLinks, sender: 'bot' };
    }

    return {
        type: 'fallback',
        text: 'Thank you for your message! Please choose from the options below to get started:',
        links: quickLinks,
        sender: 'bot',
      };
  };

  const renderMessage = (message, index) => {
    const isUser = message.sender === 'user';

    if (message.type === 'quickLinks' || message.type === 'fallback') {
      return (
        <div key={index} className={`p-2 my-2 ${isUser ? 'text-right' : 'text-left'}`}>
          {message.text && <p className="mb-2">{message.text}</p>}
          <div className="grid grid-cols-2 gap-2">
            {message.links.map((link, idx) => (
              <button
                key={idx}
                onClick={() => {
                  navigate(link.path);
                  setIsOpen(false);
                }}
                className="bg-blue-100 text-blue-700 hover:bg-blue-200 font-medium py-1 px-2 rounded text-sm text-left"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div
        key={index}
        className={`my-2 p-2 rounded max-w-xs ${
          isUser ? 'bg-blue-500 text-white ml-auto' : 'bg-gray-100 text-gray-900'
        }`}
      >
        {message.text}
      </div>
    );
  };

  const handleSendMessage = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      e.preventDefault();
      if (input.trim() === '') return;

      const userMsg = { text: input, sender: 'user' };
      const botReply = handleBotResponse(input);

      setMessages((prev) => [...prev, userMsg, botReply]);
      setInput('');
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg z-50 hover:bg-blue-700 transition"
        onClick={toggleChatbot}
      >
        💬
      </button>

      {/* Chat Widget */}
      <div
        className={`fixed bottom-0 right-4 w-full sm:w-96 h-[70vh] bg-white rounded-t-lg shadow-lg z-50 transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        } flex flex-col`}
      >
        {/* Header */}
        <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
          <h2 className="text-lg font-semibold">Chat Assistant</h2>
          <button onClick={toggleChatbot}>✖</button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50">
          {messages.map((msg, index) => renderMessage(msg, index))}
        </div>

        {/* Input Area */}
        <div className="flex border-t p-2">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleSendMessage}
            className="flex-1 px-3 py-2 border rounded-l-md outline-none"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatbotWidget;
