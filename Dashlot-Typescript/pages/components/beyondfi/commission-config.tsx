import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Form, Button, Table, Modal, Alert } from 'react-bootstrap';

interface CommissionRule {
  id: string;
  name: string;
  type: 'percentage' | 'fixed' | 'tiered';
  value: number;
  minAmount?: number;
  maxAmount?: number;
  currency: 'BOB' | 'USD';
  isActive: boolean;
  description: string;
  createdAt: string;
  updatedAt: string;
}

const CommissionConfigPage: React.FC = () => {
  const [commissions, setCommissions] = useState<CommissionRule[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingCommission, setEditingCommission] = useState<CommissionRule | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState<'success' | 'danger'>('success');

  const [formData, setFormData] = useState({
    name: '',
    type: 'percentage' as 'percentage' | 'fixed' | 'tiered',
    value: 0,
    minAmount: '',
    maxAmount: '',
    currency: 'BOB' as 'BOB' | 'USD',
    description: ''
  });

  // Datos simulados
  useEffect(() => {
    const mockCommissions: CommissionRule[] = [
      {
        id: 'COM001',
        name: 'Comisión Estándar BOB',
        type: 'percentage',
        value: 2.5,
        currency: 'BOB',
        isActive: true,
        description: 'Comisión estándar para transacciones en bolivianos',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z'
      },
      {
        id: 'COM002',
        name: 'Comisión VIP',
        type: 'percentage',
        value: 1.5,
        minAmount: 50000,
        currency: 'BOB',
        isActive: true,
        description: 'Comisión reducida para montos altos',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z'
      },
      {
        id: 'COM003',
        name: 'Comisión Fija USD',
        type: 'fixed',
        value: 10,
        currency: 'USD',
        isActive: true,
        description: 'Comisión fija para transacciones en dólares',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z'
      }
    ];
    setCommissions(mockCommissions);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingCommission) {
      // Actualizar comisión existente
      setCommissions(prev => prev.map(comm =>
        comm.id === editingCommission.id
          ? {
            ...comm,
            ...formData,
            minAmount: formData.minAmount ? parseFloat(formData.minAmount) : undefined,
            maxAmount: formData.maxAmount ? parseFloat(formData.maxAmount) : undefined,
            updatedAt: new Date().toISOString()
          }
          : comm
      ));
      setAlertMessage('Comisión actualizada exitosamente');
    } else {
      // Crear nueva comisión
      const newCommission: CommissionRule = {
        id: `COM${String(commissions.length + 1).padStart(3, '0')}`,
        ...formData,
        minAmount: formData.minAmount ? parseFloat(formData.minAmount) : undefined,
        maxAmount: formData.maxAmount ? parseFloat(formData.maxAmount) : undefined,
        isActive: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      setCommissions(prev => [...prev, newCommission]);
      setAlertMessage('Comisión creada exitosamente');
    }

    setAlertType('success');
    setShowAlert(true);
    setShowModal(false);
    resetForm();
    setTimeout(() => setShowAlert(false), 3000);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      type: 'percentage',
      value: 0,
      minAmount: '',
      maxAmount: '',
      currency: 'BOB',
      description: ''
    });
    setEditingCommission(null);
  };

  const handleEdit = (commission: CommissionRule) => {
    setEditingCommission(commission);
    setFormData({
      name: commission.name,
      type: commission.type,
      value: commission.value,
      minAmount: commission.minAmount?.toString() || '',
      maxAmount: commission.maxAmount?.toString() || '',
      currency: commission.currency,
      description: commission.description
    });
    setShowModal(true);
  };

  const toggleActive = (commissionId: string) => {
    setCommissions(prev => prev.map(comm =>
      comm.id === commissionId
        ? { ...comm, isActive: !comm.isActive, updatedAt: new Date().toISOString() }
        : comm
    ));
  };

  const deleteCommission = (commissionId: string) => {
    if (window.confirm('¿Está seguro de que desea eliminar esta comisión?')) {
      setCommissions(prev => prev.filter(comm => comm.id !== commissionId));
      setAlertMessage('Comisión eliminada exitosamente');
      setAlertType('success');
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  return (
    <>
      {showAlert && (
        <Alert variant={alertType} dismissible onClose={() => setShowAlert(false)}>
          {alertMessage}
        </Alert>
      )}

      <Row>
        <Col xl={12}>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <h4 className="card-title">Configuración de Comisiones</h4>
              <Button
                variant="primary"
                onClick={() => {
                  resetForm();
                  setShowModal(true);
                }}
              >
                Nueva Comisión
              </Button>
            </Card.Header>
            <Card.Body>
              {/* Tabla de comisiones */}
              <div className="table-responsive">
                <Table className="table text-nowrap text-md-nowrap mb-0">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Tipo</th>
                      <th>Valor</th>
                      <th>Rango de Monto</th>
                      <th>Moneda</th>
                      <th>Estado</th>
                      <th>Descripción</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {commissions.map((commission) => (
                      <tr key={commission.id}>
                        <td>{commission.id}</td>
                        <td>{commission.name}</td>
                        <td>
                          {commission.type === 'percentage' && 'Porcentaje'}
                          {commission.type === 'fixed' && 'Fijo'}
                          {commission.type === 'tiered' && 'Escalonado'}
                        </td>
                        <td>
                          {commission.type === 'percentage' ? `${commission.value}%` : commission.value}
                        </td>
                        <td>
                          {commission.minAmount && commission.maxAmount
                            ? `${commission.minAmount.toLocaleString()} - ${commission.maxAmount.toLocaleString()}`
                            : commission.minAmount
                              ? `Desde ${commission.minAmount.toLocaleString()}`
                              : commission.maxAmount
                                ? `Hasta ${commission.maxAmount.toLocaleString()}`
                                : 'Sin límite'
                          }
                        </td>
                        <td>{commission.currency}</td>
                        <td>
                          <Form.Check
                            type="switch"
                            checked={commission.isActive}
                            onChange={() => toggleActive(commission.id)}
                          />
                        </td>
                        <td>{commission.description}</td>
                        <td>
                          <Button
                            variant="info"
                            size="sm"
                            className="me-2"
                            onClick={() => handleEdit(commission)}
                          >
                            Editar
                          </Button>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => deleteCommission(commission.id)}
                          >
                            Eliminar
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

      {/* Modal para crear/editar comisión */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {editingCommission ? 'Editar Comisión' : 'Nueva Comisión'}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Tipo</Form.Label>
                  <Form.Select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
                  >
                    <option value="percentage">Porcentaje</option>
                    <option value="fixed">Fijo</option>
                    <option value="tiered">Escalonado</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Valor {formData.type === 'percentage' ? '(%)' : ''}
                  </Form.Label>
                  <Form.Control
                    type="number"
                    step="0.01"
                    value={formData.value}
                    onChange={(e) => setFormData({ ...formData, value: parseFloat(e.target.value) || 0 })}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Moneda</Form.Label>
                  <Form.Select
                    value={formData.currency}
                    onChange={(e) => setFormData({ ...formData, currency: e.target.value as any })}
                  >
                    <option value="BOB">Bolivianos (BOB)</option>
                    <option value="USD">Dólares (USD)</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Monto Mínimo (opcional)</Form.Label>
                  <Form.Control
                    type="number"
                    value={formData.minAmount}
                    onChange={(e) => setFormData({ ...formData, minAmount: e.target.value })}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Monto Máximo (opcional)</Form.Label>
                  <Form.Control
                    type="number"
                    value={formData.maxAmount}
                    onChange={(e) => setFormData({ ...formData, maxAmount: e.target.value })}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit">
              {editingCommission ? 'Actualizar' : 'Crear'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default CommissionConfigPage;