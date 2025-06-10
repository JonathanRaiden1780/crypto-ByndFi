import { FC, useState, useEffect } from 'react';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo';
import DataTable from 'react-data-table-component';

type PageWithLayout = FC & {
    layout?: string;
  };
// Definición de la interfaz para una transacción FIAT
interface FiatTransaction {
  id: string;
  amount: number;
  concept: string;
  date: string;
  reference: string;
}

const FiatTransactionsPage: PageWithLayout = () => {
  // Estados para filtros
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filteredData, setFilteredData] = useState<FiatTransaction[]>([]);
  const [loading, setLoading] = useState(false);

  // Datos de ejemplo (en producción vendrían de una API)
  const fiatTransactionsData: FiatTransaction[] = [
    {
      id: 'FT123456',
      amount: 15000,
      concept: 'Depósito',
      date: '2023-05-15T10:30:00',
      reference: 'REF-001',
    },
    // Puedes agregar más datos aquí si lo necesitas
  ];

  // Columnas para la tabla
  const columns = [
    { name: 'ID Transacción', selector: (row: FiatTransaction) => row.id, sortable: true },
    { name: 'Monto', selector: (row: FiatTransaction) => `Bs. ${row.amount.toLocaleString('es-BO')}`, sortable: true },
    { name: 'Concepto', selector: (row: FiatTransaction) => row.concept, sortable: true },
    { name: 'Fecha', selector: (row: FiatTransaction) => new Date(row.date).toLocaleString('es-BO'), sortable: true },
    { name: 'Referencia', selector: (row: FiatTransaction) => row.reference, sortable: true },
  ];

  // Función para buscar transacciones
  const searchTransactions = () => {
    setLoading(true);
    setTimeout(() => {
      const filtered = fiatTransactionsData.filter(tx => {
        const txDate = new Date(tx.date);
        const start = startDate ? new Date(startDate) : null;
        const end = endDate ? new Date(endDate) : null;

        return (
          (!start || txDate >= start) &&
          (!end || txDate <= end)
        );
      });

      setFilteredData(filtered);
      setLoading(false);
    }, 500);
  };

  // Inicializar datos
  useEffect(() => {
    setFilteredData(fiatTransactionsData);
  }, []);

  return (
    <>
      <Seo title="Consulta de Transacciones FIAT" />
      <Pageheader title="Consulta de Transacciones FIAT" heading="Market Maker" active="Transacciones FIAT" />

      <div className="main-container container-fluid">
        <Row>
          <Col xl={12}>
            <Card className="custom-card">
              <Card.Header>
                <Card.Title>Filtros de Búsqueda</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row className="row-sm">
                  <Col lg={4} md={6}>
                    <Form.Group className="form-group">
                      <Form.Label>Fecha Inicio</Form.Label>
                      <Form.Control
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={6}>
                    <Form.Group className="form-group">
                      <Form.Label>Fecha Fin</Form.Label>
                      <Form.Control
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={12} className="mt-4">
                    <Button
                      variant="primary"
                      className="btn-block"
                      onClick={searchTransactions}
                      disabled={loading}
                    >
                      {loading ? 'Buscando...' : 'Buscar'}
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={12}>
            <Card className="custom-card">
              <Card.Header>
                <Card.Title>Transacciones FIAT</Card.Title>
              </Card.Header>
              <Card.Body>
                <DataTable
                  columns={columns}
                  data={filteredData}
                  pagination
                  progressPending={loading}
                  highlightOnHover
                  responsive
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

FiatTransactionsPage.layout = "Contentlayout";
export default FiatTransactionsPage;