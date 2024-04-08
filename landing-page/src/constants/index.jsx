import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { BrainCircuit } from 'lucide-react';
import { ShieldHalf } from "lucide-react";
import { PanelsTopLeft  } from "lucide-react";
import { Settings } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Facebook } from 'lucide-react';
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";


import c1 from "../assets/clients-pictures/c1.png";
import c2 from "../assets/clients-pictures/c2.png";
import c3 from "../assets/clients-pictures/c3.png";
import c4 from "../assets/clients-pictures/c4.png";
import c5 from "../assets/clients-pictures/c5.png";
import c6 from "../assets/clients-pictures/c6.png";
import c7 from "../assets/clients-pictures/c7.png";
import c8 from "../assets/clients-pictures/c8.png";
import c9 from "../assets/clients-pictures/c9.png";

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Nossos Serviços", href: "#work" },
  { label: "Preços", href: "#pricing" },
  { label: "Testemunhos", href: "#testimonials" },
];
export const clients = [
  {img: c1, name:"Empresa A"},
  {img: c2, name:"Empresa B"},
  {img: c3, name:"Empresa C"},
  {img: c4, name:"Empresa D"},
  {img: c5, name:"Empresa E"},
  {img: c6, name:"Empresa F"},
  {img: c7, name:"Empresa G"},
  {img: c8, name:"Empresa H"},
  {img: c9, name:"Empresa I"},

];
export const testimonials = [
  {
    user: "João Silva",
    company: "Tecno Solutions",
    image: user1,
    text: "Estou extremamente satisfeito com o serviço da Fulano Hosting. Seu suporte técnico foi incrivelmente útil e sempre esteve disponível quando precisei. Meu site nunca teve problemas de tempo de inatividade e a velocidade de carregamento é impressionante. Recomendo totalmente!",
  },
  {
    user: "Joana Pereira",
    company: "ByteTech",
    image: user2,
    text: "Mudar para a Fulano Hosting foi a melhor decisão que já tomei para o meu negócio online. A migração foi fácil e sem complicações, e desde então tenho desfrutado de uma confiabilidade incrível. O suporte ao cliente é excepcional, sempre respondendo rapidamente e com soluções eficazes.",
  },
  {
    user: "Thiago Onofre",
    company: "InnovateIT",
    image: user3,
    text: "Fulano Hosting superou todas as minhas expectativas. Eles não só oferecem uma infraestrutura sólida e confiável para hospedar meu site, mas também fornecem recursos extras úteis, como backups automáticos e certificados SSL gratuitos."
  },
  {
    user: "Miguel Soares",
    company: "Data Dynamics",
    image: user4,
    text: "Depois de passar por vários provedores de hospedagem, finalmente encontrei a Fulano Hosting e estou impressionado. Eles realmente se preocupam com seus clientes e estão sempre dispostos a ajudar. Meu site está mais rápido do que nunca e não tive nenhum problema desde que mudei para eles.",
  },
  {
    user: "Fábio Müller",
    company: "Code Crafters",
    image: user5,
    text: "Estou impressionado com a qualidade do serviço da Fulano Hosting. O painel de controle é fácil de usar e me permite gerenciar meu site com facilidade. Além disso, seu compromisso com a segurança é evidente, e me sinto tranquilo sabendo que meu site está em boas mãos.",
  },
  {
    user: "Gabriela Santino",
    company: "CyberNexGen",
    image: user6,
    text: "Fulano Hosting me proporcionou uma experiência de hospedagem verdadeiramente sem complicações. Eles cuidaram de todos os aspectos técnicos para mim, permitindo que eu me concentrasse no crescimento do meu negócio. Estou muito feliz por ter escolhido a Fulano Hosting como meu provedor de hospedagem.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Escalabilidade",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <BrainCircuit />,
    text: "Desempenho",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <ShieldHalf />,
    text: "Segurança Garantida",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <BatteryCharging />,
    text: "Alta Disponibilidade",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <PanelsTopLeft  />,
    text: "Recursos Extras",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <Settings  />,
    text: "Facil Gerenciamento",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const checklistItems = [
  {
    title: "Hospedagem Compartilhada",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Hospedagem VPS (Servidor Virtual Privado)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Servidores Dedicados",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Serviços de E-mail",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const pricingOptions = [
  {
    title: "Gratuito",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Empresarial",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const sobreLinks = [
  { href: "#", text: "Quem Somos" },
  { href: "#", text: "Trabalhe Conosco" },
  { href: "#", text: "Contato" }
];

export const socialMediaLinks = [
  { href: "#", text: "Instagram" ,icon: <Instagram/>},
  { href: "#", text: "LinkedIn" ,icon:<Linkedin />},
  { href: "#", text: "Facebook" ,icon:<Facebook/>}
];

export const communityLinks = [
  { href: "#", text: "Eventos" },
  { href: "#", text: "Novidades" },
  { href: "#", text: "Ajuda" },
];
