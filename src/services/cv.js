// CV content shown in the CV section (src/components/cv/CV.svelte), in English and Swedish.
// Source: Samuel's CV (samuel.eksmo.CV-full.pdf). Personal contact details are deliberately left out.

export const cv = {
	en: {
		heading: 'CV',
		profile: [
			'Software engineer with about a decade of experience across multiple technical roles, specialising in the mix of DevOps and data science. After studying software engineering at Chalmers University of Technology, I started my consulting career at IBM – a fast-paced, cloud-focused environment with a strong customer focus. In 2021 I joined Consid and was assigned to Saab, where I have been a central member of the DevOps team ever since, as a full-time employee since 2025.',
			'I combine a creative, analytical mindset with solid technical skills. I am used to agile ways of working, comfortable presenting on stage, see projects through to completion and take ownership of my work – and I am always keen to dig into new and evolving technologies.'
		],
		labels: {
			experience: 'Experience',
			education: 'Education',
			skills: 'Technical skills',
			spoken: 'Languages',
			commitments: 'Commitments',
			other: 'Other work',
			projects: 'Client projects',
			more: 'Read more',
			less: 'Show less',
			now: 'now',
			references: 'References available on request.',
			linkedin: 'More on LinkedIn'
		},
		experience: [
			{
				id: 'saab',
				from: 2021,
				to: null,
				title: 'Senior DevOps Engineer',
				org: 'Saab Surveillance, Gothenburg',
				phases: ['2025 – now: full-time employee at Saab', '2021 – 2025: consultant at Saab through Consid'],
				summary:
					'Senior engineer in the DevOps team that maintains, upgrades and leads CI/CD development in a complex virtual environment – a mix of technical problem solving, tutoring junior colleagues, and aligning with other teams that need support. The team’s focus is a faster, better CI/CD flow that improves the efficiency, quality and competitiveness of the product.',
				highlights: [
					'Designed and built a containerised web app for real-time visualisation of the department’s CI/CD flow: a lightweight microservice app with a Python API, Node backend, Svelte frontend and PostgreSQL. Built together with a UX designer and the developers who now use it daily.',
					'Cut the software build time by 80% and introduced automatic testing with SonarQube, saving the company thousands of dollars in bug reports.',
					'Product owner for a new project, and team lead for most of my time at Saab.'
				]
			},
			{
				id: 'ibm',
				from: 2019,
				to: 2021,
				title: 'Data Engineer · Consultant',
				org: 'IBM',
				summary:
					'Consulting on projects across industries – from a real-time data app for Volvo Trucks to data-science projects on market trends for IKEA.',
				projects: [
					{
						name: 'Volvo Trucks',
						when: '2019 – 2021',
						role: 'Data Engineer / Full-stack',
						text: 'My first IBM client: a real-time microservice application for monitoring truck tire health. I built data-ingestion functions, APIs, frontend components and CI/CD pipelines, and kept the product owner up to date on new deployments. In 2020 the focus moved to scaling, reliability, robustness and documentation, and – after a four-month Covid pause – to the final stages: health monitoring, security, production mode and tuning the data parameters of the machine-learning algorithm.',
						highlights: [
							'Led the switch from development to production mode, splitting frontend and backend into separate Docker containers.',
							'Reduced the frontend bundle size by about 90% to speed up the solution’s response time.',
							'Became lead frontend developer, and comfortable deploying practically all of the app’s microservices.'
						]
					},
					{
						name: 'IKEA',
						when: '2021',
						role: 'Data Engineer',
						text: 'Finding market trends in internal and external data sources and turning the analysis into evidence-based recommendations. I found an open-source Python API for Google Trends and used it to extract external data the rest of the team could build on. The refined results were presented to the client and contributed to new key market strategies.'
					},
					{
						name: 'Electrolux',
						when: '2021',
						role: 'Data Engineer',
						text: 'An AI customer-care project for handling a wide variety of customer questions and sorting them into the right categories. I built an automated Python script that extracts, cleans and loads JSON files into Google BigQuery, compares the data through views and exports readable CSV files. It let the team spot anomalies between files straight away instead of checking them by hand on every update – saving 10+ hours a week.'
					},
					{
						name: 'Vasaloppet',
						when: '2020',
						role: 'Software Engineer / Operations',
						text: 'A Red Hat OS upgrade: new parallel virtual servers with the latest Red Hat, and migration of the existing application – including the database, load balancer, SSL and DNS configuration. The outdated, undocumented environment made it far harder than estimated and called for Linux, MySQL, WordPress and IBM Cloud Object Storage skills I had to pick up on the way. Every expected task was delivered.'
					},
					{
						name: 'Energy Machines',
						when: '2019',
						role: 'Data Scientist · Master’s thesis',
						text: 'Finding breakdowns in a climate-control system’s historical data with IBM’s in-house anomaly-detection tools, while balancing the needs of Chalmers, IBM and the client. With my thesis partner I handled data extraction, cleaning, clustering, parameter tuning and presenting the results. We found two outliers that turned out to be the root cause of an expensive leak – saving the company fines of more than SEK 100,000.'
					}
				]
			},
			{
				id: 'hyperlab',
				from: 2018,
				to: 2018,
				when: 'Jun – Sep 2018',
				title: 'Developer · Summer intern',
				org: 'Hyperlab AB, Gothenburg',
				summary:
					'Built and refactored one of Hyperlab’s already released apps in React Native. A great experience – I kept working hours at Hyperlab during my final year at university.'
			}
		],
		education: [
			{
				from: 2017,
				to: 2019,
				title: 'MSc, Software Engineering',
				org: 'Chalmers University of Technology',
				text: 'Machine-learning specialisation, with exchange studies at UC Berkeley (USA) and NCTU (Taiwan).'
			},
			{
				from: 2014,
				to: 2017,
				title: 'BSc, Industrial Engineering and Management',
				org: 'Chalmers University of Technology'
			}
		],
		skills: [
			{ group: 'Languages & frameworks', items: ['Python', 'SQL', 'Java', 'Groovy', 'JavaScript / Node', 'React', 'Svelte', 'HTML / CSS'] },
			{ group: 'DevOps & tools', items: ['Docker', 'Kubernetes', 'Jenkins', 'Azure DevOps', 'Gradle', 'Nginx', 'Linux'] },
			{ group: 'Cloud', items: ['Azure', 'Google Cloud', 'IBM Cloud'] }
		],
		spoken: ['Swedish', 'English'],
		commitments: [
			{ role: 'Board member', org: 'Brf Johanneberg 1937', when: '2020 – 2025' },
			{ role: 'Board member', org: 'Hyperlab AB', when: '2014 – 2021' }
		],
		other: [{ role: 'Volunteer', org: 'Social services, Gothenburg', when: '2019 – 2021' }]
	},

	sv: {
		heading: 'CV',
		profile: [
			'Mjukvaruingenjör med ungefär tio års erfarenhet av olika tekniska roller, med inriktning på kombinationen DevOps och data science. Efter studier i software engineering på Chalmers tekniska högskola började jag min konsultkarriär på IBM – en snabbrörlig, molnfokuserad miljö med stort kundfokus. 2021 började jag på Consid och fick uppdrag på Saab, där jag sedan dess varit en central del av DevOps-teamet, sedan 2025 som anställd.',
			'Jag kombinerar ett kreativt, analytiskt tänkande med gedigna tekniska kunskaper. Jag är van vid agila arbetssätt, trivs med att presentera inför publik, driver projekt i mål och tar ansvar för mitt arbete – och jag gräver gärna ner mig i nya tekniker.'
		],
		labels: {
			experience: 'Erfarenhet',
			education: 'Utbildning',
			skills: 'Tekniska kunskaper',
			spoken: 'Språk',
			commitments: 'Uppdrag',
			other: 'Övrigt',
			projects: 'Kunduppdrag',
			more: 'Läs mer',
			less: 'Visa mindre',
			now: 'nu',
			references: 'Referenser lämnas på begäran.',
			linkedin: 'Mer på LinkedIn'
		},
		experience: [
			{
				id: 'saab',
				from: 2021,
				to: null,
				title: 'Senior DevOps-ingenjör',
				org: 'Saab Surveillance, Göteborg',
				phases: ['2025 – nu: anställd på Saab', '2021 – 2025: konsult på Saab via Consid'],
				summary:
					'Senior ingenjör i DevOps-teamet som underhåller, uppgraderar och leder CI/CD-utvecklingen i en komplex virtuell miljö – en blandning av teknisk problemlösning, handledning av juniora kollegor och samordning med andra team som behöver stöd. Teamets fokus är ett snabbare och bättre CI/CD-flöde som förbättrar produktens effektivitet, kvalitet och konkurrenskraft.',
				highlights: [
					'Designade och byggde en containeriserad webbapp som visualiserar avdelningens CI/CD-flöde i realtid: en lättviktig mikrotjänstapp med Python-API, Node-backend, Svelte-frontend och PostgreSQL. Byggd tillsammans med en UX-designer och utvecklarna som använder den dagligen.',
					'Minskade byggtiden för mjukvaran med 80 % och införde automatiska tester med SonarQube, vilket sparat företaget tusentals dollar i buggrapporter.',
					'Produktägare för ett nytt projekt och teamledare under större delen av min tid på Saab.'
				]
			},
			{
				id: 'ibm',
				from: 2019,
				to: 2021,
				title: 'Dataingenjör · Konsult',
				org: 'IBM',
				summary:
					'Konsultuppdrag i olika branscher – från en realtidsapp för Volvo Trucks till data science-projekt om marknadstrender för IKEA.',
				projects: [
					{
						name: 'Volvo Trucks',
						when: '2019 – 2021',
						role: 'Dataingenjör / Fullstack',
						text: 'Min första kund på IBM: en mikrotjänstapplikation i realtid som övervakar lastbilarnas däckhälsa. Jag byggde funktioner för datainhämtning, API:er, frontendkomponenter och CI/CD-pipelines, och höll produktägaren uppdaterad om nya driftsättningar. Under 2020 skiftade fokus till skalning, tillförlitlighet, robusthet och dokumentation, och – efter fyra månaders uppehåll på grund av covid – till slutfasen: hälsoövervakning, säkerhet, produktionsläge och finjustering av dataparametrarna i maskininlärningsalgoritmen.',
						highlights: [
							'Ledde övergången från utvecklings- till produktionsläge och delade upp frontend och backend i separata Docker-containrar.',
							'Minskade frontendens paketstorlek med cirka 90 % för att korta lösningens svarstider.',
							'Blev ledande frontendutvecklare och kunde driftsätta i princip alla appens mikrotjänster.'
						]
					},
					{
						name: 'IKEA',
						when: '2021',
						role: 'Dataingenjör',
						text: 'Att hitta marknadstrender i interna och externa datakällor och omsätta analysen i evidensbaserade rekommendationer. Jag hittade ett öppen källkod-API i Python för Google Trends och använde det för att ta fram extern data som resten av teamet kunde bygga vidare på. Det förädlade resultatet presenterades för kunden och bidrog till nya viktiga marknadsstrategier.'
					},
					{
						name: 'Electrolux',
						when: '2021',
						role: 'Dataingenjör',
						text: 'Ett AI-projekt inom kundtjänst som hanterar många olika kundfrågor och sorterar dem i rätt kategorier. Jag byggde ett automatiserat Python-skript som hämtar, tvättar och laddar JSON-filer till Google BigQuery, jämför datan med vyer och exporterar läsbara CSV-filer. Det gjorde att teamet direkt kunde hitta avvikelser mellan filerna i stället för att kontrollera dem för hand vid varje uppdatering – en besparing på över 10 timmar i veckan.'
					},
					{
						name: 'Vasaloppet',
						when: '2020',
						role: 'Mjukvaruingenjör / Drift',
						text: 'En uppgradering av Red Hat: nya parallella virtuella servrar med senaste Red Hat och migrering av den befintliga applikationen – inklusive databas, lastbalanserare, SSL och DNS-konfiguration. Den föråldrade och odokumenterade miljön gjorde uppdraget betydligt svårare än beräknat och krävde kunskaper i Linux, MySQL, WordPress och IBM Cloud Object Storage som jag fick lära mig längs vägen. Alla förväntade uppgifter levererades.'
					},
					{
						name: 'Energy Machines',
						when: '2019',
						role: 'Data scientist · Examensarbete',
						text: 'Att hitta driftstörningar i ett klimatstyrningssystems historiska data med IBM:s egenutvecklade verktyg för avvikelsedetektering, och samtidigt balansera Chalmers, IBM:s och kundens behov. Tillsammans med min examensarbetspartner ansvarade jag för datauttag, datatvätt, klustring, parameterjustering och presentation av resultaten. Vi hittade två avvikelser som visade sig vara grundorsaken till ett dyrt läckage – vilket sparade företaget böter på över 100 000 kronor.'
					}
				]
			},
			{
				id: 'hyperlab',
				from: 2018,
				to: 2018,
				when: 'jun – sep 2018',
				title: 'Utvecklare · Sommarpraktikant',
				org: 'Hyperlab AB, Göteborg',
				summary:
					'Vidareutvecklade och refaktorerade en av Hyperlabs redan lanserade appar i React Native. En väldigt lärorik tid – jag fortsatte sedan att jobba timmar på Hyperlab under mitt sista år på universitetet.'
			}
		],
		education: [
			{
				from: 2017,
				to: 2019,
				title: 'Civilingenjör (MSc), Software Engineering',
				org: 'Chalmers tekniska högskola',
				text: 'Inriktning maskininlärning, med utbytesstudier vid UC Berkeley (USA) och NCTU (Taiwan).'
			},
			{
				from: 2014,
				to: 2017,
				title: 'Kandidatexamen, Industriell ekonomi',
				org: 'Chalmers tekniska högskola'
			}
		],
		skills: [
			{ group: 'Språk & ramverk', items: ['Python', 'SQL', 'Java', 'Groovy', 'JavaScript / Node', 'React', 'Svelte', 'HTML / CSS'] },
			{ group: 'DevOps & verktyg', items: ['Docker', 'Kubernetes', 'Jenkins', 'Azure DevOps', 'Gradle', 'Nginx', 'Linux'] },
			{ group: 'Moln', items: ['Azure', 'Google Cloud', 'IBM Cloud'] }
		],
		spoken: ['Svenska', 'Engelska'],
		commitments: [
			{ role: 'Styrelseledamot', org: 'Brf Johanneberg 1937', when: '2020 – 2025' },
			{ role: 'Styrelseledamot', org: 'Hyperlab AB', when: '2014 – 2021' }
		],
		other: [{ role: 'Volontär', org: 'Socialtjänsten, Göteborg', when: '2019 – 2021' }]
	}
};
