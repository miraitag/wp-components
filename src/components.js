import './components/configuration.pcss';
import './components/variables.pcss';
/* ATOMS */
import './components/atoms/cbx-bullet-list/style.pcss';
import './components/atoms/cbx-button/style.pcss';
import './components/atoms/cbx-button-boolean/style.pcss';
import './components/atoms/cbx-category/style.pcss';
import './components/atoms/cbx-headline-hero/style.pcss';
import './components/atoms/cbx-headline-section/style.pcss';
import './components/atoms/cbx-hightlight/style.pcss';
import './components/atoms/cbx-icon/style.pcss';
import './components/atoms/cbx-img/style.pcss';
import './components/atoms/cbx-legal/style.pcss';
import './components/atoms/cbx-link/style.pcss';
import './components/atoms/cbx-list/style.pcss';
import './components/atoms/cbx-sub-category/style.pcss';
import './components/atoms/cbx-sub-headline/style.pcss';
import './components/atoms/cbx-sub-text/style.pcss';
import './components/atoms/cbx-sub-title/style.pcss';
import './components/atoms/cbx-text/style.pcss';
import './components/atoms/cbx-title/style.pcss';

/* CONTAINERS */
import './components/containers/comparador/style.pcss';

/* MOLECULES */
import './components/molecules/cbx-apps/style.pcss';
import './components/molecules/cbx-apps-promo/style.pcss';
import './components/molecules/cbx-btn-back/style.pcss';
import './components/molecules/cbx-card/style.pcss';
import './components/molecules/cbx-card-list/style.pcss';
import './components/molecules/cbx-check/style.pcss';
import './components/molecules/cbx-compare-modal/style.pcss';
import './components/molecules/cbx-cookies/style.pcss';
import './components/molecules/cbx-credit-card/style.pcss';
import './components/molecules/cbx-economia/style.pcss';
import './components/molecules/cbx-exit/style.pcss';
import './components/molecules/cbx-faqs/style.pcss';
import './components/molecules/cbx-footer/style.pcss';
import './components/molecules/cbx-grid-eyf/style.pcss';
import './components/molecules/cbx-header/style.pcss';
import './components/molecules/cbx-hero/style.pcss';
import './components/molecules/cbx-info/style.pcss';
import './components/molecules/cbx-list-square/style.pcss';
import './components/molecules/cbx-modal/style.pcss';
import './components/molecules/cbx-perfilador/style.pcss';
import './components/molecules/cbx-promociones/style.pcss';
import './components/molecules/cbx-side-menu/style.pcss';
import './components/molecules/cbx-slick/style.pcss';
import './components/molecules/cbx-social-info/style.pcss';
import './components/molecules/cbx-steps/style.pcss';
import './components/molecules/cbx-submenu/style.pcss';
import './components/molecules/cbx-tabs/style.pcss';
import './components/molecules/cbx-tip/style.pcss';
import './components/molecules/cbx-wrapper/style.pcss';

class Hero{
    constructor(name){
        this.name = name
    }

    get fullName(){
        return this.name;
    }
}

const hero = new Hero('Oscar');
console.log( hero.fullName);

