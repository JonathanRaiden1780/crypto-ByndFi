import { FC, useState } from 'react';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo';

const ReportsPage = () => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [loading, setLoading] = useState(false);
  
  // Función para generar el reporte
  const generateReport = () => {
    if (!month || !year) {
      alert('Por favor seleccione mes y año');
      return;
    }
    
    setLoading(true);
    // Aquí iría la lógica real para generar el reporte
    setTimeout(() => {
      // Simulamos la generación del reporte
      const csvContent = 'id,monto_vender,monto_comprar,tipo_cambio,spread,comision\n' +
                         'TX123,10000,1450.25,6.9,0.05,2.5\n' +
                         'TX124,5000,724.63,6.9,0.05,2.5';
      
      // Crear un blob y descargarlo
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', `reporte_panamerican_${month}_${year}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setLoading(false);
    }, 1500);
  };
  
  // Generar opciones para los meses
  const months = [
    { value: '01', label: 'Enero' },
    { value: '02', label: 'Febrero' },
    { value: '03', label: 'Marzo' },
    { value: '04', label: 'Abril' },
    { value: '05', label: 'Mayo' },
    { value: '06', label: 'Junio' },
    { value: '07', label: 'Julio' },
    { value: '08', label: 'Agosto' },
    { value: '09', label: 'Septiembre' },
    { value: '10', label: 'Octubre' },
    { value: '11', label: 'Noviembre' },
    { value: '12', label: 'Diciembre' },
  ];
  
  // Generar opciones para los años (últimos 5 años)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => (currentYear - i).toString());

  return (
    <>
      <Seo title={"Reportes de Estado de Cuenta"} />
      <Pageheader title='Reportes de Estado de Cuenta' heading="Market Maker" active="Reportes" />

      <div className="main-container container-fluid">
        <Row>
          <Col xl={12}>
            <Card className="custom-card">
              <Card.Header>
                <Card.Title>Reporte Estado de Cuenta de Comisiones Panamerican</Card.Title>
              </Card.Header>
              <Card.Body>
                <p className="text-muted mb-4">
                  Genere un estado de cuenta en CSV que muestra cuánto ganó Panamerican de comisiones y spread en el periodo seleccionado.
                </p>
                
                <Row className="row-sm">
                  <Col lg={4} md={6}>
                    <Form.Group className="form-group">
                      <Form.Label>Mes</Form.Label>
                      <Form.Select 
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                      >
                        <option value="">Seleccione mes</option>
                        {months.map(m => (
                          <option key={m.value} value={m.value}>{m.label}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={6}>
                    <Form.Group className="form-group">
                      <Form.Label>Año</Form.Label>
                      <Form.Select 
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                      >
                        {years.map(y => (
                          <option key={y} value={y}>{y}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={12} className="d-flex align-items-end">
                    <Button 
                      variant="primary" 
                      className="btn-block"
                      onClick={generateReport}
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                          Generando...
                        </>
                      ) : 'Generar Reporte CSV'}
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

ReportsPage.layout = "Contentlayout";
export default ReportsPage;