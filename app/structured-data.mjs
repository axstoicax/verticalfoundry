import {etsyFaqs} from './etsy-faq-data.mjs';
import {productCatalog} from './product-catalog.mjs';
// Canonical connected graph; Corporation classification and EIN published at owner request. Brands are not represented as available Product offers.
export const pressReferences=[
  {
    "title": "Discounter.ro — launch announcement",
    "source": "Comunicate de Presa",
    "category": "Company announcement",
    "url": "https://www.comunicatedepresa.ro/sas-forest-s-r-l-/discounter-ro-tot-ce-iti-doresti-la-cele-mai-mici-preturi"
  },
  {
    "title": "Online ticketing and TicketPoint in 2007",
    "source": "Wall-Street",
    "category": "Editorial",
    "url": "https://www.wall-street.ro/articol/IT-C-Tehnologie/36560/biletele-online-afacerea-care-a-luat-cu-asalt-internetul-in-2007.html"
  },
  {
    "title": "Romanian online sales could double",
    "source": "Ziarul Financiar",
    "category": "Editorial",
    "url": "https://www.zf.ro/business-hi-tech/vanzarile-locale-online-s-ar-putea-dubla-3048432"
  },
  {
    "title": "Online retailers and traditional IT stores",
    "source": "Business Magazin",
    "category": "Editorial",
    "url": "https://www.businessmagazin.ro/actualitate/business-magazinele-online-musca-din-profitul-retailerilor-de-it-din-offline-1006747"
  },
  {
    "title": "DOL.ro platform development announcement",
    "source": "Comunicate de Presa",
    "category": "Company announcement",
    "url": "https://www.comunicatedepresa.ro/rtc-holding/dol-ro-isi-dezvolta-o-noua-platforma"
  }
];
export const faqs=[
  {
    "question": "What is VerticalFoundry?",
    "answer": "VerticalFoundry is a brand of Quant Data Intelligence LLC developing practical, industry-specific business tools for service-business owners."
  },
  {
    "question": "Who are your tools designed for?",
    "answer": "Our focus is on owners and operators of service businesses, including independent professionals and small teams. Each release will explain its intended use."
  },
  {
    "question": "What kinds of business problems do you focus on?",
    "answer": "Common areas include pricing decisions, profitability, customer relationships, organization, and day-to-day operational clarity."
  },
  {
    "question": "Are VerticalFoundry products available now?",
    "answer": "Our initial portfolio is being prepared. Current availability, pricing, and features will be shown in individual Etsy listings when products launch."
  },
  {
    "question": "Will the tools work for my industry?",
    "answer": "We design for specific industries rather than assuming the same workflow works everywhere. Please check each product listing for intended users and compatibility."
  },
  {
    "question": "Is a subscription required?",
    "answer": "Our planned downloadable products emphasize straightforward, one-time purchases. Any external software costs or product-specific conditions will be disclosed before purchase."
  },
  {
    "question": "Where can I buy VerticalFoundry products?",
    "answer": "Our official storefront is the VerticalFoundry Etsy shop. Check it for any currently available listings."
  },
  {
    "question": "How can I get help with an Etsy order?",
    "answer": "For an existing Etsy purchase, use Etsy Messages or Help with Order so the request remains connected to the transaction. You can also email help@getverticalfoundry.com for general support questions."
  },
  {
    "question": "Can agencies or consultants use the products for clients?",
    "answer": "Permitted usage depends on the license supplied with a specific product. Contact us before using a purchase across multiple client businesses."
  },
  {
    "question": "How can I contact VerticalFoundry about partnerships?",
    "answer": "Use the contact form to prepare an email, select Partnerships and agencies, or write directly to hello@getverticalfoundry.com."
  }
];
const schemas={
  "/": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.quantdataintel.com/#organization",
        "name": "Quant Data Intelligence LLC",
        "legalName": "Quant Data Intelligence LLC",
        "url": "https://www.quantdataintel.com/",
        "description": "US limited liability company developing data-informed digital business projects and operating the VerticalFoundry and AetherTrigger initiatives.",
        "slogan": "Clarity, Quantified. Engineered Growth.",
        "logo": {
          "@id": "https://www.quantdataintel.com/#logo"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "30 N Gould St. Ste N",
          "addressLocality": "Sheridan",
          "addressRegion": "WY",
          "postalCode": "82801",
          "addressCountry": "US",
          "description": "Business correspondence address; not a public walk-in office."
        },
        "telephone": "+1 (307) 900-1944",
        "email": "hello@quantdataintel.com",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "general inquiries",
            "email": "hello@quantdataintel.com",
            "telephone": "+1 (307) 900-1944",
            "availableLanguage": [
              "en"
            ]
          },
          {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": "help@quantdataintel.com",
            "availableLanguage": [
              "en"
            ]
          }
        ],
        "founder": {
          "@id": "https://getverticalfoundry.com/#founder"
        },
        "brand": [
          {
            "@id": "https://getverticalfoundry.com/#brand"
          },
          {
            "@id": "https://aethertrigger.com/#brand"
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/company/quantdataintel/",
          "https://www.facebook.com/QuantDataIntel/"
        ]
      },
      {
        "@type": "Brand",
        "@id": "https://getverticalfoundry.com/#brand",
        "name": "VerticalFoundry",
        "url": "https://getverticalfoundry.com/",
        "description": "Developing industry-specific business tools to help service-business owners make clearer decisions and reduce operational friction; initial releases in preparation.",
        "slogan": "Powerful Inside. Simple Outside.",
        "logo": {
          "@id": "https://getverticalfoundry.com/#logo"
        },
        "owner": {
          "@id": "https://www.quantdataintel.com/#organization"
        },
        "sameAs": [
          "https://www.linkedin.com/company/theverticalfoundry/",
          "https://www.facebook.com/VerticalFoundry/",
          "https://www.instagram.com/verticalfoundry/",
          "https://x.com/VerticalFoundry",
          "https://www.tiktok.com/@verticalfoundry",
          "https://www.youtube.com/@verticalfoundry",
          "https://www.etsy.com/shop/VerticalFoundry"
        ],
        "audience": {
          "@type": "BusinessAudience",
          "name": "Service-business owners and operators"
        },
        "subjectOf": [
          {
            "@type": "WebPage",
            "name": "VerticalFoundry private Facebook community",
            "url": "https://www.facebook.com/groups/verticalfoundry"
          }
        ]
      },
      {
        "@type": "ImageObject",
        "@id": "https://getverticalfoundry.com/#logo",
        "name": "VerticalFoundry official logo",
        "url": "https://getverticalfoundry.com/logos/VerticalFoundry_Primary_Horizontal_OUTLINED.svg",
        "contentUrl": "https://getverticalfoundry.com/logos/VerticalFoundry_Primary_Horizontal_OUTLINED.svg",
        "encodingFormat": "image/svg+xml"
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.quantdataintel.com/#logo",
        "name": "Quant Data Intelligence LLC official logo",
        "url": "https://www.quantdataintel.com/assets/quant-logo-complete.png",
        "contentUrl": "https://www.quantdataintel.com/assets/quant-logo-complete.png",
        "encodingFormat": "image/png"
      },
      {
        "@type": "WebSite",
        "@id": "https://getverticalfoundry.com/#website",
        "name": "VerticalFoundry",
        "url": "https://getverticalfoundry.com/",
        "publisher": {
          "@id": "https://www.quantdataintel.com/#organization"
        },
        "about": {
          "@id": "https://getverticalfoundry.com/#brand"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://getverticalfoundry.com/#webpage",
        "name": "VerticalFoundry | Business Systems Built for Your Industry",
        "description": "Industry-specific business tools are being developed for service-business owners.",
        "url": "https://getverticalfoundry.com/",
        "isPartOf": {
          "@id": "https://getverticalfoundry.com/#website"
        },
        "inLanguage": "en-US",
        "publisher": {
          "@id": "https://www.quantdataintel.com/#organization"
        },
        "about": {
          "@id": "https://getverticalfoundry.com/#brand"
        },
        "mainEntity": {
          "@id": "https://getverticalfoundry.com/#brand"
        }
      }
    ]
  },
  "/products/": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.quantdataintel.com/#organization",
        "name": "Quant Data Intelligence LLC",
        "legalName": "Quant Data Intelligence LLC",
        "url": "https://www.quantdataintel.com/",
        "description": "US limited liability company developing data-informed digital business projects and operating the VerticalFoundry and AetherTrigger initiatives.",
        "slogan": "Clarity, Quantified. Engineered Growth.",
        "logo": {
          "@id": "https://www.quantdataintel.com/#logo"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "30 N Gould St. Ste N",
          "addressLocality": "Sheridan",
          "addressRegion": "WY",
          "postalCode": "82801",
          "addressCountry": "US",
          "description": "Business correspondence address; not a public walk-in office."
        },
        "telephone": "+1 (307) 900-1944",
        "email": "hello@quantdataintel.com",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "general inquiries",
            "email": "hello@quantdataintel.com",
            "telephone": "+1 (307) 900-1944",
            "availableLanguage": [
              "en"
            ]
          },
          {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": "help@quantdataintel.com",
            "availableLanguage": [
              "en"
            ]
          }
        ],
        "founder": {
          "@id": "https://getverticalfoundry.com/#founder"
        },
        "brand": [
          {
            "@id": "https://getverticalfoundry.com/#brand"
          },
          {
            "@id": "https://aethertrigger.com/#brand"
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/company/quantdataintel/",
          "https://www.facebook.com/QuantDataIntel/"
        ]
      },
      {
        "@type": "Brand",
        "@id": "https://getverticalfoundry.com/#brand",
        "name": "VerticalFoundry",
        "url": "https://getverticalfoundry.com/",
        "description": "Developing industry-specific business tools to help service-business owners make clearer decisions and reduce operational friction; initial releases in preparation.",
        "slogan": "Powerful Inside. Simple Outside.",
        "logo": {
          "@id": "https://getverticalfoundry.com/#logo"
        },
        "owner": {
          "@id": "https://www.quantdataintel.com/#organization"
        },
        "sameAs": [
          "https://www.linkedin.com/company/theverticalfoundry/",
          "https://www.facebook.com/VerticalFoundry/",
          "https://www.instagram.com/verticalfoundry/",
          "https://x.com/VerticalFoundry",
          "https://www.tiktok.com/@verticalfoundry",
          "https://www.youtube.com/@verticalfoundry",
          "https://www.etsy.com/shop/VerticalFoundry"
        ],
        "audience": {
          "@type": "BusinessAudience",
          "name": "Service-business owners and operators"
        },
        "subjectOf": [
          {
            "@type": "WebPage",
            "name": "VerticalFoundry private Facebook community",
            "url": "https://www.facebook.com/groups/verticalfoundry"
          }
        ]
      },
      {
        "@type": "ImageObject",
        "@id": "https://getverticalfoundry.com/#logo",
        "name": "VerticalFoundry official logo",
        "url": "https://getverticalfoundry.com/logos/VerticalFoundry_Primary_Horizontal_OUTLINED.svg",
        "contentUrl": "https://getverticalfoundry.com/logos/VerticalFoundry_Primary_Horizontal_OUTLINED.svg",
        "encodingFormat": "image/svg+xml"
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.quantdataintel.com/#logo",
        "name": "Quant Data Intelligence LLC official logo",
        "url": "https://www.quantdataintel.com/assets/quant-logo-complete.png",
        "contentUrl": "https://www.quantdataintel.com/assets/quant-logo-complete.png",
        "encodingFormat": "image/png"
      },
      {
        "@type": "WebSite",
        "@id": "https://getverticalfoundry.com/#website",
        "name": "VerticalFoundry",
        "url": "https://getverticalfoundry.com/",
        "publisher": {
          "@id": "https://www.quantdataintel.com/#organization"
        },
        "about": {
          "@id": "https://getverticalfoundry.com/#brand"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "CollectionPage",
        "@id": "https://getverticalfoundry.com/products/#webpage",
        "name": "What We Build | VerticalFoundry",
        "description": "Explore the challenges VerticalFoundry is designing tools to solve, including pricing, business operations, performance clarity, and customer relationships.",
        "url": "https://getverticalfoundry.com/products/",
        "isPartOf": {
          "@id": "https://getverticalfoundry.com/#website"
        },
        "inLanguage": "en-US",
        "publisher": {
          "@id": "https://www.quantdataintel.com/#organization"
        },
        "about": {
          "@id": "https://getverticalfoundry.com/#brand"
        },
        "mainEntity": {
          "@id": "https://getverticalfoundry.com/products/#projects"
        },
        "breadcrumb": {
          "@id": "https://getverticalfoundry.com/products/#breadcrumb"
        },
        "significantLink": "https://www.etsy.com/shop/VerticalFoundry"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://getverticalfoundry.com/products/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://getverticalfoundry.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "What We Build",
            "item": "https://getverticalfoundry.com/products/"
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://getverticalfoundry.com/products/#projects",
        "name": "Business challenges addressed by the planned VerticalFoundry tools",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "More confident pricing decisions"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Clearer business operations"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Performance visibility"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Customer relationship organization"
          }
        ]
      }
    ]
  },
  "/about/": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.quantdataintel.com/#organization",
        "name": "Quant Data Intelligence LLC",
        "legalName": "Quant Data Intelligence LLC",
        "url": "https://www.quantdataintel.com/",
        "description": "US limited liability company developing data-informed digital business projects and operating the VerticalFoundry and AetherTrigger initiatives.",
        "slogan": "Clarity, Quantified. Engineered Growth.",
        "logo": {
          "@id": "https://www.quantdataintel.com/#logo"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "30 N Gould St. Ste N",
          "addressLocality": "Sheridan",
          "addressRegion": "WY",
          "postalCode": "82801",
          "addressCountry": "US",
          "description": "Business correspondence address; not a public walk-in office."
        },
        "telephone": "+1 (307) 900-1944",
        "email": "hello@quantdataintel.com",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "general inquiries",
            "email": "hello@quantdataintel.com",
            "telephone": "+1 (307) 900-1944",
            "availableLanguage": [
              "en"
            ]
          },
          {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": "help@quantdataintel.com",
            "availableLanguage": [
              "en"
            ]
          }
        ],
        "founder": {
          "@id": "https://getverticalfoundry.com/#founder"
        },
        "brand": [
          {
            "@id": "https://getverticalfoundry.com/#brand"
          },
          {
            "@id": "https://aethertrigger.com/#brand"
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/company/quantdataintel/",
          "https://www.facebook.com/QuantDataIntel/"
        ]
      },
      {
        "@type": "Brand",
        "@id": "https://getverticalfoundry.com/#brand",
        "name": "VerticalFoundry",
        "url": "https://getverticalfoundry.com/",
        "description": "Developing industry-specific business tools to help service-business owners make clearer decisions and reduce operational friction; initial releases in preparation.",
        "slogan": "Powerful Inside. Simple Outside.",
        "logo": {
          "@id": "https://getverticalfoundry.com/#logo"
        },
        "owner": {
          "@id": "https://www.quantdataintel.com/#organization"
        },
        "sameAs": [
          "https://www.linkedin.com/company/theverticalfoundry/",
          "https://www.facebook.com/VerticalFoundry/",
          "https://www.instagram.com/verticalfoundry/",
          "https://x.com/VerticalFoundry",
          "https://www.tiktok.com/@verticalfoundry",
          "https://www.youtube.com/@verticalfoundry",
          "https://www.etsy.com/shop/VerticalFoundry"
        ],
        "audience": {
          "@type": "BusinessAudience",
          "name": "Service-business owners and operators"
        },
        "subjectOf": [
          {
            "@type": "WebPage",
            "name": "VerticalFoundry private Facebook community",
            "url": "https://www.facebook.com/groups/verticalfoundry"
          }
        ]
      },
      {
        "@type": "ImageObject",
        "@id": "https://getverticalfoundry.com/#logo",
        "name": "VerticalFoundry official logo",
        "url": "https://getverticalfoundry.com/logos/VerticalFoundry_Primary_Horizontal_OUTLINED.svg",
        "contentUrl": "https://getverticalfoundry.com/logos/VerticalFoundry_Primary_Horizontal_OUTLINED.svg",
        "encodingFormat": "image/svg+xml"
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.quantdataintel.com/#logo",
        "name": "Quant Data Intelligence LLC official logo",
        "url": "https://www.quantdataintel.com/assets/quant-logo-complete.png",
        "contentUrl": "https://www.quantdataintel.com/assets/quant-logo-complete.png",
        "encodingFormat": "image/png"
      },
      {
        "@type": "WebSite",
        "@id": "https://getverticalfoundry.com/#website",
        "name": "VerticalFoundry",
        "url": "https://getverticalfoundry.com/",
        "publisher": {
          "@id": "https://www.quantdataintel.com/#organization"
        },
        "about": {
          "@id": "https://getverticalfoundry.com/#brand"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "AboutPage",
        "@id": "https://getverticalfoundry.com/about/#webpage",
        "name": "About VerticalFoundry & Founder Alexandru Stoica",
        "description": "The story behind VerticalFoundry: the founder’s business experience, personal perspective and commitment to clear, practical tools for service entrepreneurs.",
        "url": "https://getverticalfoundry.com/about/",
        "isPartOf": {
          "@id": "https://getverticalfoundry.com/#website"
        },
        "inLanguage": "en-US",
        "publisher": {
          "@id": "https://www.quantdataintel.com/#organization"
        },
        "about": {
          "@id": "https://getverticalfoundry.com/#brand"
        },
        "mainEntity": {
          "@id": "https://getverticalfoundry.com/#brand"
        },
        "breadcrumb": {
          "@id": "https://getverticalfoundry.com/about/#breadcrumb"
        },
        "primaryImageOfPage": {
          "@id": "https://getverticalfoundry.com/#founder-photo"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://getverticalfoundry.com/about/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://getverticalfoundry.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About VerticalFoundry & Founder Alexandru Stoica",
            "item": "https://getverticalfoundry.com/about/"
          }
        ]
      },
      {
        "@type": "Person",
        "@id": "https://getverticalfoundry.com/#founder",
        "name": "Alexandru Stoica",
        "jobTitle": "Head of E-commerce",
        "url": "https://www.linkedin.com/in/alexstoicax/",
        "description": "Alexandru Stoica is an entrepreneur and e-commerce executive with more than 25 years of experience across e-commerce, retail, international distribution and digital services. He is Head of E-commerce at GSMnet and founder of Quant Data Intelligence LLC, which operates the VerticalFoundry and AetherTrigger brands. His work focuses on turning hands-on business experience into practical tools and clearer commercial intelligence.",
        "image": {
          "@id": "https://getverticalfoundry.com/#founder-photo"
        },
        "sameAs": [
          "https://www.linkedin.com/in/alexstoicax/",
          "https://www.facebook.com/alexstoicax",
          "https://www.instagram.com/alexstoicax/",
          "https://x.com/alexstoicax",
          "https://www.threads.net/@alexstoicax",
          "https://www.tiktok.com/@alexstoicax",
          "https://www.youtube.com/@alexstoicax"
        ],
        "email": "alexstoicax@outlook.com",
        "worksFor": {
          "@type": "Organization",
          "name": "GSMnet",
          "url": "https://www.gsmnet.ro/"
        },
        "subjectOf": [
          {
            "@id": "https://www.comunicatedepresa.ro/sas-forest-s-r-l-/discounter-ro-tot-ce-iti-doresti-la-cele-mai-mici-preturi#about-alexandru-stoica"
          },
          {
            "@id": "https://www.wall-street.ro/articol/IT-C-Tehnologie/36560/biletele-online-afacerea-care-a-luat-cu-asalt-internetul-in-2007.html#about-alexandru-stoica"
          },
          {
            "@id": "https://www.zf.ro/business-hi-tech/vanzarile-locale-online-s-ar-putea-dubla-3048432#about-alexandru-stoica"
          },
          {
            "@id": "https://www.businessmagazin.ro/actualitate/business-magazinele-online-musca-din-profitul-retailerilor-de-it-din-offline-1006747#about-alexandru-stoica"
          },
          {
            "@id": "https://www.comunicatedepresa.ro/rtc-holding/dol-ro-isi-dezvolta-o-noua-platforma#about-alexandru-stoica"
          }
        ]
      },
      {
        "@type": "ImageObject",
        "@id": "https://getverticalfoundry.com/#founder-photo",
        "url": "https://getverticalfoundry.com/images/alexandru-stoica-founder.webp",
        "contentUrl": "https://getverticalfoundry.com/images/alexandru-stoica-founder.webp",
        "thumbnailUrl": "https://getverticalfoundry.com/images/alexandru-stoica-founder-thumb.webp",
        "width": 800,
        "height": 800,
        "encodingFormat": "image/webp",
        "caption": "Alexandru Stoica, founder of Quant Data Intelligence LLC and VerticalFoundry"
      },
      {
        "@type": "CreativeWork",
        "@id": "https://www.comunicatedepresa.ro/sas-forest-s-r-l-/discounter-ro-tot-ce-iti-doresti-la-cele-mai-mici-preturi#about-alexandru-stoica",
        "name": "Discounter.ro — launch announcement",
        "url": "https://www.comunicatedepresa.ro/sas-forest-s-r-l-/discounter-ro-tot-ce-iti-doresti-la-cele-mai-mici-preturi",
        "genre": "Company announcement",
        "publisher": {
          "@type": "Organization",
          "name": "Comunicate de Presa"
        },
        "about": {
          "@id": "https://getverticalfoundry.com/#founder"
        }
      },
      {
        "@type": "CreativeWork",
        "@id": "https://www.wall-street.ro/articol/IT-C-Tehnologie/36560/biletele-online-afacerea-care-a-luat-cu-asalt-internetul-in-2007.html#about-alexandru-stoica",
        "name": "Online ticketing and TicketPoint in 2007",
        "url": "https://www.wall-street.ro/articol/IT-C-Tehnologie/36560/biletele-online-afacerea-care-a-luat-cu-asalt-internetul-in-2007.html",
        "genre": "Editorial",
        "publisher": {
          "@type": "Organization",
          "name": "Wall-Street"
        },
        "about": {
          "@id": "https://getverticalfoundry.com/#founder"
        }
      },
      {
        "@type": "CreativeWork",
        "@id": "https://www.zf.ro/business-hi-tech/vanzarile-locale-online-s-ar-putea-dubla-3048432#about-alexandru-stoica",
        "name": "Romanian online sales could double",
        "url": "https://www.zf.ro/business-hi-tech/vanzarile-locale-online-s-ar-putea-dubla-3048432",
        "genre": "Editorial",
        "publisher": {
          "@type": "Organization",
          "name": "Ziarul Financiar"
        },
        "about": {
          "@id": "https://getverticalfoundry.com/#founder"
        }
      },
      {
        "@type": "CreativeWork",
        "@id": "https://www.businessmagazin.ro/actualitate/business-magazinele-online-musca-din-profitul-retailerilor-de-it-din-offline-1006747#about-alexandru-stoica",
        "name": "Online retailers and traditional IT stores",
        "url": "https://www.businessmagazin.ro/actualitate/business-magazinele-online-musca-din-profitul-retailerilor-de-it-din-offline-1006747",
        "genre": "Editorial",
        "publisher": {
          "@type": "Organization",
          "name": "Business Magazin"
        },
        "about": {
          "@id": "https://getverticalfoundry.com/#founder"
        }
      },
      {
        "@type": "CreativeWork",
        "@id": "https://www.comunicatedepresa.ro/rtc-holding/dol-ro-isi-dezvolta-o-noua-platforma#about-alexandru-stoica",
        "name": "DOL.ro platform development announcement",
        "url": "https://www.comunicatedepresa.ro/rtc-holding/dol-ro-isi-dezvolta-o-noua-platforma",
        "genre": "Company announcement",
        "publisher": {
          "@type": "Organization",
          "name": "Comunicate de Presa"
        },
        "about": {
          "@id": "https://getverticalfoundry.com/#founder"
        }
      }
    ]
  },
  "/contact/": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.quantdataintel.com/#organization",
        "name": "Quant Data Intelligence LLC",
        "legalName": "Quant Data Intelligence LLC",
        "url": "https://www.quantdataintel.com/",
        "description": "US limited liability company developing data-informed digital business projects and operating the VerticalFoundry and AetherTrigger initiatives.",
        "slogan": "Clarity, Quantified. Engineered Growth.",
        "logo": {
          "@id": "https://www.quantdataintel.com/#logo"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "30 N Gould St. Ste N",
          "addressLocality": "Sheridan",
          "addressRegion": "WY",
          "postalCode": "82801",
          "addressCountry": "US",
          "description": "Business correspondence address; not a public walk-in office."
        },
        "telephone": "+1 (307) 900-1944",
        "email": "hello@quantdataintel.com",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "general inquiries",
            "email": "hello@quantdataintel.com",
            "telephone": "+1 (307) 900-1944",
            "availableLanguage": [
              "en"
            ]
          },
          {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": "help@quantdataintel.com",
            "availableLanguage": [
              "en"
            ]
          }
        ],
        "founder": {
          "@id": "https://getverticalfoundry.com/#founder"
        },
        "brand": [
          {
            "@id": "https://getverticalfoundry.com/#brand"
          },
          {
            "@id": "https://aethertrigger.com/#brand"
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/company/quantdataintel/",
          "https://www.facebook.com/QuantDataIntel/"
        ]
      },
      {
        "@type": "Brand",
        "@id": "https://getverticalfoundry.com/#brand",
        "name": "VerticalFoundry",
        "url": "https://getverticalfoundry.com/",
        "description": "Developing industry-specific business tools to help service-business owners make clearer decisions and reduce operational friction; initial releases in preparation.",
        "slogan": "Powerful Inside. Simple Outside.",
        "logo": {
          "@id": "https://getverticalfoundry.com/#logo"
        },
        "owner": {
          "@id": "https://www.quantdataintel.com/#organization"
        },
        "sameAs": [
          "https://www.linkedin.com/company/theverticalfoundry/",
          "https://www.facebook.com/VerticalFoundry/",
          "https://www.instagram.com/verticalfoundry/",
          "https://x.com/VerticalFoundry",
          "https://www.tiktok.com/@verticalfoundry",
          "https://www.youtube.com/@verticalfoundry",
          "https://www.etsy.com/shop/VerticalFoundry"
        ],
        "audience": {
          "@type": "BusinessAudience",
          "name": "Service-business owners and operators"
        },
        "subjectOf": [
          {
            "@type": "WebPage",
            "name": "VerticalFoundry private Facebook community",
            "url": "https://www.facebook.com/groups/verticalfoundry"
          }
        ]
      },
      {
        "@type": "ImageObject",
        "@id": "https://getverticalfoundry.com/#logo",
        "name": "VerticalFoundry official logo",
        "url": "https://getverticalfoundry.com/logos/VerticalFoundry_Primary_Horizontal_OUTLINED.svg",
        "contentUrl": "https://getverticalfoundry.com/logos/VerticalFoundry_Primary_Horizontal_OUTLINED.svg",
        "encodingFormat": "image/svg+xml"
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.quantdataintel.com/#logo",
        "name": "Quant Data Intelligence LLC official logo",
        "url": "https://www.quantdataintel.com/assets/quant-logo-complete.png",
        "contentUrl": "https://www.quantdataintel.com/assets/quant-logo-complete.png",
        "encodingFormat": "image/png"
      },
      {
        "@type": "WebSite",
        "@id": "https://getverticalfoundry.com/#website",
        "name": "VerticalFoundry",
        "url": "https://getverticalfoundry.com/",
        "publisher": {
          "@id": "https://www.quantdataintel.com/#organization"
        },
        "about": {
          "@id": "https://getverticalfoundry.com/#brand"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "ContactPage",
        "@id": "https://getverticalfoundry.com/contact/#webpage",
        "name": "Contact VerticalFoundry | Questions & FAQ",
        "description": "Contact VerticalFoundry for general inquiries, business partnerships, and customer questions; read our FAQ.",
        "url": "https://getverticalfoundry.com/contact/",
        "isPartOf": {
          "@id": "https://getverticalfoundry.com/#website"
        },
        "inLanguage": "en-US",
        "publisher": {
          "@id": "https://www.quantdataintel.com/#organization"
        },
        "about": {
          "@id": "https://getverticalfoundry.com/#brand"
        },
        "mainEntity": {
          "@id": "https://getverticalfoundry.com/#brand"
        },
        "breadcrumb": {
          "@id": "https://getverticalfoundry.com/contact/#breadcrumb"
        },
        "hasPart": {
          "@id": "https://getverticalfoundry.com/contact/#faq"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://getverticalfoundry.com/contact/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://getverticalfoundry.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Contact VerticalFoundry",
            "item": "https://getverticalfoundry.com/contact/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://getverticalfoundry.com/contact/#faq",
        "name": "VerticalFoundry Frequently Asked Questions",
        "url": "https://getverticalfoundry.com/contact/#faq",
        "isPartOf": {
          "@id": "https://getverticalfoundry.com/contact/#webpage"
        },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is VerticalFoundry?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "VerticalFoundry is a brand of Quant Data Intelligence LLC developing practical, industry-specific business tools for service-business owners."
            }
          },
          {
            "@type": "Question",
            "name": "Who are your tools designed for?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our focus is on owners and operators of service businesses, including independent professionals and small teams. Each release will explain its intended use."
            }
          },
          {
            "@type": "Question",
            "name": "What kinds of business problems do you focus on?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Common areas include pricing decisions, profitability, customer relationships, organization, and day-to-day operational clarity."
            }
          },
          {
            "@type": "Question",
            "name": "Are VerticalFoundry products available now?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our initial portfolio is being prepared. Current availability, pricing, and features will be shown in individual Etsy listings when products launch."
            }
          },
          {
            "@type": "Question",
            "name": "Will the tools work for my industry?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We design for specific industries rather than assuming the same workflow works everywhere. Please check each product listing for intended users and compatibility."
            }
          },
          {
            "@type": "Question",
            "name": "Is a subscription required?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our planned downloadable products emphasize straightforward, one-time purchases. Any external software costs or product-specific conditions will be disclosed before purchase."
            }
          },
          {
            "@type": "Question",
            "name": "Where can I buy VerticalFoundry products?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our official storefront is the VerticalFoundry Etsy shop. Check it for any currently available listings."
            }
          },
          {
            "@type": "Question",
            "name": "How can I get help with an Etsy order?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For an existing Etsy purchase, use Etsy Messages or Help with Order so the request remains connected to the transaction. You can also email help@getverticalfoundry.com for general support questions."
            }
          },
          {
            "@type": "Question",
            "name": "Can agencies or consultants use the products for clients?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Permitted usage depends on the license supplied with a specific product. Contact us before using a purchase across multiple client businesses."
            }
          },
          {
            "@type": "Question",
            "name": "How can I contact VerticalFoundry about partnerships?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use the contact form to prepare an email, select Partnerships and agencies, or write directly to hello@getverticalfoundry.com."
            }
          }
        ]
      }
    ]
  },
  "/terms-of-service/": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.quantdataintel.com/#organization",
        "name": "Quant Data Intelligence LLC",
        "legalName": "Quant Data Intelligence LLC",
        "url": "https://www.quantdataintel.com/",
        "description": "US limited liability company developing data-informed digital business projects and operating the VerticalFoundry and AetherTrigger initiatives.",
        "slogan": "Clarity, Quantified. Engineered Growth.",
        "logo": {
          "@id": "https://www.quantdataintel.com/#logo"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "30 N Gould St. Ste N",
          "addressLocality": "Sheridan",
          "addressRegion": "WY",
          "postalCode": "82801",
          "addressCountry": "US",
          "description": "Business correspondence address; not a public walk-in office."
        },
        "telephone": "+1 (307) 900-1944",
        "email": "hello@quantdataintel.com",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "general inquiries",
            "email": "hello@quantdataintel.com",
            "telephone": "+1 (307) 900-1944",
            "availableLanguage": [
              "en"
            ]
          },
          {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": "help@quantdataintel.com",
            "availableLanguage": [
              "en"
            ]
          }
        ],
        "founder": {
          "@id": "https://getverticalfoundry.com/#founder"
        },
        "brand": [
          {
            "@id": "https://getverticalfoundry.com/#brand"
          },
          {
            "@id": "https://aethertrigger.com/#brand"
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/company/quantdataintel/",
          "https://www.facebook.com/QuantDataIntel/"
        ]
      },
      {
        "@type": "Brand",
        "@id": "https://getverticalfoundry.com/#brand",
        "name": "VerticalFoundry",
        "url": "https://getverticalfoundry.com/",
        "description": "Developing industry-specific business tools to help service-business owners make clearer decisions and reduce operational friction; initial releases in preparation.",
        "slogan": "Powerful Inside. Simple Outside.",
        "logo": {
          "@id": "https://getverticalfoundry.com/#logo"
        },
        "owner": {
          "@id": "https://www.quantdataintel.com/#organization"
        },
        "sameAs": [
          "https://www.linkedin.com/company/theverticalfoundry/",
          "https://www.facebook.com/VerticalFoundry/",
          "https://www.instagram.com/verticalfoundry/",
          "https://x.com/VerticalFoundry",
          "https://www.tiktok.com/@verticalfoundry",
          "https://www.youtube.com/@verticalfoundry",
          "https://www.etsy.com/shop/VerticalFoundry"
        ],
        "audience": {
          "@type": "BusinessAudience",
          "name": "Service-business owners and operators"
        },
        "subjectOf": [
          {
            "@type": "WebPage",
            "name": "VerticalFoundry private Facebook community",
            "url": "https://www.facebook.com/groups/verticalfoundry"
          }
        ]
      },
      {
        "@type": "ImageObject",
        "@id": "https://getverticalfoundry.com/#logo",
        "name": "VerticalFoundry official logo",
        "url": "https://getverticalfoundry.com/logos/VerticalFoundry_Primary_Horizontal_OUTLINED.svg",
        "contentUrl": "https://getverticalfoundry.com/logos/VerticalFoundry_Primary_Horizontal_OUTLINED.svg",
        "encodingFormat": "image/svg+xml"
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.quantdataintel.com/#logo",
        "name": "Quant Data Intelligence LLC official logo",
        "url": "https://www.quantdataintel.com/assets/quant-logo-complete.png",
        "contentUrl": "https://www.quantdataintel.com/assets/quant-logo-complete.png",
        "encodingFormat": "image/png"
      },
      {
        "@type": "WebSite",
        "@id": "https://getverticalfoundry.com/#website",
        "name": "VerticalFoundry",
        "url": "https://getverticalfoundry.com/",
        "publisher": {
          "@id": "https://www.quantdataintel.com/#organization"
        },
        "about": {
          "@id": "https://getverticalfoundry.com/#brand"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://getverticalfoundry.com/terms-of-service/#webpage",
        "name": "Terms of Service | VerticalFoundry",
        "description": "Website terms of service for VerticalFoundry.",
        "url": "https://getverticalfoundry.com/terms-of-service/",
        "isPartOf": {
          "@id": "https://getverticalfoundry.com/#website"
        },
        "inLanguage": "en-US",
        "publisher": {
          "@id": "https://www.quantdataintel.com/#organization"
        },
        "about": {
          "@id": "https://getverticalfoundry.com/#brand"
        },
        "mainEntity": {
          "@id": "https://getverticalfoundry.com/#brand"
        },
        "breadcrumb": {
          "@id": "https://getverticalfoundry.com/terms-of-service/#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://getverticalfoundry.com/terms-of-service/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://getverticalfoundry.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Terms of Service",
            "item": "https://getverticalfoundry.com/terms-of-service/"
          }
        ]
      }
    ]
  },
  "/privacy-policy/": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.quantdataintel.com/#organization",
        "name": "Quant Data Intelligence LLC",
        "legalName": "Quant Data Intelligence LLC",
        "url": "https://www.quantdataintel.com/",
        "description": "US limited liability company developing data-informed digital business projects and operating the VerticalFoundry and AetherTrigger initiatives.",
        "slogan": "Clarity, Quantified. Engineered Growth.",
        "logo": {
          "@id": "https://www.quantdataintel.com/#logo"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "30 N Gould St. Ste N",
          "addressLocality": "Sheridan",
          "addressRegion": "WY",
          "postalCode": "82801",
          "addressCountry": "US",
          "description": "Business correspondence address; not a public walk-in office."
        },
        "telephone": "+1 (307) 900-1944",
        "email": "hello@quantdataintel.com",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "general inquiries",
            "email": "hello@quantdataintel.com",
            "telephone": "+1 (307) 900-1944",
            "availableLanguage": [
              "en"
            ]
          },
          {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": "help@quantdataintel.com",
            "availableLanguage": [
              "en"
            ]
          }
        ],
        "founder": {
          "@id": "https://getverticalfoundry.com/#founder"
        },
        "brand": [
          {
            "@id": "https://getverticalfoundry.com/#brand"
          },
          {
            "@id": "https://aethertrigger.com/#brand"
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/company/quantdataintel/",
          "https://www.facebook.com/QuantDataIntel/"
        ]
      },
      {
        "@type": "Brand",
        "@id": "https://getverticalfoundry.com/#brand",
        "name": "VerticalFoundry",
        "url": "https://getverticalfoundry.com/",
        "description": "Developing industry-specific business tools to help service-business owners make clearer decisions and reduce operational friction; initial releases in preparation.",
        "slogan": "Powerful Inside. Simple Outside.",
        "logo": {
          "@id": "https://getverticalfoundry.com/#logo"
        },
        "owner": {
          "@id": "https://www.quantdataintel.com/#organization"
        },
        "sameAs": [
          "https://www.linkedin.com/company/theverticalfoundry/",
          "https://www.facebook.com/VerticalFoundry/",
          "https://www.instagram.com/verticalfoundry/",
          "https://x.com/VerticalFoundry",
          "https://www.tiktok.com/@verticalfoundry",
          "https://www.youtube.com/@verticalfoundry",
          "https://www.etsy.com/shop/VerticalFoundry"
        ],
        "audience": {
          "@type": "BusinessAudience",
          "name": "Service-business owners and operators"
        },
        "subjectOf": [
          {
            "@type": "WebPage",
            "name": "VerticalFoundry private Facebook community",
            "url": "https://www.facebook.com/groups/verticalfoundry"
          }
        ]
      },
      {
        "@type": "ImageObject",
        "@id": "https://getverticalfoundry.com/#logo",
        "name": "VerticalFoundry official logo",
        "url": "https://getverticalfoundry.com/logos/VerticalFoundry_Primary_Horizontal_OUTLINED.svg",
        "contentUrl": "https://getverticalfoundry.com/logos/VerticalFoundry_Primary_Horizontal_OUTLINED.svg",
        "encodingFormat": "image/svg+xml"
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.quantdataintel.com/#logo",
        "name": "Quant Data Intelligence LLC official logo",
        "url": "https://www.quantdataintel.com/assets/quant-logo-complete.png",
        "contentUrl": "https://www.quantdataintel.com/assets/quant-logo-complete.png",
        "encodingFormat": "image/png"
      },
      {
        "@type": "WebSite",
        "@id": "https://getverticalfoundry.com/#website",
        "name": "VerticalFoundry",
        "url": "https://getverticalfoundry.com/",
        "publisher": {
          "@id": "https://www.quantdataintel.com/#organization"
        },
        "about": {
          "@id": "https://getverticalfoundry.com/#brand"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://getverticalfoundry.com/privacy-policy/#webpage",
        "name": "Privacy Policy | VerticalFoundry",
        "description": "Information about privacy practices and data handling on the VerticalFoundry website.",
        "url": "https://getverticalfoundry.com/privacy-policy/",
        "isPartOf": {
          "@id": "https://getverticalfoundry.com/#website"
        },
        "inLanguage": "en-US",
        "publisher": {
          "@id": "https://www.quantdataintel.com/#organization"
        },
        "about": {
          "@id": "https://getverticalfoundry.com/#brand"
        },
        "mainEntity": {
          "@id": "https://getverticalfoundry.com/#brand"
        },
        "breadcrumb": {
          "@id": "https://getverticalfoundry.com/privacy-policy/#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://getverticalfoundry.com/privacy-policy/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://getverticalfoundry.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Privacy Policy",
            "item": "https://getverticalfoundry.com/privacy-policy/"
          }
        ]
      }
    ]
  },
  "/privacy/": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.quantdataintel.com/#organization",
        "name": "Quant Data Intelligence LLC",
        "legalName": "Quant Data Intelligence LLC",
        "url": "https://www.quantdataintel.com/",
        "description": "US limited liability company developing data-informed digital business projects and operating the VerticalFoundry and AetherTrigger initiatives.",
        "slogan": "Clarity, Quantified. Engineered Growth.",
        "logo": {
          "@id": "https://www.quantdataintel.com/#logo"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "30 N Gould St. Ste N",
          "addressLocality": "Sheridan",
          "addressRegion": "WY",
          "postalCode": "82801",
          "addressCountry": "US",
          "description": "Business correspondence address; not a public walk-in office."
        },
        "telephone": "+1 (307) 900-1944",
        "email": "hello@quantdataintel.com",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "general inquiries",
            "email": "hello@quantdataintel.com",
            "telephone": "+1 (307) 900-1944",
            "availableLanguage": [
              "en"
            ]
          },
          {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": "help@quantdataintel.com",
            "availableLanguage": [
              "en"
            ]
          }
        ],
        "founder": {
          "@id": "https://getverticalfoundry.com/#founder"
        },
        "brand": [
          {
            "@id": "https://getverticalfoundry.com/#brand"
          },
          {
            "@id": "https://aethertrigger.com/#brand"
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/company/quantdataintel/",
          "https://www.facebook.com/QuantDataIntel/"
        ]
      },
      {
        "@type": "Brand",
        "@id": "https://getverticalfoundry.com/#brand",
        "name": "VerticalFoundry",
        "url": "https://getverticalfoundry.com/",
        "description": "Developing industry-specific business tools to help service-business owners make clearer decisions and reduce operational friction; initial releases in preparation.",
        "slogan": "Powerful Inside. Simple Outside.",
        "logo": {
          "@id": "https://getverticalfoundry.com/#logo"
        },
        "owner": {
          "@id": "https://www.quantdataintel.com/#organization"
        },
        "sameAs": [
          "https://www.linkedin.com/company/theverticalfoundry/",
          "https://www.facebook.com/VerticalFoundry/",
          "https://www.instagram.com/verticalfoundry/",
          "https://x.com/VerticalFoundry",
          "https://www.tiktok.com/@verticalfoundry",
          "https://www.youtube.com/@verticalfoundry",
          "https://www.etsy.com/shop/VerticalFoundry"
        ],
        "audience": {
          "@type": "BusinessAudience",
          "name": "Service-business owners and operators"
        },
        "subjectOf": [
          {
            "@type": "WebPage",
            "name": "VerticalFoundry private Facebook community",
            "url": "https://www.facebook.com/groups/verticalfoundry"
          }
        ]
      },
      {
        "@type": "ImageObject",
        "@id": "https://getverticalfoundry.com/#logo",
        "name": "VerticalFoundry official logo",
        "url": "https://getverticalfoundry.com/logos/VerticalFoundry_Primary_Horizontal_OUTLINED.svg",
        "contentUrl": "https://getverticalfoundry.com/logos/VerticalFoundry_Primary_Horizontal_OUTLINED.svg",
        "encodingFormat": "image/svg+xml"
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.quantdataintel.com/#logo",
        "name": "Quant Data Intelligence LLC official logo",
        "url": "https://www.quantdataintel.com/assets/quant-logo-complete.png",
        "contentUrl": "https://www.quantdataintel.com/assets/quant-logo-complete.png",
        "encodingFormat": "image/png"
      },
      {
        "@type": "WebSite",
        "@id": "https://getverticalfoundry.com/#website",
        "name": "VerticalFoundry",
        "url": "https://getverticalfoundry.com/",
        "publisher": {
          "@id": "https://www.quantdataintel.com/#organization"
        },
        "about": {
          "@id": "https://getverticalfoundry.com/#brand"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://getverticalfoundry.com/privacy/#webpage",
        "name": "Cookie & Privacy Preferences | VerticalFoundry",
        "description": "Current cookie and privacy preferences for the VerticalFoundry website.",
        "url": "https://getverticalfoundry.com/privacy/",
        "isPartOf": {
          "@id": "https://getverticalfoundry.com/#website"
        },
        "inLanguage": "en-US",
        "publisher": {
          "@id": "https://www.quantdataintel.com/#organization"
        },
        "about": {
          "@id": "https://getverticalfoundry.com/#brand"
        },
        "mainEntity": {
          "@id": "https://getverticalfoundry.com/#brand"
        },
        "breadcrumb": {
          "@id": "https://getverticalfoundry.com/privacy/#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://getverticalfoundry.com/privacy/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://getverticalfoundry.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Cookie & Privacy Preferences",
            "item": "https://getverticalfoundry.com/privacy/"
          }
        ]
      }
    ]
  }
};
// Add consistent entity descriptors across all routes from one source of truth.
// Schemas inherit Thing, so a redundant @type:"Thing" is intentionally omitted.
const corporationId='https://www.quantdataintel.com/#organization';
const vfId='https://getverticalfoundry.com/#brand';
const aetherId='https://aethertrigger.com/#brand';
const vfRoutes=['/','/products/','/store/','/about/','/contact/','/terms-of-service/','/privacy-policy/','/privacy/'];
const vfRouteNames=['Home','Products','Store','About Us','Contact','Terms of Service','Privacy Policy','Cookie & Privacy Preferences'];
function enrichGraph(source,route){
 const data=structuredClone(source);
 const nodes=data['@graph'];
 const owner=nodes.find(n=>n['@id']===corporationId);
 if(owner){
  owner['@type']='Corporation';
  owner.taxID='61-2355086';
  owner.alternateName='Quant Data Intel';
  owner.disambiguatingDescription='Quant Data Intelligence LLC, a Wyoming limited liability company operating VerticalFoundry and AetherTrigger brands.';
  owner.knowsAbout=['Digital commerce','Business intelligence','Service business operations','Data-informed business decisions'];
  owner.owns=[{'@id':vfId},{'@id':aetherId}];
  owner.mainEntityOfPage={'@id':'https://www.quantdataintel.com/about/#webpage'};
  owner.image={'@id':'https://www.quantdataintel.com/#logo'};
 }
 const vf=nodes.find(n=>n['@id']===vfId);
 if(vf){
   vf.disambiguatingDescription='VerticalFoundry, an industry-focused business tools brand of Quant Data Intelligence LLC.';
   vf.image={'@id':'https://getverticalfoundry.com/#logo'};
   vf.mainEntityOfPage={'@id':'https://getverticalfoundry.com/about/#webpage'};
 }
 if(!nodes.some(n=>n['@id']===aetherId)) nodes.push({
  '@type':'Brand','@id':aetherId,'name':'AetherTrigger',
  'description':'Development-stage business-intelligence brand exploring useful opportunity signals for companies serving Shopify and Shopify Plus merchants.',
  'slogan':'Turn aether signals into your next business opportunity.',
  'url':'https://aethertrigger.com/',
  'owner':{'@id':corporationId},
  'audience':{'@type':'BusinessAudience','name':'Businesses serving Shopify and Shopify Plus merchants'},
  'mainEntityOfPage':{'@id':'https://aethertrigger.com/#webpage'}
 });
 const site=nodes.find(n=>n['@id']==='https://getverticalfoundry.com/#website');
 if(site){
  site.copyrightHolder={'@id':corporationId};
  site.hasPart=vfRoutes.map((p)=>({'@id':'https://getverticalfoundry.com'+p+'#webpage'}));
  site.about={'@id':vfId};
  site.keywords='service business tools, business operations, pricing clarity, service businesses';
 }
 for(const n of nodes){
  if(n['@id']==='https://getverticalfoundry.com/products/#webpage'){
    n.primaryImageOfPage={'@type':'ImageObject','@id':'https://getverticalfoundry.com/products/#primaryimage','url':'https://getverticalfoundry.com/images/service-business-clarity-editorial.webp','contentUrl':'https://getverticalfoundry.com/images/service-business-clarity-editorial.webp','caption':'Conceptual service business workspace illustration; not a product screenshot'};
  }
 }
 return data;
}
// This independent Store guide is not a catalog Product and is not an Etsy-hosted page.
const shopURL='https://www.etsy.com/shop/VerticalFoundry';
const founderDescription="Alexandru Stoica is an entrepreneur and e-commerce executive with more than 25 years of experience across e-commerce, retail, international distribution and digital services. He is Head of E-commerce at GSMnet and founder of Quant Data Intelligence LLC, which operates the VerticalFoundry and AetherTrigger brands. His work focuses on turning hands-on business experience into practical tools and clearer commercial intelligence.";
function improveGraph(data,route){
 const nodes=data['@graph'];
 const founder=nodes.find(n=>n['@id']==='https://getverticalfoundry.com/#founder');
 if(founder){founder.description=founderDescription;founder.mainEntityOfPage={'@id':'https://getverticalfoundry.com/about/#webpage'};founder.knowsAbout=['E-commerce operations','International Shopify commerce','Entrepreneurship','Business development','International distribution','Practical business tools','Commercial intelligence'];founder.jobTitle='Head of E-commerce';}
 const about=nodes.find(n=>n['@id']==='https://getverticalfoundry.com/about/#webpage');
 if(about){about.description='The story behind VerticalFoundry: its founder’s 25+ years of business experience, personal perspective and commitment to clear, practical tools for service entrepreneurs.';about.about=[{'@id':vfId},{'@id':'https://getverticalfoundry.com/#founder'}];about.mainEntity={'@id':'https://getverticalfoundry.com/#founder'};about.associatedMedia={'@id':'https://getverticalfoundry.com/about/#family-memory'};nodes.push({'@type':'ImageObject','@id':'https://getverticalfoundry.com/about/#family-memory','contentUrl':'https://getverticalfoundry.com/images/alexandru-family-childhood.webp','url':'https://getverticalfoundry.com/images/alexandru-family-childhood.webp','encodingFormat':'image/webp','width':1200,'height':1614,'caption':'An archival family photograph accompanying Alexandru Stoica’s personal story.'});}
 const prods=nodes.find(n=>n['@id']==='https://getverticalfoundry.com/products/#webpage');
 if(prods){prods.description='Explore the VerticalFoundry product catalog: verified individual listings, features, compatible formats, prices and FAQs when available.';
  if(productCatalog.length){nodes.push({'@type':'ItemList','@id':'https://getverticalfoundry.com/products/#product-catalog',name:'Currently listed VerticalFoundry products',numberOfItems:productCatalog.length,itemListElement:productCatalog.map((p,i)=>({'@type':'ListItem',position:i+1,name:p.title,url:p.etsyUrl}))});prods.hasPart={'@id':'https://getverticalfoundry.com/products/#product-catalog'};}
 }
 return data;
}
function baseSchemaFor(route){
 if(route!=='/store/')return improveGraph(enrichGraph(schemas[route]??schemas['/'],route),route);
 const data=enrichGraph(schemas['/'],'/store/');
 const base='https://getverticalfoundry.com';
 data['@graph']=data['@graph'].filter(n=>n['@id']!==base+'/#webpage');
 const nodes=data['@graph'];
 nodes.push({'@type':'WebPage','@id':base+'/store/#webpage',url:base+'/store/',name:'Store and General FAQs | VerticalFoundry',description:'Official Etsy storefront information and general FAQs on checkout, digital delivery, compatibility, support and licensing.',isPartOf:{'@id':base+'/#website'},about:[{'@id':vfId},{'@id':shopURL+'#store'}],mainEntity:{'@id':base+'/store/#faq'},breadcrumb:{'@id':base+'/store/#breadcrumb'},inLanguage:'en-US'});
 nodes.push({'@type':'OnlineStore','@id':shopURL+'#store',name:'VerticalFoundry Etsy shop',url:shopURL,description:'Official Etsy-hosted storefront for VerticalFoundry digital business tools.',brand:{'@id':vfId},parentOrganization:{'@id':corporationId}});
 nodes.push({'@type':'FAQPage','@id':base+'/store/#faq',name:'VerticalFoundry store frequently asked questions',url:base+'/store/#frequently-asked-questions',isPartOf:{'@id':base+'/store/#webpage'},about:{'@id':shopURL+'#store'},mainEntity:etsyFaqs.map(f=>({'@type':'Question',name:f.question,acceptedAnswer:{'@type':'Answer',text:f.answer}}))});
 nodes.push({'@type':'BreadcrumbList','@id':base+'/store/#breadcrumb',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:base+'/'},{'@type':'ListItem',position:2,name:'Store',item:base+'/store/'}]});
 return improveGraph(data,'/store/');
}


