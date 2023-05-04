/**
 * Calcul la position de l'élement par rapport au haut de la page
 * @param {HTMLElement} element 
 * @return {number}
 */
function offsetTop(element, acc = 0) {
    if(element.offsetParent){
        return offsetTop(element.offsetParent, acc + element.offsetTop)
    }
    return acc + element.offsetTop;
}
/**
 * @property {HTMLElement} element
 * @property {{y: number, variable: boolean}} element
 */
class Parallax {
    /**
     * 
     * @param {HTMLElement} element 
     */
    constructor(element){
        document.addEventListener("DOMContentLoaded",(e) => {
            console.log("Parallax instancied" , e);
            this.element = element;
            this.options = this.parseAttribute();
            this.onScroll = this.onScroll.bind(this);
            this.onIntersection = this.onIntersection.bind(this);
            this.onResize = this.onResize.bind(this);
            this.elementY = offsetTop(this.element) + this.element.offsetHeight / 2;
            // console.log(`change elementY to ${offsetTop(this.element)} + ${this.element.offsetHeight} / 2`);
            const observer = new IntersectionObserver(this.onIntersection);
            observer.observe(element);
            this.onScroll();
        })
        
    }

    parseAttribute (){
        const defaultOptions = {
            y: 0.2,
            variable: false
        }
        if(this.element.dataset.parallax.startsWith('{')) {
            return {...defaultOptions, 
                ...JSON.parse(this.element.dataset.parallax)}
        }
        return {...defaultOptions, y: parseFloat(this.element.dataset.parallax)}
    }

    /**
     * 
     * @param {IntersectionObserverEntry[]} entries 
     */
    onIntersection(entries) {
        for(const entry of entries) {
            if(entry.isIntersecting) {
                document.addEventListener('scroll',this.onScroll)
                window.addEventListener('resize', this.onResize)
                this.elementY = offsetTop(this.element) + this.element.offsetHeight / 2;
                // console.log(`change from intersection elementY to ${offsetTop(this.element)} + ${this.element.offsetHeight} / 2`);
            } else {
                document.removeEventListener('scroll',this.onScroll)
                window.removeEventListener('resize', this.onResize)
            }
        }
    }

    onResize() {
        // console.log("RESIZE");
        this.elementY = offsetTop(this.element) + this.element.offsetHeight / 2;
        this.onScroll();
    }

    onScroll() {
        window.requestAnimationFrame(() => {
            const screenY = window.scrollY + window.innerHeight / 2;
            const diffY = this.elementY - screenY;
            // console.log(this.elementY +"-"+ screenY);
            const translateY = diffY * -1 * this.options.y;
            // console.log(`OnScroll for ${this.element.src} called with ${this.elementY} ${screenY} `);
            if(this.options.variable){
                this.element.style.setProperty(
                    "--parallaxY",
                    `${translateY}px`
                );
            }
            else {
                let transform = "";
                if(this.options.y){
                    console.log("translateY(${translateY}px)");
                    transform = `translateY(${translateY}px)`;
                }
                if(this.options.r) {
                    transform += ` rotate(${diffY * this.options.r}deg)`
                }
                console.log("transform : " + transform + " for " + this.element.id);
                this.element.style.setProperty(
                    'transform', 
                    transform
                );
            }
            
        })
        
    }

    /**
     * @returns {Parallax[]}
     */
    static bind() {
        Array.from(document.querySelectorAll('[data-parallax]')).map((element)=>{
            return new Parallax(element)
        })
    }
}

Parallax.bind();