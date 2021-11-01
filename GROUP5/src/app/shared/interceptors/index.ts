
import { ErrorInterceptor } from "./error.interceptor";
import { HeaderInterceptor } from "./header.interceptor";
import { LogInterceptor } from "./log.interceptor";
import { TokenInterceptor } from "./token.interceptor";
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
export const intercepts = [

    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
 ];