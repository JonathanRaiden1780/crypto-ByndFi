import { useRouter } from "next/router";
import { FC, useState, useEffect } from "react";
import { Card, Col, Row, Nav } from "react-bootstrap";
import Pageheader from "../../../shared/layout-components/pageheader/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import CommissionConfigPage from "./commission-config";
import BolivianoSalesPage from "./boliviano-sales";
import TransactionPeriodsPage from "./transaction-periods";
import AccountConfigPage from "./account-config";
import StatusReportsPage from "./status-report";

type PageWithLayout = FC & {
    layout?: string;
};

const BeyondfiDashboard: PageWithLayout = () => {
    const router = useRouter();
    const [authenticated, setAuthenticated] = useState(false);
    const [activeComponent, setActiveComponent] = useState("sales");

    // Estados para métricas del dashboard
    const [totalSales, setTotalSales] = useState(0);
    const [pendingTransactions, setPendingTransactions] = useState(0);
    const [totalCommissions, setTotalCommissions] = useState(0);
    const [activeAccounts, setActiveAccounts] = useState(0);

    const renderComponent = () => {
        switch (activeComponent) {
            case "sales":
                return <BolivianoSalesPage />;
            case "periods":
                return <TransactionPeriodsPage />;
            case "commissions":
                return <CommissionConfigPage />;
            case "accounts":
                return <AccountConfigPage />;
            case "reports":
                return <StatusReportsPage />;
            default:
                return <BolivianoSalesPage />;
        }
    };

    useEffect(() => {
        const isAuth = localStorage.getItem("isAuthenticated");
        if (isAuth === "true") {
            setAuthenticated(true);
            // Simular datos del dashboard
            setTotalSales(2500000);
            setPendingTransactions(45);
            setTotalCommissions(125000);
            setActiveAccounts(150);
        } else {
            router.push('/');
        }
    }, [router]);

    if (!authenticated) {
        return <div>Cargando...</div>;
    }

    return (
        <>
            <Seo title="Beyondfi Dashboard" />
            <Pageheader title="Beyondfi" heading="Dashboard" active="Beyondfi Dashboard" />

            {/* Métricas principales */}
            <Row>
                <Col xl={3} lg={6} md={6} sm={12}>
                    <Card className="overflow-hidden">
                        <Card.Body>
                            <div className="d-flex">
                                <div className="mt-2">
                                    <h6 className="">Ventas Totales</h6>
                                    <h2 className="mb-0 number-font">{totalSales.toLocaleString()} Bs</h2>
                                </div>
                                <div className="ms-auto">
                                    <div className="chart-wrapper mt-1">
                                        <i className="fe fe-trending-up text-success fs-20"></i>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={3} lg={6} md={6} sm={12}>
                    <Card className="overflow-hidden">
                        <Card.Body>
                            <div className="d-flex">
                                <div className="mt-2">
                                    <h6 className="">Transacciones Pendientes</h6>
                                    <h2 className="mb-0 number-font">{pendingTransactions}</h2>
                                </div>
                                <div className="ms-auto">
                                    <div className="chart-wrapper mt-1">
                                        <i className="fe fe-clock text-warning fs-20"></i>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={3} lg={6} md={6} sm={12}>
                    <Card className="overflow-hidden">
                        <Card.Body>
                            <div className="d-flex">
                                <div className="mt-2">
                                    <h6 className="">Comisiones Totales</h6>
                                    <h2 className="mb-0 number-font">{totalCommissions.toLocaleString()} Bs</h2>
                                </div>
                                <div className="ms-auto">
                                    <div className="chart-wrapper mt-1">
                                        <i className="fe fe-dollar-sign text-primary fs-20"></i>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={3} lg={6} md={6} sm={12}>
                    <Card className="overflow-hidden">
                        <Card.Body>
                            <div className="d-flex">
                                <div className="mt-2">
                                    <h6 className="">Cuentas Activas</h6>
                                    <h2 className="mb-0 number-font">{activeAccounts}</h2>
                                </div>
                                <div className="ms-auto">
                                    <div className="chart-wrapper mt-1">
                                        <i className="fe fe-users text-info fs-20"></i>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Navegación de componentes */}
            <Row>
                <Col xl={12}>
                    <Card>
                        <Card.Header>
                            <Nav variant="tabs" className="nav-tabs-header">
                                <Nav.Item>
                                    <Nav.Link
                                        active={activeComponent === "sales"}
                                        onClick={() => setActiveComponent("sales")}
                                    >
                                        Ventas de Bolivianos
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        active={activeComponent === "periods"}
                                        onClick={() => setActiveComponent("periods")}
                                    >
                                        Consulta de Períodos
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        active={activeComponent === "commissions"}
                                        onClick={() => setActiveComponent("commissions")}
                                    >
                                        Configuración de Comisiones
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        active={activeComponent === "accounts"}
                                        onClick={() => setActiveComponent("accounts")}
                                    >
                                        Configuración de Cuentas
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        active={activeComponent === "reports"}
                                        onClick={() => setActiveComponent("reports")}
                                    >
                                        Reportes de Estado
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Header>
                        <Card.Body>
                            {renderComponent()}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

BeyondfiDashboard.layout = "Contentlayout";
export default BeyondfiDashboard;