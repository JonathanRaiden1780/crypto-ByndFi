import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Form, Button, Table, Badge, Modal, Alert } from 'react-bootstrap';

interface AccountStatusReport {
    id: string;
    accountId: string;
    accountType: 'bank' | 'wallet';
    accountName: string;
    status: 'active' | 'inactive' | 'pending' | 'blocked' | 'maintenance';
    lastActivity: string;
    transactionCount: number;
    totalVolume: number;
    currency: string;
    issues: string[];
    uptime: number;
    responseTime: number;
    reportDate: string;
}

const StatusReportsPage: React.FC = () => {
    const [reports, setReports] = useState<AccountStatusReport[]>([]);
    const [filteredReports, setFilteredReports] = useState<AccountStatusReport[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedReport, setSelectedReport] = useState<AccountStatusReport | null>(null);
    const [filters, setFilters] = useState({
        status: '',
        accountType: '',
        dateFrom: '',
        dateTo: ''
    });

    // Datos simulados
    useEffect(() => {
        const mockReports: AccountStatusReport[] = [
            {
                id: 'RPT001',
                accountId: 'BA001',
                accountType: 'bank',
                accountName: 'Banco Nacional de Bolivia - 1234567890',
                status: 'active',
                lastActivity: '2024-01-15T10:30:00Z',
                transactionCount: 45,
                totalVolume: 125000,
                currency: 'BOB',
                issues: [],
                uptime: 99.8,
                responseTime: 1.2,
                reportDate: '2024-01-15'
            },
            {
                id: 'RPT002',
                accountId: 'WA001',
                accountType: 'wallet',
                accountName: 'Wallet Principal Bitcoin',
                status: 'active',
                lastActivity: '2024-01-14T15:45:00Z',
                transactionCount: 12,
                totalVolume: 0.05,
                currency: 'BTC',
                issues: [],
                uptime: 100,
                responseTime: 0.8,
                reportDate: '2024-01-15'
            },
            {
                id: 'RPT003',
                accountId: 'BA003',
                accountType: 'bank',
                accountName: 'Banco Unión - 5555666677',
                status: 'pending',
                lastActivity: '2024-01-10T09:15:00Z',
                transactionCount: 0,
                totalVolume: 0,
                currency: 'BOB',
                issues: ['Cuenta en proceso de activación', 'Documentación pendiente'],
                uptime: 0,
                responseTime: 0,
                reportDate: '2024-01-15'
            },
            {
                id: 'RPT004',
                accountId: 'WA003',
                accountType: 'wallet',
                accountName: 'Wallet Ethereum Backup',
                status: 'maintenance',
                lastActivity: '2024-01-12T08:20:00Z',
                transactionCount: 3,
                totalVolume: 0.15,
                currency: 'ETH',
                issues: ['Mantenimiento programado', 'Actualización de seguridad'],
                uptime: 95.5,
                responseTime: 2.1,
                reportDate: '2024-01-15'
            }
        ];
        setReports(mockReports);
        setFilteredReports(mockReports);
    }, []);

    // Aplicar filtros
    useEffect(() => {
        let filtered = reports;

        if (filters.status) {
            filtered = filtered.filter(report => report.status === filters.status);
        }

        if (filters.accountType) {
            filtered = filtered.filter(report => report.accountType === filters.accountType);
        }

        if (filters.dateFrom) {
            filtered = filtered.filter(report => report.reportDate >= filters.dateFrom);
        }

        if (filters.dateTo) {
            filtered = filtered.filter(report => report.reportDate <= filters.dateTo);
        }

        setFilteredReports(filtered);
    }, [filters, reports]);

    const handleViewDetails = (report: AccountStatusReport) => {
        setSelectedReport(report);
        setShowModal(true);
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'active':
                return <Badge bg="success">Activa</Badge>;
            case 'inactive':
                return <Badge bg="secondary">Inactiva</Badge>;
            case 'pending':
                return <Badge bg="warning">Pendiente</Badge>;
            case 'blocked':
                return <Badge bg="danger">Bloqueada</Badge>;
            case 'maintenance':
                return <Badge bg="info">Mantenimiento</Badge>;
            default:
                return <Badge bg="secondary">Desconocido</Badge>;
        }
    };

    const getAccountTypeLabel = (type: string) => {
        return type === 'bank' ? 'Cuenta Bancaria' : 'Wallet';
    };

    const getUptimeColor = (uptime: number) => {
        if (uptime >= 99) return 'success';
        if (uptime >= 95) return 'warning';
        return 'danger';
    };

    const formatLastActivity = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleString('es-ES');
    };

    return (
        <>
            <Row>
                <Col xl={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title">Reportes de Estado de Cuentas</h4>
                        </Card.Header>
                        <Card.Body>
                            {/* Filtros */}
                            <Row className="mb-4">
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label>Estado</Form.Label>
                                        <Form.Select
                                            value={filters.status}
                                            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                                        >
                                            <option value="">Todos los estados</option>
                                            <option value="active">Activa</option>
                                            <option value="inactive">Inactiva</option>
                                            <option value="pending">Pendiente</option>
                                            <option value="blocked">Bloqueada</option>
                                            <option value="maintenance">Mantenimiento</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label>Tipo de Cuenta</Form.Label>
                                        <Form.Select
                                            value={filters.accountType}
                                            onChange={(e) => setFilters({ ...filters, accountType: e.target.value })}
                                        >
                                            <option value="">Todos los tipos</option>
                                            <option value="bank">Cuenta Bancaria</option>
                                            <option value="wallet">Wallet</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label>Fecha Desde</Form.Label>
                                        <Form.Control
                                            type="date"
                                            value={filters.dateFrom}
                                            onChange={(e) => setFilters({ ...filters, dateFrom: e.target.value })}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label>Fecha Hasta</Form.Label>
                                        <Form.Control
                                            type="date"
                                            value={filters.dateTo}
                                            onChange={(e) => setFilters({ ...filters, dateTo: e.target.value })}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* Métricas resumen */}
                            <Row className="mb-4">
                                <Col md={3}>
                                    <Card className="bg-success text-white">
                                        <Card.Body>
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <h6>Cuentas Activas</h6>
                                                    <h3>{filteredReports.filter(r => r.status === 'active').length}</h3>
                                                </div>
                                                <div className="align-self-center">
                                                    <i className="fe fe-check-circle fs-1"></i>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card className="bg-warning text-white">
                                        <Card.Body>
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <h6>Cuentas Pendientes</h6>
                                                    <h3>{filteredReports.filter(r => r.status === 'pending').length}</h3>
                                                </div>
                                                <div className="align-self-center">
                                                    <i className="fe fe-clock fs-1"></i>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card className="bg-info text-white">
                                        <Card.Body>
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <h6>En Mantenimiento</h6>
                                                    <h3>{filteredReports.filter(r => r.status === 'maintenance').length}</h3>
                                                </div>
                                                <div className="align-self-center">
                                                    <i className="fe fe-tool fs-1"></i>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card className="bg-danger text-white">
                                        <Card.Body>
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <h6>Con Problemas</h6>
                                                    <h3>{filteredReports.filter(r => r.issues.length > 0).length}</h3>
                                                </div>
                                                <div className="align-self-center">
                                                    <i className="fe fe-alert-triangle fs-1"></i>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>

                            {/* Tabla de reportes */}
                            <div className="table-responsive">
                                <Table className="table text-nowrap text-md-nowrap mb-0">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Cuenta</th>
                                            <th>Tipo</th>
                                            <th>Estado</th>
                                            <th>Última Actividad</th>
                                            <th>Transacciones</th>
                                            <th>Volumen Total</th>
                                            <th>Uptime</th>
                                            <th>Problemas</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredReports.map((report) => (
                                            <tr key={report.id}>
                                                <td>{report.id}</td>
                                                <td>{report.accountName}</td>
                                                <td>{getAccountTypeLabel(report.accountType)}</td>
                                                <td>{getStatusBadge(report.status)}</td>
                                                <td>{formatLastActivity(report.lastActivity)}</td>
                                                <td>{report.transactionCount}</td>
                                                <td>
                                                    {report.totalVolume.toLocaleString()} {report.currency}
                                                </td>
                                                <td>
                                                    <Badge bg={getUptimeColor(report.uptime)}>
                                                        {report.uptime}%
                                                    </Badge>
                                                </td>
                                                <td>
                                                    {report.issues.length > 0 ? (
                                                        <Badge bg="danger">{report.issues.length}</Badge>
                                                    ) : (
                                                        <Badge bg="success">0</Badge>
                                                    )}
                                                </td>
                                                <td>
                                                    <Button
                                                        variant="outline-primary"
                                                        size="sm"
                                                        onClick={() => handleViewDetails(report)}
                                                    >
                                                        Ver Detalles
                                                    </Button>
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

            {/* Modal de detalles */}
            <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Detalles del Reporte - {selectedReport?.id}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedReport && (
                        <Row>
                            <Col md={6}>
                                <h6>Información General</h6>
                                <p><strong>Cuenta:</strong> {selectedReport.accountName}</p>
                                <p><strong>Tipo:</strong> {getAccountTypeLabel(selectedReport.accountType)}</p>
                                <p><strong>Estado:</strong> {getStatusBadge(selectedReport.status)}</p>
                                <p><strong>Fecha del Reporte:</strong> {selectedReport.reportDate}</p>
                            </Col>
                            <Col md={6}>
                                <h6>Métricas de Rendimiento</h6>
                                <p><strong>Uptime:</strong> <Badge bg={getUptimeColor(selectedReport.uptime)}>{selectedReport.uptime}%</Badge></p>
                                <p><strong>Tiempo de Respuesta:</strong> {selectedReport.responseTime}s</p>
                                <p><strong>Transacciones:</strong> {selectedReport.transactionCount}</p>
                                <p><strong>Volumen Total:</strong> {selectedReport.totalVolume.toLocaleString()} {selectedReport.currency}</p>
                            </Col>
                            <Col md={12}>
                                <h6>Última Actividad</h6>
                                <p>{formatLastActivity(selectedReport.lastActivity)}</p>
                            </Col>
                            {selectedReport.issues.length > 0 && (
                                <Col md={12}>
                                    <h6>Problemas Identificados</h6>
                                    <ul>
                                        {selectedReport.issues.map((issue, index) => (
                                            <li key={index} className="text-danger">{issue}</li>
                                        ))}
                                    </ul>
                                </Col>
                            )}
                        </Row>
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

export default StatusReportsPage;