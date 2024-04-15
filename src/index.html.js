export default `
	<!DOCTYPE html>
		<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
		<head>
		    <meta charset="utf-8">
		    <base href="/">
		      
		    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
		    <meta http-equiv="Content-type" content="text/html; charset=UTF-8">
		
		    <meta name="msapplication-tap-highlight" content="no"/>
		    <meta name="viewport" content="width=device-width, initial-scale=1"/>
		    <meta name="description" content="What's in your basket?"/>
		    <meta name="keywords" content=""/>
		
		    <link rel="manifest" href="./manifest.json"/>
		    <link rel="shortcut icon" href="./favicon.ico"/>
		    <link rel="preconnect" href="https://fonts.googleapis.com">
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap">
		    <link
		    	rel="stylesheet"
		    	href="https://cdnjs.cloudflare.com/ajax/libs/flickity/3.0.0/flickity.min.css"
		    	integrity="sha512-fJcFDOQo2+/Ke365m0NMCZt5uGYEWSxth3wg2i0dXu7A1jQfz9T4hdzz6nkzwmJdOdkcS8jmy2lWGaRXl+nFMQ=="
		    	crossorigin="anonymous"
		    	referrerpolicy="no-referrer"
	      />
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/superfish/1.7.10/css/superfish.min.css"
					integrity="sha512-a/XY/t5oyeHkl1aap3QkgydkPGXe2HljQHAuQt97XEM5Q7WHW16V7LYPKO9YEydlt3TjlIETC2YicOaeo7xdcg=="
					crossorigin="anonymous"
					referrerpolicy="no-referrer"
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/superfish/1.7.10/css/megafish.css"
					integrity="sha512-pnu/pv4l/t/AIzC5uFrIo//i/F/Ajdx5bmH7LrTm7vTIO0QVxkjcDKg6hiRVtS9r5BWiX/qItr48lsPyQdo7eg=="
					crossorigin="anonymous"
					referrerpolicy="no-referrer"
			 	/>
		
		    <title>YourBasket</title>
		
		    <script
		    	src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.js"
		      integrity="sha512-+k1pnlgt4F1H8L7t3z95o3/KO+o78INEcXTbnoJQ/F2VqDVhWoaiVml/OEHv9HsVgxUaVW+IbiZPUJQfF/YxZw=="
		      crossorigin="anonymous"
		      referrerpolicy="no-referrer">
				</script>
		    <script
		     	src="https://cdnjs.cloudflare.com/ajax/libs/jquery.hoverintent/1.10.2/jquery.hoverIntent.min.js"
		     	integrity="sha512-sw+oNcbTS/A0W2RCoTKChyNVw/OClp76mxn3yaOZiDaxpGMXFIWrZC6BlgtieaWp2oh2asgj44TJd1f4Lz2C8Q=="
		     	crossorigin="anonymous"
		     	referrerpolicy="no-referrer">
				</script>
		    <script
		      src="https://cdnjs.cloudflare.com/ajax/libs/superfish/1.7.10/js/superfish.min.js"
		      integrity="sha512-gdhtclwUZCkHSSb/Q79++RssWL4eDLKHO15TC7kR/XnvlNyzcvZDRLn4BIuxadMWGIxPuj/IbFBInMpYockVCA=="
		      crossorigin="anonymous"
		      referrerpolicy="no-referrer">
				</script>
        <script
        	src="https://cdnjs.cloudflare.com/ajax/libs/flickity/3.0.0/flickity.pkgd.min.js"
        	integrity="sha512-achKCfKcYJg0u0J7UDJZbtrffUwtTLQMFSn28bDJ1Xl9DWkl/6VDT3LMfVTo09V51hmnjrrOTbtg4rEgg0QArA=="
        	crossorigin="anonymous"
        	referrerpolicy="no-referrer">
				</script>
		    <script
	        src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
	        integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D"
	        crossorigin="anonymous"
	        async>
		    </script>
		    <!-- Google Tag Manager -->
		    <script>(function (w, d, s, l, i) {
		        w[l] = w[l] || [];
		        w[l].push({
		            'gtm.start':
		                new Date().getTime(), event: 'gtm.js'
		        });
		        var f = d.getElementsByTagName(s)[0],
		            j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
		        j.async = true;
		        j.src =
		            'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
		        f.parentNode.insertBefore(j, f);
		    })(window, document, 'script', 'dataLayer', 'GTM-N6R9SD82');</script>
		    <!-- End Google Tag Manager -->
		</head>
		
		<body class="wrapper" style="display: flex; flex-flow: column nowrap; min-height: 100vh;">
		    <noscript>You need to enable JavaScript to view this site.</noscript>
		    
		    <div style="display: none">
		        <?xml version="1.0" encoding="utf-8" ?>
		        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
		            <symbol viewBox="0 0 300 300" id="account" xmlns="http://www.w3.org/2000/svg">
		                <path class="aacls-1"
		                      d="M237.39 210.37a307.06 307.06 0 00-55.22-35.72 1.74 1.74 0 01-1-1.56v-14.85a59.65 59.65 0 10-63.19 0v14.85a1.74 1.74 0 01-1 1.56 307.07 307.07 0 00-55.22 35.72 19.07 19.07 0 00-6.94 14.72v26.7h189.51v-26.7a19.07 19.07 0 00-6.94-14.72z"/>
		            </symbol>
		            <symbol viewBox="0 0 300 300" id="arrow-down" xmlns="http://www.w3.org/2000/svg">
		                <path class="abcls-1" d="M150.79 192.57L86.53 130l20.29-20.84 43.41 42.27 42.28-43.41 20.83 20.29z"/>
		            </symbol>
		            <symbol viewBox="0 0 300 300" id="arrow-next" xmlns="http://www.w3.org/2000/svg">
		                <path class="acst0" d="M102.4 298.8l-48.8-47.5 99-101.7-101.7-99L98.4 1.8l150.5 146.5z"/>
		            </symbol>
		            <symbol viewBox="0 0 300 300" id="arrow-previous" xmlns="http://www.w3.org/2000/svg">
		                <path class="adst0" d="M197.3 298.3l48.6-47.4-98.6-101.3 101.3-98.7-47.4-48.6-149.9 146z"/>
		            </symbol>
		            <symbol viewBox="0 0 272.93 295" id="arrow-reset" xmlns="http://www.w3.org/2000/svg">
		                <path class="aecls-1"
		                      d="M235.34 229.03a119.3 119.3 0 11-7-169.53l-20.48 21.72 65.08 2.72-8.51-63.84-17.22 18.89a147.35 147.35 0 10-99.56 256h5.53a146.29 146.29 0 00102.64-46.95 14 14 0 00-20.5-19z"/>
		            </symbol>
		            <symbol viewBox="0 0 300 300" id="arrow-slider-next" xmlns="http://www.w3.org/2000/svg">
		                <path class="afcls-1" d="M115.45 81.31l70.41 68.56-68.56 70.41"/>
		            </symbol>
		            <symbol viewBox="0 0 300 300" id="arrow-slider-previous" xmlns="http://www.w3.org/2000/svg">
		                <path class="agcls-1" d="M185.86 81.31l-70.41 68.56 68.56 70.41"/>
		            </symbol>
		            <symbol viewBox="0 0 300 300" id="arrow-top-rounded" xmlns="http://www.w3.org/2000/svg">
		                <path class="ahcls-1"
		                      d="M150.12 273.38a123.13 123.13 0 11123.13-123.12 123.26 123.26 0 01-123.13 123.12zm0-236.2A113.07 113.07 0 10263.2 150.26 113.2 113.2 0 00150.12 37.18z"/>
		                <path class="ahcls-2" d="M87.95 179.46l63.43-60.92 60.92 63.43"/>
		            </symbol>
		            <symbol viewBox="0 0 300 300" id="arrows-updown" xmlns="http://www.w3.org/2000/svg">
		                <path d="M75 50.9l75 75-21.4 21.4-38.4-38.4v139H59.8v-139l-38.4 38.4L0 125.9zm150 197l75-75-21.4-21.5-38.4 38.5v-139h-30.4v139l-38.4-38.5-21.4 21.5z"/>
		            </symbol>
		            <symbol fill="none" viewBox="0 0 201 98" id="back-arrow-quiz" xmlns="http://www.w3.org/2000/svg">
		                <path d="M47.5 1L1 48.5 47.5 97 59 86 30.5 57h170V40.5h-170l28.5-28L47.5 1z" fill="#CBCBCB"
		                      stroke="#CBCBCB"/>
		            </symbol>
		            <symbol viewBox="0 0 20 20" id="before-after" xmlns="http://www.w3.org/2000/svg">
		                <path d="M10.909 0v20H9.091V0zM8.182 0v1.818H1.488v16.364h6.694V20H0V0zM20 18.182V20h-1.818v-1.818zm-2.727 0V20h-1.818v-1.818zm-2.728 0V20h-2.727v-1.818zM20 14.545v1.819h-1.818v-1.819zm0-3.636v1.818h-1.818v-1.818zm0-3.636v1.818h-1.818V7.273zm0-3.637v1.819h-1.818V3.636zM14.545 0v1.818h-2.727V0zm2.728 0v1.818h-1.818V0zM20 0v1.818h-1.818V0z"
		                      data-name="00_Global-Guidelines/Icons/02_20px-Med-Icon/Before-After"/>
		            </symbol>
		            <symbol viewBox="0 0 300 300" id="burger" xmlns="http://www.w3.org/2000/svg">
		                <path class="alcls-1" d="M45 85.3h210v27.54H45zm0 51.63h210v27.54H45zm0 51.64h210v27.54H45z"/>
		            </symbol>
		            <symbol viewBox="0 0 300 300" id="cart" xmlns="http://www.w3.org/2000/svg">
		                <path class="amcls-1"
		                      d="M222.57 49.15l-5.18 27.91L31 78l23.21 104.43 143.61.21-6.46 34.82H65.86v17.41h17.7a14.51 14.51 0 1028.43 0h47a14.51 14.51 0 1028.43 0h17.7l35.49-168.31H269V49.15z"/>
		            </symbol>
		            <symbol viewBox="0 0 300 300" id="chat" xmlns="http://www.w3.org/2000/svg">
		                <path class="ancls-1"
		                      d="M211.82 63H87.68a42.42 42.42 0 00-42.43 42.43V144a42.39 42.39 0 0040.4 42.32V234a2.37 2.37 0 004 1.77l54-49.42c.51-.46-.27.82-.27.15h68.51a42.42 42.42 0 0042.36-42.5v-38.61A42.42 42.42 0 00211.82 63z"/>
		            </symbol>
		            <symbol viewBox="0 0 300 300" id="chat-with-dots" xmlns="http://www.w3.org/2000/svg">
		                <path d="M211.9 63.6H88.4c-23.3 0-42.2 18.9-42.2 42.2v38.4c0 22.5 17.7 41 40.2 42.1v47.3c0 1.3 1 2.4 2.4 2.4.6 0 1.2-.2 1.6-.6l53.6-49.1c.5-.4-.3.8-.3.1h68.1c23.3 0 42.1-18.9 42.1-42.2v-38.4c.1-23.3-18.8-42.1-42-42.2z"/>
		                <circle cx="108" cy="126.2" r="11.2" fill="#fff"/>
		                <circle cx="156.7" cy="126.2" r="11.2" fill="#fff"/>
		                <circle cx="205.4" cy="126.2" r="11.2" fill="#fff"/>
		            </symbol>
		            <symbol viewBox="0 0 15 15" id="close" xmlns="http://www.w3.org/2000/svg">
		                <path class="apst0" d="M.4 1.1l13.5 13.5 1-1L1.4.1l-1 1z"/>
		                <path class="apst0" d="M14.9 1.1L1.4 14.6l-1-1L13.9.1l1 1z"/>
		            </symbol>
		            <symbol viewBox="0 0 80 48" id="email" xmlns="http://www.w3.org/2000/svg">
		                <path class="aqcls-1"
		                      d="M74 0H6a6 6 0 00-6 6v36a6 6 0 006 6h68a6 6 0 006-6V6a6 6 0 00-6-6zm1.78 42.88L57.5 26.69 76 12.59V42a1.88 1.88 0 01-.22.88zM4 42V12.49l18 13.77-18 16A1.79 1.79 0 014 42zm21.3-13.27l10.52 8a7.94 7.94 0 004.24 1.55 8 8 0 004.25-1.55l10-7.59L71.01 44H8.06zM6 4h68a2 2 0 012 2v1.57L42 33.24a4.4 4.4 0 01-2 .84 4.44 4.44 0 01-2-.84L4 7.46V6a2 2 0 012-2z"/>
		            </symbol>
		            <symbol viewBox="0 0 300 300" id="facebook" xmlns="http://www.w3.org/2000/svg">
		                <path class="arcls-1"
		                      d="M51.78 52.23v196.83h196.83V52.23zM183 109.64h-15.77c-5.05 0-8.83 2.07-8.83 7.29V126H183l-2 24.6h-22.6v65.61h-24.6v-65.57h-16.4V126h16.4v-15.73c0-16.58 8.73-25.24 28.38-25.24H183z"/>
		            </symbol>
		            <symbol viewBox="0 0 300 300" id="google" xmlns="http://www.w3.org/2000/svg">
		                <path class="ascls-1"
		                      d="M51.68 52.23v196.83h196.83V52.23zm71.08 136.69a38.28 38.28 0 110-76.55 36.7 36.7 0 0125.65 10l-10.39 10a21.57 21.57 0 00-15.25-5.9 24.17 24.17 0 000 48.34c15.15 0 20.83-10.88 21.71-16.51h-21.72v-13.12h36.14a34.43 34.43 0 01.61 6.34c-.01 21.86-14.66 37.4-36.75 37.4zm92.94-32.8h-16.4v16.4h-10.93v-16.4H172v-10.94h16.4v-16.4h10.9v16.4h16.4z"/>
		            </symbol>
		            <symbol viewBox="0 0 300 300" id="home" xmlns="http://www.w3.org/2000/svg">
		                <path class="atcls-1" d="M149.48 51.52l-84.04 68.76v129.88h168.08V120.28l-84.04-68.76z"/>
		                <path class="atcls-1"
		                      d="M233.52 251.66H65.44a1.5 1.5 0 01-1.5-1.5V120.28a1.5 1.5 0 01.55-1.16l84-68.76a1.5 1.5 0 011.9 0l84 68.76a1.5 1.5 0 01.55 1.16v129.88a1.5 1.5 0 01-1.42 1.5zm-166.58-3H232V121l-82.52-67.54L66.94 121z"/>
		            </symbol>
		            <symbol viewBox="0 0 49 49" id="info" xmlns="http://www.w3.org/2000/svg">
		                <path class="aucls-1"
		                      d="M24.5 4A20.5 20.5 0 114 24.5 20.53 20.53 0 0124.5 4m0-4A24.5 24.5 0 1049 24.5 24.5 24.5 0 0024.5 0z"/>
		                <path class="aucls-1"
		                      d="M20.07 35.63h.3c.26 0 .52-.06.78-.11a11.31 11.31 0 005.29-3.08 13.47 13.47 0 001.58-1.94c.11-.16-.05-.5-.08-.75-.23.06-.52 0-.68.2-.58.55-1.11 1.16-1.69 1.72a6 6 0 01-1.21.92c-.51.28-.87 0-.8-.57a4.9 4.9 0 01.29-1.06c.73-1.9 1.49-3.78 2.2-5.68a33.75 33.75 0 001.26-3.88 2 2 0 00-1.81-2.62 6.26 6.26 0 00-1.93.08c-2.66.53-4.52 2.26-6.15 4.29a.62.62 0 00-.17.33.93.93 0 00.15.59.57.57 0 00.55 0 11.52 11.52 0 00.93-.92c.59-.58 1.16-1.17 1.77-1.71.32-.27.75-.53 1.15-.21s.14.74 0 1.11c-.91 2.21-1.88 4.41-2.74 6.65a26.83 26.83 0 00-1.23 4.1c-.39 1.63.47 2.54 2.24 2.54zm6.87-23.53a3 3 0 00-3 2.9 2.36 2.36 0 002.55 2.41 3 3 0 003.01-2.91 2.37 2.37 0 00-2.56-2.4z"/>
		                <path class="aucls-1"
		                      d="M20.07 35.63c-1.77 0-2.63-.91-2.29-2.57a26.83 26.83 0 011.23-4.1c.86-2.24 1.83-4.44 2.74-6.65.15-.37.42-.79 0-1.11s-.83-.06-1.15.21c-.61.54-1.18 1.13-1.77 1.71a11.52 11.52 0 01-.93.92.57.57 0 01-.55 0 .93.93 0 01-.15-.59.62.62 0 01.17-.33c1.63-2 3.49-3.76 6.15-4.29a6.26 6.26 0 011.98-.05 2 2 0 011.85 2.58 33.75 33.75 0 01-1.26 3.88c-.71 1.9-1.47 3.78-2.2 5.68a4.9 4.9 0 00-.29 1.06c-.07.58.29.85.8.57a6 6 0 001.21-.92c.58-.56 1.11-1.17 1.69-1.72.16-.15.45-.14.68-.2 0 .25.19.59.08.75a13.47 13.47 0 01-1.58 1.95 11.31 11.31 0 01-5.33 3.09c-.26 0-.52.08-.78.11zm6.87-23.53a2.37 2.37 0 012.56 2.4 3 3 0 01-3.08 2.87 2.36 2.36 0 01-2.55-2.41 3 3 0 013.07-2.86z"/>
		            </symbol>
		            <symbol viewBox="0 0 300 300" id="instagram" xmlns="http://www.w3.org/2000/svg">
		                <path class="avcls-1"
		                      d="M172.07 150.64a21.87 21.87 0 11-21.87-21.87 21.87 21.87 0 0121.87 21.87zm31.54-26.51c.31 6.91.38 9 .38 26.51s-.07 19.59-.38 26.51c-.82 17.63-9.1 26.09-26.89 26.89-6.92.31-9 .39-26.52.39s-19.6-.07-26.51-.38c-17.83-.81-26.09-9.28-26.89-26.89-.32-6.93-.39-9-.39-26.52s.07-19.59.39-26.51c.81-17.65 9.1-26.09 26.89-26.89 6.92-.32 9-.39 26.51-.39s19.6.07 26.51.38c17.78.77 26.08 9.26 26.9 26.91zm-19.72 26.51a33.69 33.69 0 10-33.69 33.69 33.69 33.69 0 0033.68-33.69zm9.2-35a7.87 7.87 0 10-7.87 7.87 7.88 7.88 0 007.87-7.89zm55.52-63.4v196.82H51.78V52.23zm-32.8 98.41c0-17.81-.07-20.05-.39-27-1.07-23.8-14.31-37.07-38.16-38.16-7-.33-9.23-.4-27.06-.4s-20 .07-27 .39C99.31 86.52 86.08 99.74 85 123.59c-.32 7-.39 9.24-.39 27.06s.07 20.05.39 27c1.1 23.83 14.32 37.08 38.17 38.17 7 .32 9.23.39 27 .39s20.05-.07 27.06-.39c23.8-1.09 37.09-14.31 38.16-38.17.34-6.96.41-9.19.41-27.01z"/>
		            </symbol>
		            <symbol viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="awlds-ripple" style="background:0 0"
		                    id="loading-animation" xmlns="http://www.w3.org/2000/svg">
		                <circle cx="50" cy="50" r="40" fill="none" stroke="#eef7db" stroke-width="3">
		                    <animate attributeName="r" calcMode="spline" values="0;40" keyTimes="0;1" dur="1.2"
		                             keySplines="0 0.2 0.8 1" begin="-0.6s" repeatCount="indefinite"/>
		                    <animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur="1.2"
		                             keySplines="0.2 0 0.8 1" begin="-0.6s" repeatCount="indefinite"/>
		                </circle>
		                <circle cx="50" cy="50" r="25.953" fill="none" stroke="#B4C832" stroke-width="3">
		                    <animate attributeName="r" calcMode="spline" values="0;40" keyTimes="0;1" dur="1.2"
		                             keySplines="0 0.2 0.8 1" begin="0s" repeatCount="indefinite"/>
		                    <animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur="1.2"
		                             keySplines="0.2 0 0.8 1" begin="0s" repeatCount="indefinite"/>
		                </circle>
		            </symbol>
		            <symbol viewBox="0 0 300 300" id="location" xmlns="http://www.w3.org/2000/svg">
		                <path class="axcls-1"
		                      d="M202.67 77.74a61.43 61.43 0 00-52.56-30.18c-44 0-72.44 46.17-55 85.58 17.4 40.13 36.93 79.9 55 119.67l29.83-65c9.23-19.89 21.31-40.84 27.34-62.15 4.63-15.96 4.27-32.66-4.61-47.92zM150.12 136a29.83 29.83 0 1129.83-29.83A29.83 29.83 0 01150.12 136z"/>
		            </symbol>
		            <symbol viewBox="0 0 15 15" id="minus" xmlns="http://www.w3.org/2000/svg">
		                <path class="ayst0" d="M17.2 8H-1.9V6.6h19.1V8z"/>
		            </symbol>
		            <symbol viewBox="0 0 300 300" id="pinterest" xmlns="http://www.w3.org/2000/svg">
		                <path class="azcls-1"
		                      d="M51.78 52.23v196.83h196.83V52.23zm98.41 164a65.54 65.54 0 01-19.43-2.93c2.67-4.35 6.67-11.5 8.15-17.21l4.09-15.56c2.14 4.08 8.39 7.53 15 7.53 19.79 0 34-18.2 34-40.81 0-21.68-17.69-37.89-40.45-37.89-28.31 0-43.35 19-43.35 39.7 0 9.63 5.13 21.6 13.32 25.42 1.24.57 1.9.32 2.2-.88l1.82-7.44a2 2 0 00-.46-1.89c-2.71-3.28-4.88-9.33-4.88-15 0-14.48 11-28.47 29.62-28.47 16.12 0 27.4 11 27.4 26.7 0 17.75-9 30-20.63 30-6.45 0-11.27-5.32-9.72-11.86 1.85-7.8 5.44-16.21 5.44-21.85 0-5-2.71-9.24-8.3-9.24-6.59 0-11.88 6.82-11.88 15.94a23.71 23.71 0 002 9.74s-6.5 27.5-7.69 32.62c-1.32 5.67-.8 13.63-.23 18.81a65.61 65.61 0 1123.93 4.52z"/>
		            </symbol>
		            <symbol viewBox="0 0 15 15" id="plus" xmlns="http://www.w3.org/2000/svg">
		                <path class="bast0" d="M7-2.2v19.1h1.4V-2.2H7z"/>
		                <path class="bast0" d="M17.2 8H-1.9V6.6h19.1V8z"/>
		            </symbol>
		            <symbol viewBox="0 0 126 135" id="rounded-arrow-quiz" xmlns="http://www.w3.org/2000/svg">
		                <path d="M17.636 76h-16.5c-2 20 18 56.5 61.5 57.5s61-39.5 62-55-3-49-37-64c-27.2-12-51.666-1.667-60.5 5V1h-16l-2 46.5 48.5 2.5V33h-18.5c8.8-8 23.667-8 30-7 36 5.6 41.334 37.333 39.5 52.5-4 16-20.2 46.1-53 38.5-32.8-7.6-39-30.5-38-41z"/>
		            </symbol>
		            <symbol viewBox="0 0 300 300" id="search" xmlns="http://www.w3.org/2000/svg">
		                <path class="bccls-1"
		                      d="M244.92 225.37l-46.61-46.61a79.54 79.54 0 10-22.5 20.83L223.25 247zM77.72 132.2a56.6 56.6 0 1156.6 56.6 56.66 56.66 0 01-56.6-56.6z"/>
		            </symbol>
		            <symbol viewBox="0 0 300 300" id="share" xmlns="http://www.w3.org/2000/svg">
		                <circle cx="151" cy="150.5" r="99"/>
		                <path fill="#fff"
		                      d="M176.6 172.2c-5.1 0-10.1 1.7-14.1 4.9L129.9 159c1.6-4.7 1.6-9.8 0-14.6l34.3-19.2c10.7 6.9 24.9 3.8 31.8-6.9 6.9-10.7 3.8-24.9-6.9-31.8-10.7-6.9-24.9-3.8-31.8 6.9-2.4 3.7-3.7 8.1-3.6 12.5 0 3.4.7 6.8 2.3 9.8l-33 18.4c-9.7-8.2-24.2-7.1-32.4 2.6s-7.1 24.2 2.6 32.4c8.6 7.3 21.3 7.3 29.8 0l32.2 17.8c-1 2.6-1.5 5.4-1.5 8.1-.1 12.7 10.1 23.1 22.8 23.2 12.7.1 23.1-10.1 23.2-22.8s-10.1-23.1-22.8-23.2c-.2.1-.2.1-.3 0z"/>
		            </symbol>
		            <symbol viewBox="0 0 155.139 155.139" id="sign-in-facebook" xmlns="http://www.w3.org/2000/svg">
		                <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
		                      fill="#fff"/>
		            </symbol>
		            <symbol viewBox="0 0 300 300" id="star" xmlns="http://www.w3.org/2000/svg">
		                <path class="bfcls-1"
		                      d="M83.59 252l66.65-48.32L216.76 252l-25.38-78.33 66.48-48.25h-82.19l-25.43-78.25-25.41 78.25H42.48l66.54 48.25L83.59 252z"/>
		            </symbol>
		            <symbol viewBox="0 0 29 21.96" id="tryon-camera" xmlns="http://www.w3.org/2000/svg">
		                <path class="bgcls-1"
		                      d="M21.78 4l-2.34-4H9.56L7.22 4H0v18h29V4zM28 21H1V5h6.79l2.34-4h8.74l2.34 4H28z"/>
		                <path class="bgcls-1"
		                      d="M14.5 9.55a2.5 2.5 0 11-2.5 2.5 2.5 2.5 0 012.5-2.5m0-1a3.5 3.5 0 103.5 3.5 3.5 3.5 0 00-3.5-3.5z"/>
		                <path class="bgcls-1"
		                      d="M14.5 5.52A6.5 6.5 0 118 12a6.51 6.51 0 016.5-6.5m0-1A7.5 7.5 0 1022 12a7.5 7.5 0 00-7.5-7.5z"/>
		            </symbol>
		            <symbol viewBox="0 0 22.4 19" id="tryon-reload" xmlns="http://www.w3.org/2000/svg">
		                <path class="bhcls-1"
		                      d="M12.4 0A9.57 9.57 0 003 8.3L.82 5.22 0 5.79l3.11 4.5 4.5-3.11-.56-.82-3 2.14a8.56 8.56 0 018.4-7.5c4.94 0 9 3.57 9 8.5s-4 8.5-9 8.5a9 9 0 01-5.88-2.21l-.58.82A9.89 9.89 0 0012.45 19c5.49 0 10-4 10-9.5S17.9 0 12.4 0z"/>
		            </symbol>
		            <symbol viewBox="0 0 29 25" id="tryon-upload" xmlns="http://www.w3.org/2000/svg">
		                <path class="bicls-1"
		                      d="M18.37 13.16L14.5 9.29l-3.87 3.87.71.71L14 11.21V25h1V11.21l2.66 2.66.71-.71z"/>
		                <path class="bicls-1" d="M29 0H0v18h10.63v-1H1V1h27v16h-9.63v1H29V0z"/>
		            </symbol>
		            <symbol viewBox="0 0 300 300" id="twitter" xmlns="http://www.w3.org/2000/svg">
		                <path class="bjcls-1"
		                      d="M50.78 52.23v196.83h196.83V52.23zM205.47 128c1.71 37.87-26.53 80.09-76.52 80.09A76.16 76.16 0 0187.68 196a54.17 54.17 0 0039.86-11.15 26.94 26.94 0 01-25.14-18.7 27.07 27.07 0 0012.15-.46A27 27 0 0193 138.93a26.78 26.78 0 0012.19 3.37 27 27 0 01-8.33-35.95 76.44 76.44 0 0055.49 28.13 26.94 26.94 0 0145.88-24.55 53.87 53.87 0 0017.1-6.53 27 27 0 01-11.83 14.89 54 54 0 0015.46-4.24A55 55 0 01205.47 128z"/>
		            </symbol>
		            <symbol viewBox="0 0 107 59" id="up-arrow" xmlns="http://www.w3.org/2000/svg">
		                <path d="M107.4 54.9L53.9.3.4 54.9 4 58.6 53.9 7.7l49.9 50.9z"/>
		            </symbol>
		            <symbol viewBox="0 0 300 300" id="video" xmlns="http://www.w3.org/2000/svg">
		                <path class="blcls-1" d="M126.93 113.88v79.35l66.13-39.67-66.13-39.68z"/>
		                <path class="blcls-1"
		                      d="M150.07 47.75a102.5 102.5 0 10102.5 102.5 102.5 102.5 0 00-102.5-102.5zm0 181.85a79.35 79.35 0 1179.35-79.35 79.35 79.35 0 01-79.35 79.35z"/>
		            </symbol>
		            <symbol viewBox="0 0 20 20" id="video-pdp" xmlns="http://www.w3.org/2000/svg">
		                <path d="M10 0A10 10 0 110 10 10 10 0 0110 0zm0 2.259A7.741 7.741 0 1017.741 10 7.741 7.741 0 0010 2.259zM7.8 6.4l6.4 3.9-6.4 3.9z"
		                      data-name="00_Global-Guidelines/Icons/02_20px-Med-Icon/Video"/>
		            </symbol>
		            <symbol viewBox="0 0 300 300" id="youtube" xmlns="http://www.w3.org/2000/svg">
		                <path class="bncls-1"
		                      d="M164.68 168.31c-2.36 0-4.39 1.51-5.88 3.32V156.1h-6.68v48.22h6.68v-2.72a7.58 7.58 0 006.28 3.18c4.4 0 6-3.42 6-7.82v-19.74c.04-4.82-1.56-8.91-6.4-8.91zm-.36 27.69a4.07 4.07 0 01-.57 2.45c-.73 1-2.3.91-3.39.37l-1.57-1.25v-22.18l1.37-1.08a2.75 2.75 0 013.45.58 4.45 4.45 0 01.71 2.73zM142 126v-17.34c0-2.05.94-3.56 2.9-3.56 2.13 0 3 1.47 3 3.56V126c0 2-1 3.53-2.9 3.53s-3-1.53-3-3.53zm-15.16 37.07h-7.71v41.23h-7.45v-41.19H104v-7h22.87zm12.16 5.68h6.62v35.58H139v-3.93a14.42 14.42 0 01-3.81 3.31c-3.57 2-8.46 2-8.46-5.22v-29.74h6.61V196c0 1.44.34 2.39 1.76 2.39s3.08-1.66 3.89-2.67zM50.78 52.23v196.83h196.83V52.23zM161 98.32h6.95v28.63c0 1.51.36 2.52 1.85 2.52s3.24-1.74 4.08-2.8V98.32h6.95v37.36h-6.95v-4.13c-3 3.58-5.93 4.67-8 4.67-3.72 0-4.85-3-4.85-6.67V98.32zM145.07 98a9.75 9.75 0 0110 10v18.31c0 6.27-4.4 10-10 10-6.73 0-10.18-3.42-10.18-10V108c0-6 4.11-10 10.18-10zM116.9 85l5.4 20.24 5-20.24h7.95l-9.1 30.1v20.54h-7.82v-20.51L109 85zm69.65 130.5c-14.23 1-60.5 1-74.71 0-15.4-1-17.2-10.39-17.31-34.81.11-24.46 1.93-33.76 17.31-34.81 14.21-1 60.48-1 74.71 0 15.4 1 17.2 10.39 17.31 34.81-.11 24.49-1.92 33.78-17.31 34.84zm-.39-47.67c-6 0-10 4.28-10 10.46v16c0 6.41 3.23 11 9.55 11 7 0 9.91-4.15 9.91-11v-2.67h-6.81v2.47c0 3.1-.16 5-3 5s-2.89-2.31-2.89-5v-6.71h12.65v-9.05c0-6.44-3.06-10.47-9.4-10.47zm2.6 14h-5.84v-3.6c0-2.44.51-4.17 3-4.17s2.89 1.76 2.89 4.17z"/>
		            </symbol>
		            <symbol viewBox="0 0 300 300" id="zoom-minus" xmlns="http://www.w3.org/2000/svg">
		                <path class="bocls-1"
		                      d="M245.21 226l-46.83-46.83a79.92 79.92 0 10-22.61 20.93l47.67 47.67zm-168-93.61a56.87 56.87 0 1156.87 56.87 56.93 56.93 0 01-56.86-56.89z"/>
		                <path class="bocls-1" d="M106.28 142.92v-14.98h59.91v14.98z"/>
		            </symbol>
		            <symbol viewBox="0 0 300 300" id="zoom-plus" xmlns="http://www.w3.org/2000/svg">
		                <path class="bpcls-1"
		                      d="M245.21 226l-46.83-46.83a79.92 79.92 0 10-22.61 20.93l47.67 47.67zm-168-93.61a56.87 56.87 0 1156.87 56.87 56.93 56.93 0 01-56.86-56.89z"/>
		                <path class="bpcls-1"
		                      d="M166.19 127.94h-22.47v-22.47h-14.97v22.47h-22.47v14.97h22.47v22.47h14.97v-22.47h22.47v-14.97z"/>
		            </symbol>
		            <symbol viewBox="0 0 40 40" id="co2" xmlns="http://www.w3.org/2000/svg">
		                <g fill="none" fill-rule="evenodd">
		                    <circle stroke="#969696" fill="#FFF" cx="20" cy="20" r="19.5"/>
		                    <path d="M10.954 16.745c1.133 0 2.056.626 2.67 1.809h3.043c-.745-2.96-3.043-4.803-5.729-4.803a5.674 5.674 0 00-4.19 1.776A6.09 6.09 0 005 19.873c0 1.776.55 3.264 1.634 4.465 1.099 1.244 2.653 1.94 4.272 1.911 2.767 0 4.952-1.776 5.712-4.701H13.56c-.614 1.116-1.57 1.725-2.654 1.725-1.585 0-3.01-1.472-3.01-3.383a3.213 3.213 0 01.897-2.244 2.937 2.937 0 012.161-.901M23.775 13.75a6.214 6.214 0 00-4.427 1.762 6.111 6.111 0 00-1.848 4.36c0 1.781.58 3.273 1.727 4.477a6.052 6.052 0 004.531 1.9 6.193 6.193 0 004.48-1.882 6.226 6.226 0 001.761-4.443c-.028-3.398-2.798-6.145-6.224-6.173m-.017 9.513c-1.676 0-3.198-1.458-3.198-3.357a3.15 3.15 0 011.583-2.752 3.203 3.203 0 013.195 0 3.15 3.15 0 011.583 2.752c0 1.967-1.42 3.357-3.163 3.357M35 21.274c0-1.003-.787-1.69-2.083-1.69-1.264 0-2.075.833-2.084 2.16h1.473c0-.04-.008-.09-.008-.13 0-.526.242-.825.61-.825.36 0 .578.235.578.639 0 .81-.87 1.764-2.62 2.767v1.222h4.118V24.13H32.9c1.397-.874 2.1-1.925 2.1-2.856"
		                          fill="#969696" fill-rule="nonzero"/>
		                </g>
		            </symbol>
		            <symbol viewBox="0 0 40 40" id="picto-water" xmlns="http://www.w3.org/2000/svg">
		                <g fill="none" fill-rule="evenodd">
		                    <circle stroke="#969696" fill="#FFF" cx="20" cy="20" r="19.5"/>
		                    <path d="M20.412 7.7a.542.542 0 00-.838 0c-1.78 2.346-8.434 11.516-8.434 15.836.025 4.958 3.982 8.964 8.854 8.964 4.872 0 8.83-4.006 8.854-8.964 0-4.32-6.653-13.49-8.435-15.836m2.32 21.622a.774.774 0 01-.337.051.89.89 0 01-.787-.462c-.153-.396.04-.834.45-1.025 3.319-1.231 3.036-4.924 2.98-4.976a.75.75 0 01.371-.695.915.915 0 01.847-.052c.272.123.45.369.47.645.224 1.641-.45 5.18-3.994 6.514"
		                          fill="#969696" fill-rule="nonzero"/>
		                </g>
		            </symbol>
		            <symbol viewBox="0 0 40 40" id="picto-tryon" xmlns="http://www.w3.org/2000/svg">
		                <path fill="#004532" d="M0 0h40v40H0z"/>
		                <path d="M25.7 0c-.1.2-.2.4-.3.5-.8 1.1-1.8 2.2-2.8 3.2C24 4.2 34 7.6 36.5 17.8c2.4 10.1-4.3 15.8-4.6 16.1-.3.3-.8.2-1.1-.1-.3-.3-.2-.8.1-1.1 3.1-2.9 4.7-7.1 4.5-11.3-.7 2.8-1.7 5.4-3.1 7.9-1.1 1.9-2.5 3.6-4.2 5.1V40h-1.6v-4.5c-1.9 1.2-4.2 1.9-6.5 1.9h.4c.1.1.1.2.1.4v1.6c0 .3-.2.6-.5.6s-.5-.3-.5-.6v-1.6c0-.1 0-.3.1-.4-2-.1-4-.6-5.7-1.7V40h-1.6v-5.5c-4.6-3.9-7-11-7.5-16.1C1.6 21.7.6 25 1.7 28.1c1.9 5 5.5 4 5.7 3.9.3-.1.6 0 .9.2.2.2.3.5.3.8-.1.3-.3.5-.6.6-.5.1-1 .2-1.5.2-1.8 0-4.7-1-6.4-5.1 0-.1-.1-.3-.1-.6v-2.9-2.3c0-2.2 2.4-4.9 5.6-7.6 1-.9 2.5-2 4.3-3.3 4.5-3.4 11.2-8.3 13.7-12h2.1zM0 34c.1.1.1.2.2.3.1.2 2.8 4.4 10 4 .4 0 .8.3.8.8s-.3.8-.7.9h-.9c-5 0-9-2.7-9.4-3.5v-1.2V34zm40-4v4c-1 1.9-2.3 3.6-3.9 4.9-.1 0-.2.1-.3.1-.3 0-.5-.1-.7-.4-.2-.4-.1-.9.2-1.1 2.3-1.9 3.9-4.6 4.7-7.5zM21.6 4.8c-.4.3-.7.6-1.1 1v1.3c0 .3-.2.6-.5.6s-.5-.3-.5-.6v-.4c-2.7 2.4-5.6 4.6-8.5 6.8-1.7 1.3-3.2 2.4-4.2 3.3l-.4.4C6.6 23.1 10.6 36 20 36c10.1 0 14.4-13.7 14.4-19.3C31.4 8 21.7 5 21.6 4.8zM20 32.4c.3 0 .5.3.5.6v1.6c0 .3-.2.6-.5.6s-.5-.3-.5-.6V33c0-.3.2-.6.5-.6zm1.3-5.4c.2 0 .5.1.6.3 0 0 .7.6 1 .9.1.1.1.1.2.1.4.1.9.1.9.3 0 .3 0 .5-.9.6-.1 1-1.7 1.8-3.1 1.8s-3-.8-3.1-1.9c-.9-.1-.9-.3-.9-.6 0-.2.4-.1.9-.3.1 0 .1 0 .1-.1l1.1-.9c.2-.1.5-.2.7-.3.4 0 .8.1 1.2.4.4-.2.8-.3 1.3-.3zm-1.2 1.4H20c-.1 0-.4.1-.5.1-.1 0-.1.1-.3.1-.2.1-.3.1-.5.1l-.1.1c0 .2.6.1 1.4.1.8 0 1.4.1 1.3-.1 0-.1 0-.1-.1-.1-.2 0-.3-.1-.5-.1-.1 0-.2-.1-.3-.1-.2-.1-.3-.1-.5-.1h.2zM19 23.2c.4.4.7.6 1 .6.4 0 .7-.2 1.1-.6.2-.2.6-.2.8 0s.2.6 0 .8c-.4.5-.9.7-1.3.9v1.3c0 .3-.2.6-.5.6s-.5-.3-.5-.6v-1.3c-.5-.1-.9-.5-1.4-.9-.2-.2-.2-.6 0-.8.2-.3.5-.2.8 0zm1-4c.3 0 .5.3.5.6v1.6c0 .3-.2.6-.5.6s-.5-.3-.5-.6v-1.6c0-.3.2-.6.5-.6zM13.1 14c1.4 0 2.6.7 3.7 1.9.2.2.2.5 0 .7-.2.2-.5.2-.6 0-.6-.7-1.3-1.2-2-1.4.3.3.5.7.5 1.2 0 .9-.8 1.6-1.7 1.6-.9 0-1.7-.7-1.7-1.6 0-.4.1-.8.4-1-.2.1-.3.2-.5.4l-.1.1-.3.3c-.2.2-.4.4-.6.5-.6.4-1.3.4-2 .2-.2-.1-.4-.4-.3-.6.1-.3.3-.4.6-.3.5 0 1-.1 1.4-.3.1-.1.2-.1.3-.3l.1-.1.3-.3c.7-.7 1.4-1 2.5-1zm13.8 0c1.1 0 1.8.3 2.5 1l.3.3.1.1.3.3c.4.2.9.3 1.3.1.2-.1.5.1.6.3.1.3 0 .5-.3.6-.7.3-1.4.2-2-.2-.2-.1-.4-.3-.6-.5-.1 0-.3-.3-.3-.3l-.1-.1c-.2-.1-.3-.3-.5-.4.2.3.4.6.4 1 0 .9-.8 1.6-1.7 1.6-.9 0-1.7-.7-1.7-1.6 0-.5.2-.9.5-1.2-.7.2-1.4.7-2 1.4-.2.2-.5.2-.6 0-.2-.2-.2-.5 0-.7 1.1-1 2.4-1.7 3.8-1.7zm-6.9.4c.3 0 .5.3.5.6v1.6c0 .3-.2.6-.5.6s-.5-.3-.5-.6V15c0-.3.2-.6.5-.6zM31 0c4 2.5 7.2 6.4 9 11v5C38.2 9 34.2 3.5 28.8.7c-.3-.2-.6-.4-.8-.7h3zM20 9.6c.3 0 .5.3.5.6v1.6c0 .3-.2.6-.5.6s-.5-.3-.5-.6v-1.6c0-.3.2-.6.5-.6zM12 0C8.4 3.5 4.4 6.5 0 9v-.4-1.3C3.4 5.1 6.6 2.6 9.7 0H12zm8 0c.3 0 .5.3.5.6v1.6c0 .3-.2.6-.5.6s-.5-.3-.5-.6V.6c0-.3.2-.6.5-.6z"
		                      fill="#fff"/>
		                <path opacity=".5" fill="#004532" d="M20 0h20v40H20z"/>
		            </symbol>
		            <symbol viewBox="0 0 30 25" id="picto-camera" xmlns="http://www.w3.org/2000/svg">
		                <path d="M15.15 2a1.62 1.62 0 011.281.64l2.021 2.619h4.045c1.377 0 2.5 1.148 2.503 2.56v12.446c0 1.416-1.123 2.568-2.503 2.568H2.503C1.123 22.833 0 21.681 0 20.265V7.822c0-1.416 1.123-2.568 2.503-2.568h4.046l2.026-2.616c.306-.399.77-.633 1.271-.638zM12.5 8a6 6 0 100 12 6 6 0 000-12zm0 2a4 4 0 110 8 4 4 0 010-8z"
		                      fill-rule="evenodd"/>
		            </symbol>
		            <symbol viewBox="0 0 15 20" id="picto-upload" xmlns="http://www.w3.org/2000/svg">
		                <path d="M15 14v1.2H0V14h15zM7.497 2L12.3 7.486H8.869v5.485h-2.74V7.486H2.7L7.497 2z"
		                      fill-rule="evenodd"/>
		            </symbol>
		            <symbol fill="none" viewBox="0 0 25 25" id="warning-icon" xmlns="http://www.w3.org/2000/svg">
		                <path d="M12.5 25C19.404 25 25 19.404 25 12.5S19.404 0 12.5 0 0 5.596 0 12.5 5.596 25 12.5 25z"
		                      fill="#DF733D"/>
		                <path d="M11.92 14.192h1.344l.752-7.072V6.8h-2.848v.32l.752 7.072zM11.296 18h2.592v-2.56h-2.592V18z"
		                      fill="#fff"/>
		            </symbol>
		        </svg>
		
		        <svg width="24" height="24" viewBox="0 0 24 24" id="newchat" fill="none" xmlns="http://www.w3.org/2000/svg">
		            <path d="M7 17.135H8V16.5324L7.46733 16.2509L7 17.135ZM7 21H6V22H7V21ZM7.58333 21V22H7.97803L8.26633 21.7304L7.58333 21ZM10.7917 18V17H10.397L10.1087 17.2696L10.7917 18ZM4 10.5C4 6.91015 6.91015 4 10.5 4V2C5.80558 2 2 5.80558 2 10.5H4ZM7.46733 16.2509C5.40308 15.1597 4 12.9929 4 10.5H2C2 13.7632 3.83911 16.5952 6.53267 18.019L7.46733 16.2509ZM6 17.135V21H8V17.135H6ZM7 22H7.58333V20H7V22ZM8.26633 21.7304L11.4747 18.7304L10.1087 17.2696L6.90034 20.2696L8.26633 21.7304ZM13.5 17H10.7917V19H13.5V17ZM20 10.5C20 14.0899 17.0899 17 13.5 17V19C18.1944 19 22 15.1944 22 10.5H20ZM13.5 4C17.0899 4 20 6.91015 20 10.5H22C22 5.80558 18.1944 2 13.5 2V4ZM10.5 4H13.5V2H10.5V4Z"
		                  fill="none"/>
		        </svg>
		
		        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="newsearch">
		            <circle cx="10.875" cy="10.875" r="7.875" stroke="none" stroke-width="2"/>
		            <path d="M16.5 16.5L21 21" stroke="none" stroke-width="2" stroke-linejoin="round"/>
		        </svg>
		
		        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="newaccount">
		            <path d="M11.998 13C14.7595 13 16.998 10.7614 16.998 8C16.998 5.23858 14.7595 3 11.998 3C9.23662 3 6.99805 5.23858 6.99805 8C6.99805 10.7614 9.23662 13 11.998 13Z"
		                  stroke="none" stroke-width="2" stroke-miterlimit="10"/>
		            <path fill-rule="evenodd" clip-rule="evenodd"
		                  d="M8 15C5.23858 15 3 17.2386 3 20V22H5V20C5 18.3431 6.34315 17 8 17H15.9973C17.6542 17 18.9973 18.3431 18.9973 20V22H20.9973V20C20.9973 17.2386 18.7587 15 15.9973 15H8Z"
		                  fill="none"/>
		        </svg>
		        <svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" id="downarrow"
		             xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
		            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
		                <g id="27-New-Atoms" transform="translate(-50.000000, -234.000000)">
		                    <g id="New-Arrow/Down" transform="translate(50.000000, 234.000000)">
		                        <rect id="frame-30" x="0" y="0" width="30" height="30"></rect>
		                        <path d="M9.66893667,24.6083133 C10.1911855,25.1305622 11.0331786,25.1305622 11.5554275,24.6083133 L20.4123419,15.7513989 C20.8280094,15.3357314 20.8280094,14.6642686 20.4123419,14.2486011 L11.5554275,5.39168665 C11.0331786,4.86943778 10.1911855,4.86943778 9.66893667,5.39168665 C9.1466878,5.91393552 9.1466878,6.75592859 9.66893667,7.27817746 L17.3854301,15.0053291 L9.65827853,22.7324807 C9.1466878,23.2440714 9.1466878,24.0967226 9.66893667,24.6083133 Z"
		                              class="svg-mobile-res" id="ðŸ”¹-Icon-Color" fill="#005c43"
		                              transform="translate(15.000000, 15.000000) rotate(-270.000000) translate(-15.000000, -15.000000) "></path>
		                    </g>
		                </g>
		            </g>
		        </svg>
		        <svg class="icon" aria-hidden="true" width="30px" height="30px" viewBox="0 0 30 30" version="1.1"
		             id="NewArrowleft" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
		            <g id="Find-Your-Match" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
		                <g id="27-New-Atoms" transform="translate(-170.000000, -234.000000)">
		                    <g id="New-Arrow/left" transform="translate(170.000000, 234.000000)">
		                        <rect id="frame-30" x="0" y="0" width="30" height="30"></rect>
		                        <path d="M9.66893667,24.6083133 C10.1911855,25.1305622 11.0331786,25.1305622 11.5554275,24.6083133 L20.4123419,15.7513989 C20.8280094,15.3357314 20.8280094,14.6642686 20.4123419,14.2486011 L11.5554275,5.39168665 C11.0331786,4.86943778 10.1911855,4.86943778 9.66893667,5.39168665 C9.1466878,5.91393552 9.1466878,6.75592859 9.66893667,7.27817746 L17.3854301,15.0053291 L9.65827853,22.7324807 C9.1466878,23.2440714 9.1466878,24.0967226 9.66893667,24.6083133 Z"
		                              id="ðŸ”¹-Icon-Color"
		                              fill="#005c43"
		                              transform="translate(15.000000, 15.000000) scale(-1, 1) translate(-15.000000, -15.000000) "></path>
		                    </g>
		                </g>
		            </g>
		        </svg>
		        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
		             id="new-arrowdown">
		            <path d="M4 8L12 16L20 8" stroke="#21362C" stroke-width="2"/>
		        </svg>
		        <svg width="16" height="16" viewBox="0 0 16 16" id="new-chat-with-dots" fill="none"
		             xmlns="http://www.w3.org/2000/svg">
		            <path d="M3.66667 11.4233H4.16667V11.122L3.90033 10.9813L3.66667 11.4233ZM3.66667 14H3.16667V14.5H3.66667V14ZM4.05555 14V14.5H4.2529L4.39705 14.3652L4.05555 14ZM6.19443 12V11.5H5.99708L5.85293 11.6348L6.19443 12ZM1.5 7C1.5 4.51472 3.51472 2.5 6 2.5V1.5C2.96243 1.5 0.5 3.96243 0.5 7H1.5ZM3.90033 10.9813C2.47172 10.2261 1.5 8.72613 1.5 7H0.5C0.5 9.11126 1.68974 10.9439 3.433 11.8653L3.90033 10.9813ZM3.16667 11.4233V14H4.16667V11.4233H3.16667ZM3.66667 14.5H4.05555V13.5H3.66667V14.5ZM4.39705 14.3652L6.53593 12.3652L5.85293 11.6348L3.71406 13.6348L4.39705 14.3652ZM9 11.5H6.19443V12.5H9V11.5ZM13.5 7C13.5 9.48528 11.4853 11.5 9 11.5V12.5C12.0376 12.5 14.5 10.0376 14.5 7H13.5ZM9 2.5C11.4853 2.5 13.5 4.51472 13.5 7H14.5C14.5 3.96243 12.0376 1.5 9 1.5V2.5ZM6 2.5H9V1.5H6V2.5Z"
		                  fill="#21362C"/>
		            <rect x="5" y="7" width="1" height="1" fill="#21362C"/>
		            <rect x="7" y="7" width="1" height="1" fill="#21362C"/>
		            <rect x="9" y="7" width="1" height="1" fill="#21362C"/>
		        </svg>
		        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" id="new-search-arrow-next"
		             xmlns="http://www.w3.org/2000/svg">
		            <path d="M5.5293 13L10.5293 8L5.5293 3" stroke-width="2"/>
		        </svg>
		        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="new-arrowup">
		            <path d="M20 16L12 8L4 16" stroke="#21362C" stroke-width="2"/>
		        </svg>
		        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="pin">
		            <path d="M19 10.3636C19 16.0909 12 21 12 21C12 21 5 16.0909 5 10.3636C5 8.41068 5.7375 6.53771 7.05025 5.15676C8.36301 3.77581 10.1435 3 12 3C13.8565 3 15.637 3.77581 16.9497 5.15676C18.2625 6.53771 19 8.41068 19 10.3636Z"
		                  stroke="#21362C" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/>
		            <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
		                  stroke="#21362C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		        </svg>
		    </div>
		    
		    <main class="page" style="flex: 1">
						<div class="loading" style="display: flex; align-items: center; justify-content: center; flex: 1">
								<div class="icon --spinning"></div>
								<div class="text">Loading...</div>
						</div>		    
				</main>
		</body>
	</html>
`;
