import { FC, useState, useEffect } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo';

const ExchangeRatesPage = () => {
    const [exchangeRate, setExchangeRate] = useState<number | null>(null);
    const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
      const [loading, setLoading] = useState(false);
  
  // Función para consultar el tipo de cambio
  const fetchExchangeRate = async () => {
    setLoading(true);
    try {
      // Aquí iría la llamada real a la API de Panamerican
      // Simulamos una respuesta
      await new Promise(resolve => setTimeout(resolve, 1000));
      setExchangeRate(6.92);
      setLastUpdate(new Date());
    } catch (error) {
      console.error('Error al obtener tipo de cambio:', error);
    } finally {
      setLoading(false);
    }
  };
  
  // Consultar al cargar el componente
  useEffect(() => {
    fetchExchangeRate();
  }, []);

  return (
    <>
      <Seo title={"Consulta de Tipo de Cambio"} />
      <Pageheader title='Consulta de Tipo de Cambio' heading="Market Maker" active="Tipo de Cambio" />

      <div className="main-container container-fluid">
        <Row>
          <Col xl={12}>
            <Card className="custom-card">
              <Card.Header>
                <Card.Title>Tipo de Cambio Actual</Card.Title>
              </Card.Header>
              <Card.Body className="text-center">
                {loading ? (
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Cargando...</span>
                  </div>
                ) : (
                  <>
                    <h2 className="display-4 mb-4">
                      {exchangeRate ? `${exchangeRate.toFixed(2)} Bs/USDC` : 'No disponible'}
                    </h2>
                    {lastUpdate && (
                      <p className="text-muted">
                        Última actualización: {lastUpdate.toLocaleString('es-BO')}
                      </p>
                    )}
                    <Button 
                      variant="primary" 
                      className="mt-3"
                      onClick={fetchExchangeRate}
                      disabled={loading}
                    >
                      Actualizar
                    </Button>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

ExchangeRatesPage.layout = "Contentlayout";
export default ExchangeRatesPage;