import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AdminDashboardOverview from './pages/AdminDashboardOverview';
import AdminEventManagementScreen from './pages/AdminEventManagementScreen';
import AdminCustomerManagement from './pages/AdminCustomerManagement';
import DashboardHomeTechnicalHighContrast1 from './pages/DashboardHomeTechnicalHighContrast1';
import DashboardHomeTechnicalHighContrast2 from './pages/DashboardHomeTechnicalHighContrast2';
import DashboardHomeRoundedDataPrimitives from './pages/DashboardHomeRoundedDataPrimitives';
import DashboardHomeBalancedVariation2 from './pages/DashboardHomeBalancedVariation2';
import CustomerSegmentAnalyticsEnterpriseCore from './pages/CustomerSegmentAnalyticsEnterpriseCore';
import ComponentShowcaseTechnicalTokens from './pages/ComponentShowcaseTechnicalTokens';
import DashboardHomeBalancedVariation1 from './pages/DashboardHomeBalancedVariation1';
import DashboardHomeSharpDataBars from './pages/DashboardHomeSharpDataBars';
import Screen1DashboardHome from './pages/Screen1DashboardHome';
import Screen2HomeworkSearch from './pages/Screen2HomeworkSearch';
import Screen3CalendarExamsSchedule from './pages/Screen3CalendarExamsSchedule';
import DetailTransaksi from './pages/DetailTransaksi';
import SugidevServicesProjects from './pages/SugidevServicesProjects';
import ProjectInquiryCleanBackground from './pages/ProjectInquiryCleanBackground';
import DevosEngineeringDashboard from './pages/DevosEngineeringDashboard';
import DuolingoLearningDashboard from './pages/DuolingoLearningDashboard';
import PromosManagementSugiAdmin2 from './pages/PromosManagementSugiAdmin2';
import BookingsManagementSugiAdmin from './pages/BookingsManagementSugiAdmin';
import ServicesManagementSugiAdmin from './pages/ServicesManagementSugiAdmin';
import UsersManagementSugiAdmin from './pages/UsersManagementSugiAdmin';
import OrderHistoryStatus from './pages/OrderHistoryStatus';
import ShoppingCart from './pages/ShoppingCart';
import AiProfitCalculatorBudgetingPanel2 from './pages/AiProfitCalculatorBudgetingPanel2';
import JastipLandingPage from './pages/JastipLandingPage';
import PaymentCancellationGateway from './pages/PaymentCancellationGateway';
import ProductCatalog from './pages/ProductCatalog';
import ShopperListWorkspace from './pages/ShopperListWorkspace';
import AiProfitCalculatorBudgetingPanel1 from './pages/AiProfitCalculatorBudgetingPanel1';
import AdminInvoiceFeesManager from './pages/AdminInvoiceFeesManager';
import AdminMasterDashboard from './pages/AdminMasterDashboard';
import CustomerCheckoutForm from './pages/CustomerCheckoutForm';
import AdminPaymentCancellationDashboard from './pages/AdminPaymentCancellationDashboard';
import WellnessDashboard from './pages/WellnessDashboard';
import AdminEventCatalogManagement from './pages/AdminEventCatalogManagement';
import DetailEventKatalog from './pages/DetailEventKatalog';
import BerandaHome from './pages/BerandaHome';
import NotifikasiNotifications from './pages/NotifikasiNotifications';
import WelcomeScreen from './pages/WelcomeScreen';
import DaftarAkun from './pages/DaftarAkun';
import UploadBuktiPembayaran from './pages/UploadBuktiPembayaran';
import ScheduleCalendar from './pages/ScheduleCalendar';
import PesananBerhasilSuccess from './pages/PesananBerhasilSuccess';
import DetailPesananTransactionDetail from './pages/DetailPesananTransactionDetail';
import DetailProduk from './pages/DetailProduk';
import AjukanPembatalanCancellationRequest from './pages/AjukanPembatalanCancellationRequest';
import DaftarPesananSaya from './pages/DaftarPesananSaya';
import PesananSayaOrderReview from './pages/PesananSayaOrderReview';
import Masuk from './pages/Masuk';
import DashboardHome from './pages/DashboardHome';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
        {/* Navigation Header for Multi-Screen Stitch Pages */}
        <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="font-bold text-sm tracking-wide text-white capitalize">project-management-dashboard</span>
          </div>
          <nav className="flex items-center space-x-2 overflow-x-auto py-1">
            <Link to="/" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Admin Dashboard Overview</Link>
            <Link to="/admin-event-management-screen" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Admin Event Management Screen</Link>
            <Link to="/admin-customer-management" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Admin Customer Management</Link>
            <Link to="/dashboard-home-technical-high-contrast-1" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Dashboard Home Technical High Contrast 1</Link>
            <Link to="/dashboard-home-technical-high-contrast-2" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Dashboard Home Technical High Contrast 2</Link>
            <Link to="/dashboard-home-rounded-data-primitives" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Dashboard Home Rounded Data Primitives</Link>
            <Link to="/dashboard-home-balanced-variation-2" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Dashboard Home Balanced Variation 2</Link>
            <Link to="/customer-segment-analytics-enterprise-core" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Customer Segment Analytics Enterprise Core</Link>
            <Link to="/component-showcase-technical-tokens" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Component Showcase Technical Tokens</Link>
            <Link to="/dashboard-home-balanced-variation-1" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Dashboard Home Balanced Variation 1</Link>
            <Link to="/dashboard-home-sharp-data-bars" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Dashboard Home Sharp Data Bars</Link>
            <Link to="/screen-1-dashboard-home" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Screen 1 Dashboard Home</Link>
            <Link to="/screen-2-homework-search" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Screen 2 Homework Search</Link>
            <Link to="/screen-3-calendar-exams-schedule" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Screen 3 Calendar Exams Schedule</Link>
            <Link to="/detail-transaksi" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Detail Transaksi</Link>
            <Link to="/sugidev-services-projects" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Sugidev Services Projects</Link>
            <Link to="/project-inquiry-clean-background" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Project Inquiry Clean Background</Link>
            <Link to="/devos-engineering-dashboard" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Devos Engineering Dashboard</Link>
            <Link to="/duolingo-learning-dashboard" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Duolingo Learning Dashboard</Link>
            <Link to="/promos-management-sugi-admin-2" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Promos Management Sugi Admin 2</Link>
            <Link to="/bookings-management-sugi-admin" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Bookings Management Sugi Admin</Link>
            <Link to="/services-management-sugi-admin" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Services Management Sugi Admin</Link>
            <Link to="/users-management-sugi-admin" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Users Management Sugi Admin</Link>
            <Link to="/order-history-status" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Order History Status</Link>
            <Link to="/shopping-cart" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Shopping Cart</Link>
            <Link to="/ai-profit-calculator-budgeting-panel-2" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Ai Profit Calculator Budgeting Panel 2</Link>
            <Link to="/jastip-landing-page" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Jastip Landing Page</Link>
            <Link to="/payment-cancellation-gateway" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Payment Cancellation Gateway</Link>
            <Link to="/product-catalog" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Product Catalog</Link>
            <Link to="/shopper-list-workspace" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Shopper List Workspace</Link>
            <Link to="/ai-profit-calculator-budgeting-panel-1" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Ai Profit Calculator Budgeting Panel 1</Link>
            <Link to="/admin-invoice-fees-manager" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Admin Invoice Fees Manager</Link>
            <Link to="/admin-master-dashboard" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Admin Master Dashboard</Link>
            <Link to="/customer-checkout-form" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Customer Checkout Form</Link>
            <Link to="/admin-payment-cancellation-dashboard" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Admin Payment Cancellation Dashboard</Link>
            <Link to="/wellness-dashboard" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Wellness Dashboard</Link>
            <Link to="/admin-event-catalog-management" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Admin Event Catalog Management</Link>
            <Link to="/detail-event-katalog" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Detail Event Katalog</Link>
            <Link to="/beranda-home" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Beranda Home</Link>
            <Link to="/notifikasi-notifications" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Notifikasi Notifications</Link>
            <Link to="/welcome-screen" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Welcome Screen</Link>
            <Link to="/daftar-akun" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Daftar Akun</Link>
            <Link to="/upload-bukti-pembayaran" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Upload Bukti Pembayaran</Link>
            <Link to="/schedule-calendar" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Schedule Calendar</Link>
            <Link to="/pesanan-berhasil-success" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Pesanan Berhasil Success</Link>
            <Link to="/detail-pesanan-transaction-detail" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Detail Pesanan Transaction Detail</Link>
            <Link to="/detail-produk" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Detail Produk</Link>
            <Link to="/ajukan-pembatalan-cancellation-request" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Ajukan Pembatalan Cancellation Request</Link>
            <Link to="/daftar-pesanan-saya" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Daftar Pesanan Saya</Link>
            <Link to="/pesanan-saya-order-review" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Pesanan Saya Order Review</Link>
            <Link to="/masuk" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Masuk</Link>
            <Link to="/dashboard-home" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Dashboard Home</Link>
          </nav>
        </header>

        {/* Dynamic Routed Pages */}
        <main className="flex-1 w-full">
          <Routes>
          <Route path="/" element={<AdminDashboardOverview />} />
          <Route path="/admin-event-management-screen" element={<AdminEventManagementScreen />} />
          <Route path="/admin-customer-management" element={<AdminCustomerManagement />} />
          <Route path="/dashboard-home-technical-high-contrast-1" element={<DashboardHomeTechnicalHighContrast1 />} />
          <Route path="/dashboard-home-technical-high-contrast-2" element={<DashboardHomeTechnicalHighContrast2 />} />
          <Route path="/dashboard-home-rounded-data-primitives" element={<DashboardHomeRoundedDataPrimitives />} />
          <Route path="/dashboard-home-balanced-variation-2" element={<DashboardHomeBalancedVariation2 />} />
          <Route path="/customer-segment-analytics-enterprise-core" element={<CustomerSegmentAnalyticsEnterpriseCore />} />
          <Route path="/component-showcase-technical-tokens" element={<ComponentShowcaseTechnicalTokens />} />
          <Route path="/dashboard-home-balanced-variation-1" element={<DashboardHomeBalancedVariation1 />} />
          <Route path="/dashboard-home-sharp-data-bars" element={<DashboardHomeSharpDataBars />} />
          <Route path="/screen-1-dashboard-home" element={<Screen1DashboardHome />} />
          <Route path="/screen-2-homework-search" element={<Screen2HomeworkSearch />} />
          <Route path="/screen-3-calendar-exams-schedule" element={<Screen3CalendarExamsSchedule />} />
          <Route path="/detail-transaksi" element={<DetailTransaksi />} />
          <Route path="/sugidev-services-projects" element={<SugidevServicesProjects />} />
          <Route path="/project-inquiry-clean-background" element={<ProjectInquiryCleanBackground />} />
          <Route path="/devos-engineering-dashboard" element={<DevosEngineeringDashboard />} />
          <Route path="/duolingo-learning-dashboard" element={<DuolingoLearningDashboard />} />
          <Route path="/promos-management-sugi-admin-2" element={<PromosManagementSugiAdmin2 />} />
          <Route path="/bookings-management-sugi-admin" element={<BookingsManagementSugiAdmin />} />
          <Route path="/services-management-sugi-admin" element={<ServicesManagementSugiAdmin />} />
          <Route path="/users-management-sugi-admin" element={<UsersManagementSugiAdmin />} />
          <Route path="/order-history-status" element={<OrderHistoryStatus />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/ai-profit-calculator-budgeting-panel-2" element={<AiProfitCalculatorBudgetingPanel2 />} />
          <Route path="/jastip-landing-page" element={<JastipLandingPage />} />
          <Route path="/payment-cancellation-gateway" element={<PaymentCancellationGateway />} />
          <Route path="/product-catalog" element={<ProductCatalog />} />
          <Route path="/shopper-list-workspace" element={<ShopperListWorkspace />} />
          <Route path="/ai-profit-calculator-budgeting-panel-1" element={<AiProfitCalculatorBudgetingPanel1 />} />
          <Route path="/admin-invoice-fees-manager" element={<AdminInvoiceFeesManager />} />
          <Route path="/admin-master-dashboard" element={<AdminMasterDashboard />} />
          <Route path="/customer-checkout-form" element={<CustomerCheckoutForm />} />
          <Route path="/admin-payment-cancellation-dashboard" element={<AdminPaymentCancellationDashboard />} />
          <Route path="/wellness-dashboard" element={<WellnessDashboard />} />
          <Route path="/admin-event-catalog-management" element={<AdminEventCatalogManagement />} />
          <Route path="/detail-event-katalog" element={<DetailEventKatalog />} />
          <Route path="/beranda-home" element={<BerandaHome />} />
          <Route path="/notifikasi-notifications" element={<NotifikasiNotifications />} />
          <Route path="/welcome-screen" element={<WelcomeScreen />} />
          <Route path="/daftar-akun" element={<DaftarAkun />} />
          <Route path="/upload-bukti-pembayaran" element={<UploadBuktiPembayaran />} />
          <Route path="/schedule-calendar" element={<ScheduleCalendar />} />
          <Route path="/pesanan-berhasil-success" element={<PesananBerhasilSuccess />} />
          <Route path="/detail-pesanan-transaction-detail" element={<DetailPesananTransactionDetail />} />
          <Route path="/detail-produk" element={<DetailProduk />} />
          <Route path="/ajukan-pembatalan-cancellation-request" element={<AjukanPembatalanCancellationRequest />} />
          <Route path="/daftar-pesanan-saya" element={<DaftarPesananSaya />} />
          <Route path="/pesanan-saya-order-review" element={<PesananSayaOrderReview />} />
          <Route path="/masuk" element={<Masuk />} />
          <Route path="/dashboard-home" element={<DashboardHome />} />
          <Route path="*" element={<AdminDashboardOverview />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
