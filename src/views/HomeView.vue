<template>
    <div>
        <!-- <img id="logo-header" data-parallax='{"y": 0,"r": -0.83, "variable": false}' width="50px" src="../assets/img/logo/logo_black.png" />  -->
        <header>
            <div id="wrapper" data-parallax='{"y": 0.5, "variable": false}'>
                <!-- <h1>Valentin, développeur fullstack freelance</h1> -->
                <h1>Valentin, développeur informatique indépendant</h1>
                <p class="description">
                    <span></span>
                    <span>développeur web.</span>
                    <span>développeur logiciel.</span>
                    <span>devops.</span>
                    <span>database manager.</span>
                </p>
            </div>
            <div id="wrapper-img">
                <div class="eclipse-part">
                    <img id="lune" class="eclipse_line" width="40%" src="../assets/img/planets/3_resize.png"
                        style="right:-15%;top:-20%;z-index: 2;"
                        data-parallax='{"y": -0.25, "r":0.1, "variable": false}' />
                    <img id="planete" class="eclipse_line" width="15%" src="../assets/img/planets/7.png"
                        style="right:35%;bottom:20%;z-index: 1;" data-parallax='{"y":-0.85, "variable": false}' />
                    <img id="big_planete" class="eclipse_line" width="47%" src="../assets/img/planets/1.png"
                        style="right:3%;bottom:-40%;z-index: 3;"
                        data-parallax='{"y": 0.35, "r":0.025,"variable": false}' />
                    <!-- <img id="eclipse" src="./img/Ellipse2.png" /> 
                    <img id="eclipse_line" src="./img/Ellipse3.png" /> -->
                    <!-- <img id="eclipse_line" src="./img/61.png" /> -->
                </div>
                <div class="img-part">
                    <img id="vector" width="35%" style="right:10%;z-index: 10"
                        data-parallax='{"y": 0.45, "r":0.005, "variable": false}' src="../assets/img/25_low.png" />
                </div>
            </div>
        </header>
        <div class="custom-shape-divider-top-1650211613">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                preserveAspectRatio="none">
                <path
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    class="shape-fill"></path>
            </svg>
        </div>
        <main id="main">

            <section id="apropos" class="presentation center">
                <div class="center">
                    <span class="small">A propos</span>
                    <!-- <h3>Je suis <span>Valentin</span></h3>
                    <h3>Dev <span>Logiciel et Web</span></h3> -->
                    <h3 class="subtitle">
                        Basé à <span>Marseille</span>, je suis <span>développeur</span> web et logiciel.
                    </h3>
                    <p>Bonjour ! Mon nom est Valentin Poujade. Je suis développeur logiciel, web, je suis passionné et
                        dédié par mon travail.</p>
                    <p>
                        Avec 5 expériences au sein d'une entreprise en tant que lead développeur d'un projet de
                        monitoring énergétique, j'ai
                        pu acquérir des compétences et des connaissances nécessaires pour faire de votre projet une
                        réussite.
                    </p>
                </div>
            </section>
            <section id="cible" class="presentation-black w-100 center">
                <div class="inner fade">
                    <div>
                        <h1>Prenons rendez-vous !</h1>
                        <h3>J'accompagne les entreprises de toutes tailles dans leurs transformations digitales et leur
                            projet d'entreprises.</h3>
                    </div>
                    <a class="link text-center" href="#contact">Me contacter</a>
                </div>
            </section>

            <section id="competence" class="presentation fade">
                <div>
                    <span class="small">Mes compétences</span><br />
                    <h3 class="subtitle">
                        Vous <span>imaginez</span>
                    </h3>
                    <h3 class="subtitle">
                        Je <span>réalise</span>
                    </h3>
                    <p>Je réalise vos projets basés sur un modèle au visuel sophistiqué, une technologie fonctionnelle,
                        et une méthodologie agile.
                        La livraison finale est une solution clé en main, et la qualité de service est garantie.
                    </p>
                </div>
                <!-- <div class="competences-list"></div> -->
                <!-- <div class="content"></div> -->
                <div class="competence-wrapper">
                    <div class="progress-bar">
                        <h3>90%</h3>
                        <div class="linear-progress">
                        <div class="current-progression linear-progress-90">Développement web</div>
                        <span>Créer une application accessible depuis le web pour booster vos projets</span>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <h3>85%</h3>
                        <div class="linear-progress">
                        <div class="current-progression linear-progress-85">Développement logiciel</div>
                        <span>Créer une architecture logicielle pour des besoins spécifiques</span>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <h3>80%</h3>
                        <div class="linear-progress">
                        <div class="current-progression linear-progress-80">Gestion de projet</div>
                        <span>Un écosystème complet pour faciliter vos tâches</span>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <h3>80%</h3>
                        <div class="linear-progress">
                        <div class="current-progression linear-progress-80">UX & UI Design</div>
                        <span>Une recherche graphique importante quelques soit la technologie</span>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <h3>80%</h3>
                        <div class="linear-progress">
                        <div class="current-progression linear-progress-80">SEO</div>
                        <span>Gagnez en visibilité sur votre moteur de recherche favoris</span>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <h3>80%</h3>
                        <div class="linear-progress">
                        <div class="current-progression linear-progress-80">Être-humain</div>
                        <span>Une analyse de vos besoins poussée avant chaques projets</span>
                        </div>
                    </div>
                    <!-- <ul>
                        <li>Développement web
                            <ul>
                                <li>Créer une application accessible depuis le web pour booster vos projets</li>
                            </ul>
                        </li>
                        <li>Développement logiciel
                            <ul>
                                <li>Créer une architecture logicielle pour des besoins spécifiques</li>
                            </ul>
                        </li>
                        <li>Gestion de projet
                            <ul>
                                <li>Un écosystème complet pour faciliter vos tâches</li>
                            </ul>
                        </li>
                        <li>UX & UI Design
                            <ul>
                                <li>Une recherche graphique importante quelques soit la technologie</li>
                            </ul>
                        </li>
                        <li>SEO
                            <ul>
                                <li>Gagnez en visibilité sur votre moteur de recherche favoris</li>
                            </ul>
                        </li>
                        <li>Être-humain
                            <ul>
                                <li>Une analyse de vos besoins poussée avant chaques projets</li>
                            </ul>
                        </li>
                    </ul> -->
                </div>
                <!-- <div class="competence-wrapper">
                    <div class="competence-item">
                        <div class="competence-item-content">
                            <h2>Développement web</h2>
                            <p>Créer une application accessible depuis le web pour booster vos projets</p>
                        </div>
                        
                        <div class="competence-item-content">
                            <h2>Développement logiciel</h2>
                            <p>Créer une architecture logicielle pour des besoins spécifiques</p>
                        </div>
                        <div class="competence-item-content">
                            <h2>Gestion de projet</h2>
                            <p>Un écosystème complet pour faciliter vos tâches</p>
                        </div>
                        <div class="competence-item-content">
                            <h2>UX & UI Design</h2>
                            <p>Une recherche graphique importante quelques soit la technologie</p>
                        </div>
                        <div class="competence-item-content">
                            <h2>SEO</h2>
                            <p>Gagnez en visibilité sur votre moteur de recherche favoris</p>
                        </div>
                        <div class="competence-item-content">
                            <h2>Être-humain</h2>
                            <p>Une analyse de vos besoins poussée avant chaques projets</p>
                        </div>
                    </div>
                    
                </div> -->
            </section>
            <section id="projets" class="presentation w-100 center">
                <div class="section-black">
                    <div class="inner">
                        <div class="container">
                             <span class="small">Projets selectionnés</span>
                            <!-- <h3>Je suis <span>Valentin</span></h3>
                            <h3>Dev <span>Logiciel et Web</span></h3> -->
                            <h3 class="subtitle">
                                Quelques exemples de livraisons et projets personnels
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="projet-global-wrapper">
                    
                    <!-- <span class="small">Projets selectionnés</span> -->
                    <!-- <h3>Je suis <span>Valentin</span></h3>
                    <h3>Dev <span>Logiciel et Web</span></h3> -->
                    <!-- <h3 class="subtitle">
                        Quelques exemples de livraisons et projets personnels
                    </h3> -->
                    <!-- <div v-for="project in projects" :key="project.title" :class="'preview ' + project.category">
                        <img :src="project.image" />
                    </div> -->
                    <div class="container">
                        <div class="category-nav center">
                                <label>
                                    <input type="radio" v-model="category" value=""> Tous
                                </label>
                                <label>
                                    <input type="radio" v-model="category" value="web"> Développement Web
                                </label>
                                <label>
                                    <input type="radio" v-model="category" value="software"> Développement Logiciel
                                </label>
                            </div>
                        <transition-group appear tag="div" class="gallery">
                            <a :href="project.link" target="_blank" class="textfield" v-for="project in filterByCategory" :key="project.title">
                                <div class="photoframe"
                                    :style="{ backgroundImage: 'url('+project.image+')'}" href="#">
                                <p class="mobile-legende">{{project.title}}</p>
                                </div>
                                <figcaption>
                                        <h3>{{project.title}}</h3>
                                    <p>{{project.description}}</p>
                                </figcaption>
                            </a>
                        </transition-group>
                    </div>
                    
                    <!-- <ul class="projet-wrapper">
                        <li class="projet-item fade">
                            <div class="projet-wrapper-content">
                                <div>
                                    <p class="projet-type">Développement Web</p>
                                    <h3 class="projet-titre">
                                        <a href="">Interface de supervision énergétique</a>
                                    </h3>
                                    <div class="projet-description">
                                        <p>
                                            Interface web permettant de suivre l'évolution de la consommation d'énergie d'un bâtiment et l'automatisation des
                                            actions nécessaires pour réduire cette consommation. Elle as été portée sur une <a href="https://demofr.wesbyenergies.online/">plateforme</a> 
                                            distante permettant le contrôle de plusieurs sites synchronisés en une seule interface.
                                        </p>
                                    </div>
                                    <ul class="projet-competences-list">
                                        <li>HTML/CSS</li>
                                        <li>PHP</li>
                                        <li>MySQL</li>
                                        <li>Docker</li>
                                    </ul>
                                    <div class="projet-liens"></div>
                                </div>
                            </div>
                            <div class="projet-wrapper-image">
                                <a href="#">
                                    <div class="projet-image-filter">
                                        <img src="../assets/img/wescan.png" alt class="projet-image" />
                                    </div>
                                </a>
                            </div>
                        </li>
                        
                        <li class="projet-item fade">
                            <div class="projet-wrapper-content">
                                <div>
                                    <p class="projet-type">Développement Web</p>
                                    <h3 class="projet-titre">
                                        <a href="">Reproduction "Space Invader" de Gérard Bakner</a>
                                    </h3>
                                    <div class="projet-description">
                                        <p>
                                            Reproduction d'une oeuvre réalisée par Gérard Bakner. Le but est de récréer son oeuvre en utilisant uniquement du code HTML et CSS.
                                            Elle permet de mettre en avant son oeuvre de manière numérique.
                                        </p>
                                    </div>
                                    <ul class="projet-competences-list">
                                        <li>HTML/CSS</li>
                                        <li>JavaScript</li>
                                    </ul>
                                    <div class="projet-liens"></div>
                                </div>
                            </div>
                            <div class="projet-wrapper-image">
                                <a href="#">
                                    <div class="projet-image-filter">
                                        <img src="../assets/img/invader.png" alt class="projet-image" />
                                    </div>
                                </a>
                            </div>
                        </li>
                        
                        <li class="projet-item fade">
                            <div class="projet-wrapper-content">
                                <div>
                                    <p class="projet-type">Développment logiciel professionnel</p>
                                    <h3 class="projet-titre">
                                        <a href="">Programme embarqué multi-protocoles</a>
                                    </h3>
                                    <div class="projet-description">
                                        <p>
                                            Logiciel embarqué permettant l'enregistrement des mesures visualisable par l'interface "Wescan" pour la
                                            supervision des énergies. Il permet de récupérer les mesures en temps réel et de les enregistrer dans un
                                            système de base de données. Il réalise également la synchronisation de ces données avec un serveur distant.
                                        </p>
                                    </div>
                                    <ul class="projet-competences-list">
                                        <li>C#</li>
                                        <li>MySQL</li>
                                        <li>Protocoles de communications IOT</li>
                                    </ul>
                                    <div class="projet-liens"></div>
                                </div>
                            </div>
                            <div class="projet-wrapper-image">
                                <a href="#">
                                    <div class="projet-image-filter">
                                        <img src="../assets/img/iot.jpg" alt class="projet-image" />
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul> -->
                </div>

            </section>

            <section id="services" class="presentation fade">
                <div class="services-cards-list">
                    <div class="services-card-description">
                        <div class="services-card-content">
                            <div class="services-card-text">
                               <span class="small">Ce que je fais</span><br />
                                <h3 class="subtitle">
                                    Mes prestations
                                </h3>
                                <p>Je réalise vos projets basés sur un modèle au visuel sophistiqué, une technologie fonctionnelle,
                                    et une méthodologie agile.
                                    La livraison finale est une solution clé en main, et la qualité de service est garantie.
                                </p>
                            </div>
                        </div>
                    </div>
                    <a href="" class="services-card">
                        <div class="services-card-image">
                            <img src="https://img.icons8.com/dotty/80/000000/internet-browser.png" />
                        </div>
                        <div class="services-card-content">
                            <h3 class="services-card-title">
                               Développement de site web
                            </h3>
                            <span class="price">
                                A partir de
                                <span class="price-value">0€</span>
                            </span>
                            <p class="services-card-description">
                                Création de sites web dynamiques, avec un design ergonomique pour la mise en avant de votre activité, la réalisation de sites e-commerce, etc.
                            </p>
                        </div>
                    </a>
                    <a href="" class="services-card">
                        <div class="services-card-image">
                            <img src="https://img.icons8.com/dotty/80/000000/design.png" />
                        </div>
                        <div class="services-card-content">
                            <h3 class="services-card-title">
                                Plateforme sur-mesure
                            </h3>
                            <span class="price">
                                A partir de
                                <span class="price-value">0€</span>
                            </span>
                            <p class="services-card-description">
                                Développement d'une plateforme sur-mesure, pour répondre à une problématique que vous faites façon et que vous souhaitez automatiser pour simplifier votre quotidien.
                            </p>
                        </div>
                    </a> 
                    <a href="" class="services-card">
                        <div class="services-card-image">
                            <img src="https://img.icons8.com/dotty/80/000000/web-design.png" />
                        </div>
                        <div class="services-card-content">
                            <h3 class="services-card-title">
                               Conception graphique & Web design
                            </h3>
                            <span class="price">
                                A partir de
                                <span class="price-value">0€</span>
                            </span>
                            <p class="services-card-description">
                                Conception d'un design graphique pour votre site web, ou pour votre application mobile.
                            </p>
                        </div>
                    </a>
                    <a href="" class="services-card">
                        <div class="services-card-image">
                             <img src="https://img.icons8.com/dotty/80/000000/database.png" />
                        </div>
                        <div class="services-card-content">
                            <h3 class="services-card-title">
                                Développement logiciel et base de données
                            </h3>
                            <span class="price">
                                A partir de
                                <span class="price-value">0€</span>
                            </span>
                            <p class="services-card-description">
                                Développement d'une architecture logicielle et de base de données pour votre projet.
                            </p>
                        </div>
                    </a>
                    <a href="" class="services-card">
                        <div class="services-card-image">
                            <img src="https://img.icons8.com/dotty/80/000000/developer.png" />
                        </div>
                        <div class="services-card-content">
                            <h3 class="services-card-title">
                                Développement et intégration spécifiques
                            </h3>
                            <span class="price">
                                A partir de
                                <span class="price-value">0€</span>
                            </span>
                            <p class="services-card-description">
                                Développement et intégration dans un projet déjà existant, ou d'une nouvelle application. Je vous propose de développer votre projet et fonctionnalités sur mesure.
                            </p>
                        </div>
                    </a>
                    <a href="" class="services-card">
                        <div class="services-card-image">
                            <img src="https://img.icons8.com/dotty/80/000000/search-bar.png" />
                        </div>
                        <div class="services-card-content">
                            <h3 class="services-card-title">
                                Référencement naturel (SEO)
                            </h3>
                            <span class="price">
                                A partir de
                                <span class="price-value">0€</span>
                            </span>
                            <p class="services-card-description">
                                Je vous accompagne dans la réalisation de la stratégie de référencement de votre site web, pour optimiser votre positionnement sur les moteurs de recherche.
                            </p>
                        </div>
                    </a>
                    <a href="" class="services-card">
                        <div class="services-card-image">
                            <img src="https://img.icons8.com/dotty/80/000000/ftp.png" />
                        </div>
                        <div class="services-card-content">
                            <h3 class="services-card-title">
                                Hébergement et DevOps
                            </h3>
                            <span class="price">
                                A partir de
                                <span class="price-value">0€</span>
                            </span>
                            <p class="services-card-description">
                                Proposition d'hébergement et d'infrastructure de développement pour la mise en production de vos projets.
                            </p>
                        </div>
                    </a>
                    <a href="" class="services-card">
                        <div class="services-card-image">
                             <img src="https://img.icons8.com/dotty/80/000000/wrench.png" />
                        </div>
                        <div class="services-card-content">
                            <h3 class="services-card-title">
                                Maintenance
                            </h3>
                            <span class="price">
                                A partir de
                                <span class="price-value">0€</span>
                            </span>
                            <p class="services-card-description">
                                Gestion de maintenance de votre site web, de votre application mobile, de votre base de données, de votre infrastructure.
                            </p>
                        </div>
                    </a>
                </div>

                <!-- <div class="inner services-wrapper">
                    <div class="services-list">
                        <img src="https://img.icons8.com/dotty/80/000000/internet-browser.png" />
                        <img src="https://img.icons8.com/dotty/80/000000/design.png" />
                        <img src="https://img.icons8.com/dotty/80/000000/web-design.png" />
                        <img src="https://img.icons8.com/dotty/80/000000/database.png" />
                    </div>
                    <div class="services-list">
                        <p>Développement de site web</p>
                        <p>Plateforme sur-mesure</p>
                        <p>Conception graphique & Web design</p>
                        <p>Développement logiciel et base de données</p>
                    </div>
                    <div class="vertical-r"></div>
                    <div class="services-list">
                        <p>Développement et intégration spécifiques</p>
                        <p>Référencement naturel (SEO)</p>
                        <p>Hébergement et DevOps</p>
                        <p>Maintenance</p>
                    </div>
                    <div class="services-list">
                        <img src="https://img.icons8.com/dotty/80/000000/developer.png" />
                        <img src="https://img.icons8.com/dotty/80/000000/search-bar.png" />
                        <img src="https://img.icons8.com/dotty/80/000000/ftp.png" />
                        <img src="https://img.icons8.com/dotty/80/000000/wrench.png" />
                    </div>
                </div> -->
            </section>
            <section id="contact" class="presentation presentation-black w-100 center">
                <div class="contact-wrapper">
                    <span class="small">Me contacter (7j/7)</span>
                    <h3 class="subtitle">
                        Un premier entretien pour cibler vos besoins
                    </h3>
                    <div class="panel-content">
                        <div class="form">
                            <div class="input-group">
                                <div class="group">
                                    <input type="text" required>
                                    <span class="highlight"></span>
                                    <label>Votre nom</label>
                                </div>
                                <div class="group">
                                    <input type="text" required>
                                    <span class="highlight"></span>
                                    <label>Votre e-mail</label>
                                </div>
                            </div>
                            <div class="group">
                                <textarea type="text" required></textarea>
                                <span class="highlight"></span>
                                <label>Votre message</label>
                            </div>
                            <a class="send-btn">Envoyer</a>
                        </div>
                    </div>
                </div>

            </section>
            <section id="information" class="presentation fade center">
                <div class="timeline-page">
                    <div class="title">
                        <span class="small">N'hésitez plus</span><br/>
                        <h3 class="subtitle">
                            Un contact en continu
                        </h3>
                    </div>
                    <div class="timeline">
                        <div class="timeline-box">
                            <div class="timeline-box-icon">
                                <!-- 📝 -->
                                <img src="https://img.icons8.com/dotty/80/000000/test-passed.png" />
                            </div>
                            <div class="timeline-box-stepstatus checked">
                                <div class="check-circle-wrapper first">
                                    <div class="check-circle">
                                        <!-- ✓ -->
                                        1
                                    </div>
                                </div>
                                <div class="step-connection"></div>
                            </div>
                            <div class="timeline-box-stepname">
                                Analyse
                            </div>
                        </div>
                        <div class="timeline-box">
                            <div class="timeline-box-icon">
                                <!-- 🎨 -->
                                <img src="https://img.icons8.com/dotty/80/000000/create-new.png" />
                                <!-- ✂️ -->
                            </div>
                            <div class="timeline-box-stepstatus checked">
                                <div class="step-connection"></div>
                                <div class="check-circle-wrapper">
                                    <div class="check-circle">
                                        <!-- ✓ -->
                                        2
                                    </div>
                                </div>
                                <div class="step-connection"></div>
                            </div>
                            <div class="timeline-box-stepname">
                                Design
                            </div>
                        </div>
                        <div class="timeline-box">
                            <div class="timeline-box-icon">
                                <!-- 👨‍💻 -->
                                <img src="https://img.icons8.com/dotty/80/000000/code--v1.png" />
                            </div>
                            <div class="timeline-box-stepstatus checked">
                                <div class="step-connection"></div>
                                <div class="check-circle-wrapper">
                                    <div class="check-circle">
                                        <!-- ✓ -->
                                        3
                                    </div>
                                </div>
                                <div class="step-connection"></div>
                            </div>
                            <div class="timeline-box-stepname">
                                Intégration
                            </div>
                        </div>
                        <div class="timeline-box">
                            <div class="timeline-box-icon">
                                <!-- 👾 -->
                                <img src="https://img.icons8.com/dotty/80/000000/window-bug.png" />
                            </div>
                            <div class="timeline-box-stepstatus checked">
                                <div class="step-connection gradient-left"></div>
                                <div class="check-circle-wrapper">
                                    <div class="check-circle">
                                        <!-- ✓ -->
                                        4
                                    </div>
                                </div>
                                <div class="step-connection"></div>
                            </div>
                            <div class="timeline-box-stepname">
                                Tests
                            </div>
                        </div>
                        <div class="timeline-box">
                            <div class="timeline-box-icon">
                                <!-- 📦 -->
                                <img src="https://img.icons8.com/dotty/80/000000/delivery.png" />
                            </div>
                            <div class="timeline-box-stepstatus checked">
                                <div class="step-connection"></div>
                                <div class="check-circle-wrapper last">
                                    <div class="check-circle">
                                        <!-- ✓ -->
                                        5
                                    </div>
                                </div>
                            </div>
                            <div class="timeline-box-stepname">
                                Livraison
                            </div>
                        </div>
                    </div>

                </div>
                <!-- <ul>
                    <li>Maintenance évolutive</li>
                    <li>Économique</li>
                    <li>Réduction des coûts</li>
                    <li>Augmenter les revenus</li>
                    <li>Adaptés aux besoins de votre entreprises</li>
                    <li></li>
                </ul> -->
            </section>

        </main>
    </div>

