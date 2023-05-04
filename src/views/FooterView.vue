<template>
    <footer>
        <div class="footer-content">
            <div class="footer-location">
                <h3>Localisation</h3>
                <p>France</p>
                <p>Marseille, Bouches-du-Rhône 13000</p>
            </div>
            <div class="footer-links">
                <h3>Liens</h3>
                <div class="footer-links-list">
                    <a href="https://github.com/ValentinPjde" target="_blank"><img src="/assets/img/logo/footer-github.png"/></a>
                    <a href="https://www.linkedin.com/in/valentin-poujade-119445167" target="_blank"><img src="/assets/img/logo/footer-linkedin.png"/></a>
                </div>
            </div>
            <div class="footer-about">
                <h3>A propos</h3>
                <p>Ce portfolio est développé par mes soins en Vue.Js sans module graphique et déployé par Docker</p>
            </div>
        </div>
        <p class="text-center">Copyright © Valentin POUJADE 2022</p>
    </footer>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'FooterView'
}
</script>