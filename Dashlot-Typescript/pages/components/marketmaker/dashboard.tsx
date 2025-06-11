import { useRouter } from "next/router";
import { FC, useState, useEffect } from "react";
import { Card, Col, Row, Nav } from "react-bootstrap";
import Pageheader from "../../../shared/layout-components/pageheader/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import { Chartjspolar, Dash1, Dash2, Min2, Minichart3, Minichart4, StackedColumn, Trending, dashoptions, dashoptions2 } from '../../../shared/data/cryptocurrency/dashboarddata';
import { Grid } from "gridjs-react";
import { Data3 } from '../../../shared/data/tables/griddata';
import ExchangeRatesPage from "./exchanges-rates";
import FiatTransactionsPage from "./fiat-transactions";
import Reports from "../crm/reports";
import ReportsPage from "./reports";
import TransactionsPage from "./transaction";
import BlockChainPage from "./blockchain-transactions";

type PageWithLayout = FC & {
  layout?: string;
};

const MarketMakerDashboard: PageWithLayout = () => {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

  const [bolivianosBalance, setBolivianosBalance] = useState(0);
  const [usdcBalance, setUsdcBalance] = useState(0);

  const [activeComponent, setActiveComponent] = useState("transactions");

  const renderComponent = () => {
    switch (activeComponent) {
      case "transactions":
        return <TransactionsPage />;
      case "fiat":
        return <FiatTransactionsPage />;
      case "blockchain":
        return <BlockChainPage />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");
    if (isAuth === "true") {
      setAuthenticated(true);
      // Simular llamada a API
      setBolivianosBalance(125000.5);
      setUsdcBalance(18500.75);
    } else {
      // router.push('/components/login'); // o donde tengas tu login
    }
  }, [router]);

  if (!authenticated) return null;

  return (
    <>
      <Seo title={"Market Maker"} />
      <Pageheader title="Market Maker" heading="Market Maker" active="Panamerican" />

      <div className="main-container container-fluid">
        <Row>
          <Col xl={4} lg={5} md={12} sm={12}>
            <ExchangeRatesPage />
          </Col>
          {/* Widget de Saldo en USDC */}
          <Col xl={3} lg={3} md={12} sm={12}>
            <Card className="custom-card overflow-hidden">
              <Card.Header className="border-bottom-0">
                <Card.Title><h5>
                  SOL/USDC</h5></Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="d-flex align-items-center">
                  <div className="avatar avatar-lg bg-success-transparent rounded-circle text-center me-3">
                    <i className="fe fe-credit-card fs-20"></i>
                  </div>
                  <div>
                    <h5 className="mb-1">USDC ${usdcBalance.toLocaleString("en-US")}</h5>
                    <p className="text-muted mb-0">Wallet Panamerican</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* Widget de Saldo en Bolivianos */}
          <Col xl={4} lg={3} md={12} sm={12}>
            <Card className="custom-card overflow-hidden">
              <Card.Header className="border-bottom-0">
                <Card.Title as="h3">SOL/USDC</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="d-flex align-items-center">
                  <div className="avatar avatar-lg bg-primary-transparent rounded-circle text-center me-3">
                    <i className="fe fe-dollar-sign fs-20"></i>
                  </div>
                  <div>
                    ${bolivianosBalance.toLocaleString("es-BO")} <strong style={{ fontSize: "1.5em" }}>Bs</strong>
                    <p className="text-muted mb-0">Cuenta Panamerican</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <Nav variant="pills" defaultActiveKey="transactions" activeKey={activeComponent} onSelect={(selectedKey) => setActiveComponent(selectedKey || "transactions")} className="justify-content-center gap-2 flex-wrap">
              <Nav.Item>
                <Nav.Link eventKey="transactions">Transacciones</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fiat">Fiat</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="blockchain">Blockchain</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            {renderComponent()}
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <ReportsPage />
          </Col>
        </Row>
      </div>
    </>
  );
};

MarketMakerDashboard.layout = "Contentlayout";
export default MarketMakerDashboard;
