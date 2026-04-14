export interface ThemeCopy {
  heroLabel: string;
  heroTagline: string;
  sectionLabels: {
    services: string;
    howItWorks: string;
    stack: string;
    contact: string;
  };
  sectionHeadings: {
    services: string;
    howItWorks: string;
    stack: string;
    contact: string;
  };
  services: Array<{ title: string; description: string }>;
  howItWorks: string[];
  stackIntro: string;
  contactText: string;
  footerTagline?: string;
}

export interface ThemeDefinition {
  id: string;
  label: string;
  copy: ThemeCopy;
}

export const themes: Record<string, ThemeDefinition> = {
  serious: {
    id: 'serious',
    label: 'Serious',
    copy: {
      heroLabel: '// software studio',
      heroTagline:
        'Affordable, production-grade software. We deliver outcomes that used to take a full engineering team, powered by disciplined AI workflows and DevOps automation.',
      sectionLabels: {
        services: '// 01',
        howItWorks: '// 02',
        stack: '// 03',
        contact: '// 04',
      },
      sectionHeadings: {
        services: 'What we build',
        howItWorks: 'How it works',
        stack: 'Stack',
        contact: 'Get in touch',
      },
      services: [
        {
          title: 'Geospatial systems',
          description:
            'Interactive web maps, spatial APIs, and data pipelines built on OGC standards. We deliver the database, the API, the viewer, and the infrastructure as a managed bundle.',
        },
        {
          title: 'Custom software',
          description:
            "Websites, internal tools, and data architecture for businesses that need something off-the-shelf can't provide. Modern stack, built to last.",
        },
        {
          title: 'AI workflow consulting',
          description:
            'We help engineering teams adopt AI-accelerated development with reusable skills, automated verification, and structured agent orchestration.',
        },
      ],
      howItWorks: [
        'The \u201caffordable\u201d part isn\u2019t about cutting corners. It\u2019s about an opinionated operating model that combines AI tooling with open-source foundations and DevOps discipline, so a small team ships what used to require a large one.',
        'Our geospatial work builds on <a href="https://github.com/ogc-maps">ogc-maps</a>, an open-source organization we maintain with reusable mapping libraries built around OGC API standards. Customers pay for delivery and support, not R&D.',
      ],
      stackIntro: 'Cloud-native, standards-based, and built for maintainability.',
      contactText:
        'Interested in working together? Reach out at <a href="mailto:christopher.esterlein@gmail.com">christopher.esterlein@gmail.com</a>.',
    },
  },

  eccentric: {
    id: 'eccentric',
    label: 'Eccentric',
    copy: {
      heroLabel: '!!! ATTENTION !!!',
      heroTagline:
        "Our software is so good it should probably be illegal. We build things that make your competitors weep and your users question reality. All powered by AI that definitely isn\u2019t sentient (we think).",
      sectionLabels: {
        services: '>>> BEHOLD',
        howItWorks: '>>> THE SECRET',
        stack: '>>> THE ARSENAL',
        contact: '>>> SUMMON US',
      },
      sectionHeadings: {
        services: 'What we unleash',
        howItWorks: 'The secret sauce',
        stack: 'Our arsenal',
        contact: 'You know you want to',
      },
      services: [
        {
          title: 'PORTAL ENGINEERING',
          description:
            "We don\u2019t build maps. We build PORTALS TO ANOTHER DIMENSION that also happen to comply with OGC standards. Your data has never looked this good. It\u2019s honestly unfair to your competitors.",
        },
        {
          title: 'SOFTWARE SO GOOD IT HURTS',
          description:
            "Websites, tools, and architectures so well-crafted that other developers will assume you\u2019re cheating. You\u2019re not. You just hired us. (Ok, maybe that IS cheating.)",
        },
        {
          title: 'AI WHISPERING',
          description:
            "While everyone else is asking ChatGPT to write their emails, we\u2019re orchestrating fleets of AI agents that ship production code while you sleep. The future is here and it\u2019s INCREDIBLE.",
        },
      ],
      howItWorks: [
        "Here\u2019s the thing they don\u2019t want you to know: most software costs too much because most teams are doing it wrong. We combined AI tooling with open-source foundations and an unreasonable amount of enthusiasm. The result? Software that costs a fraction of what you\u2019d expect and works approximately 1000% better.",
        'Our geospatial platform is built on <a href="https://github.com/ogc-maps">ogc-maps</a>, an open-source project we maintain because we believe in sharing the wealth. Yes, the core libraries are FREE. No, we can\u2019t believe it either. You\u2019re welcome.',
      ],
      stackIntro:
        'Each technology was hand-selected through a rigorous process of being absolutely incredible.',
      contactText:
        'Ready to experience software that will genuinely change your life? (Slight exaggeration.) Email us at <a href="mailto:christopher.esterlein@gmail.com">christopher.esterlein@gmail.com</a> before we get too famous and start charging more.',
    },
  },

  corporate: {
    id: 'corporate',
    label: 'Corporate',
    copy: {
      heroLabel: 'Innovating Tomorrow, Today.\u2122',
      heroTagline:
        'Side Software Co is an agentic AI-native digital transformation partner delivering composable, zero-trust enterprise solutions that leverage multi-modal RAG pipelines and platform engineering to drive measurable stakeholder value across the entire software development lifecycle.',
      sectionLabels: {
        services: 'OUR CAPABILITIES',
        howItWorks: 'OUR METHODOLOGY',
        stack: 'OUR TECHNOLOGY',
        contact: 'CONNECT WITH US',
      },
      sectionHeadings: {
        services: 'Comprehensive Solution Portfolio',
        howItWorks: 'Our Proven Methodology',
        stack: 'Enterprise Technology Ecosystem',
        contact: 'Begin Your Digital Transformation Journey',
      },
      services: [
        {
          title: 'Location Intelligence & Spatial Data Mesh',
          description:
            'Leveraging our proprietary composable geospatial architecture, we deliver shift-left spatial intelligence solutions underpinned by observability-first design principles, enabling organizations to operationalize location data across the enterprise data mesh while maintaining full OGC interoperability and FinOps-optimized cloud spend governance.',
        },
        {
          title: 'Cloud-Native Digital Transformation Services',
          description:
            'Our platform engineering practice enables seamless digital transformation through GitOps-driven, zero-trust architectures built on composable microservices. We align technology investments with north star metrics, delivering infrastructure-as-code solutions that shift left on quality while maintaining enterprise-grade observability and compliance posture.',
        },
        {
          title: 'Agentic AI Center of Excellence',
          description:
            'As a recognized thought leader in responsible AI and agentic orchestration, we partner with forward-thinking organizations to establish MLOps-enabled Centers of Excellence that operationalize multi-modal foundation models at enterprise scale, from RAG pipeline architecture to autonomous agent frameworks with human-in-the-loop governance.',
        },
      ],
      howItWorks: [
        'At Side Software Co, we believe in a holistic, platform-engineered approach to solution delivery. Our proprietary AI-Accelerated Development Framework\u2122 combines shift-left testing methodologies with agentic AI orchestration and FinOps discipline to optimize the software delivery pipeline end-to-end, reducing time-to-value while maximizing ROI for key stakeholders through continuous observability and data-driven north star metric alignment.',
        'Our composable platform strategy leverages <a href="https://github.com/ogc-maps">ogc-maps</a>, an open-source ecosystem that reflects our commitment to community-driven innovation, interoperable standards, and responsible AI principles. This GitOps-native approach enables significant cost efficiencies through FinOps governance while ensuring enterprise-grade reliability, zero-trust security posture, and full compliance with emerging regulatory frameworks.',
      ],
      stackIntro:
        'Our enterprise-grade, cloud-native technology ecosystem enables scalable, observable, and FinOps-optimized digital transformation with zero-trust security by design.',
      contactText:
        'Ready to accelerate your agentic AI-driven digital transformation journey? Connect with our platform engineering team at <a href="mailto:christopher.esterlein@gmail.com">christopher.esterlein@gmail.com</a> to schedule a complimentary north star metric alignment and composable architecture discovery session.',
      footerTagline:
        'Empowering Responsible Digital Excellence Through Agentic Innovation\u2122',
    },
  },

  geocities: {
    id: 'geocities',
    label: '90s',
    copy: {
      heroLabel: '~*~*~ Welcome to my homepage!! ~*~*~',
      heroTagline:
        "HI!! My name is Side Software and this is my web page about software!! I made it myself in Notepad!! Please sign my guestbook!!",
      sectionLabels: {
        services: '*** COOL STUFF ***',
        howItWorks: '*** HOW IT WORKS ***',
        stack: '*** COOL TOOLS ***',
        contact: '*** EMAIL ME ***',
      },
      sectionHeadings: {
        services: 'Things I Can Make For U!!',
        howItWorks: 'How We Do It',
        stack: 'Cool Programs We Use',
        contact: 'Talk 2 Me!!',
      },
      services: [
        {
          title: 'COOL WEB MAPS!!',
          description:
            "We make REALLY COOL maps that you can click on and stuff!! They use these things called OGC standards which sounds boring but trust me it's AWESOME!! We can put YOUR data on a map!!",
        },
        {
          title: 'WEB PAGES & MORE!!',
          description:
            "Need a web page? We can make you one that's even cooler than THIS one!! (hard to believe I know) We also do databases and internal tools and stuff!!",
        },
        {
          title: 'ROBOT HELPERS!!',
          description:
            "We teach computers to write code FOR you!! It's like having a robot assistant except it actually works!! Your developers will have so much free time they won't know what to do!!",
        },
      ],
      howItWorks: [
        "OK so here's the deal -- most software companies charge you like a MILLION dollars but we don't do that!! We use AI and open source software so we can build stuff for way less money!! It's like getting a Ferrari for the price of a skateboard!!",
        'We also have this cool project called <a href="https://github.com/ogc-maps">ogc-maps</a> which is totally FREE!! Yes FREE!! Like free as in you don\'t have to pay anything!! We built it because sharing is caring!!',
      ],
      stackIntro: 'These are all the cool programs and things we use!!',
      contactText:
        "Wanna work with us?? Send me an email at <a href=\"mailto:christopher.esterlein@gmail.com\">christopher.esterlein@gmail.com</a>!! I check my email like every day so I'll write back SUPER fast!!",
      footerTagline:
        'You are visitor #00004,782 | Best viewed in Netscape Navigator 4.0 at 800x600',
    },
  },
};

export const themeIds = Object.keys(themes);
export const defaultTheme = 'serious';
