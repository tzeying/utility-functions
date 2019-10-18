const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const Airtable = require('airtable');
import {headers} from './common/headers';

export type AirtableCreateRowRequest = {
    baseId: string, 
    tableName: string, 
    fields: any,
    allowCrossOrigins: boolean
}
export async function handler(event: any, context: any) {
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