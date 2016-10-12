import App from './app';

describe('app', () => {

    it('App to be defined', () => {
        expect(App).toBeDefined();
    });

    let app = new App();

    it('instance to be defined', () => {
        expect(app).toBeDefined();
    });
});