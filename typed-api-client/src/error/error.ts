export class APIError extends Error{
    constructor(massage:string){
        super(massage);
        this.name="APIError"
    }
}


export class HttpError extends APIError {
    constructor(massage:string,public readonly status:number){
        super(massage);
        this.name="HttpError";
    }
}


export class TimeoutError extends APIError{
    constructor(massage:string){
        super(massage);
        this.name="TimeoutError";
    }
}


export class NetworkError extends APIError{
 constructor(massage:string){
    super(massage);
    this.name="NetworkError";
 }
}

export class ResponseParseError extends APIError{
    constructor(massage:string){
        super(massage);
        this.name="ResponseParseError"
    }
}


