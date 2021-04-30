import React from 'react';
import { Row, Col } from 'antd';
import { footer } from './data';

export default function Footer() {
  return (
    <footer className="footer page-wrapper">
      
      <div className="footer-bottom">
        <div className="page">
          <Row>
            <Col md={4} xs={24} style={{ textAlign: 'left' }} className="mobile-hide">
              <a
                href="https://weibo.com/p/1005056420205486"
                rel="noopener noreferrer"
                target="_blank"
                style={{ color: 'rgba(256, 256, 256, 0.9)', textAlign: 'left' }}
              >
              Influencer's Gig
              </a>
            </Col>
            <Col md={20} xs={24}>
              <span
                className="mobile-hide"
                style={{ lineHeight: '16px', paddingRight: 12, marginRight: 11 }}
              >
                <a
                  href="https://docs.alipay.com/policies/privacy/antfin"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                Privacy Policy
                </a>
              </span>
              <span style={{ marginRight: 24 }} className="mobile-hide">
                <a
                  href="https://render.alipay.com/p/f/fd-izto3cem/index.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                Terms of Use
                </a>
              </span>
              <span style={{ marginRight: 12 }}>Love,</span>
              <span style={{ marginRight: 12 }}>Rishi & Karun</span>
            </Col>
          </Row>
        </div>

      </div>
    </footer>);
}