// Approved public identity links for all three domains. Updated: 2026-11-10.
const IDENTITY={
  companyId:"https://www.quantdataintel.com/#organization",vfId:"https://getverticalfoundry.com/#brand",atId:"https://aethertrigger.com/#brand",founderId:"https://getverticalfoundry.com/#founder",
  companySocial:["https://www.linkedin.com/company/quantdataintel/", "https://www.facebook.com/QuantDataIntel/", "https://www.instagram.com/quantdataintel/", "https://x.com/theQDI", "https://www.youtube.com/@quantdataintel"],vfSocial:["https://www.linkedin.com/company/theverticalfoundry/", "https://www.facebook.com/VerticalFoundry/", "https://www.instagram.com/verticalfoundry/", "https://x.com/VerticalFoundry", "https://www.tiktok.com/@verticalfoundry", "https://www.youtube.com/@verticalfoundry"],atSocial:["https://www.linkedin.com/company/aethertrigger/", "https://www.facebook.com/theAetherTrigger/", "https://www.instagram.com/getaethertrigger/", "https://www.tiktok.com/@aethertrigger", "https://www.youtube.com/@aethertrigger"],founderSocial:["https://www.linkedin.com/in/alexstoicax/", "https://www.facebook.com/alexstoicax/", "https://www.instagram.com/alexstoicax/", "https://www.threads.com/@alexstoicax", "https://x.com/alexstoicax", "https://www.tiktok.com/@alexstoicax", "https://www.youtube.com/@alexstoicax", "https://wa.me/@alexstoicax"],
  communityLinks:["https://www.facebook.com/groups/verticalfoundry", "https://chat.whatsapp.com/JP6sTCf7AVnIPZQ3KorJ61"],
  email:{company:["hello@quantdataintel.com", "help@quantdataintel.com"],vf:["hello@getverticalfoundry.com", "help@getverticalfoundry.com"],at:["hello@aethertrigger.com", "help@aethertrigger.com"]}
};
const unifyRef=id=>({'@id':id});
const MEDIA_FORMAT={svg:'image/svg+xml',png:'image/png',webp:'image/webp'};
function unifySchema(data,route,siteKey){
 const base={vf:'https://getverticalfoundry.com',at:'https://aethertrigger.com'}[siteKey];
 const nodes=data['@graph'];
 const get=id=>nodes.find(n=>n['@id']===id);
 const add=(id,type)=>{let n=get(id);if(!n){n={'@type':type,'@id':id};nodes.push(n)}return n};
 const owner=add(IDENTITY.companyId,'Corporation');
 Object.assign(owner,{'@type':'Corporation',name:'Quant Data Intelligence LLC',legalName:'Quant Data Intelligence LLC',url:'https://www.quantdataintel.com/',taxID:'61-2355086',telephone:'+1 (307) 900-1944',email:IDENTITY.email.company[0],sameAs:IDENTITY.companySocial,
 address:{'@type':'PostalAddress',streetAddress:'30 N Gould St. Ste N',addressLocality:'Sheridan',addressRegion:'WY',postalCode:'82801',addressCountry:'US',description:'Business mailing address; not a visitor office.'},
 contactPoint:[
 {'@type':'ContactPoint',contactType:'general inquiries',email:IDENTITY.email.company[0],telephone:'+1 (307) 900-1944'},
 {'@type':'ContactPoint',contactType:'customer support',email:IDENTITY.email.company[1]},
 {'@type':'ContactPoint',contactType:'VerticalFoundry inquiries',email:IDENTITY.email.vf[0]},
 {'@type':'ContactPoint',contactType:'VerticalFoundry support',email:IDENTITY.email.vf[1]},
 {'@type':'ContactPoint',contactType:'AetherTrigger inquiries',email:IDENTITY.email.at[0]},
 {'@type':'ContactPoint',contactType:'AetherTrigger support',email:IDENTITY.email.at[1]}
 ],founder:unifyRef(IDENTITY.founderId),brand:[unifyRef(IDENTITY.vfId),unifyRef(IDENTITY.atId)],owns:[unifyRef(IDENTITY.vfId),unifyRef(IDENTITY.atId)],logo:unifyRef('https://www.quantdataintel.com/#logo'),identifier:{'@type':'PropertyValue',propertyID:'US EIN',value:'61-2355086'} });
 const vf=add(IDENTITY.vfId,'Brand');
 Object.assign(vf,{'@type':'Brand',name:'VerticalFoundry',url:'https://getverticalfoundry.com/',owner:unifyRef(IDENTITY.companyId),logo:unifyRef('https://getverticalfoundry.com/#logo'),sameAs:IDENTITY.vfSocial,subjectOf:[...IDENTITY.communityLinks.map((url,i)=>({'@type':'WebPage',name:i===0?'VerticalFoundry Facebook community':'VerticalFoundry WhatsApp community invitation',url})),{'@type':'WebPage',name:'VerticalFoundry Etsy storefront',url:'https://www.etsy.com/shop/VerticalFoundry'}]});
 const at=add(IDENTITY.atId,'Brand');
 Object.assign(at,{'@type':'Brand',name:'AetherTrigger',url:'https://aethertrigger.com/',owner:unifyRef(IDENTITY.companyId),logo:unifyRef('https://aethertrigger.com/#logo'),sameAs:IDENTITY.atSocial,slogan:'Turn aether signals into your next business opportunity.'});
 const person=add(IDENTITY.founderId,'Person');
 Object.assign(person,{'@type':'Person',name:'Alexandru Stoica',url:'https://www.linkedin.com/in/alexstoicax/',sameAs:IDENTITY.founderSocial,email:'alex@quantdataintel.com',image:unifyRef('https://getverticalfoundry.com/#founder-photo'),founderOf:unifyRef(IDENTITY.companyId)});
 if(!get('https://getverticalfoundry.com/#founder-photo'))nodes.push({'@type':'ImageObject','@id':'https://getverticalfoundry.com/#founder-photo',url:'https://getverticalfoundry.com/images/alexandru-stoica-founder.webp',contentUrl:'https://getverticalfoundry.com/images/alexandru-stoica-founder.webp',caption:'Official portrait of Alexandru Stoica'});
 if(!get('https://aethertrigger.com/#logo'))nodes.push({'@type':'ImageObject','@id':'https://aethertrigger.com/#logo',url:'https://aethertrigger.com/logos/aethertrigger-emblem-v2.png',contentUrl:'https://aethertrigger.com/logos/aethertrigger-emblem-v2.png',encodingFormat:'image/png',caption:'AetherTrigger approved Variant 2 logo (raster PNG)'});
 const web=add(base+'/#website','WebSite');
 const parts=Array.isArray(web.hasPart)?web.hasPart:[];
 if(!parts.some(x=>x['@id']===base+'/media-kit/#webpage'))parts.push(unifyRef(base+'/media-kit/#webpage'));
 web.hasPart=parts;
 // No claimed customer results or Product/Offer markup for unpublished items.
 return data;
}
function mediaSchema(data,siteKey){
 const base=siteKey==='vf'?'https://getverticalfoundry.com':'https://aethertrigger.com';
 const brandRef=unifyRef(siteKey==='vf'?IDENTITY.vfId:IDENTITY.atId);
 data['@graph']=data['@graph'].filter(n=>n['@id']!==base+'/#webpage');
 const node={'@type':'CollectionPage','@id':base+'/media-kit/#webpage',url:base+'/media-kit/',name:'Media Kit | '+(siteKey==='vf'?'VerticalFoundry':'AetherTrigger'),description:'Press resources, approved brand visuals, editorial boilerplates, media contacts and downloadable assets.',isPartOf:unifyRef(base+'/#website'),publisher:unifyRef(IDENTITY.companyId),about:brandRef,mainEntity:brandRef,inLanguage:'en-US',breadcrumb:unifyRef(base+'/media-kit/#breadcrumb'),hasPart:[]};
 const files=siteKey==='vf'?[['verticalfoundry-horizontal.svg','image/svg+xml'],['verticalfoundry-stacked.svg','image/svg+xml'],['verticalfoundry-icon.svg','image/svg+xml'],['verticalfoundry-white.svg','image/svg+xml'],['verticalfoundry-banner.png','image/png'],['alexandru-stoica-portrait.webp','image/webp']]:[['aethertrigger-variant2-mark.png','image/png'],['aethertrigger-variant2-artwork.png','image/png'],['aethertrigger-social-banner.png','image/png'],['aethertrigger-hero.webp','image/webp'],['alexandru-stoica-portrait.webp','image/webp']];
 files.forEach(([file,type])=>{const id=base+'/media-kit/#asset-'+file;node.hasPart.push(unifyRef(id));data['@graph'].push({'@type':'ImageObject','@id':id,name:file,url:base+'/media-kit/assets/'+file,contentUrl:base+'/media-kit/assets/'+file,encodingFormat:type,usageInfo:base+'/media-kit/#usage',copyrightHolder:unifyRef(IDENTITY.companyId)})});
 data['@graph'].push(node,{'@type':'BreadcrumbList','@id':base+'/media-kit/#breadcrumb',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:base+'/'},{'@type':'ListItem',position:2,name:'Media Kit',item:base+'/media-kit/'}]});
 return data;
}

export function schemaFor(route){ if(route==='/media-kit/')return unifySchema(mediaSchema(baseSchemaFor('/'), 'vf'),route,'vf'); return unifySchema(baseSchemaFor(route),route,'vf'); }
