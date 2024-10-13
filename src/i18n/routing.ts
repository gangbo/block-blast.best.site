import {createSharedPathnamesNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';

export const localeDetails = {
    en: {
        label: "English",
        code: 'en-US',
    },
    zh: {
        label: "简体中文",
        code: 'zh-CN',
    },
    pt: {
        label: "Português",
        code: 'pt-BR',
    },
};

export type LocaleCode = keyof typeof localeDetails;
export function getLocaleDetails(localeCode: string): typeof localeDetails[LocaleCode] | undefined {
    //默认en
    if (localeCode in localeDetails) {
        return localeDetails[localeCode as LocaleCode];
    }
    return localeDetails['en'];
}

export const locales = Object.keys(localeDetails) as Array<keyof typeof localeDetails>;
export const defaultLocale = 'en';

/*--------------------------------------------*/

export const routing = defineRouting({
    locales: locales,
    defaultLocale: defaultLocale,
    localePrefix: 'as-needed',
    pathnames: {}

});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const {Link, redirect, usePathname, useRouter} =
    createSharedPathnamesNavigation(routing);