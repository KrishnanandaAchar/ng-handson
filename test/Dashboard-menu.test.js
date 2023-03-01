import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/dashboard/Dashboard-menu.js';

describe('dashboard-menu', () => {
    let el;

    beforeEach('Render Dashboard Menu', async () => {
        el = await fixture(html`<dashboard-menu></dashboard-menu>`);
        expect(el).to.exist;
    });

    it('Render Dashboard menu flow', async () => {
        const stubSetTypeInLs = stub(el, '_setTypeInLS');
        // const stubNavigateToDetails = stub(el, 'navigateToDetails');
        el.requestUpdate();
        await  el.updateComplete;
        el.shadowRoot.querySelector('button').click();
        expect(stubSetTypeInLs).to.have.callCount(1);
        // expect(stubNavigateToDetails).to.have.callCount(1);
    });
});