</template>

<script>
// @ is an alias to /src
import db from "@/assets/js/db.json";
export default {
    name: 'HomeView',
    data() {
        return {
            category: '',
            database: db,
            projects: []
        }
    },
    computed: {
        filterByCategory: function () {
            return this.database.projects.filter(
                (project) => !project.category.indexOf(this.category)
            );
        }
    }
}
</script>
<style scoped>

.gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    grid-gap: 2vw;
    padding: 40px;
    /* min-width: 100%; */
    width: calc(100% - 13%);
    width: -webkit-calc(100% - 13%);
    width: -moz-calc(100% - 13%);
    max-width: 2000px;
    margin: 0 auto;
    transition: transform 5s;
}

/* 字的區塊+變透明der */
.textfield {
    position: relative;
    text-align: center;
    cursor: pointer;
    /* background: rgba(0, 0, 0, 0.5); */
    border-radius: 10px;
}

.textfield figcaption {
    position: absolute;
    padding: 10px;
    top: 50%;
    left: 50%;
    width: 80%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    opacity: 0;
    z-index: 1;
    transition: all .3s ease;
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-delay: 0s;
    opacity: 0;
    text-align: center;
    color: black;
    background: #cc753ed9;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;
}

.textfield:hover figcaption {
    transform: all .3s ease;
    opacity: 1;
}

