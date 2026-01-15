import "./App.css";
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";

const CTA_LINK = "https://cal.example.com/deluge-pos-demo";
const CONTACT_EMAIL = "delugesolutions@gmail.com";
const CONTACT_PHONE = "+263786195584";
const CONTACT_ADDRESS = "16 Chace Ave, Murambi, Mutare";

const featureHighlights = [
	{
		title: "Fast checkout",
		description:
			"Serve more customers with barcode scanning, quick totals, and flexible payments.",
	},
	{
		title: "Inventory control",
		description:
			"Track stock in real time across locations with transfers, receipts, and adjustments.",
	},
	{
		title: "Accounting ready",
		description:
			"Automatic journal entries keep sales, refunds, and expenses aligned.",
	},
	{
		title: "Wholesale friendly",
		description:
			"Sell in bulk or single units with built-in unit conversion.",
	},
	{
		title: "Staff management",
		description:
			"Assign roles, audit transactions, and keep every action accountable.",
	},
	{
		title: "Actionable reporting",
		description:
			"Daily performance snapshots with live sales, cash, and margin insights.",
	},
];

const featureSections = [
	{
		title: "Sales & Checkout",
		description: "Speed, accuracy, and flexible payment options at the till.",
		items: [
			"Product grid with search and filtering",
			"Real-time shopping cart",
			"Multiple payment methods (Cash, Card, Mobile Wallet, Gift Card)",
			"Automatic change calculation",
			"Transaction numbering and tracking",
			"Receipt generation",
			"Quick checkout workflow",
		],
	},
	{
		title: "Product Management",
		description: "Control pricing, barcodes, and product visibility in one place.",
		items: [
			"Product catalog with categories",
			"SKU and barcode support",
			"Pricing management (cost and selling price)",
			"Product images (placeholder support)",
			"Active/inactive product status",
			"Bulk product import/export (via database)",
		],
	},
	{
		title: "Bulk-to-Single Conversion",
		description: "Built for wholesale and mixed-unit selling.",
		items: [
			"Multi-unit product support (case, single, kg, liter, etc.)",
			"Configurable conversion ratios",
			"Automatic price calculation per unit",
			"Fractional inventory tracking for bulk items",
			"Unit selector in cart",
			"Visual bulk indicators",
		],
	},
	{
		title: "Variance Reduction",
		description: "Cycle counts, variance tracking, and instant adjustments.",
		items: [
			"Cycle counting interface",
			"Expected vs actual quantity comparison",
			"Automatic variance percentage calculation",
			"Root cause tracking (miscount, theft, damage, etc.)",
			"Automatic stock adjustment on variance submission",
			"Historical variance reports",
			"Variance value calculation",
		],
	},
	{
		title: "Breakage & Waste Management",
		description: "Capture losses with approvals and analytics.",
		items: [
			"Quick breakage reporting from POS screen",
			"Categorized damage types (glass, spillage, expired, damaged, theft)",
			"Sub-category support",
			"Automatic loss calculation based on cost price",
			"Photo evidence support (database field ready)",
			"Approval workflow for high-value losses",
			"Disposal method tracking",
			"Supplier credit request flags",
			"Breakage analytics in dashboard",
		],
	},
	{
		title: "Inter-Branch Operations",
		description: "Move stock and track approvals across locations.",
		items: [
			"Create transfer requests between branches",
			"Multi-item transfer support",
			"Approval workflow (Admin/Manager)",
			"Transfer status tracking (pending, approved, rejected, completed)",
			"Automatic inventory updates on completion",
			"Transfer history and reporting",
			"Multiple branch/location support",
			"Branch-specific day-end times",
			"Branch assignment for devices",
			"Branch information (address, contact)",
		],
	},
	{
		title: "Day-End Closing",
		description: "Automated and manual day-end workflows.",
		items: [
			"Scheduled day-end closing per branch",
			"Configurable closing time (HH:MM format)",
			"Automatic calculation of daily totals",
			"Background scheduler",
			"Manual day-end closing option",
			"Cash count with variance calculation",
			"Transaction summary",
			"Payment method breakdown",
			"Notes field",
			"Closing history",
		],
	},
	{
		title: "User, Employee & Device Management",
		description: "Keep access controlled and devices assigned correctly.",
		items: [
			"User creation and editing",
			"Role-based permissions (Admin, Manager, Cashier, Inventory Clerk)",
			"PIN and password authentication",
			"Device assignment",
			"Active/inactive status",
			"User deletion (with safeguards)",
			"POS device registration",
			"Unique device codes",
			"Device status tracking",
			"User-to-device assignment",
		],
	},
	{
		title: "Network & Multi-Device Support",
		description: "Scale from a single register to a full branch network.",
		items: [
			"Central server for multiple POS devices",
			"TCP socket communication",
			"Device authentication",
			"User authentication",
			"Real-time data synchronization",
			"Product catalog sync",
			"Inventory sync",
			"Transaction submission",
			"Heartbeat monitoring",
			"Connection management",
			"Standalone mode (single device)",
			"Server mode (central server)",
			"Client mode (POS devices)",
			"Automatic reconnection",
			"Offline transaction queuing (basic)",
		],
	},
	{
		title: "ZIMRA Fiscal Integration",
		description: "Built-in compliance for fiscal device integration.",
		items: [
			"ZIMRA API integration",
			"Automatic transaction registration",
			"Fiscal receipt number generation",
			"QR code support",
			"Fiscal signature tracking",
			"Transaction cancellation (credit notes)",
			"Device status monitoring",
			"Connection testing",
			"Error handling and logging",
			"VAT calculation (15% default)",
			"Fiscal receipt storage",
			"Registration error tracking",
			"Configurable API settings",
		],
	},
	{
		title: "Reporting & Analytics",
		description: "Real-time dashboards plus deep operational reports.",
		items: [
			"Real-time metrics (sales, transactions, breakage, low stock)",
			"Sales analytics table",
			"Inventory status overview",
			"Breakage reports view",
			"Product management interface",
			"Sales by period",
			"Transaction history",
			"Inventory valuation",
			"Breakage loss tracking",
			"Transfer history",
			"Day-end closing history",
			"Variance reports",
		],
	},
	{
		title: "Security & Access Control",
		description: "Protect data with secure access and audit trails.",
		items: [
			"Password-based login",
			"PIN-based quick login",
			"Admin password protection for back office",
			"Role-based access control",
			"Password hashing (SHA256)",
			"Secure database connections",
			"Transaction logging",
			"Audit trail support",
		],
	},
	{
		title: "Hardware & UI/UX",
		description: "Designed for touch and retail hardware workflows.",
		items: [
			"Barcode scanner support",
			"Receipt printer configuration",
			"Cash drawer and card reader ready",
			"Square-inspired design",
			"Responsive layout",
			"Smooth animations",
			"Touch-friendly interface",
			"Card-based layout",
			"Real-time search and quick actions",
		],
	},
	{
		title: "Configuration & Reliability",
		description: "Flexible settings with strong data integrity.",
		items: [
			"Environment-based configuration (.env)",
			"Database configuration",
			"Server/client mode settings",
			"Device code configuration",
			"Day-end time per branch",
			"Branch active/inactive status",
			"Unique constraints and foreign keys",
			"Transaction support with rollback on errors",
		],
	},
];

