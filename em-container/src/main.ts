import './style.css'
import 'leaflet/dist/leaflet.css';
// Remote component CSS
import('detailApp/remoteStyles');

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

const app = createApp(App)


app.use(router)
app.use(store)

app.mount('#app')