/* 框框+經過變透明der */
.photoframe {
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 100%;
    place-items: center;
    cursor: pointer;
    opacity: 1;
    transition: all .3s ease;
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-delay: 0s;
    backface-visibility: hidden;
    border-radius: 10px;
}

.photoframe::after {
    content: "";
    display: inline-block;
    padding-bottom: 100%;
}

.textfield:hover .photoframe {
    opacity: 0.3;
}

/* Animation */
.v-enter-active,
.v-enter-active,
.v-leave-active,
.v-move {
  transition-property: transform, opacity;
  transition-duration: .5s;
  transition-delay: 0ms;
}
.v-enter-active {
  opacity: 1;
  /* transform: translateY(20px); */
  transform: translate3d(30px, 0px, 0px);	
}
.v-enter-to,
.v-leave-active {
  opacity: 1;
  /* transform: translateY(0); */
  transform: translate3d(0px, 0px, 0px);
}
.v-leave-to {
  opacity: 0;
  /* transform: translateY(20px); */
  transform: translate3d(50%, 0px, 0px);
}
.linear-progress-100{ width: 100%; } .linear-progress-90 { width: 90%; } .linear-progress-85 { width: 85%; } .linear-progress-80 { width: 80% } .linear-progress-70 { width: 70% }
.current-progression {
  height: 4px;
  background-color: var(--orange);
}
.linear-progress {
    background-color: #dedede;
    height: 4px;
    width: 100%;
    margin-bottom: 35px;
}
.linear-progress span {
    font-size: 11px;
    font-weight: 500;
    margin: 12px;
}
.progress-bar h3 {
    font-size: 22px !important;
    
}
</style>