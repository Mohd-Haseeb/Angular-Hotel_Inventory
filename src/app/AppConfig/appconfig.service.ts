import { InjectionToken } from "@angular/core";
import { AppConfig } from "./appconfig.interface";

export const APP_SERIVE_CONFIG = new InjectionToken<AppConfig>('app.config');

export const APP_CONFIG : AppConfig = {
    apiEndPoint : 'http://localhost:8080'
};

// to register this servide, we have to add it in the Provider of app.module.ts