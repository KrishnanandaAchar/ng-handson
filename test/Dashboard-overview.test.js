import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/dashboard/Dashboard-overview.js';

describe('Dashboard overview', () => {

    it('Render Dashboard', async () => {
        const el = fixture(html`<dashboard-overview></dashboard-overview>`);
        expect(el).to.exist;
    });

    
});