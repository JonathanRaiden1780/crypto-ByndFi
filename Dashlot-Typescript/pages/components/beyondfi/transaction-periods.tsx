import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Form, Button, Table, Badge } from 'react-bootstrap';

interface TransactionPeriod {
    id: string;
    startDate: string;
    endDate: string;
    totalTransactions: number;
    totalAmount: number;
    averageAmount: number;
    status: 'active' | 'closed' | 'pending';
    description: string;
}

const TransactionPeriodsPage: React.FC = () => {
    const [periods, setPeriods] = useState<TransactionPeriod[]>([]);
    const [filters, setFilters] = useState({
        status: '',
        year: new Date().getFullYear().toString(),
        month: ''
    });

    // Datos simulados
    useEffect(() => {
        const mockPeriods: TransactionPeriod[] = [
            {
                id: 'P2024-01',
                startDate: '2024-01-01',
                endDate: '2024-01-31',
                totalTransactions: 156,
                totalAmount: 2500000,
                averageAmount: 16025.64,
                status: 'active',
                description: 'Período enero 2024'
            },
            {
                id: 'P2023-12',
                startDate: '2023-12-01',
                endDate: '2023-12-31',
                totalTransactions: 203,
                totalAmount: 3200000,
                averageAmount: 15763.55,
                status: 'closed',
                description: 'Período diciembre 2023'
            },
            {
                id: 'P2023-11',
                startDate: '2023-11-01',
                endDate: '2023-11-30',
                totalTransactions: 189,
                totalAmount: 2890000,
                averageAmount: 15291.01,
                status: 'closed',
                description: 'Período noviembre 2023'
            }
        ];
        setPeriods(mockPeriods);
    }, []);

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'active':
                return <Badge bg="success">Activo</Badge>;
            case 'closed':
                return <Badge bg="secondary">Cerrado</Badge>;
            case 'pending':
                return <Badge bg="warning">Pendiente</Badge>;
            default:
                return <Badge bg="secondary">Desconocido</Badge>;
        }
    };

    const filteredPeriods = periods.filter(period => {
        if (filters.status && period.status !== filters.status) return false;
        if (filters.year) {
            const periodYear = new Date(period.startDate).getFullYear().toString();
            if (periodYear !== filters.year) return false;
        }
        if (filters.month) {
            const periodMonth = (new Date(period.startDate).getMonth() + 1).toString().padStart(2, '0');
            if (periodMonth !== filters.month) return false;
        }
        return true;
    });

    const generateReport = (periodId: string) => {
        console.log(`Generando reporte para período: ${periodId}`);
        // Aquí iría la lógica para generar el reporte
    };

    const closePeriod = (periodId: string) => {
        setPeriods(prev => prev.map(period =>
            period.id === periodId
                ? { ...period, status: 'closed' as const }
                : period
        ));
    };

    return (
        <Row>
            <Col xl={12}>
                <Card>
                    <Card.Header>
                        <h4 className="card-title">Consulta de Períodos de Transacciones</h4>
                    </Card.Header>
                    <Card.Body>
                        {/* Filtros */}
                        <Row className="mb-4">
                            <Col md={3}>
                                <Form.Select
                                    value={filters.status}
                                    onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                                >
                                    <option value="">Todos los estados</option>
                                    <option value="active">Activo</option>
                                    <option value="closed">Cerrado</option>
                                    <option value="pending">Pendiente</option>
                                </Form.Select>
                            </Col>
                            <Col md={3}>
                                <Form.Select
                                    value={filters.year}
                                    onChange={(e) => setFilters({ ...filters, year: e.target.value })}
                                >
                                    <option value="2024">2024</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                </Form.Select>
                            </Col>
                            <Col md={3}>
                                <Form.Select
                                    value={filters.month}
                                    onChange={(e) => setFilters({ ...filters, month: e.target.value })}
                                >
                                    <option value="">Todos los meses</option>
                                    <option value="01">Enero</option>
                                    <option value="02">Febrero</option>
                                    <option value="03">Marzo</option>
                                    <option value="04">Abril</option>
                                    <option value="05">Mayo</option>
                                    <option value="06">Junio</option>
                                    <option value="07">Julio</option>
                                    <option value="08">Agosto</option>
                                    <option value="09">Septiembre</option>
                                    <option value="10">Octubre</option>
                                    <option value="11">Noviembre</option>
                                    <option value="12">Diciembre</option>
                                </Form.Select>
                            </Col>
                            <Col md={3}>
                                <Button variant="primary" onClick={() => console.log('Aplicar filtros')}>
                                    Filtrar
                                </Button>
                            </Col>
                        </Row>

                        {/* Resumen estadístico */}
                        <Row className="mb-4">
                            <Col md={3}>
                                <Card className="bg-primary text-white">
                                    <Card.Body>
                                        <h6>Total Períodos</h6>
                                        <h3>{filteredPeriods.length}</h3>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card className="bg-success text-white">
                                    <Card.Body>
                                        <h6>Transacciones Totales</h6>
                                        <h3>{filteredPeriods.reduce((sum, p) => sum + p.totalTransactions, 0)}</h3>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card className="bg-info text-white">
                                    <Card.Body>
                                        <h6>Monto Total (Bs)</h6>
                                        <h3>{filteredPeriods.reduce((sum, p) => sum + p.totalAmount, 0).toLocaleString()}</h3>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card className="bg-warning text-white">
                                    <Card.Body>
                                        <h6>Promedio por Transacción</h6>
                                        <h3>{(filteredPeriods.reduce((sum, p) => sum + p.averageAmount, 0) / filteredPeriods.length || 0).toFixed(2)}</h3>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        {/* Tabla de períodos */}
                        <div className="table-responsive">
                            <Table className="table text-nowrap text-md-nowrap mb-0">
                                <thead>
                                    <tr>
                                        <th>ID Período</th>
                                        <th>Fecha Inicio</th>
                                        <th>Fecha Fin</th>
                                        <th>Transacciones</th>
                                        <th>Monto Total (Bs)</th>
                                        <th>Promedio (Bs)</th>
                                        <th>Estado</th>
                                        <th>Descripción</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredPeriods.map((period) => (
                                        <tr key={period.id}>
                                            <td>{period.id}</td>
                                            <td>{new Date(period.startDate).toLocaleDateString()}</td>
                                            <td>{new Date(period.endDate).toLocaleDateString()}</td>
                                            <td>{period.totalTransactions}</td>
                                            <td>{period.totalAmount.toLocaleString()}</td>
                                            <td>{period.averageAmount.toLocaleString()}</td>
                                            <td>{getStatusBadge(period.status)}</td>
                                            <td>{period.description}</td>
                                            <td>
                                                <Button
                                                    variant="info"
                                                    size="sm"
                                                    className="me-2"
                                                    onClick={() => generateReport(period.id)}
                                                >
                                                    Reporte
                                                </Button>
                                                {period.status === 'active' && (
                                                    <Button
                                                        variant="warning"
                                                        size="sm"
                                                        onClick={() => closePeriod(period.id)}
                                                    >
                                                        Cerrar
                                                    </Button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default TransactionPeriodsPage;