export class JSONchecker {

    private result: any;

    constructor(private payload: string) {
    }

    replaceQuotas = (payload: string): string  => payload.replace(/'/g, '"');

    addQuotasToKeys = (payload: string): string => payload.replace(/(\w+:)|(\w+ :)/g, function(matchedString: any) {
        const separatedString = matchedString.substring(0, matchedString.length - 1);
        return `"${separatedString}":`;
    });

    pipe = (...params: any[]) => (item: string) => params.reduceRight((acc: string, fn: Function) => fn(acc), item);

    correctElements() {
        this.result = this.pipe(
            this.replaceQuotas,
            this.addQuotasToKeys
        )(this.payload);
        return this;
    }

    inspectResult(): Object | boolean {
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
