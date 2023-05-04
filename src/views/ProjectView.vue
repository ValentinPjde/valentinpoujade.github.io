<template>
    
    <main id="main">
        <section id="project" class="presentation w-100 center">
            <div class="section-black">
                <router-link class="go-back" to="/">Retour</router-link>
                <div class="inner">
                    <div class="container">
                        <h3 class="subtitle">{{ this.project.title }}</h3>
                        <h5>{{ this.project.description }}</h5>
                    </div>
                </div>
            </div>
            <div class="projet-global-wrapper">
                <img id="project-image" v-bind:src="this.project.image"/>
            </div>
        </section>
        <section id="projet-description" class="container short">

            <h2>Contexte</h2>
            <p>{{ this.project.contexte }}</p>
            <h2>Mise en oeuvre</h2>
            <p>{{ this.project.miseeoeuvre }}</p>
            <h2>Ma vision</h2>
            <p>{{ this.project.experience }}</p>
        </section>
    </main>
</template>

<script>
// @ is an alias to /src
import '@/assets/css/project.css';
import db from "@/assets/js/db.json";
export default {
    name: "ProjectView",
    components: {

    },  
    data() {
        console.log("Init ProjectView");
        return {
            project: {},
            database: db,
            router: this.$route.params.id,
        }
    },
    mounted(){
        this.database.projects.forEach(element => {
                console.log("router " + this.router);
                if(this.router == element.id){
                    this.project = JSON.parse(JSON.stringify(element))
                    console.log(this.project);
                }
            });
    }
}
</script>