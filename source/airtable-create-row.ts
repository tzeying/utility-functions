const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const Airtable = require('airtable');

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Max-Age': '2592000',
    'Access-Control-Allow-Credentials': 'true',
};

type AirtableCreateRowRequest = {
    baseId: string, 
    tableName: string, 
    fields: any,
    allowCrossOrigins: boolean
}
export async function handler(event, context) {
    let req: AirtableCreateRowRequest = JSON.parse(event.body);
    const base = new Airtable({apiKey: AIRTABLE_API_KEY}).base(req.baseId);
    try {
        const record = await base(req.tableName).create(req.fields);
        return {
            statusCode: 200,
            headers: headers,
            body: JSON.stringify({ message: record.getId() })
        };
    } catch (error) {
        console.log(error)
        return {
            status: 400,
            headers: headers,
            body: JSON.stringify({ message: error })
        };
    }
}