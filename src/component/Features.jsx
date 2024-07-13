import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faUndoAlt, faLock } from '@fortawesome/free-solid-svg-icons';
function Features() {
  const features = [
    {
      title: 'Free delivery',
      description: 'Free delivery on all orders above Rs. 1499',
      icon: faTruck,
    },
    {
      title: 'Return within 35 days*',
      description: 'No questions asked returns and refunds',
      icon: faUndoAlt,
    },
    {
      title: 'Secure payment',
      description: 'Safe and hassle-free shopping with secure payment gateways',
      icon: faLock,
    },
  ];

  return (
    <div className="container mx-auto py-6">
      <div className="grid  p-6 grid-cols-3">
        {features.map((item, index) => (
          <div
            className="border border-gray-200 p-5 text-center"
            key={item.title}
          >
            <FontAwesomeIcon
              className="text-lime-500 text-2xl"
              icon={item.icon}
            />
            <h1 className="text-lg font-medium">{item.title}</h1>
            <p className="font-normal">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;