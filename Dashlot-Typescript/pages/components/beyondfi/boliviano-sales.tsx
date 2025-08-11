import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Form, Button, Table, Badge, Modal } from 'react-bootstrap';

interface SaleTransaction {
    id: string;
    clientName: string;
    amount: number;
    exchangeRate: number;
    usdAmount: number;
    status: 'pending' | 'approved' | 'rejected';
    specialConditions: string[];
    createdAt: string;
    approvedBy?: string;
}

const BolivianoSalesPage: React.FC = () => {
    const [sales, setSales] = useState<SaleTransaction[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedSale, setSelectedSale] = useState<SaleTransaction | null>(null);
    const [filters, setFilters] = useState({
        status: '',
        dateFrom: '',
        dateTo: '',
        minAmount: '',
        maxAmount: ''
    });

    // Datos simulados
    useEffect(() => {
        const mockSales: SaleTransaction[] = [
            {
                id: 'BS001',
                clientName: 'Juan Pérez',
                amount: 50000,
                exchangeRate: 6.96,
                usdAmount: 7183.91,
                status: 'pending',
                specialConditions: ['Monto mayor a 50,000 Bs', 'Cliente VIP'],
                createdAt: '2024-01-15T10:30:00Z'
            },
            {
                id: 'BS002',
                clientName: 'María González',
                amount: 25000,
                exchangeRate: 6.96,
                usdAmount: 3591.95,
                status: 'approved',
                specialConditions: [],
                createdAt: '2024-01-15T09:15:00Z',
                approvedBy: 'Admin'
            },
            {
                id: 'BS003',
                clientName: 'Carlos Rodríguez',
                amount: 100000,
                exchangeRate: 6.95,
                usdAmount: 14388.49,
                status: 'pending',
                specialConditions: ['Monto mayor a 75,000 Bs', 'Requiere verificación adicional'],
                createdAt: '2024-01-15T08:45:00Z'
            }
        ];
        setSales(mockSales);
    }, []);

    const handleApprove = (saleId: string) => {
        setSales(prev => prev.map(sale =>
            sale.id === saleId
                ? { ...sale, status: 'approved' as const, approvedBy: 'Admin' }
                : sale
        ));
    };

    const handleReject = (saleId: string) => {
        setSales(prev => prev.map(sale =>
            sale.id === saleId
                ? { ...sale, status: 'rejected' as const }
                : sale
        ));
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'pending':
                return <Badge bg="warning">Pendiente</Badge>;
            case 'approved':
                return <Badge bg="success">Aprobado</Badge>;
            case 'rejected':
                return <Badge bg="danger">Rechazado</Badge>;
            default:
                return <Badge bg="secondary">Desconocido</Badge>;
        }
    };

    const filteredSales = sales.filter(sale => {
        if (filters.status && sale.status !== filters.status) return false;
        if (filters.minAmount && sale.amount < parseFloat(filters.minAmount)) return false;
        if (filters.maxAmount && sale.amount > parseFloat(filters.maxAmount)) return false;
        return true;
    });

    return (
        <>
            <Row>
                <Col xl={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title">Ventas de Bolivianos con Condiciones Especiales</h4>
                        </Card.Header>
                        <Card.Body>
                            {/* Filtros */}
                            <Row className="mb-4">
                                <Col md={2}>
                                    <Form.Select
                                        value={filters.status}
                                        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                                    >
                                        <option value="">Todos los estados</option>
                                        <option value="pending">Pendiente</option>
                                        <option value="approved">Aprobado</option>
                                        <option value="rejected">Rechazado</option>
                                    </Form.Select>
                                </Col>
                                <Col md={2}>
                                    <Form.Control
                                        type="number"
                                        placeholder="Monto mínimo"
                                        value={filters.minAmount}
                                        onChange={(e) => setFilters({ ...filters, minAmount: e.target.value })}
                                    />
                                </Col>
                                <Col md={2}>
                                    <Form.Control
                                        type="number"
                                        placeholder="Monto máximo"
                                        value={filters.maxAmount}
                                        onChange={(e) => setFilters({ ...filters, maxAmount: e.target.value })}
                                    />
                                </Col>
                                <Col md={2}>
                                    <Button variant="primary" onClick={() => console.log('Aplicar filtros')}>
                                        Filtrar
                                    </Button>
                                </Col>
                            </Row>

                            {/* Tabla de ventas */}
                            <div className="table-responsive">
                                <Table className="table text-nowrap text-md-nowrap mb-0">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Cliente</th>
                                            <th>Monto (Bs)</th>
                                            <th>Tasa</th>
                                            <th>USD</th>
                                            <th>Estado</th>
                                            <th>Condiciones</th>
                                            <th>Fecha</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredSales.map((sale) => (
                                            <tr key={sale.id}>
                                                <td>{sale.id}</td>
                                                <td>{sale.clientName}</td>
                                                <td>{sale.amount.toLocaleString()}</td>
                                                <td>{sale.exchangeRate}</td>
                                                <td>${sale.usdAmount.toLocaleString()}</td>
                                                <td>{getStatusBadge(sale.status)}</td>
                                                <td>
                                                    {sale.specialConditions.length > 0 ? (
                                                        <Button
                                                            variant="link"
                                                            size="sm"
                                                            onClick={() => {
                                                                setSelectedSale(sale);
                                                                setShowModal(true);
                                                            }}
                                                        >
                                                            Ver ({sale.specialConditions.length})
                                                        </Button>
                                                    ) : (
                                                        'Ninguna'
                                                    )}
                                                </td>
                                                <td>{new Date(sale.createdAt).toLocaleDateString()}</td>
                                                <td>
                                                    {sale.status === 'pending' && (
                                                        <>
                                                            <Button
                                                                variant="success"
                                                                size="sm"
                                                                className="me-2"
                                                                onClick={() => handleApprove(sale.id)}
                                                            >
                                                                Aprobar
                                                            </Button>
                                                            <Button
                                                                variant="danger"
                                                                size="sm"
                                                                onClick={() => handleReject(sale.id)}
                                                            >
                                                                Rechazar
                                                            </Button>
                                                        </>
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

            {/* Modal para condiciones especiales */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Condiciones Especiales</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedSale && (
                        <>
                            <h6>Venta: {selectedSale.id}</h6>
                            <p><strong>Cliente:</strong> {selectedSale.clientName}</p>
                            <p><strong>Monto:</strong> {selectedSale.amount.toLocaleString()} Bs</p>
                            <h6>Condiciones:</h6>
                            <ul>
                                {selectedSale.specialConditions.map((condition, index) => (
                                    <li key={index}>{condition}</li>
                                ))}
                            </ul>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default BolivianoSalesPage;