import { FC, useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo';

const MarketMakerDashboard = () => {
  // Estados para almacenar los saldos
  const [bolivianosBalance, setBolivianosBalance] = useState(0);
  const [usdcBalance, setUsdcBalance] = useState(0);
  
  // Simulación de llamada a API para obtener saldos
  useEffect(() => {
    // Aquí se implementarían las llamadas reales a las APIs
    // API de Netbank para saldo en Bolivianos
    // API de DFNS para saldo en USDC
    
    // Datos de ejemplo
    setBolivianosBalance(125000.50);
    setUsdcBalance(18500.75);
  }, []);

  return (
    <>
      <Seo title={"Market Maker Dashboard"} />
      <Pageheader title='Market Maker Dashboard' heading="Market Maker" active="Dashboard" />

      <div className="main-container container-fluid">
        <Row>
          {/* Widget de Saldo en Bolivianos */}
          <Col xl={6} lg={6} md={12} sm={12}>
            <Card className="custom-card overflow-hidden">
              <Card.Header className="border-bottom-0">
                <Card.Title as='h3'>Saldo en Bolivianos</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="d-flex align-items-center">
                  <div className="avatar avatar-lg bg-primary-transparent rounded-circle text-center me-3">
                    <i className="fe fe-dollar-sign fs-20"></i>
                  </div>
                  <div>
                    <h5 className="mb-1">Bs. {bolivianosBalance.toLocaleString('es-BO')}</h5>
                    <p className="text-muted mb-0">Cuenta Panamerican</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          
          {/* Widget de Saldo en USDC */}
          <Col xl={6} lg={6} md={12} sm={12}>
            <Card className="custom-card overflow-hidden">
              <Card.Header className="border-bottom-0">
                <Card.Title as='h3'>Saldo en USDC</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="d-flex align-items-center">
                  <div className="avatar avatar-lg bg-success-transparent rounded-circle text-center me-3">
                    <i className="fe fe-credit-card fs-20"></i>
                  </div>
                  <div>
                    <h5 className="mb-1">USDC {usdcBalance.toLocaleString('en-US')}</h5>
                    <p className="text-muted mb-0">Wallet Panamerican</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        {/* Aquí se pueden agregar más componentes como gráficos o tablas resumen */}
      </div>
    </>
  );
};

MarketMakerDashboard.layout = "Contentlayout";
export default MarketMakerDashboard;