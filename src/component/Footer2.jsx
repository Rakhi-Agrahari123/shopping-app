import React from 'react';
import footerColumns from '../Data/FooterData';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Footer2() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto mt-14 px-8 py-12">
        <div className="flex justify-around flex-wrap">
          <div className="text-center m-8">
            <div className="flex gap-4 mb-8 ">
              <a href="">
                <FaInstagram size={24} />
              </a>
              <a href="">
                <FaFacebook size={24} />
              </a>
              <a href="">
                <FaTwitter size={24} />
              </a>
              <br/>
              <img className="h-20 rounded-full" src="https://th.bing.com/th/id/OIP.tZ76jxAAUrS7WRL2WsyDdQHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7" ></img >
            </div>
          </div>
          {footerColumns.map((item) => (
            <div>
              <h1 className='text-lg font-bold mb-4'>{item.title}</h1>
              <ul>
                {item.links.map((column) => (
                  <li className='mb-2'>
                    <Link to={column.url}>{column.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer2;