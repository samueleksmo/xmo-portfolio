<script>
	import Home from './components/home/Home.svelte'
	import ClientWork from './components/clientwork/ClientWork.svelte'
	import About from './components/about/About.svelte'
	import Footer from './components/footer/Footer.svelte'
	import { setupI18n,locale} from './services/i18n';
    
    setupI18n({ withLocale: 'en' });
	
</script>

<main>
	<Home/>
	<About/>
	<ClientWork/>
	<Footer
	
	on:locale-changed={e => setupI18n({ withLocale: e.detail }) }
	/>
	

</main>

<style>

	main {
		height: 100%;
	}
	
</style>