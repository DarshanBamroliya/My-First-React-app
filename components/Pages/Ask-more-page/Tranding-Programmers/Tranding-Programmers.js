import React from 'react'
import { Container } from 'react-bootstrap';
import './Tranding-Programmers.css'

const TrandingProgrammers = () => {
  const Tranddetail = [
    {
      icon: "/Ask-more-detail-img/star-vector.svg",
      heading: "Tranding Programmers",
      detail: "Yes, we provide the training & all .... for 4 days",
    },
    {
      icon: "/Ask-more-detail-img/star-vector.svg",
      detail: "Outlet all other / Furniture / Interior design / other All they which using in franchise outlet provide by company side.",
    },
    {
      icon: "/Ask-more-detail-img/star-vector.svg",
      detail: "All franchise handling employee find by franchise owner. We helped them but",
    },
    {
      icon: "/Ask-more-detail-img/line-vector.svg",
      detail: "Managed of services locally to be done by franchise",
    },
    {
      icon: "/Ask-more-detail-img/line-vector.svg",
      detail: "of services promotion done by franchise ",
    },
    {
      icon: "/Ask-more-detail-img/line-vector.svg",
      detail: "Local ground work  to be handled by the franchise person.",
    },
  ]
  return (
    <div className='Trand-detail-main'>
      <Container >
        <div className='Trand-detail'>
          <Container>
            {Tranddetail.map((item, index) => (
              <div key={index} className='d-flex'>
                <img src={item.icon} />
                <div className='d-flex flex-column Trand-detail-wrapp'>
                  {item.heading && <span>{item.heading}</span>}
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </Container>
        </div>
      </Container>
    </div>

  )
}

export default TrandingProgrammers;