import React from 'react';
import { getSEOTags } from "@/lib/seo";
import {getTranslations} from "next-intl/server";

export const runtime = "edge";

export const generateMetadata = async () => {
    const t = await getTranslations('privacyPolicy.Metadata');
    return await getSEOTags({
        title: t('title'),
        path: "/privacy-policy",
        description: t('description'),
    });
};

export default async function PrivacyPolicy() {
    const t = await getTranslations('privacyPolicy');

    return (
        <div className="space-y-6 text-gray-300">
            <section className="text-center">
                <h1 className="text-3xl font-bold mb-2 ">{t('title')}</h1>
                <p className="text-sm italic">{t('subtitle')}</p>
            </section>

            <section className="bg-gray-800 p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 ">{t('sections.informationCollection.title')}</h2>
                <p>{t('sections.informationCollection.content')}</p>
                
                <h2 className="text-2xl font-semibold mt-6 mb-4 ">{t('sections.userAccount.title')}</h2>
                <p>{t('sections.userAccount.content')}</p>
                
                <h2 className="text-2xl font-semibold mt-6 mb-4 ">{t('sections.dataSecurity.title')}</h2>
                <p>{t('sections.dataSecurity.content')}</p>
                
                <h2 className="text-2xl font-semibold mt-6 mb-4 ">{t('sections.cookieUsage.title')}</h2>
                <p>{t('sections.cookieUsage.content')}</p>
                
                <h2 className="text-2xl font-semibold mt-6 mb-4 ">{t('sections.policyUpdate.title')}</h2>
                <p>{t('sections.policyUpdate.content')}</p>
            </section>
        </div>
    );
}