const testimonials = [
	{
		quote:
			"Deluge POS helped us reduce stock variances and speed up checkout times.",
		name: "Retail Manager",
		company: "Urban Market",
	},
	{
		quote:
			"The accounting automation is a game-changer. Our month-end is painless now.",
		name: "Finance Lead",
		company: "Peak Traders",
	},
	{
		quote:
			"Bulk and single-unit selling fits our wholesale model perfectly.",
		name: "Operations Head",
		company: "Harvest Supply",
	},
];

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="site">
			<header className="site-header">
				<div className="container header-inner">
					<div className="brand">
						<div className="logo-mark">DP</div>
						<div>
							<p className="brand-name">Deluge POS</p>
							<p className="brand-tagline">Modern retail operations</p>
						</div>
					</div>
					<nav className="nav">
						<NavLink to="/" end>
							Home
						</NavLink>
						<NavLink to="/features">Features</NavLink>
						<NavLink to="/about">About</NavLink>
						<NavLink to="/contact">Contact</NavLink>
					</nav>
					<a className="btn btn-primary" href={CTA_LINK} target="_blank" rel="noreferrer">
						Book a demo
					</a>
				</div>
			</header>
			<main>{children}</main>
			<footer className="site-footer">
				<div className="container footer-grid">
					<div>
						<p className="footer-title">Deluge POS</p>
						<p className="muted">
							A reliable POS suite for retail, wholesale, and multi-branch operations.
						</p>
					</div>
					<div>
						<p className="footer-title">Contact</p>
						<p className="muted">Email: {CONTACT_EMAIL}</p>
						<p className="muted">Phone: {CONTACT_PHONE}</p>
						<p className="muted">Address: {CONTACT_ADDRESS}</p>
					</div>
					<div>
						<p className="footer-title">Company</p>
						<p className="muted">Security, compliance, and uptime baked in.</p>
					</div>
				</div>
				<p className="footer-bottom">© 2026 Deluge POS. All rights reserved.</p>
			</footer>
		</div>
	);
}

