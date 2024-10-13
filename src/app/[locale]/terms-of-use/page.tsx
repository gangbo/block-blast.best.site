import { getSEOTags } from "@/lib/seo";
import {getTranslations} from "next-intl/server";

export const runtime = "edge";

export const generateMetadata = async () => {
    const t = await getTranslations('termsOfUse.Metadata');
    return await getSEOTags({
        title: t('title'),
        path: "/terms-of-use",
        description: t('description'),
    });
};

export default async function TermsOfUse() {
    const t = await getTranslations('termsOfUse');

    return (
        <div className="space-y-6 text-gray-300">
            <section className="text-center">
                <h1 className="text-3xl font-bold mb-2 ">{t('title')}</h1>
                <p className="text-sm italic">{t('subtitle')}</p>
            </section>

            <section className="bg-gray-800 p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 ">{t('sections.acceptance.title')}</h2>
                <p>{t('sections.acceptance.content')}</p>
                
                <h2 className="text-2xl font-semibold mt-6 mb-4 ">{t('sections.userBehavior.title')}</h2>
                <p>{t('sections.userBehavior.content')}</p>
                
                <h2 className="text-2xl font-semibold mt-6 mb-4 ">{t('sections.disclaimer.title')}</h2>
                <p>{t('sections.disclaimer.content')}</p>
                
                <h2 className="text-2xl font-semibold mt-6 mb-4 ">{t('sections.modification.title')}</h2>
                <p>{t('sections.modification.content')}</p>
            </section>
        </div>
    );
}