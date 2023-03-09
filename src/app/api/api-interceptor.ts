import { Injectable, InjectionToken, Injector } from '@angular/core';
import { HttpInterceptor, HttpClient, HttpBackend, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';


export const API_INTERCEPTOR = new InjectionToken<HttpInterceptor[]>('API_INTERCEPTOR');

@Injectable()
export class ApiHttpService extends HttpClient {
    constructor(backend: HttpBackend, private injector: Injector) {
        super(new HandlerService(backend, injector, API_INTERCEPTOR));
    }
}


export class HttpInterceptorHandler implements HttpHandler {
    constructor(private next: HttpHandler, private interceptor: HttpInterceptor) { }

    handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
        return this.interceptor.intercept(req, this.next);
    }
}

export class HandlerService implements HttpHandler {

    private chain: HttpHandler | null = null;

    constructor(private backend: HttpBackend, private injector: Injector, private interceptors: InjectionToken<HttpInterceptor[]>) { }

    handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
        if (this.chain === null) {
            const interceptors = this.injector.get(this.interceptors, []);
            this.chain = interceptors.reduceRight(
                (next, interceptor) => new HttpInterceptorHandler(next, interceptor), this.backend);
        }
        return this.chain.handle(req);
    }
}


@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {    
    return next.handle(req);
  }
}