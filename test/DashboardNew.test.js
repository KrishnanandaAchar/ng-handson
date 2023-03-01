import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/dashboard/Dashboard-new.js';

describe('dashboard-new', () => {
    let el;

    beforeEach('Render Dashboard New', async () => {
        el = await fixture(html`<dashboard-new></dashboard-new>`);
        expect(el).to.exist;
    });

    it('check data', async () => {
        expect(el.data.length).to.equal(4);
    });

    it('call function to render data', async () => {
        const stubRenderDashboard = stub(el, '_renderdashboardcard');
        el.requestUpdate();
        await el.updateComplete;
        expect(stubRenderDashboard).to.have.callCount(1);
    });
});