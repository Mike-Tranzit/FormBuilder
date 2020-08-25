export class JSONchecker {

    private result: any;
    private payload: string;

    constructor(payload: string) {
        this.payload = payload;
        return this;
    }

    replaceQuotas = (payload: any) => payload.replace(/'/g, '"');

    addQuotasToKeys = (payload: any) => payload.replace(/(\w+:)|(\w+ :)/g, function(matchedString: any) {
        const separatedString = matchedString.substring(0, matchedString.length - 1);
        return `"${separatedString}":`;
    });

    pipe = (...params: any[]) => (item: any) => params.reduceRight((acc: any, fn: any) => fn(acc), item);

    correctElements() {
        this.result = this.pipe(
            this.replaceQuotas,
            this.addQuotasToKeys
        )(this.payload);
        return this;
    }

    inspectResult() {
        let parsedResult;
        try {
            parsedResult = JSON.parse(this.result);
        } catch (e) {
            return false;
        }
        const JSONisValid = typeof parsedResult === "object" && parsedResult !== null;
        if(JSONisValid) {
            return parsedResult;
        }
        return false;
    }
}
