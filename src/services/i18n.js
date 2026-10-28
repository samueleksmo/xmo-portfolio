import { addMessages, init, locale, _ } from 'svelte-i18n';

const en = {
	home: 'Home',
	contact: 'Contact',
	about: 'About',
	portfolio: 'Portfolio',
	hi: 'Hi',
	"I'm Samuel. Gothenburg based": "I'm Samuel. Gothenburg-based",
	'Software Engineer': 'Software Engineer',
	'Multi creator': 'Multi creator',
	worked_with: 'WORKED WITH',
	portfolio_heading: 'PORTFOLIO',
	get_in_touch: 'GET IN TOUCH',
	check_it_out: 'Check it out!',
	contact_intro: "Have a project in mind, or just want to say hi? Send me a message and I'll get back to you.",
	form_name: 'Name',
	form_email: 'Email',
	form_message: 'Message',
	form_send: 'Send message',
	form_sending: 'Sending…',
	form_success: "Thanks! Your message has been sent – I'll get back to you soon.",
	form_error: "Sorry, something went wrong and your message wasn't sent. Please try again in a moment, or reach me on LinkedIn.",
	open_menu: 'Open menu',
	close_menu: 'Close menu',
	back_to_top: 'Xmo – back to top',
	switch_language: 'Language',

	ekmon_subtitle: 'Company Website',
	ekmon_role: 'Designer & Developer',
	ekmon_alt: 'Ekmon logo over a misty pine forest',
	ekmon_text: "A new website for Ekmon AB, a Norrköping-based consultancy in music, IT and accounting that also invests in green, sustainable companies. I designed and built it as a bilingual single-page Svelte site – the company, the projects it has founded or invested in, and contact details – that picks the language from the visitor's browser and keeps the email address out of reach of spam bots.",
	ekudden_subtitle: 'Sauna Website',
	ekudden_role: 'Designer & Developer',
	ekudden_alt: 'Red sauna cabin by the water in evening sun',
	ekudden_text: 'Website for Ekudden Bastu (Kvädö Sauna), a private wood-fired sauna with sea swimming at Kvädöfjärden. I designed and built it with SvelteKit and Svelte 5, hosted on Cloudflare Workers. It has a booking form that emails requests through Resend, landing pages in five languages, guides and an FAQ, and is search-optimized with structured data and a generated sitemap.',
	wedding_subtitle: 'Wedding Website',
	wedding_role: 'Designer & Developer',
	wedding_alt: 'Illustration of a bride and groom inside a flower wreath',
	wedding_text: "The website for my wedding to Hilda in July 2026. A lightweight static site with everything our guests needed – the ceremony, the party, RSVP, speeches and a wish list – served from a small nginx Docker container.",
	previous_projects: 'Previous projects',
	next_projects: 'Next projects',

	berkeley_subtitle: 'Website',
	berkeley_role: 'Web designer',
	berkeley_alt: 'San Francisco skyline',
	volvo_subtitle: 'Tire Health System',
	volvo_role: 'Data Engineer',
	volvo_alt: 'Truck on a road',
	capstone_subtitle: 'Revenue Prediction',
	capstone_role: 'Data Scientist',
	capstone_alt: 'Calculator and charts',

	p1: "I've worked as a Software Engineer since 2018, delivering cutting-edge technology for some of the biggest brands in Sweden. In my most recent projects my role has been focused on DevOps, working mainly with Docker and Kubernetes in GCP and Azure.",
	p2: 'I also find Data Science fascinating and have used Machine Learning techniques such as regression, classification, clustering and outlier detection in some of my projects, mainly in Python. I also love to explore and train my own creative style in whatever area piques my curiosity, be it web design, piano or lead climbing.',
	p3: 'During my time at university, I got the opportunity to do an exchange semester at UC Berkeley in California. As part of the project group running the exchange, I got the chance to build its website.',
	p4: "During my time as an IT consultant for IBM, I was part of an exciting project at Volvo Trucks, helping them harness the power of their data with real-time monitoring of truck tire health. My role was centered around the data flow, frontend and DevOps parts of the project. You can read more about it on Volvo Trucks' own website.",
	p5: "This project was the final piece of a Machine Learning certification I took while working for IBM. The idea was to use time series analysis to forecast revenue for the next 30 days for specific countries. The final model is a trained random forest that forecasts a country's revenue when called through a (Flask) API running locally."
};

