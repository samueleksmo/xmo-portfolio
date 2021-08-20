import {
    dictionary,
    locale,
    _
  } from 'svelte-i18n';
  
  function setupI18n({
    withLocale: _locale
  } = {
    withLocale: 'en'
  }) {
    dictionary.set({
      en: {
        "home": "Home",
        "contact": "Contact",
        "about": "About",
        "portfolio": "Portfolio",
        "hi":"Hi",
        "I'm Samuel. Gothenburg based":"I'm Samuel. Gothenburg based",
        "Software Engineer":"Software Engineer",
        "Multi creator": "Multi creator",
        "p1":"I’ve worked as a Software Engineer for the past 3 years, delivering cutting edge technology for some of the biggest brands in Sweden. In my most recent projects my role has been focused around DevOps working mainly with Docker and Kubernetes in GCP and Azure.",
        "p2":"I also find Data Science facinating and have used Machine Learning techniques such as regression, classification, clustering and outlier detection in some of my projects, mainly in Python. I also love to explore and train my own creative style in whatever area that pequed my curiosity, be it webdesign, piano or lead climbing.",
        "p3":"During my time at university, I got the opportunity to do an exchange semester at UC Berkeley in California. While being part of a project group surrounding the exchange. I got the chance to develop its own website.",
        "p4":"During my time working as an it-consultant for IBM I was part of an exiting project at Volvo Trucks. Helping them utelize the power of their data with real time monitoring of trucks tier health. My role was centered around the data flow, frontend and DevOps part of the project. You can read more about it at Volvo Truck's own website."
      },
      sv: {
        "contact": "Kontakt",
        "about": "Om mig",
        "portfolio": "Portfolio",
        "hi":"Hej",
        "I'm Samuel. Gothenburg based":"Jag heter Samuel och jag är en Göteborgsbaserad",
        "Software Engineer":"Mjukvaruingenjör",
        "Multi creator": "Kreatör",
        "p1":"Jag har jobbat som mjukvaruutvecklare i drygt 3 år och har under den här perioden levererat spetsteknologi för några av Sveriges största företag. I de senaste projekten så har min roll varit centrerad kring DevOps, framförallt Docker och Kubernetes i GCP och Azure.", 
        "p2":"Data Science är också något som jag känner ett starkt intresse för! Jag har främst använt enklare regression, klassifikation och kluster-modeller i mina (python) projekt. Jag tycker också om att utforska min egen kreativitet i olika områden som webdesign, piano och klättring.", 
        "p3":"Under min tid på Chalmers så fick jag möjlighet att åka på ett utbyte till UC Berkeley i San Francisco. Jag var också med i projektgruppen som hade ansvar för utbytet och fick på så sätt möjligheten att bygga utbytets egen hemsida helt på egen hand.",
        "p4":"Under min perioden som it-konsult på IBM så fick jag möjlighet att delta i ett nytt spännande projekt på Volvo Trucks. Mitt teams produkt extraherade värdeful infromation från lastbilarna i realtid. Min roll var centrerad kring dataflödet, frontend och DevOpsbitarna i projektet. Du kan läsa mer om projektet på Volvo Trucks egen hemsida."
      },

    });
    locale.set(_locale);
  }
  export {
    _,
    locale,
    setupI18n
  };