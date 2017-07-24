import * as appInsights from 'applicationinsights';

export class ApplicationInsightsService {
    client: Client;

    constructor(appInsightKey: string) {
        const insightInstance = (appInsights)
            .setup(appInsightKey)
            .start();

        this.client = insightInstance.getClient(appInsightKey);
    }
}