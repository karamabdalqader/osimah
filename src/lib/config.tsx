import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

export const Highlight = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <span
            className={cn(
                "bg-radial from-gradient-primary to-gradient-secondary/40 bg-clip-text text-transparent",
                className,
            )}
        >
            {children}
        </span>
    );
};

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
    name: "Osimah Digital",
    description: "Saudi technology house for digital design, development, and infrastructure.",
    cta: "Get in Touch",
    url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    keywords: [
        "Digital Design",
        "Web Development",
        "IT Infrastructure",
        "AI Innovation",
        "Saudi Technology",
    ],
    links: {
        email: "info@osimah.sa",
        twitter: "https://twitter.com/osimahdigital",
        discord: "",
        github: "",
        instagram: "https://instagram.com/osimahdigital",
    },
    nav: {
        links: [
            { id: 1, name: "Home", href: "/" },
            {
                id: 2,
                name: "Services",
                href: "#",
                submenu: [
                    { id: 1, icon: <Icons.magicClick className="size-4 text-muted-foreground" />, name: "Branding & UX Design", href: "#services", description: "Brand identity, UX & UI crafted to elevate your digital presence", image: "/o1.PNG" },
                    { id: 2, icon: <Icons.code className="size-4 text-muted-foreground" />, name: "Web Development", href: "#services", description: "Front-end, back-end and integrations built for scale", image: "/o2.PNG" },
                    { id: 3, icon: <Icons.shock className="size-4 text-muted-foreground" />, name: "Infrastructure & AI", href: "#services", description: "Secure server configurations, deployment and AI innovation", image: "/o3.PNG" },
                ]
            },
            { id: 3, name: "About", href: "#about" },
            { id: 4, name: "Contact Us", href: "#contact" },
        ],
    },
    hero: {
        badgeIcon: <Icons.globe className="size-4" />,
        badge: "Saudi Technology House",
        title: "give your online presence the website it deserves",
        description:
            "We offer cutting-edge digital solutions — from branding to infrastructure — tailored for the Saudi market and beyond.",
        cta: {
            primary: {
                text: "Talk to Us",
                href: "#contact",
            },
        },
    },
    demoSection: {
        title: "Design. Build. Launch. Scale.",
        description:
            "From brand identity to production deployment — Osimah Digital covers every layer of your digital journey",
        items: [
            {
                id: 1,
                title: "Branding & Design",
                content:
                    "Distinctive brand identities, UX research and UI design that connect with your audience and elevate your market presence.",
                image:
                    "/o4.PNG",
            },
            {
                id: 2,
                title: "Web Development",
                content:
                    "Robust front-end and back-end solutions with seamless third-party integrations, built for performance and scale.",
                image:
                    "/o5.PNG",
            },
            {
                id: 3,
                title: "Infrastructure",
                content:
                    "Secure server configurations, deployment pipelines and ongoing maintenance to keep your digital assets running reliably.",
                image:
                    "/o6.PNG",
            },
            {
                id: 4,
                title: "AI Innovation",
                content:
                    "Cutting-edge AI solutions tailored to the KSA market — from intelligent automations to data-driven product experiences.",
                image:
                    "/o7.PNG",
            },
        ],
    },
    companyShowcase: {
        companyLogos: [
            { id: 1, name: "NEOM", logo: (<svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="0" y="30" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="28" fill="#0789C0" letterSpacing="3">NEOM</text></svg>) },
            { id: 2, name: "Red Sea Global", logo: (<svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="20" r="9" fill="#C0392B" opacity="0.85"/><text x="28" y="26" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="16" fill="currentColor" opacity="0.8">Red Sea Global</text></svg>) },
            { id: 3, name: "solutions by stc", logo: (<svg width="170" height="40" viewBox="0 0 170 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="6" width="28" height="28" rx="6" fill="#6E2D8B"/><text x="4" y="26" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="13" fill="white">stc</text><text x="36" y="26" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="15" fill="currentColor" opacity="0.8">solutions by stc</text></svg>) },
            { id: 4, name: "SELA", logo: (<svg width="90" height="40" viewBox="0 0 90 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="0" y="30" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="26" fill="currentColor" opacity="0.8" letterSpacing="2">SELA</text></svg>) },
            { id: 5, name: "Ministry of Investment", logo: (<svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="0" y="18" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="12" fill="currentColor" opacity="0.7">Ministry of</text><text x="0" y="34" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="15" fill="#0789C0">INVESTMENT</text></svg>) },
            { id: 6, name: "Ministry of Justice", logo: (<svg width="155" height="40" viewBox="0 0 155 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="0" y="18" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="12" fill="currentColor" opacity="0.7">Ministry of</text><text x="0" y="34" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="15" fill="currentColor" opacity="0.85">JUSTICE</text></svg>) },
            { id: 7, name: "Public Investment Fund", logo: (<svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="0" y="26" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="28" fill="#1A5276" opacity="0.85">PIF</text></svg>) },
            { id: 8, name: "G20 Riyadh", logo: (<svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="0" y="30" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="26" fill="currentColor" opacity="0.8">G20</text><text x="56" y="30" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="16" fill="currentColor" opacity="0.6">Riyadh</text></svg>) },
        ],
    },
    workflowSection: {
        badge: {
            icon: <Icons.terminal className="size-4 text-muted-foreground" />,
            text: "How We Work",
        },
        title: (<>Your digital partner for {" "}<Highlight>every milestone</Highlight></>),
        description: "Osimah Digital covers the full stack — from brand identity and UX design to development, deployment and ongoing infrastructure support",
        sections: {
            title: "From vision to launch in record time",
            description: "We embed alongside your team to understand your goals, then deliver tailored digital solutions that drive measurable results in the Saudi market.",
            ctaButton: {
                text: "Learn More",
                href: "#about",
            },
            blocks: [
                {
                    id: 1,
                    icon: <Icons.terminal className="size-4 text-muted-foreground" />,
                    title: "Discovery & strategy",
                    description: "We start by deeply understanding your business, market position and goals — then craft a digital strategy aligned with the Saudi landscape.",
                },
                {
                    id: 2,
                    icon: <Icons.shock className="size-4 text-muted-foreground" />,
                    title: "Design, build & deploy",
                    description: "Our team handles end-to-end delivery: brand identity, UX design, development and production deployment — all under one roof.",
                },
            ],
        }
    },
    workflowConnectSection: {
        title: "One partner. Every layer of your digital stack.",
        description: "Design, build, and deploy — Osimah handles it all with global technology partnerships and deep local expertise in the Saudi market.",
        ctaButton: {
            text: "Our Services",
            href: "#services",
        },
        blocks: [
            {
                id: 1,
                icon: <Icons.magicClick className="size-4 text-muted-foreground" />,
                title: "Global technology partnerships",
                description: "We bring industry-leading platforms like Liferay and Sitecore to KSA businesses — enabling enterprise-grade digital experiences.",
            },
            {
                id: 2,
                icon: <Icons.magicStar className="size-4 text-muted-foreground" />,
                title: "AI solutions for the KSA market",
                description: "We are establishing a dedicated AI entity to deliver cutting-edge AI solutions and automation specifically tailored for Saudi industries.",
            },
        ],
    },
    featureSection: {
        badge: {
            icon: <Icons.globe className="size-4 text-muted-foreground" />,
            text: "Why Osimah",
        },
        title: (<>Built for the{" "}<Highlight>Saudi digital economy.</Highlight></>),
        description: "From startups to enterprises, we bring global technology partnerships and local market expertise to deliver digital solutions that make an impact.",
        sections: {
            title: "Full-stack delivery. Local expertise.",
            description: "Osimah Digital is a Saudi technology house trusted by businesses across the Kingdom for end-to-end digital transformation.",
            ctaButton: {
                text: "Contact Us",
                href: "#contact",
            },
            blocks: [
                {
                    id: 1,
                    icon: <Icons.puzzle className="size-4 text-muted-foreground" />,
                    title: "Technology partnerships & integrations",
                    description: "We partner with global technology leaders and sign exclusive agreements to bring the best platforms to Saudi businesses.",
                },
                {
                    id: 2,
                    icon: <Icons.globe className="size-4 text-muted-foreground" />,
                    title: "KSA market focus",
                    description: "Deep understanding of local regulations, culture, and business needs — we are built to serve Saudi enterprises from the ground up.",
                },
            ],
        }
    },
    connectSection: {
        badge: {
            icon: <Icons.terminal className="size-4 text-muted-foreground" />,
            text: "Our Process",
        },
        title: (<>Discover.{" "}<Highlight>Design. Build. Launch.</Highlight></>),
        description: "A proven process that takes your idea from concept to live product — efficiently and with full transparency at every step",
        step1: {
            title: "Discover & strategize",
            description: "We start with a deep dive into your business goals, target audience, and competitive landscape to build a solid digital strategy.",
        },
        step2: {
            title: "Design & develop",
            description: "Our team crafts the brand identity, UX/UI design and then builds robust front-end and back-end solutions tailored to your needs.",
        },
        step3: {
            title: "Launch & grow",
            description: "We handle deployment, infrastructure setup and ongoing support — so you can focus on your business while we keep your digital presence running strong.",
        },
    },
    testimonialSection: {
        badge: {
            icon: (
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-muted-foreground"
                >
                    <path
                        d="M4 4C3.44772 4 3 4.44772 3 5V7C3 7.55228 3.44772 8 4 8H5V10C5 10.5523 5.44772 11 6 11H7C7.55228 11 8 10.5523 8 10V5C8 4.44772 7.55228 4 7 4H4Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11 4C10.4477 4 10 4.44772 10 5V7C10 7.55228 10.4477 8 11 8H12V10C12 10.5523 12.4477 11 13 11H14C14.5523 11 15 10.5523 15 10V5C15 4.44772 14.5523 4 14 4H11Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            text: "Scale",
        },
        title: (<>Trusted by <Highlight>businesses</Highlight> across the Kingdom</>),
        description: "Companies across Saudi Arabia partner with Osimah Digital for their most important digital initiatives. Here is what they say about working with us.",
        testimonials: [
            {
                id: "1",
                name: "Khalid Al-Rasheed",
                role: "CEO at Saudi Retail Group",
                img: "https://randomuser.me/api/portraits/men/32.jpg",
                description: (
                    <p>
                        Osimah Digital transformed our entire online presence. From brand identity to e-commerce platform, their team delivered a world-class digital experience that our customers love.
                    </p>
                ),
            },
            {
                id: "2",
                name: "Fatima Al-Zahrani",
                role: "Marketing Director at Vision Holdings",
                img: "https://randomuser.me/api/portraits/women/44.jpg",
                description: (
                    <p>
                        Working with Osimah felt like having an in-house team that truly understood our Saudi market. Their design sensibility and technical execution were outstanding.{" "}
                        <Highlight>We saw a 60% increase in online inquiries within the first month.</Highlight>
                    </p>
                ),
            },
            {
                id: "3",
                name: "Mohammed Al-Harbi",
                role: "Founder at Riyadh TechVentures",
                img: "https://randomuser.me/api/portraits/men/67.jpg",
                description: (
                    <p>
                        As a startup, we needed speed and quality. Osimah delivered both. Our platform was live in weeks and the UX has been praised by investors and users alike.
                    </p>
                ),
            },
            {
                id: "4",
                name: "Sara Al-Otaibi",
                role: "Head of Digital at KSA Finance Corp",
                img: "https://randomuser.me/api/portraits/women/29.jpg",
                description: (
                    <p>
                        The infrastructure team at Osimah gave us the reliability and security we needed for financial services.
                        <Highlight> Our uptime went to 99.9% and compliance requirements were fully met.</Highlight>
                    </p>
                ),
            },
            {
                id: "5",
                name: "Ahmed Al-Ghamdi",
                role: "COO at Saudi Logistics Co",
                img: "https://randomuser.me/api/portraits/men/11.jpg",
                description: (
                    <p>
                        Osimah Digital integrated our legacy systems with a modern web platform flawlessly. The back-end integrations were complex, but their team handled everything professionally.
                    </p>
                ),
            },
            {
                id: "6",
                name: "Noura Al-Shehri",
                role: "Brand Manager at Jeddah Lifestyle",
                img: "https://randomuser.me/api/portraits/women/61.jpg",
                description: (
                    <p>
                        The branding work Osimah did for us was exceptional.
                        <Highlight>
                            They understood our vision and translated it into a visual identity that resonates perfectly with our audience.
                        </Highlight>{" "}
                    </p>
                ),
            },
            {
                id: "7",
                name: "Tariq Al-Mansouri",
                role: "CTO at MedTech Arabia",
                img: "https://randomuser.me/api/portraits/men/38.jpg",
                description: (
                    <p>
                        We trusted Osimah with our patient portal development and they exceeded every expectation.
                        <Highlight>
                            The security standards and UX quality set a new benchmark for healthcare digital products in the region.
                        </Highlight>
                    </p>
                ),
            },
            {
                id: "8",
                name: "Lama Al-Dosari",
                role: "E-commerce Director at Gulf Retail",
                img: "https://randomuser.me/api/portraits/women/17.jpg",
                description: (
                    <p>
                        Osimah rebuilt our e-commerce platform from scratch and the results speak for themselves.
                        <Highlight>
                            Conversion rates doubled and our page load times dropped by 70%.
                        </Highlight>{" "}
                        Exceptional team.
                    </p>
                ),
            },
            {
                id: "9",
                name: "Faisal Al-Quraishi",
                role: "VP Technology at Arabian Group",
                img: "https://randomuser.me/api/portraits/men/52.jpg",
                description: (
                    <p>
                        The Liferay implementation Osimah delivered for our intranet transformed how our 500+ employees collaborate daily.
                        <Highlight>
                            Their expertise with enterprise platforms is unmatched in the region.
                        </Highlight>
                    </p>
                ),
            },
            {
                id: "10",
                name: "Rana Al-Bahkali",
                role: "CEO at Saudi EdTech",
                img: "https://randomuser.me/api/portraits/women/82.jpg",
                description: (
                    <p>
                        From concept to launch in 8 weeks — Osimah made it happen. Their full-stack capability meant we had one trusted partner for everything.
                        <Highlight>
                            No handoffs, no delays, just results.
                        </Highlight>
                    </p>
                ),
            },
            {
                id: "11",
                name: "Waleed Al-Shamrani",
                role: "Founder at KSA PropTech",
                img: "https://randomuser.me/api/portraits/men/77.jpg",
                description: (
                    <p>
                        Osimah Digital is the rare agency that combines strong design taste with solid engineering.
                        <Highlight>
                            They are our long-term digital partner and we could not imagine working with anyone else.
                        </Highlight>
                    </p>
                ),
            },
            {
                id: "12",
                name: "Hessa Al-Mutairi",
                role: "CMO at Riyadh Fashion House",
                img: "https://randomuser.me/api/portraits/women/33.jpg",
                description: (
                    <p>
                        The UX redesign Osimah delivered completely changed how our customers interact with our brand online.
                        <Highlight>Engagement metrics jumped 80% in the first quarter.</Highlight> Truly transformative.
                    </p>
                ),
            },
            {
                id: "13",
                name: "Saad Al-Enezi",
                role: "Director at Saudi Innovation Hub",
                img: "https://randomuser.me/api/portraits/men/43.jpg",
                description: (
                    <p>
                        Osimah&apos;s AI innovation work opened doors we did not think were possible.
                        <Highlight>
                            They helped us prototype and validate an AI-powered product that is now attracting serious investor interest.
                        </Highlight>
                    </p>
                ),
            },
        ],
    },
    pricing: {
        title: "Engagement packages built for growth",
        description:
            "Every project is unique. Choose the engagement model that fits your needs, or contact us for a custom quote.",
        pricingItems: [
            {
                name: "Growth",
                href: "#contact",
                price: "Custom",
                period: "project",
                yearlyPrice: "Custom",
                features: [
                    "Brand identity & UX design",
                    "Full-stack web development",
                    "Third-party integrations",
                    "SEO & performance optimization",
                    "3 months post-launch support",
                    "Dedicated project manager",
                    "Arabic & English bilingual support",
                    "Staging & production environments",
                ],
                description: "Ideal for growing businesses launching or relaunching digitally",
                buttonText: "Get a Quote",
                buttonColor: "bg-secondary text-white",
                isPopular: true,
            },
            {
                name: "Starter",
                href: "#contact",
                price: "Custom",
                period: "project",
                yearlyPrice: "Custom",
                features: [
                    "Brand identity design",
                    "Responsive website (up to 10 pages)",
                    "Basic SEO setup",
                    "1 month post-launch support",
                ],
                description: "Perfect for startups and small businesses getting online",
                buttonText: "Contact Us",
                buttonColor: "bg-accent text-primary",
                isPopular: false,
            },
            {
                name: "Enterprise",
                href: "#contact",
                price: "Custom",
                period: "retainer",
                yearlyPrice: "Custom",
                features: [
                    "Full digital transformation scope",
                    "Enterprise platform implementation",
                    "AI integration & automation",
                    "Dedicated development team",
                    "Ongoing infrastructure management",
                ],
                description: "For large organizations requiring end-to-end digital transformation",
                buttonText: "Talk to Sales",
                buttonColor: "bg-primary text-primary-foreground",
                isPopular: false,
            },
        ],
    },
    faqSection: {
        title: "Frequently Asked Questions",
        description:
            "Answers to common questions about Osimah Digital and our services. Have more questions? Reach out to us directly.",
        faQitems: [
            {
                id: 1,
                question: "What services does Osimah Digital offer?",
                answer:
                    "Osimah Digital provides end-to-end digital services including brand identity and UX/UI design, front-end and back-end web development, third-party integrations, IT infrastructure setup, server configurations, security, deployment, and AI innovation solutions — all tailored for the Saudi market.",
            },
            {
                id: 2,
                question: "Do you serve clients outside of Saudi Arabia?",
                answer:
                    "While our primary focus is the KSA market, we serve clients across the GCC and beyond. Our vision is to be a leading Saudi technology house with global reach, and we actively attract international technology partnerships.",
            },
            {
                id: 3,
                question: "How long does a typical project take?",
                answer:
                    "Project timelines vary based on scope. A branding and website project typically takes 6–12 weeks. Enterprise platform implementations and full digital transformation engagements are scoped individually. We provide a detailed timeline during the discovery phase.",
            },
            {
                id: 4,
                question: "Do you support Arabic language websites?",
                answer:
                    "Absolutely. We build fully bilingual (Arabic and English) digital experiences with proper RTL support, Arabic typography, and culturally appropriate UX design. Localization is a core part of our delivery.",
            },
            {
                id: 5,
                question: "What technology platforms do you work with?",
                answer:
                    "We partner with leading global platforms including Liferay, Sitecore, and other enterprise CMS and e-commerce solutions. We also build custom solutions using modern frameworks depending on your project requirements.",
            },
            {
                id: 6,
                question: "How does the engagement process begin?",
                answer:
                    "It starts with a discovery conversation where we learn about your business, goals, and challenges. We then propose a tailored scope of work with timeline and investment. Once aligned, we kick off with a structured onboarding process.",
            },
        ],
    },
    ctaSection: {
        id: "cta",
        title: "Ready to Talk?",
        backgroundImage: "/our new scope.jpeg",
        button: {
            text: "Contact Us",
            href: "#contact",
        },
        subtext: "Do you have a big idea we can help with? Let us build something great together.",
    },
    footerLinks: [
        {
            title: "Services",
            links: [
                { id: 1, title: "Branding & UX Design", url: "#services" },
                { id: 2, title: "Web Development", url: "#services" },
                { id: 3, title: "Infrastructure", url: "#services" },
                { id: 4, title: "AI Innovation", url: "#services" },
            ],
        },
        {
            title: "Company",
            links: [
                { id: 5, title: "About Us", url: "#about" },
                { id: 6, title: "Our Vision", url: "#about" },
                { id: 7, title: "Careers", url: "#" },
                { id: 8, title: "Contact", url: "#contact" },
            ],
        },
        {
            title: "Legal",
            links: [
                { id: 9, title: "Privacy Policy", url: "#" },
                { id: 10, title: "Terms of Service", url: "#" },
            ],
        },
    ],


};

export type SiteConfig = typeof siteConfig;
