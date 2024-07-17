import type { ReactNode } from 'react';
import { Button, Layout, Col, Row } from 'antd/lib';
//import { RightSquareOutlined } from '@ant-design/icons'; // Causing ERROR!
import { Content, Header } from 'antd/lib/layout/layout';

type DefaultLayoutProps = { children: ReactNode };

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Layout title={"some title"} style={layoutStyle}>
        <Header style={{ background: "white" }}>
          Some web
        </Header>
        <Content style={{ background:"#F7F7F7", padding: "3em" }}>
          
          <Row>
            <Col style={{ width: "100%" }}>
              <div style={contentStyle}> {children}</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div style={footerStyle}>...</div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#F7F7F7',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#F7F7F7',
};

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: '100%',
  maxWidth: '100%',
};
