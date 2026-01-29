// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Jocall3 from 'jocall3-node';

const client = new Jocall3({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ads', () => {
  test('list', async () => {
    const responsePromise = client.ai.ads.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('generateCopy: only required params', async () => {
    const responsePromise = client.ai.ads.generateCopy({
      productDescription: 'productDescription',
      targetAudience: 'targetAudience',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('generateCopy: required and optional params', async () => {
    const response = await client.ai.ads.generateCopy({
      productDescription: 'productDescription',
      targetAudience: 'targetAudience',
    });
  });

  test('generateVideo: only required params', async () => {
    const responsePromise = client.ai.ads.generateVideo({
      lengthSeconds: 15,
      prompt: 'prompt',
      style: 'Cinematic',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('generateVideo: required and optional params', async () => {
    const response = await client.ai.ads.generateVideo({
      lengthSeconds: 15,
      prompt: 'prompt',
      style: 'Cinematic',
    });
  });

  test('getOperation', async () => {
    const responsePromise = client.ai.ads.getOperation('operationId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('optimizeCampaign: only required params', async () => {
    const responsePromise = client.ai.ads.optimizeCampaign({ campaignData: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('optimizeCampaign: required and optional params', async () => {
    const response = await client.ai.ads.optimizeCampaign({ campaignData: {} });
  });
});