function Home() {
	return (
		<Layout>
			<section className="hero">
				<div className="container hero-grid">
					<div>
						<p className="eyebrow">Deluge POS platform</p>
						<h1>Run every store with confidence.</h1>
						<p className="lead">
							Deluge POS brings checkout, inventory, and accounting together so you can
							move faster, sell smarter, and stay in control.
						</p>
						<div className="hero-actions">
							<a className="btn btn-primary" href={CTA_LINK} target="_blank" rel="noreferrer">
								Book a demo
							</a>
							<a className="btn btn-outline" href={`mailto:${CONTACT_EMAIL}`}>
								Contact sales
							</a>
						</div>
						<div className="hero-metrics">
							<div>
								<h3>99.9%</h3>
								<p className="muted">System uptime</p>
							</div>
							<div>
								<h3>30%</h3>
								<p className="muted">Faster checkout</p>
							</div>
							<div>
								<h3>24/7</h3>
								<p className="muted">Operational visibility</p>
							</div>
						</div>
					</div>
					<div className="hero-card">
						<p className="card-title">Product snapshot</p>
						<div className="placeholder">
							<p>Screenshot placeholder</p>
						</div>
						<ul className="card-list">
							<li>Sales dashboard</li>
							<li>Inventory overview</li>
							<li>Daily cash summary</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="section">
				<div className="container">
					<h2>Built for high-volume retail and wholesale.</h2>
					<p className="section-lead">
						Everything you need to operate smoothly, from the front counter to the back
						office.
					</p>
					<div className="grid-3">
						{featureHighlights.slice(0, 3).map((feature) => (
							<div key={feature.title} className="feature-card">
								<h3>{feature.title}</h3>
								<p className="muted">{feature.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="section soft">
				<div className="container">
					<h2>What operators say</h2>
					<div className="grid-3">
						{testimonials.map((item) => (
							<div key={item.name} className="testimonial-card">
								<p className="quote">“{item.quote}”</p>
								<p className="muted">
									{item.name} · {item.company}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="cta-strip">
				<div className="container cta-inner">
					<div>
						<h2>Ready to see Deluge POS in action?</h2>
						<p className="muted">Schedule a demo tailored to your business.</p>
					</div>
					<a className="btn btn-primary" href={CTA_LINK} target="_blank" rel="noreferrer">
						Book a demo
					</a>
				</div>
			</section>
		</Layout>
	);
}

function Features() {
	return (
		<Layout>
			<section className="page-hero">
				<div className="container">
					<h1>Features that keep teams aligned.</h1>
					<p className="lead">
						From fast transactions to airtight reporting, Deluge POS is built for
						daily operational clarity.
					</p>
				</div>
			</section>
			<section className="section">
				<div className="container features-stack">
					{featureSections.map((section) => (
						<div key={section.title} className="feature-section">
							<div className="feature-section-header">
								<h2>{section.title}</h2>
								<p className="muted">{section.description}</p>
							</div>
							<ul className="feature-list">
								{section.items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>
			<section className="section soft">
				<div className="container split">
					<div>
						<h2>Real-time insights</h2>
						<p className="muted">
							Your back office stays current with live dashboards and instant
							visibility into sales, refunds, and inventory movement.
						</p>
						<ul className="list">
							<li>Automated accounting entries</li>
							<li>Inventory movement tracking</li>
							<li>Branch-to-branch transfers</li>
						</ul>
					</div>
					<div className="placeholder tall">
						<p>Dashboard placeholder</p>
					</div>
				</div>
			</section>
		</Layout>
	);
}

function About() {
	return (
		<Layout>
			<section className="page-hero">
				<div className="container">
					<h1>Built for operations teams.</h1>
					<p className="lead">
						Deluge POS is designed with real retail workflows in mind — from
						front-line cashiers to finance teams closing the books.
					</p>
				</div>
			</section>
			<section className="section">
				<div className="container split">
					<div>
						<h2>Our mission</h2>
						<p className="muted">
							We help fast-growing businesses keep control of inventory, cash, and
							customer experience with a single system.
						</p>
						<p className="muted">
							This site is ready for your final branding. Swap in your logo,
							screenshots, and demo scheduling link whenever you are ready.
						</p>
					</div>
					<div className="placeholder tall">
						<p>Team photo placeholder</p>
					</div>
				</div>
			</section>
		</Layout>
	);
}

function Contact() {
	return (
		<Layout>
			<section className="page-hero">
				<div className="container">
					<h1>Let’s plan your rollout.</h1>
					<p className="lead">
						Talk to our team about rollout, integrations, and migration support.
					</p>
				</div>
			</section>
			<section className="section">
				<div className="container contact-grid">
					<div className="contact-card">
						<h3>Book a demo</h3>
						<p className="muted">
							See Deluge POS in action with a customized walkthrough.
						</p>
						<a className="btn btn-primary" href={CTA_LINK} target="_blank" rel="noreferrer">
							Open calendar
						</a>
					</div>
					<div className="contact-card">
						<h3>Contact sales</h3>
						<p className="muted">
							Email us your requirements and we’ll respond promptly.
						</p>
						<a className="btn btn-outline" href={`mailto:${CONTACT_EMAIL}`}>
							{CONTACT_EMAIL}
						</a>
					</div>
					<div className="contact-card">
						<h3>Implementation help</h3>
						<p className="muted">
							Our team assists with data imports, training, and go-live planning.
						</p>
						<p className="muted">Phone: {CONTACT_PHONE}</p>
						<p className="muted">Address: {CONTACT_ADDRESS}</p>
					</div>
				</div>
			</section>
		</Layout>
	);
}

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/features" element={<Features />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
