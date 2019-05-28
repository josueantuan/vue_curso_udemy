import namespace from '../utils/namespace';

export default namespace('global',{

    actions: [
        'changeLanguage'
    ],
    getters: [
        'processing',
        'language'
    ],
    mutations: [
        'starProcessing',
        'stopProcessing',
        'setLanguage'
    ]
})