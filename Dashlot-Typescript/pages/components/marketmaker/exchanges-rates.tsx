import { FC, useState, useEffect } from 'react';
import { Card, Col, Row, Button, CardFooter } from 'react-bootstrap';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo';
import { Line } from 'react-chartjs-2';
import FiatTransactionsPage from './fiat-transactions';

const Option1: any = {

  responsive: true,
  maintainAspectRatio: false,
  aspectratio: 2,
  interaction: {
    intersect: false,
    mode: 'index',
  },
  plugins: {
    legend: {
      display: false
    },
    // tooltip: {
    //   enabled: true
    // },
  },
  scales: {
    x: {
      display: false
    },
    y: {
      display: false
    }
  },
  title: {
    display: false
  }

};
const Data1: any = {
  type: 'line',
  height: "100",
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  datasets: [{
    data: [85, 68, 78, 54, 67, 48, 79, 60, 80, 90, 0],
    label: 'PAN',
    backgroundColor: 'rgba(74, 119, 240, 0.2)',
    borderColor: '#c9bed2',
    borderWidth: '2',
    pointBorderColor: 'transparent',
    pointBackgroundColor: 'transparent',
    fill: true,
    lineTension: 0.4,
  }],
};
export function Chartjspolar() {
  return (
    <Line options={Option1} data={Data1} height='700px' />
  );
}
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

      <div className="main-container container-fluid">
        <Row>
          <Col xl={12}>

            <Card className="overflow-hidden">
              <Card.Header>
                <div className="d-flex justify-content-between align-items-center w-100">
                  <h5 className="mb-0">Tipo de Cambio Actual</h5>
                  <Button
                    variant="primary"
                    color='#4c345e !important'
                    onClick={fetchExchangeRate}
                    disabled={loading}
                  >
                    <i
                      className="fa fa-refresh"
                    ></i>
                  </Button>
                </div>
              </Card.Header>
              <Card.Body className="p-2 text-center">
                {loading ? (
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Cargando...</span>
                  </div>
                ) : (
                  <>
                    <h4 className="display-8 mb-1">
                      {exchangeRate ? `${exchangeRate.toFixed(2)} Bs/USDC` : 'No disponible'}
                    </h4>
                    {lastUpdate && (
                      <p className="text-muted">
                        Última actualización: {lastUpdate.toLocaleString('es-BO')}
                      </p>
                    )}
                  </>
                )}
              </Card.Body>
              {/*   <CardFooter>
                <div className="chart-wrapper crypto-chart">
                  <Chartjspolar />
                </div>
                <div className="chart-data">
                  <div className=" d-flex  mt-15">
                    <div className="text-start ps-3">
                      <p className="no-margin">Panamerican<span className="text-gray mx-2">PAN</span> <span className="text-info">$0.04</span></p>
                    </div>
                    <div className="text-end ms-auto pe-3">
                      <p className="no-margin"><span className="text-danger">-1.33%</span></p>
                    </div>
                  </div>
                </div> 
              </CardFooter> */}
            </Card>
          </Col>
        </Row>

      </div>
    </>
  );
};

ExchangeRatesPage.layout = "Contentlayout";
export default ExchangeRatesPage;