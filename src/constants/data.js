import images from './images';

const Menu = [
    {
        text: 'Home',
        link: '#home',
    },
    {
        text: 'Services',
        link: '#services',
    },
    {
        text: 'Vision',
        link: '#use-cases',
    },
    {
        text: 'How we create',
        link: '#process',
    },

    {
        text: 'Testimonials',
        link: '#testimonials',
    },
    {
        text: 'Sign Up/Sign In',
        link: '#quote',
    }
];
const ServicesData = [
    {
        titleone: 'Customized',
        titletwo: 'Packages',
        link: '#',
        itemclass: 'blight',
        imgURL: images.services01,
    },
    {
        titleone: 'Packaging',
        titletwo: 'Consultancy',
        link: '#',
        itemclass: 'bgreen',
        imgURL: images.services02,
    },
    {
        titleone: 'Gift',
        titletwo: 'Packaging',
        link: '#',
        itemclass: 'bdark',
        imgURL: images.services03,
    },
    {
        titleone: 'Packaging',
        titletwo: 'Procurement',
        link: '#',
        itemclass: 'blight',
        imgURL: images.services04,
    },
    {
        titleone: 'Training',
        titletwo: 'Sessions',
        link: '#',
        itemclass: 'bgreen',
        imgURL: images.services05,
    },
    {
        titleone: 'Smart pack',
        titletwo: 'Exchange',
        link: '#',
        itemclass: 'bdark',
        imgURL: images.services06,
    },
]
const CaseStudies = [
    {
        text: 'Our mission is to empower Women enterpreneurs to replace Single-Use plastics packages with eco-friendly packages for a cleaner environment.',
        link: '#',
    },
    {
        text: 'Our vision is to become the leading brand in sustainable and Smart packaging across Africa by 2030.',
        link: '#',
    },
    {
        text: 'Our core values are: 1.People Centric(Customers and team), 2.Purpose(Adding value), 3.Passion(Our drive to achieve).',
        link: '#',
    },
];

const WorkingProcess = [
    {
        title: 'We advise and create with you the best fit product packaging to meet your business needs',
        description: 'we pride ourselves on being your strategic packaging partner. Our dedicated team not only provides expert advice but collaborates closely with you to craft the perfect packaging solution tailored to meet the unique needs of your business. Whether you are launching a new product or seeking to enhance your current packaging strategy, we work hand-in-hand with our clients to advise on the best practices and create innovative, customized packaging that not only protects your products but also elevates your brand presence.',
    },
    {
        title: 'We offer our clients with both already made and custom-made packages, mainly paper bags, food packs and customized packages',
        description: 'we understand that every business is unique, and so are its packaging requirements. Thats why we offer a diverse range of packaging solutions to cater to your specific needs. Whether youre looking for ready-made options or seeking a bespoke packaging experience, weve got you covered. Our extensive product line includes a variety of options such as paper bags, food packs, and fully customizable packages.',
    },
    {
        title: 'We also procure product packages for businesses',
        description: 'we go the extra mile to simplify your packaging procurement process. In addition to offering a diverse range of in-house packaging solutions, we extend our services to procure product packages for businesses. Understanding the challenges of sourcing the right packaging materials, we leverage our industry expertise and network to find high-quality, cost-effective packages that align with your brands requirements.',
    },
    {
        title: 'We offer consultancy services in product packaging and branding',
        description: 'Our consultancy services encompass every aspect of product packaging and branding, offering a holistic approach to meet your business objectives. Whether you are launching a new product, rebranding, or seeking to optimize your current packaging strategy, our team collaborates closely with you to understand your goals and challenges. We leverage our industry expertise to recommend innovative packaging designs, materials, and branding strategies that resonate with your target audience and set your products apart on the shelves.',
    },
   

];

const Team = [
    {
        name: 'Derrick Kofi Sarfo',
        position: 'Team Lead',
        info: 'Mr.Derrick Sarfo is the Chief Executive Officer at DercolBags Packaging, a sustainable Packaging firm.',
        foto: images.team01,
        linkedin: '#',
    },
    {
        name: 'Bevelyn Dartey',
        position: 'General Manager',
        info: 'Bevelyn Dartey  is the General Manager at DercolBags Packaging, a sustainable Packaging firm.',
        foto: images.team02,
        linkedin: '#',
    },
    {
        name: 'Susanne Dick-Sagoe',
        position: 'Creative Director',
        info: 'Susanne Dick-Sagoe is the Creative Director at DercolBags Packaging, a sustainable Packaging firm',
        foto: images.team03,
        linkedin: '#',
    },
    {
        name: 'Benedicta M.Bondzie',
        position: 'Customer Relations',
        info: 'Benedicta M.Bondzie is the Customer Relations Officer at DercolBags Packaging, a sustainable Packaging firm',
        foto: images.team04,
        linkedin: '#',
    },
    {
        name: 'Patricia Amanfu',
        position: 'Executive Assistant',
        info: 'Patricia Amanfu is the Executive Assistant at DercolBags Packaging, a sustainable Packaging firm',
        foto: images.team05,
        linkedin: '#',
    },
    {
        name: 'Faustina Amuzu',
        position: 'Accountant',
        info: 'Faustina Amuzu is the Accountant at DercolBags Packaging, a sustainable Packaging firm',
        foto: images.team06,
        linkedin: '#',
    },
    {
        name: 'Ben Mensah',
        position: 'Marketing & Sales Rep',
        info: 'Ben Mensah  is the Marketing and Sales Rep at DercolBags Packaging, a sustainable Packaging firm',
        foto: images.team07,
        linkedin: '#',
    },

];

const Testimonials = [
    {
        name: 'Green Height',
        position: '',
        testimonial: '"You can always trust Dercolbags to deliver on quality and distinctive packages"',
    },
    {
        name: '1981 clothings',
        position: '',
        testimonial: '"For me its the great customer service and how issues related to products are resolved immediately."',
    },
    {
        name: 'Elizas',
        position: '',
        testimonial: '"We were a bit skeptical about the switch from plastics but after 4 years of choosing dercolbags we have realised and appreciate the benefit and positive effect on our brand."',
    },
 
];
export default { Menu, CaseStudies, WorkingProcess, Team, Testimonials, ServicesData };