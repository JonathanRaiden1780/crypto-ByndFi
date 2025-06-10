import { FC, useState, useEffect } from 'react';
import { Card, Col, Row, Form, Button, InputGroup } from 'react-bootstrap';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo';
import DataTable from 'react-data-table-component';

interface FiatTransaction {
    id: string;
    amountSold: number;
    amountBought: number;
    exchangeRate: number;
    spread: number;
    commission: number;
    date: string;
    status: string;
  }

const TransactionsPage = () => {
  // Estados para filtros
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [filteredData, setFilteredData] = useState<FiatTransaction[]>([]);  
  // Datos de ejemplo (en producción vendrían de una API)
  const transactionsData = [
    { 
      id: 'TX123456', 
      amountSold: 10000, 
      amountBought: 1450.25, 
      exchangeRate: 6.9, 
      spread: 0.05, 
      commission: 2.5, 
      date: '2023-05-15T14:30:00', 
      status: 'Completada' 
    },
    // Más datos de ejemplo
  ];
  
  // Columnas para la tabla
  const columns = [
    { name: 'ID Transacción', selector: (row:any) => row.id, sortable: true },
    { name: 'Monto Vendido', selector: (row:any) => `Bs. ${row.amountSold.toLocaleString('es-BO')}`, sortable: true },
    { name: 'Monto Comprado', selector: (row:any) => `USDC ${row.amountBought.toLocaleString('en-US')}`, sortable: true },
    { name: 'Tipo de Cambio', selector: (row:any) => row.exchangeRate.toFixed(2), sortable: true },
    { name: 'Spread', selector: (row:any) => `${(row.spread * 100).toFixed(2)}%`, sortable: true },
    { name: 'Comisión', selector: (row:any) => `${row.commission.toFixed(2)}%`, sortable: true },
    { name: 'Fecha', selector: (row:any) => new Date(row.date).toLocaleString('es-BO'), sortable: true },
    { name: 'Estado', selector: (row:any) => row.status, sortable: true },
  ];
  
  // Función para buscar transacciones
  const searchTransactions = () => {
    // Aquí iría la lógica de filtrado real con llamadas a API
    // Por ahora usamos un filtrado simple en el frontend
    const filtered = transactionsData.filter(tx => {
      const txDate = new Date(tx.date);
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;
      
      return (
        (!transactionId || tx.id.includes(transactionId)) &&
        (!start || txDate >= start) &&
        (!end || txDate <= end)
      );
    });
    
    setFilteredData(filtered);
  };
  
  // Inicializar datos
  useEffect(() => {
    setFilteredData(transactionsData);
  }, []);
  
  // Función para exportar a CSV
  const exportToCSV = () => {
    // Implementación de exportación a CSV
    alert('Exportando a CSV...');
  };

  return (
    <>
      <Seo title={"Consulta de Transacciones"} />
      <Pageheader title='Consulta de Transacciones' heading="Market Maker" active="Transacciones" />

      <div className="main-container container-fluid">
        <Row>
          <Col xl={12}>
            <Card className="custom-card">
              <Card.Header>
                <Card.Title>Filtros de Búsqueda</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row className="row-sm">
                  <Col lg={3} md={6}>
                    <Form.Group className="form-group">
                      <Form.Label>Fecha Inicio</Form.Label>
                      <Form.Control 
                        type="date" 
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={3} md={6}>
                    <Form.Group className="form-group">
                      <Form.Label>Fecha Fin</Form.Label>
                      <Form.Control 
                        type="date" 
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={6}>
                    <Form.Group className="form-group">
                      <Form.Label>ID Transacción</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="Ingrese ID de transacción"
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={2} md={6} className="mt-4">
                    <Button 
                      variant="primary" 
                      className="btn-block"
                      onClick={searchTransactions}
                    >
                      Buscar
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          
          <Col xl={12}>
            <Card className="custom-card">
              <Card.Header className="d-flex justify-content-between">
                <Card.Title>Resultados</Card.Title>
                <Button 
                  variant="success" 
                  size="sm"
                  onClick={exportToCSV}
                >
                  Exportar CSV
                </Button>
              </Card.Header>
              <Card.Body>
                <DataTable 
                  columns={columns}
                  data={filteredData}
                  pagination
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

TransactionsPage.layout = "Contentlayout";
export default TransactionsPage;