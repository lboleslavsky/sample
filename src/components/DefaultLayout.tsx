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
            <Col style={alignLeft} flex={"auto"}>
              <div style={headerStyle}>Graph list</div>
            </Col>
            <Col style={alignRight} flex={"auto"}>
              <Row style={{ padding: "1em" }}>
                <Col >
                  <Button>Export to PDF</Button>
                </Col>
                <Col>
                  <Button>Notes (3)</Button>
                </Col>
                <Col>
                  <Button>Filter</Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col style={{ width: "100%" }}>
              <div style={contentStyle}> <main style={{background:"#F7F7F7"}} className="h-screen">{children}</main></div>
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

const headerStyle: React.CSSProperties = {
  textAlign: 'left',
  color: 'black',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  display: "block"
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: 'lightgray',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: '100%',
  maxWidth: '100%',
};

const alignRight = { display: 'flex', justifyContent: 'flex-end' }
const alignLeft = { display: 'flex', justifyContent: 'flex-start' }