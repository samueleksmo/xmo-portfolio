<script>
	import Home from './components/home/Home.svelte';
	import ClientWork from './components/clientwork/ClientWork.svelte';
	import About from './components/about/About.svelte';
	import CV from './components/cv/CV.svelte';
	import Contact from './components/contact/Contact.svelte';
	import Footer from './components/footer/Footer.svelte';
</script>

<main>
	<Home />
	<About />
	<CV />
	<ClientWork />
	<Contact />
	<Footer />
</main>

<style>
	main {
		height: 100%;
	}
</style>
