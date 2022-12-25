import {createI18n} from "vue-i18n";
import languages from "./assets/js/languages"

const i18n = new createI18n({
    locale: 'en',
    globalInjection: true,
    messages: languages,
})
export default i18n