const sv = {
	home: 'Hem',
	contact: 'Kontakt',
	about: 'Om mig',
	portfolio: 'Portfolio',
	hi: 'Hej',
	"I'm Samuel. Gothenburg based": 'Jag heter Samuel och är en Göteborgsbaserad',
	'Software Engineer': 'mjukvaruingenjör',
	'Multi creator': 'kreatör',
	worked_with: 'HAR JOBBAT MED',
	portfolio_heading: 'PORTFOLIO',
	get_in_touch: 'KONTAKTA MIG',
	check_it_out: 'Kolla in det!',
	contact_intro: 'Har du ett projekt på gång, eller vill du bara säga hej? Skicka ett meddelande så hör jag av mig.',
	form_name: 'Namn',
	form_email: 'E-post',
	form_message: 'Meddelande',
	form_send: 'Skicka meddelande',
	form_sending: 'Skickar…',
	form_success: 'Tack! Ditt meddelande har skickats – jag hör av mig snart.',
	form_error: 'Tyvärr gick något fel och meddelandet skickades inte. Försök igen om en stund, eller kontakta mig på LinkedIn.',
	open_menu: 'Öppna meny',
	close_menu: 'Stäng meny',
	back_to_top: 'Xmo – till toppen',
	switch_language: 'Språk',

	ekmon_subtitle: 'Företagshemsida',
	ekmon_role: 'Designer & utvecklare',
	ekmon_alt: 'Ekmons logotyp över en dimmig barrskog',
	ekmon_text: 'En ny hemsida för Ekmon AB, ett konsultbolag i Norrköping inom musik, IT och ekonomi som också investerar i gröna och hållbara företag. Jag har designat och byggt den som en tvåspråkig Svelte-sajt på en sida – om bolaget, projekten det har startat eller investerat i, och kontaktuppgifter – som väljer språk utifrån besökarens webbläsare och håller e-postadressen undan från spambotar.',
	ekudden_subtitle: 'Bastuhemsida',
	ekudden_role: 'Designer & utvecklare',
	ekudden_alt: 'Röd bastustuga vid vattnet i kvällssol',
	ekudden_text: 'Hemsida för Ekudden Bastu (Kvädö Sauna), en privat vedeldad bastu med havsbad vid Kvädöfjärden. Jag har designat och byggt den med SvelteKit och Svelte 5, och den körs på Cloudflare Workers. Sajten har ett bokningsformulär som skickar förfrågningar via e-post med Resend, landningssidor på fem språk, guider och vanliga frågor, och är sökmotoroptimerad med strukturerad data och en automatiskt genererad sitemap.',
	wedding_subtitle: 'Bröllopshemsida',
	wedding_role: 'Designer & utvecklare',
	wedding_alt: 'Illustration av ett brudpar i en blomsterkrans',
	wedding_text: 'Hemsidan till mitt och Hildas bröllop i juli 2026. En lättviktig statisk sajt med allt gästerna behövde veta – vigseln, festen, OSA, tal och spex och önskelistan – som körs i en liten nginx-container i Docker.',
	previous_projects: 'Föregående projekt',
	next_projects: 'Nästa projekt',

	berkeley_subtitle: 'Webbplats',
	berkeley_role: 'Webbdesigner',
	berkeley_alt: 'San Franciscos skyline',
	volvo_subtitle: 'Däckövervakning',
	volvo_role: 'Dataingenjör',
	volvo_alt: 'Lastbil på en väg',
	capstone_subtitle: 'Intäktsprognos',
	capstone_role: 'Data scientist',
	capstone_alt: 'Miniräknare och diagram',

	p1: 'Jag har jobbat som mjukvaruutvecklare sedan 2018 och har under den här perioden levererat spetsteknologi för några av Sveriges största företag. I de senaste projekten har min roll varit centrerad kring DevOps, framför allt Docker och Kubernetes i GCP och Azure.',
	p2: 'Data science är också något som jag känner ett starkt intresse för! Jag har främst använt enklare regressions-, klassificerings- och klustermodeller i mina (Python-)projekt. Jag tycker också om att utforska min egen kreativitet inom olika områden som webbdesign, piano och klättring.',
	p3: 'Under min tid på Chalmers fick jag möjlighet att åka på ett utbyte till UC Berkeley i Kalifornien. Jag var också med i projektgruppen som hade ansvar för utbytet och fick på så sätt möjligheten att bygga utbytets egen hemsida helt på egen hand.',
	p4: 'Under min tid som IT-konsult på IBM fick jag möjlighet att delta i ett nytt, spännande projekt på Volvo Trucks. Mitt teams produkt extraherade värdefull information från lastbilarna i realtid. Min roll var centrerad kring dataflödet, frontend och DevOps-delarna i projektet. Du kan läsa mer om projektet på Volvo Trucks egen hemsida.',
	p5: 'IBM Capstone-projektet var det sista steget i en kurs i maskininlärning som jag gick medan jag jobbade på IBM. I projektet skulle vi med hjälp av tidsserieanalys göra intäktsprognoser för specifika marknader (länder). Den färdiga modellen är en random forest-algoritm som returnerar en 30-dagarsprognos för ett land när den anropas via ett lokalt (Flask-)API.'
};

addMessages('en', en);
addMessages('sv', sv);
init({ fallbackLocale: 'en', initialLocale: 'en' });

// Keep <html lang> in sync so screen readers and search engines get the right language.
locale.subscribe((value) => {
	if (value && typeof document !== 'undefined') document.documentElement.lang = value;
});

export { _, locale };
