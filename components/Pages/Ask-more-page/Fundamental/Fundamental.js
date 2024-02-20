import React from 'react';
import './Fundamental.css';
import { Container } from 'react-bootstrap';

const Fundamental = () => {
  const Fundamentaldetail = [
    {
      name: 'Required space',
      subname: 'Minimum 500 sq. ft',
      verified: '/Ask-more-detail-img/verified-dots.svg',
    },
    {
      name: 'Franchise fees',
      subname: 'Starting 4 lakh',
      button: 'More details',
      verified: '/Ask-more-detail-img/verified-dots.svg',
    },
    {
      name: 'Ave. monthly business',
      subname: '4 lakh',
      verified: '/Ask-more-detail-img/verified-dots.svg',
    },
    {
      name: '360 marketing',
      subname: 'Yes, by company side',
      verified: '/Ask-more-detail-img/verified-dots.svg',
    },
    {
      name: 'ROI covered time',
      subname: '2 years',
      verified: '/Ask-more-detail-img/verified-dots.svg',
    },
    {
      name: 'Explanation location',
      button: 'More details',
      verified: '/Ask-more-detail-img/verified-dots.svg',
    },
    {
      name: 'Profit sharing',
      subname: 'First 3 years no profit sharing',
      verified: '/Ask-more-detail-img/verified-dots.svg',
    },
    {
      name: 'How long franchise will open',
      subname: '3 months after received payment',
      verified: '/Ask-more-detail-img/verified-dots.svg',
    },
  ];

  return (
    <div className='fundamental-detail-main my-5'>
      <Container>
        <div className='fundamental-detail'>
          <Container>
            <div className='table-responsive'>
              <table className='w-100 '>
                <thead>
                  <tr className='fundamental-detail-main'>
                    <th className='text-left'>Fundamental</th>
                    <th className='text-left'>Shadow</th>
                    <th className='text-center'>Verified</th>
                  </tr>
                </thead>
                <tbody>
                  {Fundamentaldetail.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td className='d-flex fundamental-cus-btn '>
                        <span>{item.subname}</span>
                        {item.button && <button className=' mx-2'>{item.button}</button>}
                      </td>
                      <td className='text-center'><img src={item.verified} alt={item.name} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default Fundamental;
