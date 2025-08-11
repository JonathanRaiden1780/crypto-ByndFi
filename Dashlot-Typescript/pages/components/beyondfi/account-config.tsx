import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Form, Button, Table, Badge, Modal, Alert, Tabs, Tab } from 'react-bootstrap';

interface BankAccount {
    id: string;
    bankName: string;
    accountNumber: string;
    accountType: 'savings' | 'checking' | 'business';
    currency: 'BOB' | 'USD';
    holderName: string;
    status: 'active' | 'inactive' | 'pending' | 'blocked';
    isDefault: boolean;
    createdDate: string;
    lastUsed?: string;
    notes?: string;
}

interface WalletAddress {
    id: string;
    label: string;
    address: string;
    network: 'Bitcoin' | 'Ethereum' | 'USDC' | 'USDT';
    status: 'active' | 'inactive' | 'pending' | 'blocked';
    isDefault: boolean;
    createdDate: string;
    lastUsed?: string;
    balance?: number;
    notes?: string;
}

const AccountConfigPage: React.FC = () => {
    const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([]);
    const [walletAddresses, setWalletAddresses] = useState<WalletAddress[]>([]);
    const [activeTab, setActiveTab] = useState('bank-accounts');
    const [showBankModal, setShowBankModal] = useState(false);
    const [showWalletModal, setShowWalletModal] = useState(false);
    const [editingBankAccount, setEditingBankAccount] = useState<BankAccount | null>(null);
    const [editingWalletAddress, setEditingWalletAddress] = useState<WalletAddress | null>(null);
    const [alert, setAlert] = useState<{ show: boolean, message: string, variant: string }>(
        { show: false, message: "", variant: "success" }
    );

    const [bankFormData, setBankFormData] = useState({
        bankName: '',
        accountNumber: '',
        accountType: 'savings' as 'savings' | 'checking' | 'business',
        currency: 'BOB' as 'BOB' | 'USD',
        holderName: '',
        notes: ''
    });

    const [walletFormData, setWalletFormData] = useState({
        label: '',
        address: '',
        network: 'Bitcoin' as 'Bitcoin' | 'Ethereum' | 'USDC' | 'USDT',
        notes: ''
    });

    // Datos simulados
    useEffect(() => {
        const mockBankAccounts: BankAccount[] = [
            {
                id: 'BA001',
                bankName: 'Banco Nacional de Bolivia',
                accountNumber: '1234567890',
                accountType: 'checking',
                currency: 'BOB',
                holderName: 'Beyondfi S.R.L.',
                status: 'active',
                isDefault: true,
                createdDate: '2024-01-01',
                lastUsed: '2024-01-15',
                notes: 'Cuenta principal para operaciones en bolivianos'
            },
            {
                id: 'BA002',
                bankName: 'Banco Mercantil Santa Cruz',
                accountNumber: '0987654321',
                accountType: 'savings',
                currency: 'USD',
                holderName: 'Beyondfi S.R.L.',
                status: 'active',
                isDefault: false,
                createdDate: '2024-01-01',
                lastUsed: '2024-01-10',
                notes: 'Cuenta para operaciones en dólares'
            },
            {
                id: 'BA003',
                bankName: 'Banco Unión',
                accountNumber: '5555666677',
                accountType: 'business',
                currency: 'BOB',
                holderName: 'Beyondfi S.R.L.',
                status: 'pending',
                isDefault: false,
                createdDate: '2024-01-15',
                notes: 'Cuenta empresarial en proceso de activación'
            }
        ];

        const mockWalletAddresses: WalletAddress[] = [
            {
                id: 'WA001',
                label: 'Wallet Principal Bitcoin',
                address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
                network: 'Bitcoin',
                status: 'active',
                isDefault: true,
                createdDate: '2024-01-01',
                lastUsed: '2024-01-14',
                balance: 0.05,
                notes: 'Wallet principal para recepción de Bitcoin'
            },
            {
                id: 'WA002',
                label: 'Wallet USDC',
                address: '0x742d35Cc6634C0532925a3b8D4C0C8b3C2b5D5E1',
                network: 'USDC',
                status: 'active',
                isDefault: false,
                createdDate: '2024-01-01',
                lastUsed: '2024-01-12',
                balance: 1500.00,
                notes: 'Wallet para operaciones USDC'
            },
            {
                id: 'WA003',
                label: 'Wallet Ethereum Backup',
                address: '0x8ba1f109551bD432803012645Hac136c22C2B5E2',
                network: 'Ethereum',
                status: 'inactive',
                isDefault: false,
                createdDate: '2024-01-05',
                notes: 'Wallet de respaldo para Ethereum'
            }
        ];

        setBankAccounts(mockBankAccounts);
        setWalletAddresses(mockWalletAddresses);
    }, []);

    const showAlert = (message: string, variant: string = 'success') => {
        setAlert({ show: true, message, variant });
        setTimeout(() => {
            setAlert({ show: false, message: "", variant: "success" });
        }, 3000);
    };

    // Funciones para cuentas bancarias
    const handleBankSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!bankFormData.bankName || !bankFormData.accountNumber || !bankFormData.holderName) {
            showAlert("Por favor complete todos los campos obligatorios", "danger");
            return;
        }

        const newBankAccount: BankAccount = {
            id: editingBankAccount ? editingBankAccount.id : `BA${String(bankAccounts.length + 1).padStart(3, '0')}`,
            bankName: bankFormData.bankName,
            accountNumber: bankFormData.accountNumber,
            accountType: bankFormData.accountType,
            currency: bankFormData.currency,
            holderName: bankFormData.holderName,
            status: 'pending',
            isDefault: false,
            createdDate: editingBankAccount ? editingBankAccount.createdDate : new Date().toISOString().split('T')[0],
            notes: bankFormData.notes
        };

        if (editingBankAccount) {
            setBankAccounts(prev => prev.map(acc =>
                acc.id === editingBankAccount.id ? { ...newBankAccount, status: editingBankAccount.status, isDefault: editingBankAccount.isDefault } : acc
            ));
            showAlert("Cuenta bancaria actualizada exitosamente");
        } else {
            setBankAccounts(prev => [newBankAccount, ...prev]);
            showAlert("Cuenta bancaria creada exitosamente");
        }

        resetBankForm();
        setShowBankModal(false);
    };

    const resetBankForm = () => {
        setBankFormData({
            bankName: '',
            accountNumber: '',
            accountType: 'savings',
            currency: 'BOB',
            holderName: '',
            notes: ''
        });
        setEditingBankAccount(null);
    };

    const handleEditBankAccount = (account: BankAccount) => {
        setEditingBankAccount(account);
        setBankFormData({
            bankName: account.bankName,
            accountNumber: account.accountNumber,
            accountType: account.accountType,
            currency: account.currency,
            holderName: account.holderName,
            notes: account.notes || ''
        });
        setShowBankModal(true);
    };

    const handleSetDefaultBank = (accountId: string) => {
        setBankAccounts(prev => prev.map(acc => ({
            ...acc,
            isDefault: acc.id === accountId
        })));
        showAlert("Cuenta establecida como predeterminada");
    };

    const handleToggleBankStatus = (accountId: string) => {
        setBankAccounts(prev => prev.map(acc =>
            acc.id === accountId
                ? { ...acc, status: acc.status === 'active' ? 'inactive' : 'active' as const }
                : acc
        ));
        showAlert("Estado de cuenta actualizado");
    };

    // Funciones para direcciones de wallet
    const handleWalletSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!walletFormData.label || !walletFormData.address) {
            showAlert("Por favor complete todos los campos obligatorios", "danger");
            return;
        }

        const newWalletAddress: WalletAddress = {
            id: editingWalletAddress ? editingWalletAddress.id : `WA${String(walletAddresses.length + 1).padStart(3, '0')}`,
            label: walletFormData.label,
            address: walletFormData.address,
            network: walletFormData.network,
            status: 'pending',
            isDefault: false,
            createdDate: editingWalletAddress ? editingWalletAddress.createdDate : new Date().toISOString().split('T')[0],
            notes: walletFormData.notes
        };

        if (editingWalletAddress) {
            setWalletAddresses(prev => prev.map(wallet =>
                wallet.id === editingWalletAddress.id ? { ...newWalletAddress, status: editingWalletAddress.status, isDefault: editingWalletAddress.isDefault, balance: editingWalletAddress.balance } : wallet
            ));
            showAlert("Dirección de wallet actualizada exitosamente");
        } else {
            setWalletAddresses(prev => [newWalletAddress, ...prev]);
            showAlert("Dirección de wallet creada exitosamente");
        }

        resetWalletForm();
        setShowWalletModal(false);
    };

    const resetWalletForm = () => {
        setWalletFormData({
            label: '',
            address: '',
            network: 'Bitcoin',
            notes: ''
        });
        setEditingWalletAddress(null);
    };

    const handleEditWalletAddress = (wallet: WalletAddress) => {
        setEditingWalletAddress(wallet);
        setWalletFormData({
            label: wallet.label,
            address: wallet.address,
            network: wallet.network,
            notes: wallet.notes || ''
        });
        setShowWalletModal(true);
    };

    const handleSetDefaultWallet = (walletId: string) => {
        setWalletAddresses(prev => prev.map(wallet => ({
            ...wallet,
            isDefault: wallet.id === walletId
        })));
        showAlert("Wallet establecida como predeterminada");
    };

    const handleToggleWalletStatus = (walletId: string) => {
        setWalletAddresses(prev => prev.map(wallet =>
            wallet.id === walletId
                ? { ...wallet, status: wallet.status === 'active' ? 'inactive' : 'active' as const }
                : wallet
        ));
        showAlert("Estado de wallet actualizado");
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
            default:
                return <Badge bg="secondary">Desconocido</Badge>;
        }
    };

    const getAccountTypeLabel = (type: string) => {
        switch (type) {
            case 'savings':
                return 'Ahorros';
            case 'checking':
                return 'Corriente';
            case 'business':
                return 'Empresarial';
            default:
                return type;
        }
    };

    return (
        <>
            {alert.show && (
                <Alert variant={alert.variant} dismissible onClose={() => setAlert({ show: false, message: "", variant: "success" })}>
                    {alert.message}
                </Alert>
            )}

            <Row>
                <Col xl={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title">Configuración de Cuentas y Direcciones</h4>
                        </Card.Header>
                        <Card.Body>
                            <Tabs
                                activeKey={activeTab}
                                onSelect={(k) => setActiveTab(k || 'bank-accounts')}
                                className="mb-3"
                            >
                                <Tab eventKey="bank-accounts" title="Cuentas Bancarias">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h5>Cuentas Bancarias</h5>
                                        <Button
                                            variant="primary"
                                            onClick={() => {
                                                resetBankForm();
                                                setShowBankModal(true);
                                            }}
                                        >
                                            Nueva Cuenta
                                        </Button>
                                    </div>

                                    <div className="table-responsive">
                                        <Table className="table text-nowrap text-md-nowrap mb-0">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Banco</th>
                                                    <th>Número de Cuenta</th>
                                                    <th>Tipo</th>
                                                    <th>Moneda</th>
                                                    <th>Titular</th>
                                                    <th>Estado</th>
                                                    <th>Predeterminada</th>
                                                    <th>Último Uso</th>
                                                    <th>Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {bankAccounts.map((account) => (
                                                    <tr key={account.id}>
                                                        <td>{account.id}</td>
                                                        <td>{account.bankName}</td>
                                                        <td>{account.accountNumber}</td>
                                                        <td>{getAccountTypeLabel(account.accountType)}</td>
                                                        <td>{account.currency}</td>
                                                        <td>{account.holderName}</td>
                                                        <td>{getStatusBadge(account.status)}</td>
                                                        <td>
                                                            {account.isDefault ? (
                                                                <Badge bg="primary">Sí</Badge>
                                                            ) : (
                                                                <Badge bg="light" text="dark">No</Badge>
                                                            )}
                                                        </td>
                                                        <td>{account.lastUsed || '-'}</td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <Button
                                                                    variant="outline-primary"
                                                                    size="sm"
                                                                    onClick={() => handleEditBankAccount(account)}
                                                                >
                                                                    Editar
                                                                </Button>
                                                                {!account.isDefault && account.status === 'active' && (
                                                                    <Button
                                                                        variant="outline-success"
                                                                        size="sm"
                                                                        onClick={() => handleSetDefaultBank(account.id)}
                                                                    >
                                                                        Predeterminada
                                                                    </Button>
                                                                )}
                                                                <Button
                                                                    variant={account.status === 'active' ? 'outline-warning' : 'outline-success'}
                                                                    size="sm"
                                                                    onClick={() => handleToggleBankStatus(account.id)}
                                                                >
                                                                    {account.status === 'active' ? 'Desactivar' : 'Activar'}
                                                                </Button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </Tab>

                                <Tab eventKey="wallet-addresses" title="Direcciones de Wallet">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h5>Direcciones de Wallet</h5>
                                        <Button
                                            variant="primary"
                                            onClick={() => {
                                                resetWalletForm();
                                                setShowWalletModal(true);
                                            }}
                                        >
                                            Nueva Dirección
                                        </Button>
                                    </div>

                                    <div className="table-responsive">
                                        <Table className="table text-nowrap text-md-nowrap mb-0">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Etiqueta</th>
                                                    <th>Dirección</th>
                                                    <th>Red</th>
                                                    <th>Balance</th>
                                                    <th>Estado</th>
                                                    <th>Predeterminada</th>
                                                    <th>Último Uso</th>
                                                    <th>Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {walletAddresses.map((wallet) => (
                                                    <tr key={wallet.id}>
                                                        <td>{wallet.id}</td>
                                                        <td>{wallet.label}</td>
                                                        <td>
                                                            <code className="text-truncate d-inline-block" style={{ maxWidth: '200px' }}>
                                                                {wallet.address}
                                                            </code>
                                                        </td>
                                                        <td>{wallet.network}</td>
                                                        <td>{wallet.balance ? wallet.balance.toLocaleString() : '-'}</td>
                                                        <td>{getStatusBadge(wallet.status)}</td>
                                                        <td>
                                                            {wallet.isDefault ? (
                                                                <Badge bg="primary">Sí</Badge>
                                                            ) : (
                                                                <Badge bg="light" text="dark">No</Badge>
                                                            )}
                                                        </td>
                                                        <td>{wallet.lastUsed || '-'}</td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                                <Button
                                                                    variant="outline-primary"
                                                                    size="sm"
                                                                    onClick={() => handleEditWalletAddress(wallet)}
                                                                >
                                                                    Editar
                                                                </Button>
                                                                {!wallet.isDefault && wallet.status === 'active' && (
                                                                    <Button
                                                                        variant="outline-success"
                                                                        size="sm"
                                                                        onClick={() => handleSetDefaultWallet(wallet.id)}
                                                                    >
                                                                        Predeterminada
                                                                    </Button>
                                                                )}
                                                                <Button
                                                                    variant={wallet.status === 'active' ? 'outline-warning' : 'outline-success'}
                                                                    size="sm"
                                                                    onClick={() => handleToggleWalletStatus(wallet.id)}
                                                                >
                                                                    {wallet.status === 'active' ? 'Desactivar' : 'Activar'}
                                                                </Button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </Tab>
                            </Tabs>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Modal para cuentas bancarias */}
            <Modal show={showBankModal} onHide={() => setShowBankModal(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>
                        {editingBankAccount ? 'Editar Cuenta Bancaria' : 'Nueva Cuenta Bancaria'}
                    </Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleBankSubmit}>
                    <Modal.Body>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nombre del Banco *</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Banco Nacional de Bolivia"
                                        value={bankFormData.bankName}
                                        onChange={(e) => setBankFormData({ ...bankFormData, bankName: e.target.value })}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Número de Cuenta *</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="1234567890"
                                        value={bankFormData.accountNumber}
                                        onChange={(e) => setBankFormData({ ...bankFormData, accountNumber: e.target.value })}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Tipo de Cuenta *</Form.Label>
                                    <Form.Select
                                        value={bankFormData.accountType}
                                        onChange={(e) => setBankFormData({ ...bankFormData, accountType: e.target.value as 'savings' | 'checking' | 'business' })}
                                        required
                                    >
                                        <option value="savings">Ahorros</option>
                                        <option value="checking">Corriente</option>
                                        <option value="business">Empresarial</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Moneda *</Form.Label>
                                    <Form.Select
                                        value={bankFormData.currency}
                                        onChange={(e) => setBankFormData({ ...bankFormData, currency: e.target.value as 'BOB' | 'USD' })}
                                        required
                                    >
                                        <option value="BOB">Bolivianos (BOB)</option>
                                        <option value="USD">Dólares (USD)</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Titular de la Cuenta *</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Beyondfi S.R.L."
                                        value={bankFormData.holderName}
                                        onChange={(e) => setBankFormData({ ...bankFormData, holderName: e.target.value })}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Notas</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Notas adicionales sobre la cuenta"
                                        value={bankFormData.notes}
                                        onChange={(e) => setBankFormData({ ...bankFormData, notes: e.target.value })}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowBankModal(false)}>
                            Cancelar
                        </Button>
                        <Button variant="primary" type="submit">
                            {editingBankAccount ? 'Actualizar' : 'Crear'}
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>

            {/* Modal para direcciones de wallet */}
            <Modal show={showWalletModal} onHide={() => setShowWalletModal(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>
                        {editingWalletAddress ? 'Editar Dirección de Wallet' : 'Nueva Dirección de Wallet'}
                    </Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleWalletSubmit}>
                    <Modal.Body>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Etiqueta *</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Wallet Principal Bitcoin"
                                        value={walletFormData.label}
                                        onChange={(e) => setWalletFormData({ ...walletFormData, label: e.target.value })}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Red *</Form.Label>
                                    <Form.Select
                                        value={walletFormData.network}
                                        onChange={(e) => setWalletFormData({ ...walletFormData, network: e.target.value as 'Bitcoin' | 'Ethereum' | 'USDC' | 'USDT' })}
                                        required
                                    >
                                        <option value="Bitcoin">Bitcoin</option>
                                        <option value="Ethereum">Ethereum</option>
                                        <option value="USDC">USDC</option>
                                        <option value="USDT">USDT</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Dirección *</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
                                        value={walletFormData.address}
                                        onChange={(e) => setWalletFormData({ ...walletFormData, address: e.target.value })}
                                        required
                                    />
                                    <Form.Text className="text-muted">
                                        Ingrese la dirección completa de la wallet
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Notas</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Notas adicionales sobre la wallet"
                                        value={walletFormData.notes}
                                        onChange={(e) => setWalletFormData({ ...walletFormData, notes: e.target.value })}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowWalletModal(false)}>
                            Cancelar
                        </Button>
                        <Button variant="primary" type="submit">
                            {editingWalletAddress ? 'Actualizar' : 'Crear'}
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
};

export default AccountConfigPage;