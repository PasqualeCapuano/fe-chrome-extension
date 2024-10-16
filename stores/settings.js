import { defineStore } from 'pinia';

export const settingsStore = defineStore('settings', {
    state: () => ({
        appName: '- Front-End tools -',
        appSubtitle: 'The Chrome extension for Front-End developers',
        modeValue: true,
        mode: 'light'
    }),
    actions: {
        setName(x) {
            this.appName = x;
        },
        setLanguage(x) {
            this.language = x;
        },
        setModeValue(x) {
            this.modeValue = x;
        },
        setMode(x) {
            this.mode = x;
        }

    },
});